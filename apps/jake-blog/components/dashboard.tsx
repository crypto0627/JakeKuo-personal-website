'use client';

import { useState, useEffect } from 'react';
import { Search, Eye, Heart, FileText, FileCheck, FileX } from 'lucide-react';
import type { ClientPost } from '@/hooks/usePosts';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalViews: number;
  totalLikes: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [posts, setPosts] = useState<ClientPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<ClientPost | null>(null);

  useEffect(() => {
    fetchStats();
    fetchPosts();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/posts/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/posts');
      if (res.ok) {
        const data = await res.json();
        const posts = Array.isArray(data)
          ? data
          : Array.isArray(data?.posts)
          ? data.posts
          : [];
        setPosts(posts as ClientPost[]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen p-6 bg-linear-to-br from-[#e2e4e6] via-[#faf7f0] to-[#fce8b1]">
      <h1 className="text-3xl font-bold mb-6 text-black/90">Dashboard</h1>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black/50 text-sm">總文章數</p>
                <p className="text-2xl font-bold text-black/90">{stats.totalPosts}</p>
              </div>
              <FileText className="w-8 h-8 text-black/50" />
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black/50 text-sm">已發布</p>
                <p className="text-2xl font-bold text-black/90">{stats.publishedPosts}</p>
              </div>
              <FileCheck className="w-8 h-8 text-green-500/70" />
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black/50 text-sm">草稿</p>
                <p className="text-2xl font-bold text-black/90">{stats.draftPosts}</p>
              </div>
              <FileX className="w-8 h-8 text-orange-500/70" />
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black/50 text-sm">總瀏覽數</p>
                <p className="text-2xl font-bold text-black/90">{stats.totalViews.toLocaleString()}</p>
              </div>
              <Eye className="w-8 h-8 text-blue-500/70" />
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black/50 text-sm">總讚數</p>
                <p className="text-2xl font-bold text-black/90">{stats.totalLikes.toLocaleString()}</p>
              </div>
              <Heart className="w-8 h-8 text-red-500/70" />
            </div>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/50" />
          <input
            type="text"
            placeholder="搜尋文章（標題、slug、標籤）..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md text-black/80 placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#f6d365]/50"
          />
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8 text-black/50">載入中...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-8 text-black/50">沒有找到文章</div>
        ) : (
          filteredPosts.map((post) => (
            <div
              key={post._id}
              onClick={() => setSelectedPost(selectedPost?._id === post._id ? null : post)}
              className="p-4 bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-black/85">{post.title}</h3>
                    {post.published ? (
                      <span className="px-2 py-1 bg-green-500/20 text-green-700 text-xs rounded-full">已發布</span>
                    ) : (
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-700 text-xs rounded-full">草稿</span>
                    )}
                  </div>
                  <p className="text-black/60 text-sm mb-2">{post.excerpt || '無摘要'}</p>
                  <div className="flex items-center gap-4 text-sm text-black/50">
                    <span>👁️ {post.views}</span>
                    <span>❤️ {post.likes}</span>
                    <span className="text-xs">{new Date(post.createdAt).toLocaleDateString('zh-TW')}</span>
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#f6d365]/30 text-black/70 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Post Details */}
              {selectedPost?._id === post._id && (
                <div className="mt-4 pt-4 border-t border-black/10">
                  <div className="space-y-2 text-sm text-black/70">
                    <p><strong>Slug:</strong> {post.slug}</p>
                    <p><strong>建立時間:</strong> {new Date(post.createdAt).toLocaleString('zh-TW')}</p>
                    <p><strong>更新時間:</strong> {new Date(post.updatedAt).toLocaleString('zh-TW')}</p>
                    {post.coverImage && (
                      <div>
                        <strong>封面圖片:</strong>
                        <img src={post.coverImage} alt={post.title} className="mt-2 max-w-xs rounded-lg" />
                      </div>
                    )}
                    <div>
                      <strong>內容預覽:</strong>
                      <div
                        className="mt-2 p-3 bg-white/30 rounded-lg max-h-40 overflow-y-auto"
                        dangerouslySetInnerHTML={{ __html: post.content.substring(0, 500) + '...' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
