import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMongoClient } from '@/lib/mongodb';
import type { WithId } from 'mongodb';
import type { Post } from '@/types/post';
import { ArrowLeft } from 'lucide-react';

/**
 * ✅ 關鍵 1：允許 ISR
 * 文章內容不需要每次即時更新
 */
export const revalidate = 300; // 5 分鐘

function serializePost(doc: WithId<Post>): Post {
  return {
    _id: doc._id,
    title: doc.title,
    slug: doc.slug,
    content: doc.content,
    excerpt: doc.excerpt,
    published: doc.published,
    tags: doc.tags || [],
    likes: doc.likes || 0,
    views: doc.views || 0,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

/**
 * ✅ 關鍵 2：只讀資料（可 cache）
 */
async function getPost(slug: string): Promise<Post | null> {
  const client = await getMongoClient();
  const db = client.db('blog');

  const post = await db
    .collection<Post>('posts')
    .findOne({ slug, published: true });

  if (!post) return null;

  return serializePost(post as WithId<Post>);
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  /**
   * ✅ 關鍵 3：非阻塞增加 views
   * 不 await、不影響 TTFB
   */
  incrementViews(slug);

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#e2e4e6] via-[#faf7f0] to-[#fce8b1]">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md hover:shadow-lg hover:bg-white/70 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          返回主頁
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex gap-4 text-sm text-black/70 mb-6">
            <time>{formatDate(post.createdAt)}</time>
            <span>👁️ {post.views}</span>
            <span>❤️ {post.likes}</span>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

/**
 * ✅ Side-effect 拆出來
 * fire-and-forget
 */
async function incrementViews(slug: string) {
  try {
    const client = await getMongoClient();
    await client
      .db('blog')
      .collection<Post>('posts')
      .updateOne(
        { slug, published: true },
        { $inc: { views: 1 } }
      );
  } catch (e) {
    console.error('[incrementViews]', e);
  }
}
