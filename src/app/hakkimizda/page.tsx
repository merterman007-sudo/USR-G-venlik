import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hakkımızda",
  description: "USR Özel Güvenlik şirket hikayesi, misyonu, vizyonu, değerleri ve kalite politikası.",
  path: "/hakkimizda",
});

const values = ["Güvenilirlik", "Disiplin", "Şeffaf raporlama", "İnsana saygı", "Sürekli gelişim"];

export default function AboutPage() {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Hakkımızda", href: "/hakkimizda" }]} />
          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Kurumsal güveni sahada temsil eden ekip.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            USR Özel Güvenlik; güvenlik, temizlik ve organizasyon personeli alanlarında kurumların operasyonel sürekliliğini destekleyen profesyonel bir çözüm ortağıdır.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionHeading
            eyebrow="Şirket Hikayesi"
            title="Saha disipliniyle kurumsal hizmet standardını birleştiriyoruz"
            description="USR, özel güvenlik sektöründe güvenilir, ölçülebilir ve temsil kalitesi yüksek hizmet ihtiyacından doğdu. Bugün farklı sektörlerdeki kurumlar için güvenlik planlamasından personel teminine kadar geniş bir operasyon ağı yönetiyoruz."
          />
          <div className="grid gap-5">
            <div className="rounded-lg border border-slate-200 p-7">
              <h2 className="text-2xl font-black text-slate-950">Misyon</h2>
              <p className="mt-4 leading-8 text-slate-600">Kurumlara güvenli, düzenli ve sürdürülebilir çalışma ortamları sağlamak; her görev noktasında profesyonel duruşu standart hale getirmek.</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-7">
              <h2 className="text-2xl font-black text-slate-950">Vizyon</h2>
              <p className="mt-4 leading-8 text-slate-600">Türkiye genelinde özel güvenlik ve destek personeli hizmetlerinde kurumsal kalite çıtasını yükselten öncü markalardan biri olmak.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fd] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Değerlerimiz" title="Her görev noktasında aynı standart" />
            <div className="mt-8 grid gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-[#07162f]" />
                  <span className="font-semibold text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-8 text-slate-950 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Kalite Politikası</p>
            <h2 className="mt-5 text-3xl font-black">Denetlenebilir, raporlanabilir ve geliştirilebilir hizmet.</h2>
            <p className="mt-6 leading-8 text-slate-600">
              Hizmet kalitemizi; doğru personel seçimi, görev bazlı eğitim, saha amiri denetimi, müşteri geri bildirimi ve düzenli performans raporlarıyla sürekli iyileştiririz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
