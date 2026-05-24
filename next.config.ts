import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
