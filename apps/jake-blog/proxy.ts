import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("admin-token")?.value;
  const JWT_SECRET = process.env.JWT_SECRET;

  const isAdminRoot = pathname === "/admin";
  const isAdminSubRoute = pathname.startsWith("/admin/");

  // ---------- 沒有 JWT ----------
  if (!token || !JWT_SECRET) {
    // ❌ 想進 /admin/*
    if (isAdminSubRoute) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    // ✅ 只允許 /admin
    return NextResponse.next();
  }

  // ---------- 有 JWT，驗證 ----------
  try {
    jwt.verify(token, JWT_SECRET);

    // ❌ 已登入卻訪問 /admin（登入頁）
    if (isAdminRoot) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    // ✅ 已登入訪問 /admin/*
    return NextResponse.next();
  } catch {
    // token 壞掉 → 當沒登入
    if (isAdminSubRoute) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
