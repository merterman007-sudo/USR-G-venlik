import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/sections/service-card";
import { services } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hizmetler",
  description: "USR Özel Güvenlik güvenlik, temizlik, organizasyon ve profesyonel personel temini hizmetleri.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Hizmetler", href: "/hizmetler" }]} />
          <h1 className="mt-8 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">Kurumsal hizmet ihtiyaçlarınız için tek merkez.</h1>
        </div>
      </section>
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Hizmetler" title="Her sektör için ölçeklenebilir operasyon çözümleri" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
