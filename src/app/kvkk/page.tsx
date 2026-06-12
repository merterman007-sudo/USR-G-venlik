import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "USR Özel Güvenlik kişisel verilerin korunması aydınlatma metni.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      paragraphs={[
        "USR Özel Güvenlik, kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hukuka, dürüstlük kurallarına ve ölçülülük ilkesine uygun şekilde işler.",
        "Teklif, iletişim ve iş başvuru formları aracılığıyla paylaşılan veriler; talebin değerlendirilmesi, sizinle iletişim kurulması ve hizmet süreçlerinin yürütülmesi amacıyla kullanılır.",
        "Kişisel verileriniz yetkisiz kişilerle paylaşılmaz. Yasal zorunluluklar ve hizmetin gerektirdiği operasyonel süreçler dışında üçüncü kişilere aktarım yapılmaz.",
      ]}
    />
  );
}

function LegalPage({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: title, href: "/kvkk" }]} />
          <h1 className="mt-8 text-5xl font-black tracking-tight">{title}</h1>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 text-lg leading-9 text-slate-700">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
