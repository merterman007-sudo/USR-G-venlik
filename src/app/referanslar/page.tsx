import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { ReferencesFilter } from "@/components/sections/references-filter";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Referanslar",
  description: "USR Özel Güvenlik referansları ve sektör bazlı filtrelenebilir kurumsal hizmet deneyimi.",
  path: "/referanslar",
});

export default function ReferencesPage() {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Referanslar", href: "/referanslar" }]} />
          <h1 className="mt-8 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">Sektörlere göre filtrelenebilir referanslar.</h1>
        </div>
      </section>
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Referans Sistemi" title="Kurumsal operasyon deneyimini sektöre göre inceleyin" />
          <div className="mt-12">
            <ReferencesFilter />
          </div>
        </div>
      </section>
    </main>
  );
}
