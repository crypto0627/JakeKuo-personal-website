import { getMongoClient } from "@/lib/mongodb";
import { type WithId } from "mongodb";
import { NextResponse } from "next/server";
import type { Post } from "@/types/post";

// 將 MongoDB 文檔轉換為 Post 型別（處理 ObjectId 序列化）
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

// ---------------------------------------------
// GET single post by slug + increase views
export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const client = await getMongoClient();
    const db = client.db("blog");

    const postResult = await db
      .collection<Post>("posts")
      .findOneAndUpdate(
        { slug, published: true },
        { $inc: { views: 1 } },
        { returnDocument: "after" }
      );

    // findOneAndUpdate returns ModifyResult which has a 'value' property
    const post = (postResult as unknown as { value: WithId<Post> | null })
      .value;

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // 序列化 ObjectId 和 Date
    const serializedPost = {
      ...serializePost(post),
      _id: post._id.toString(),
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    };

    return NextResponse.json(serializedPost);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

// ---------------------------------------------
// PATCH increment likes
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const client = await getMongoClient();
    const db = client.db("blog");

    const result = await db
      .collection("posts")
      .updateOne({ slug }, { $inc: { likes: 1 } });

    if (result.matchedCount === 0)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error incrementing likes:", error);
    return NextResponse.json(
      { error: "Failed to increment likes" },
      { status: 500 }
    );
  }
}

