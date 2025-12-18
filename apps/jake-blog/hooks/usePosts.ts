'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Post } from '@/types/post';

// 用於客戶端的 Post 型別（_id 轉為 string，Date 轉為 string）
export type ClientPost = Omit<Post, '_id' | 'createdAt' | 'updatedAt'> & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export function usePosts() {
  const [posts, setPosts] = useState<ClientPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/posts', {
        credentials: 'include', // 確保發送 cookies
      });
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await res.json();
      const posts = Array.isArray(data)
        ? data
        : Array.isArray(data?.posts)
        ? data.posts
        : [];
      setPosts(posts as ClientPost[]);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPostBySlug = async (slug: string): Promise<ClientPost | null> => {
    try {
      const res = await fetch(`/api/posts/${slug}`, {
        credentials: 'include', // 確保發送 cookies
      });
      if (!res.ok) {
        if (res.status === 404) {
          return null;
        }
        throw new Error('Failed to fetch post');
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to fetch post');
      return null;
    }
  };

  const createPost = async (postData: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    published?: boolean;
    tags?: string[];
    coverImage?: string;
  }) => {
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 確保發送 cookies
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `Failed to create post: ${res.status}`);
      }

      const result = await res.json();
      // 不自動調用 fetchPosts，讓調用者自己決定何時重新載入
      return result;
    } catch (err) {
      console.error('Error creating post:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to create post';
      setError(errorMessage);
      throw err;
    }
  };

  const updatePost = async (
    _id: string,
    postData: {
      title?: string;
      slug?: string;
      content?: string;
      excerpt?: string;
      published?: boolean;
      tags?: string[];
      coverImage?: string;
    }
  ) => {
    try {
      const res = await fetch('/api/posts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 確保發送 cookies
        body: JSON.stringify({ _id, ...postData }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `Failed to update post: ${res.status}`);
      }

      const result = await res.json();
      // 不自動調用 fetchPosts，讓調用者自己決定何時重新載入
      return result;
    } catch (err) {
      console.error('Error updating post:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to update post';
      setError(errorMessage);
      throw err;
    }
  };

  const deletePost = async (_id: string) => {
    try {
      const res = await fetch(`/api/posts?id=${_id}`, {
        method: 'DELETE',
        credentials: 'include', // 確保發送 cookies
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `Failed to delete post: ${res.status}`);
      }

      const result = await res.json();
      // 不自動調用 fetchPosts，讓調用者自己決定何時重新載入
      return result;
    } catch (err) {
      console.error('Error deleting post:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete post';
      setError(errorMessage);
      throw err;
    }
  };

  const incrementLikes = async (slug: string) => {
    try {
      const res = await fetch(`/api/posts/${slug}`, {
        method: 'PATCH',
        credentials: 'include', // 確保發送 cookies
      });

      if (!res.ok) {
        throw new Error('Failed to increment likes');
      }

      return await res.json();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to increment likes');
      throw err;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    fetchPosts,
    fetchPostBySlug,
    createPost,
    updatePost,
    deletePost,
    incrementLikes,
  };
}

