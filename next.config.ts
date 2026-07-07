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

  // 旧 Q1 2026 博文重定向 → 合并后的唯一 URL（避免 404 + 合并重复内容）
  async redirects() {
    return [
      {
        source: "/blog/china-textile-industry-q1-2026-hotel-linen",
        destination: "/blog/china-textile-industry-q1-2026-complete-report",
        permanent: true,
      },
      {
        source: "/blog/q1-2026-china-home-textile-industry-report",
        destination: "/blog/china-textile-industry-q1-2026-complete-report",
        permanent: true,
      },
      {
        source: "/blog/china-textile-exports-q1-2026-hotel-linen-procurement",
        destination: "/blog/china-textile-industry-q1-2026-complete-report",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
