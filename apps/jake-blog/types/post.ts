import { ObjectId } from "mongodb";

export interface Post {
  _id: ObjectId;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  tags: string[];
  coverImage?: string;
  likes: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

// {
//   "_id": "ObjectId",
//   "title": "Next.js App Router 深度解析",
//   "slug": "nextjs-app-router-deep-dive",
//   "content": "markdown 或 html 內容",
//   "excerpt": "文章摘要，用於列表頁與 SEO",
//   "published": true,
//   "createdAt": "2025-01-01T12:00:00.000Z",
//   "updatedAt": "2025-01-02T08:30:00.000Z",
//   "tags": ["nextjs", "frontend", "blog"],
//   "coverImage": "https://...",
//   "likes": 120,
//   "views": 3500
// }
