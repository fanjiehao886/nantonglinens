import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 明确关闭尾部斜杠，避免 /about/ → /about 的 308 重定向
  trailingSlash: false,
  // 允许 Sanity CDN 和图片域名
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
