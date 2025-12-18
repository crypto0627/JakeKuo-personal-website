import { notFound } from 'next/navigation';
import clientPromise from '@/lib/mongodb';
import { type WithId } from 'mongodb';
import type { Post } from '@/types/post';
import Image from 'next/image';

// 將 MongoDB 文檔轉換為 Post 型別
function serializePost(doc: WithId<Post>): Post {
  return {
    _id: doc._id,
    title: doc.title,
    slug: doc.slug,
    content: doc.content,
    excerpt: doc.excerpt,
    published: doc.published,
    tags: doc.tags || [],
    coverImage: doc.coverImage,
    likes: doc.likes || 0,
    views: doc.views || 0,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const client = await clientPromise;
    const db = client.db('blog');

    // 先檢查文章是否存在（包括未發布的，用於調試）
    const postExists = await db.collection<Post>('posts').findOne({ slug });
    
    if (!postExists) {
      console.log(`Post with slug "${slug}" not found in database`);
      return null;
    }

    if (!postExists.published) {
      console.log(`Post with slug "${slug}" exists but is not published`);
      return null;
    }

    const postResult = await db
      .collection<Post>('posts')
      .findOneAndUpdate(
        { slug, published: true },
        { $inc: { views: 1 } },
        { returnDocument: 'after' }
      );

    // findOneAndUpdate returns ModifyResult which has a 'value' property
    const post = (postResult as unknown as { value: WithId<Post> | null })
      .value;

    if (!post) {
      console.log(`Post with slug "${slug}" found but update failed`);
      return null;
    }

    return serializePost(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#e2e4e6] via-[#faf7f0] to-[#fce8b1]">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black/90 mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-black/70 mb-6">
            <time dateTime={post.createdAt.toISOString()}>
              {formatDate(post.createdAt)}
            </time>
            {post.updatedAt.getTime() !== post.createdAt.getTime() && (
              <span className="text-black/50">
                更新於 {formatDate(post.updatedAt)}
              </span>
            )}
            <span>👁️ {post.views} 次瀏覽</span>
            <span>❤️ {post.likes} 個讚</span>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-sm text-black/80 border border-black/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden border border-black/10 shadow-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg text-black/80 italic mb-8 border-l-4 border-[#f6d365] pl-4">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-black/90
            prose-headings:text-black/90
            prose-p:text-black/80
            prose-a:text-[#f6d365] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-black/90
            prose-code:text-black/90 prose-code:bg-white/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-black/5 prose-pre:border prose-pre:border-black/10
            prose-blockquote:border-l-[#f6d365] prose-blockquote:text-black/70
            prose-img:rounded-lg prose-img:border prose-img:border-black/10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

