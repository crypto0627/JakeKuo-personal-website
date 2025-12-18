import { getMongoClient } from "@/lib/mongodb";
import { ObjectId, type WithId } from "mongodb";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import type { Post } from "@/types/post";

// 🔑 JWT 權限檢查
async function checkAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin-token")?.value;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!token || !JWT_SECRET) {
    return false;
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

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
// GET posts - published only for public, all for admin
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const tag = searchParams.get("tag");
    const skip = (page - 1) * limit;

    const client = await getMongoClient();
    const db = client.db("blog");
    const isAdmin = await checkAdmin();

    // Admin 可以看所有文章，一般用戶只能看已發布的
    const filter: { published?: boolean; tags?: string } = isAdmin ? {} : { published: true };
    
    // 如果有 tag 篩選
    if (tag) {
      filter.tags = tag;
    }

    // 取得總數
    const total = await db.collection<Post>("posts").countDocuments(filter);

    // 取得文章列表（分頁）
    const posts = await db
      .collection<Post>("posts")
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    // 序列化 ObjectId 和 Date
    const serializedPosts = posts.map((post) => {
      const postData = post as WithId<Post>;
      return {
        ...serializePost(postData),
        _id: postData._id.toString(),
        createdAt: postData.createdAt.toISOString(),
        updatedAt: postData.updatedAt.toISOString(),
      };
    });

    return NextResponse.json({
      posts: serializedPosts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// ---------------------------------------------
// POST create new post
export async function POST(req: Request) {
  if (!(await checkAdmin()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    
    // 驗證必填欄位
    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const client = await getMongoClient();
    const db = client.db("blog");

    // 生成 slug（如果未提供）
    const slug =
      body.slug?.trim() ||
      body.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();

    if (!slug) {
      return NextResponse.json(
        { error: "Invalid slug generated" },
        { status: 400 }
      );
    }

    // 檢查 slug 唯一性
    const exists = await db.collection("posts").findOne({ slug });
    if (exists)
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 400 }
      );

    const now = new Date();
    const newPost: Omit<Post, "_id"> = {
      title: body.title.trim(),
      slug,
      content: body.content || "",
      excerpt: body.excerpt || "",
      published: body.published ?? false,
      tags: Array.isArray(body.tags) ? body.tags : [],
      coverImage: body.coverImage || undefined,
      likes: 0,
      views: 0,
      createdAt: now,
      updatedAt: now,
    };

    const result = await db.collection("posts").insertOne(newPost);

    return NextResponse.json({
      _id: result.insertedId.toString(),
      ...newPost,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    });
  } catch (error) {
    console.error("Error creating post:", error);
    
    // 處理 JSON 解析錯誤
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }
    
    // 處理 MongoDB 認證錯誤
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase();
      if (
        errorMessage.includes("authentication failed") ||
        errorMessage.includes("bad auth") ||
        errorMessage.includes("unauthorized")
      ) {
        return NextResponse.json(
          {
            error:
              "MongoDB authentication failed. Please check your DATABASE_URI credentials. If your password contains special characters, make sure they are URL-encoded.",
          },
          { status: 500 }
        );
      }
      
      // 處理連接錯誤
      if (
        errorMessage.includes("connection") ||
        errorMessage.includes("timeout") ||
        errorMessage.includes("network")
      ) {
        return NextResponse.json(
          {
            error:
              "MongoDB connection error. Please check your network connection and DATABASE_URI.",
          },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: error.message || "Failed to create post" },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

// ---------------------------------------------
// PUT update post
export async function PUT(req: Request) {
  if (!(await checkAdmin()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const client = await getMongoClient();
    const db = client.db("blog");

    if (!body._id)
      return NextResponse.json(
        { error: "Missing _id parameter" },
        { status: 400 }
      );

    const updateData: Partial<Post> = {
      updatedAt: new Date(),
    };

    if (body.title !== undefined) updateData.title = body.title;
    if (body.content !== undefined) updateData.content = body.content;
    if (body.excerpt !== undefined) updateData.excerpt = body.excerpt;
    if (body.published !== undefined) updateData.published = body.published;
    if (body.tags !== undefined) updateData.tags = body.tags;
    if (body.coverImage !== undefined) updateData.coverImage = body.coverImage;

    // 可選：更新 slug
    if (body.title) {
      const slug =
        body.slug ||
        body.title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .trim();

      const exists = await db
        .collection("posts")
        .findOne({ slug, _id: { $ne: new ObjectId(body._id) } });
      if (exists)
        return NextResponse.json(
          { error: "Slug already exists" },
          { status: 400 }
        );
      updateData.slug = slug;
    }

    const result = await db
      .collection("posts")
      .updateOne({ _id: new ObjectId(body._id) }, { $set: updateData });

    if (result.matchedCount === 0)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json({ modifiedCount: result.modifiedCount });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// ---------------------------------------------
// DELETE post
export async function DELETE(req: Request) {
  if (!(await checkAdmin()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id)
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 }
      );

    const client = await getMongoClient();
    const db = client.db("blog");

    const result = await db
      .collection("posts")
      .deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ deletedCount: result.deletedCount });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
