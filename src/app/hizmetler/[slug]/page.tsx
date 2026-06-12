import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { Faq } from "@/components/sections/faq";
import { JsonLd } from "@/components/sections/json-ld";
import { ReferencesFilter } from "@/components/sections/references-filter";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  const breadcrumbs = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: service.title, href: `/hizmetler/${service.slug}` },
  ];

  return (
    <main className="pt-28">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@type": "Organization", name: "USR Özel Güvenlik", url: absoluteUrl("/") },
          areaServed: "Türkiye",
        }}
      />
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="grid h-24 w-24 place-items-center rounded-lg border border-slate-200 bg-white text-[#07162f] shadow-sm">
              <Icon className="h-12 w-12" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">{service.category}</p>
              <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">{service.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Hizmet Açıklaması" title={`${service.title} için profesyonel yaklaşım`} description={service.description} />
            <h2 className="mt-12 text-2xl font-black text-slate-950">Avantajlar</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.advantages.map((advantage) => (
                <div key={advantage} className="flex gap-3 rounded-lg border border-slate-200 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#07162f]" />
                  <p className="font-semibold text-slate-700">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          <ContactForm compact />
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Süreç" title="Talep sonrası operasyon nasıl kurulur?" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-sm font-black text-slate-400">0{index + 1}</div>
                <h3 className="mt-4 text-xl font-black text-slate-950">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading eyebrow="SSS" title={`${service.title} hakkında sık sorulanlar`} />
          <Faq />
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Referanslar" title="Benzer operasyonlardan seçili referanslar" align="center" />
          <div className="mt-12">
            <ReferencesFilter />
          </div>
        </div>
      </section>
    </main>
  );
}
