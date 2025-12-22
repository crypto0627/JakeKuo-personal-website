'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash, X, Save } from 'lucide-react';
import { usePosts } from '@/hooks/usePosts';
import type { ClientPost } from '@/hooks/usePosts';
import Loading from './loading';

interface PostFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  tags: string[];
}

export default function PostPage() {
  const { posts, createPost, updatePost, deletePost, fetchPosts, loading } = usePosts();
  const [editingPost, setEditingPost] = useState<ClientPost | null>(null);
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    published: false,
    tags: [],
  });
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    // 只在組件 mount 時載入一次，避免無限循環
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: formData.slug || generateSlug(title),
    });
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()],
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      published: false,
      tags: [],
    });
    setEditingPost(null);
    setError(null);
    setSuccess(null);
  };

  const handleEdit = (post: ClientPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      published: post.published,
      tags: post.tags || [],
    });
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.title.trim()) {
      setError('標題為必填');
      return;
    }

    if (!formData.slug.trim()) {
      setError('Slug 為必填');
      return;
    }

    try {
      setError(null);
      setSuccess(null);
      
      if (editingPost) {
        await updatePost(editingPost._id, formData);
        setSuccess('文章更新成功！');
      } else {
        await createPost(formData);
        setSuccess('文章建立成功！');
      }
      resetForm();
      // 重新載入文章列表
      await fetchPosts();
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      const errorMessage = err instanceof Error ? err.message : '操作失敗';
      setError(errorMessage);
      setSuccess(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('確定要刪除此文章嗎？')) return;

    try {
      await deletePost(id);
      setSuccess('文章刪除成功！');
      await fetchPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : '刪除失敗');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-linear-to-br from-[#e2e4e6] via-[#faf7f0] to-[#fce8b1] text-black">
      <h1 className="text-3xl font-bold mb-6 text-black/90">文章管理</h1>

      {/* Messages */}
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 text-red-700 rounded-xl border border-red-500/30">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 p-3 bg-green-500/20 text-green-700 rounded-xl border border-green-500/30">
          {success}
        </div>
      )}

      {/* Form */}
      <div className="mb-6 p-6 bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black/85">
            {editingPost ? '編輯文章' : '建立新文章'}
          </h2>
          {editingPost && (
            <button
              onClick={resetForm}
              className="p-2 bg-black/5 hover:bg-black/10 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-black/70" />
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black/70 mb-1">標題 *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full p-3 border border-black/10 rounded-lg bg-white/70 text-black/80 focus:outline-none focus:ring-2 focus:ring-[#f6d365]/50"
              placeholder="文章標題"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black/70 mb-1">Slug *</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full p-3 border border-black/10 rounded-lg bg-white/70 text-black/80 focus:outline-none focus:ring-2 focus:ring-[#f6d365]/50"
              placeholder="url-slug"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black/70 mb-1">摘要</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full p-3 border border-black/10 rounded-lg bg-white/70 text-black/80 focus:outline-none focus:ring-2 focus:ring-[#f6d365]/50"
              placeholder="文章摘要"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black/70 mb-1">內容</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full p-3 border border-black/10 rounded-lg bg-white/70 text-black/80 focus:outline-none focus:ring-2 focus:ring-[#f6d365]/50"
              placeholder="文章內容（支援 HTML/Markdown）"
              rows={10}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black/70 mb-1">標籤</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
                className="flex-1 p-3 border border-black/10 rounded-lg bg-white/70 text-black/80 focus:outline-none focus:ring-2 focus:ring-[#f6d365]/50"
                placeholder="輸入標籤後按 Enter"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-3 bg-[#f6d365] hover:bg-[#fda085] rounded-lg transition-colors text-black/80 font-medium"
              >
                新增
              </button>
            </div>
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#f6d365]/30 text-black/70 rounded-full text-sm flex items-center gap-2"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="w-4 h-4 text-[#f6d365] border-black/20 rounded focus:ring-[#f6d365]"
            />
            <label htmlFor="published" className="text-sm font-medium text-black/70">
              發布文章
            </label>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-6 py-3 bg-linear-to-r from-[#f6d365] to-[#fda085] hover:from-[#fda085] hover:to-[#f6d365] rounded-lg transition-all text-black/80 font-medium flex items-center gap-2 shadow-md"
            >
              {editingPost ? (
                <>
                  <Save className="w-4 h-4" />
                  更新文章
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  建立文章
                </>
              )}
            </button>
            {editingPost && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 bg-black/5 hover:bg-black/10 rounded-lg transition-colors text-black/70 font-medium"
              >
                取消
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Post List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-black/85 mb-4">文章列表</h2>
        {loading ? (
          <Loading />
        ) : posts.length === 0 ? (
          <div className="text-center py-8 text-black/50">尚無文章</div>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="p-4 bg-white/50 backdrop-blur-xl rounded-xl border border-black/10 shadow-md"
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
                  <div className="flex items-center gap-4 text-sm text-black/50 mb-2">
                    <span>👁️ {post.views}</span>
                    <span>❤️ {post.likes}</span>
                    <span className="text-xs">{new Date(post.createdAt).toLocaleDateString('zh-TW')}</span>
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
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
                  <p className="text-black/40 text-xs">Slug: {post.slug}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(post)}
                    className="p-2 bg-[#fce8b1]/80 hover:bg-[#fce8b1] rounded-lg transition-colors"
                    title="編輯"
                  >
                    <Edit className="w-4 h-4 text-black/80" />
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="p-2 bg-[#f6d365] hover:bg-[#fda085] rounded-lg transition-colors"
                    title="刪除"
                  >
                    <Trash className="w-4 h-4 text-black/80" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
