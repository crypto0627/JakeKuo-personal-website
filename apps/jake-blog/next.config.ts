import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DATABASE_URI: process.env.DATABASE_URI,
    ADMIN_API_KEY: process.env.ADMIN_API_KEY,
    JWT_SECRET: process.env.JWT_SECRET
  },
};

export default nextConfig;
