'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogNavbar } from '@/components/blog-navbar';
import { Eye, Heart, Calendar } from 'lucide-react';

interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  tags: string[];
  coverImage?: string;
  likes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts(1, selectedTag);
    fetchAllTags();
  }, [selectedTag]);

  const fetchAllTags = async () => {
    try {
      const res = await fetch('/api/posts?limit=1000');
      if (res.ok) {
        const data = await res.json();
        const tagsSet = new Set<string>();
        data.posts?.forEach((post: Post) => {
          post.tags?.forEach((tag) => tagsSet.add(tag));
        });
        setAllTags(Array.from(tagsSet).sort());
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  const fetchPosts = async (page: number, tag: string | null) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
      });
      if (tag) {
        params.append('tag', tag);
      }

      const res = await fetch(`/api/posts?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
        setPagination(data.pagination || pagination);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    fetchPosts(newPage, selectedTag);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#e2e4e6] via-[#faf7f0] to-[#fce8b1]">
      <BlogNavbar tags={allTags} selectedTag={selectedTag} onTagSelect={setSelectedTag} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-16 text-black/50">載入中...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 text-black/50">尚無文章</div>
        ) : (
          <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/post/${post.slug}`}
                  className="group bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  {/* Cover Image */}
                  {post.coverImage ? (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-linear-to-br from-[#f6d365] to-[#fda085] opacity-50" />
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-black/90 mb-2 group-hover:text-[#f6d365] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-black/60 text-sm mb-4 line-clamp-2">
                      {post.excerpt || post.content.substring(0, 100) + '...'}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-[#f6d365]/30 text-black/70 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-black/50">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className="px-4 py-2 bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 text-black/70 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/70 transition-colors"
                >
                  上一頁
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                      // 只顯示當前頁前後2頁
                      return (
                        page === 1 ||
                        page === pagination.totalPages ||
                        (page >= pagination.page - 2 && page <= pagination.page + 2)
                      );
                    })
                    .map((page, index, array) => {
                      // 如果中間有跳頁，顯示省略號
                      const showEllipsis = index > 0 && array[index - 1] !== page - 1;
                      return (
                        <div key={page} className="flex items-center gap-2">
                          {showEllipsis && (
                            <span className="text-black/50 px-2">...</span>
                          )}
                          <button
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 rounded-xl border transition-all ${
                              pagination.page === page
                                ? 'bg-linear-to-r from-[#f6d365] to-[#fda085] text-black/90 shadow-md border-transparent'
                                : 'bg-white/50 backdrop-blur-xl border-black/10 text-black/70 hover:bg-white/70'
                            }`}
                          >
                            {page}
                          </button>
                        </div>
                      );
                    })}
                </div>

                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                  className="px-4 py-2 bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 text-black/70 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/70 transition-colors"
                >
                  下一頁
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

