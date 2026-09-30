import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/lib/queries";
import { TrackedLink } from "@/components/TrackedLink";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) return {};

  // Truncate description to 160 chars for SEO best practice
  const desc = (post.excerpt || "").slice(0, 157) + (post.excerpt && post.excerpt.length > 157 ? "..." : "");

  return {
    title: `${post.title} | Nantong Linens Blog`,
    description: desc,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: desc,
      type: "article",
      publishedTime: post.publishedAt || undefined,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: post.mainImage?.asset?.url
        ? [{ url: post.mainImage.asset.url, alt: post.mainImage.alt || "" }]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY).catch(() => []);
  return (posts || []).map((p: any) => ({
    slug: p.slug?.current,
  }));
}

/* ---- Minimal Portable Text renderer ---- */
type PTSpan = { text?: string; marks?: string[] };
type PTMarkDef = { _key: string; _type?: string; href?: string };
type PTBlock = {
  _type?: string;
  _key?: string;
  style?: string;
  listItem?: string;
  children?: PTSpan[];
  markDefs?: PTMarkDef[];
  content?: PTBlock[];
  alt?: string;
  type?: string;
  caption?: string;
  headers?: string[];
  rows?: { _key?: string; cells?: string[] }[];
};

const MARK_STYLES = new Set(["strong", "em", "underline"]);

/**
 * Renders inline spans, preserving bold / italic / underline marks and link
 * annotations. The previous implementation joined raw text and dropped every
 * mark, so bold emphasis and internal links never reached the page.
 */
function renderSpans(children: PTSpan[] = [], markDefs: PTMarkDef[] = []) {
  return children.map((child, i) => {
    const text = child.text ?? "";
    if (!text) return null;
    const marks = child.marks ?? [];
    const linkKey = marks.find((m) => !MARK_STYLES.has(m));
    const href = linkKey
      ? markDefs.find((d) => d._key === linkKey)?.href
      : undefined;

    let node: React.ReactNode = text;
    if (marks.includes("strong")) {
      node = <strong className="font-semibold text-gray-900">{node}</strong>;
    }
    if (marks.includes("em")) node = <em>{node}</em>;
    if (href) {
      const isExternal = /^https?:\/\//i.test(href);
      node = (
        <a
          href={href}
          className="text-blue-800 underline underline-offset-2 hover:text-blue-900"
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {node}
        </a>
      );
    }
    return <span key={i}>{node}</span>;
  });
}

function renderTable(block: PTBlock, key: string) {
  const headers = block.headers ?? [];
  const rows = block.rows ?? [];
  if (headers.length === 0 && rows.length === 0) return null;
  return (
    <figure key={key} className="my-6">
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          {headers.length > 0 && (
            <thead>
              <tr className="bg-gray-50">
                {headers.map((h, hi) => (
                  <th
                    key={hi}
                    className="px-4 py-3 text-left font-semibold text-gray-900"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row._key ?? ri} className="border-t border-gray-100">
                {(row.cells ?? []).map((cell, ci) => (
                  <td
                    key={ci}
                    className={
                      ci === 0
                        ? "px-4 py-3 font-medium text-gray-900"
                        : "px-4 py-3 text-gray-600"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.caption ? (
        <figcaption className="mt-2 text-sm text-gray-400">
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Flattens portable text into React nodes. Consecutive list blocks are grouped
 * into a single ul/ol so bullets keep their markers instead of rendering as
 * standalone paragraphs.
 */
function portableTextToNodes(
  content: PTBlock[],
  inlineCta?: React.ReactNode
): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const mid = inlineCta ? Math.floor(content.length / 2) : -1;
  let listBuffer: PTBlock[] = [];
  let listKind: string | null = null;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    const items = listBuffer.map((item, i) => (
      <li key={i} className="pl-1">
        {renderSpans(item.children, item.markDefs)}
      </li>
    ));
    nodes.push(
      listKind === "number" ? (
        <ol key={`list-${nodes.length}`} className="ml-5 list-decimal space-y-2">
          {items}
        </ol>
      ) : (
        <ul key={`list-${nodes.length}`} className="ml-5 list-disc space-y-2">
          {items}
        </ul>
      )
    );
    listBuffer = [];
    listKind = null;
  };

  content.forEach((block, i) => {
    if (inlineCta && i === mid) {
      flushList();
      nodes.push(<div key={`cta-${i}`}>{inlineCta}</div>);
    }
    if (!block || typeof block !== "object") return;

    if (block._type === "block" && block.listItem) {
      if (listKind && listKind !== block.listItem) flushList();
      listKind = block.listItem;
      listBuffer.push(block);
      return;
    }
    flushList();

    if (block._type === "image") {
      const url = urlFor(block).width(1200).url();
      nodes.push(
        <img
          key={`img-${i}`}
          src={url}
          alt={block.alt || ""}
          className="my-6 rounded-xl w-full"
        />
      );
      return;
    }
    if (block._type === "table") {
      const table = renderTable(block, `table-${i}`);
      if (table) nodes.push(table);
      return;
    }
    if (block._type === "callout") {
      const color =
        block.type === "warning"
          ? "border-yellow-300 bg-yellow-50 text-yellow-800"
          : block.type === "tip"
            ? "border-green-300 bg-green-50 text-green-800"
            : "border-blue-300 bg-blue-50 text-blue-800";
      nodes.push(
        <div key={`callout-${i}`} className={`rounded-xl border p-4 ${color}`}>
          <div className="space-y-2 text-sm leading-relaxed">
            {portableTextToNodes(block.content ?? [])}
          </div>
        </div>
      );
      return;
    }
    if (block._type !== "block") return;

    const text = (block.children ?? []).map((c) => c.text ?? "").join("");
    switch (block.style) {
      case "h1":
        nodes.push(
          <h1 key={i} className="mt-8 text-2xl font-bold text-gray-900">
            {renderSpans(block.children, block.markDefs)}
          </h1>
        );
        return;
      case "h2":
        nodes.push(
          <h2 key={i} className="mt-6 text-xl font-bold text-gray-900">
            {renderSpans(block.children, block.markDefs)}
          </h2>
        );
        return;
      case "h3":
        nodes.push(
          <h3 key={i} className="mt-4 text-lg font-semibold text-gray-900">
            {renderSpans(block.children, block.markDefs)}
          </h3>
        );
        return;
      case "h4":
        nodes.push(
          <h4 key={i} className="mt-4 text-base font-semibold text-gray-900">
            {renderSpans(block.children, block.markDefs)}
          </h4>
        );
        return;
      case "blockquote":
        nodes.push(
          <blockquote
            key={i}
            className="border-l-4 border-blue-200 pl-4 italic text-gray-500"
          >
            {renderSpans(block.children, block.markDefs)}
          </blockquote>
        );
        return;
      default:
        if (!text.trim()) return;
        nodes.push(
          <p key={i} className="mt-2">
            {renderSpans(block.children, block.markDefs)}
          </p>
        );
    }
  });

  flushList();
  return nodes;
}

function PortableTextContent({
  content,
  inlineCta,
}: {
  content: PTBlock[];
  inlineCta?: React.ReactNode;
}) {
  if (!content) return null;
  return (
    <div className="space-y-4 text-base leading-relaxed text-gray-700">
      {portableTextToNodes(content, inlineCta)}
    </div>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  /* Fetch related posts: match by same categories, excluding current */
  const allPosts = await client.fetch(POSTS_QUERY).catch(() => []);
  const currentCatSlugs = new Set(
    (post.categories || []).map((c: any) => c.slug?.current).filter(Boolean)
  );
  const related = (allPosts || [])
    .filter((p: any) => p.slug?.current !== slug)
    .sort((a: any, b: any) => {
      // Score: number of matching categories (higher = more relevant)
      const aMatches = (a.categories || []).filter((c: any) =>
        currentCatSlugs.has(c.slug?.current)
      ).length;
      const bMatches = (b.categories || []).filter((c: any) =>
        currentCatSlugs.has(c.slug?.current)
      ).length;
      return bMatches - aMatches;
    })
    .slice(0, 3);

  return (
    <>
      {/* Article Schema for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt || "",
            datePublished: post.publishedAt || undefined,
            author: post.author?.name
              ? { "@type": "Person", name: post.author.name }
              : undefined,
            publisher: {
              "@type": "Organization",
              name: "Nantong Linens",
              url: "https://www.nantonglinens.com",
            },
            mainEntityOfPage: `https://www.nantonglinens.com/blog/${slug}`,
            ...(post.mainImage?.asset?.url
              ? { image: post.mainImage.asset.url }
              : {}),
          }),
        }}
      />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.nantonglinens.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.nantonglinens.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://www.nantonglinens.com/blog/${slug}`,
              },
            ],
          }),
        }}
      />

      {/* Article header */}
      <section className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {(post.categories || []).length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat: any) => (
                <Link
                  key={cat.slug?.current || cat.title}
                  href={`/blog/${cat.slug?.current}`}
                  className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded hover:bg-blue-100 transition-colors"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          )}
          <h1 className="text-3xl font-bold text-gray-900 leading-snug">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            )}
            {post.author?.name && (
              <>
                <span>·</span>
                <span>{post.author.name}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.mainImage && (
        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] overflow-hidden rounded-xl bg-gray-50">
            <img
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.mainImage.alt || post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {post.body ? (
            <PortableTextContent
              content={post.body}
              inlineCta={
                <div className="my-10 rounded-2xl border-2 border-blue-200 bg-white p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-900">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Need these specs quoted for your property?
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Tell us your hotel tier, quantities and timeline — get a free,
                        no-obligation quote within 24 hours.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <TrackedLink
                      ctaName="blog_inline_quote"
                      eventParams={{ cta_location: "blog_mid_article" }}
                      href="/rfq"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                    >
                      Request a Free Quote
                    </TrackedLink>
                    <TrackedLink
                      ctaName="blog_inline_whatsapp"
                      eventParams={{ cta_location: "blog_mid_article" }}
                      href="https://wa.me/8615151361119?text=Hi%2C%20I%20found%20your%20blog%20post%20and%20want%20a%20quote."
                      className="inline-flex items-center gap-2 rounded-full border border-green-500 bg-white px-6 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50 transition-colors"
                    >
                      WhatsApp Us
                    </TrackedLink>
                  </div>
                </div>
              }
            />
          ) : (
            <p className="text-gray-400 italic">No content available.</p>
          )}

          {/* In-article product cross-links */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
              Shop Related Products
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Hotel Bed Sheets", desc: "60S–80S · 100+ wash", href: "/products/bed-sheets" },
                { label: "Bulk Bath Towels", desc: "500–700 GSM · 100% cotton", href: "/products/bath-towels" },
                { label: "Hotel Bathrobes", desc: "Custom embroidery · MOQ 50", href: "/products/bathrobes" },
                { label: "Duvet Covers", desc: "Sateen · percale · custom sizes", href: "/products/duvet-covers" },
              ].map((item) => (
                <TrackedLink
                  key={item.href}
                  ctaName="blog_related_product"
                  eventParams={{ cta_location: "blog_end", product: item.href }}
                  href={item.href}
                  className="block rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-blue-300 hover:text-blue-800"
                >
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="mt-1 text-xs text-gray-400">{item.desc}</p>
                  <p className="mt-2 text-xs font-medium text-blue-700">View catalog →</p>
                </TrackedLink>
              ))}
            </div>
          </div>

          {/* Download CTA (Lead Magnet) */}
          <div className="mt-12 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900">
                  Free PDF: Complete Hotel Linen Buying Guide
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Step-by-step procurement guide covering specs, MOQ, pricing, QC, and shipping — based on real Dieshiqiao experience.
                </p>
              </div>
              <TrackedLink
                ctaName="blog_lead_magnet"
                eventParams={{ cta_location: "blog_end" }}
                href="/guides/download"
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Download Free Guide
              </TrackedLink>
            </div>
          </div>

          {/* Share / CTA */}
          <div className="mt-6 rounded-xl bg-blue-950 p-8 text-center">
            <h2 className="text-xl font-bold text-white">
              Need help sourcing hotel linens?
            </h2>
            <p className="mt-2 text-blue-200/80">
              Get a free quote within 24 hours. No commitment required.
            </p>
            <TrackedLink
              ctaName="blog_bottom_quote"
              eventParams={{ cta_location: "blog_end" }}
              href="/rfq"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p: any) => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug?.current}`}
                  className="group block rounded-xl border border-gray-100 bg-white p-5 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  {p.excerpt && (
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {p.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
