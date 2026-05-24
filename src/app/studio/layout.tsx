/**
 * Studio 独立布局
 * 覆盖根布局，去除 Header 和 Footer，让 Sanity Studio 占满全屏
 */
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
