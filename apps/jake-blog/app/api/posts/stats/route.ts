import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

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

// ---------------------------------------------
// GET statistics
export async function GET() {
  try {
    if (!(await checkAdmin())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db("blog");

    // 取得所有統計數據
    const [
      totalPosts,
      publishedPosts,
      draftPosts,
      totalViews,
      totalLikes,
    ] = await Promise.all([
      db.collection("posts").countDocuments(),
      db.collection("posts").countDocuments({ published: true }),
      db.collection("posts").countDocuments({ published: false }),
      db
        .collection("posts")
        .aggregate([{ $group: { _id: null, total: { $sum: "$views" } } }])
        .toArray(),
      db
        .collection("posts")
        .aggregate([{ $group: { _id: null, total: { $sum: "$likes" } } }])
        .toArray(),
    ]);

    return NextResponse.json({
      totalPosts,
      publishedPosts,
      draftPosts,
      totalViews: totalViews[0]?.total || 0,
      totalLikes: totalLikes[0]?.total || 0,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}

