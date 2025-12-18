import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { key } = await req.json();

  const ADMIN_API_KEY = process.env.ADMIN_API_KEY?.trim();
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!ADMIN_API_KEY || !JWT_SECRET) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 },
    );
  }

  // key 不正確
  if (key?.trim() !== ADMIN_API_KEY) {
    return NextResponse.json({ error: "Invalid key" }, { status: 401 });
  }

  // 產生 JWT
  const token = jwt.sign(
    {
      role: "admin",
    },
    JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  // 設 HTTP-only cookie
  const res = NextResponse.json({ message: "Sign-in successful" });

  res.cookies.set({
    name: "admin-token",
    value: token,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return res;
}
