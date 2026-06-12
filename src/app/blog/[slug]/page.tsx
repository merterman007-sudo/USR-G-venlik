import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { JsonLd } from "@/components/sections/json-ld";
import { blogPosts } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const breadcrumbs = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <main className="pt-28">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: "USR Özel Güvenlik" },
          publisher: { "@type": "Organization", name: "USR Özel Güvenlik" },
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        }}
      />
      <article>
        <header className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              {post.category} · {post.readingTime}
            </p>
            <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-6xl">{post.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{post.excerpt}</p>
          </div>
        </header>
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-7 text-lg leading-9 text-slate-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
