import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { blogPosts } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "Güvenlik, temizlik, organizasyon ve kurumsal hizmetler hakkında SEO odaklı içerikler.",
  path: "/blog",
});

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Blog", href: "/blog" }]} />
          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Kurumsal hizmetlerde bilinçli karar rehberi.</h1>
        </div>
      </section>
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Blog" title="Güvenlik, temizlik ve organizasyon içgörüleri" />
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                {category}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  <span>{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-black text-slate-950">{post.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                  Yazıyı Oku
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
