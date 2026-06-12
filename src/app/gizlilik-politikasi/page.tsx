import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gizlilik Politikası",
  description: "USR Özel Güvenlik web sitesi gizlilik politikası.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" }]} />
          <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl">Gizlilik Politikası</h1>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 text-lg leading-9 text-slate-700">
          <p>Web sitemizi ziyaret ettiğinizde paylaştığınız bilgiler, yalnızca talebinizi değerlendirmek ve size doğru hizmet önerisi sunmak amacıyla kullanılır.</p>
          <p>Site performansını ölçmek, kullanıcı deneyimini geliştirmek ve form süreçlerini güvenli biçimde yönetmek için sınırlı çerezler kullanılabilir.</p>
          <p>Gizlilik uygulamalarımızı geliştirmek amacıyla bu politika güncellenebilir. Güncel metin her zaman bu sayfada yayımlanır.</p>
        </div>
      </section>
    </main>
  );
}
