import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kullanım Şartları",
  description: "USR Özel Güvenlik web sitesi kullanım şartları.",
  path: "/kullanim-sartlari",
});

export default function TermsPage() {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Kullanım Şartları", href: "/kullanim-sartlari" }]} />
          <h1 className="mt-8 text-5xl font-black tracking-tight">Kullanım Şartları</h1>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 text-lg leading-9 text-slate-700">
          <p>Bu web sitesindeki içerikler bilgilendirme amacı taşır. Hizmet kapsamı, lokasyon, yasal gereklilikler ve operasyon ihtiyaçlarına göre ayrıca değerlendirilir.</p>
          <p>Sitede yer alan metin, tasarım ve içerikler izinsiz kopyalanamaz veya ticari amaçla kullanılamaz.</p>
          <p>Formlar üzerinden paylaşılan bilgiler, talebinize yanıt vermek ve teklif sürecini yürütmek amacıyla işlenir.</p>
        </div>
      </section>
    </main>
  );
}
