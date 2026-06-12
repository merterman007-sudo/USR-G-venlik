import { JobApplicationForm } from "@/components/forms/job-application-form";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kariyer",
  description: "USR Özel Güvenlik güvenlik, temizlik, karşılama ve organizasyon personeli iş başvuru formu.",
  path: "/kariyer",
});

export default function CareerPage() {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Kariyer", href: "/kariyer" }]} />
          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Profesyonel ekibimize katılın.</h1>
        </div>
      </section>
      <section className="bg-[#f4f8fd] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading
            eyebrow="İş Başvurusu"
            title="Güvenlik ve destek hizmetlerinde kariyer fırsatları"
            description="Silahlı güvenlik, silahsız güvenlik, temizlik, danışma, hostes ve organizasyon ekibi pozisyonları için başvurunuzu iletebilirsiniz."
          />
          <JobApplicationForm />
        </div>
      </section>
    </main>
  );
}
