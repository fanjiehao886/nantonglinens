"use client";

/**
 * Standalone Sanity Studio loader
 *
 * 使用 iframe 嵌入独立部署的 Sanity Studio，
 * 避免 Next.js SSR / React 19 / Sanity v5 的兼容性问题。
 *
 * 本地开发：运行 `npx sanity dev --port 3333`，
 * 然后访问 /studio 即可看到嵌入的 Studio。
 *
 * 生产环境：将 SANITY_STUDIO_URL 设置为独立部署的 Studio 地址，
 * 例如 https://studio.nantonglinens.com。
 */
export default function StudioPage() {
  const studioUrl =
    process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333";

  return (
    <div className="h-screen w-full">
      <iframe
        src={studioUrl}
        className="h-full w-full border-0"
        title="Sanity Studio"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
}
