import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, Phone, ShieldCheck, Star, Users } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogoWall } from "@/components/sections/logo-wall";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/sections/service-card";
import { company, referenceLogos, references, services, stats, testimonials, whyUsr } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Profesyonel Güvenlik ve Personel Çözümleri",
  description:
    "Türkiye genelinde güvenlik, temizlik ve organizasyon personeli hizmetleri sunan kurumsal çözüm ortağınız.",
  path: "/",
});

const sectors = ["Site Yönetimi", "Fabrika", "AVM", "Hastane", "Otel", "Etkinlik"];

const heroPoints = [
  "Keşiften sözleşmeye hızlı teklif akışı",
  "Kurumsal ekip, temiz iletişim, düzenli raporlama",
  "Tek çatı altında güvenlik, temizlik ve personel temini",
];

export default function Home() {
  return (
    <main className="bg-[#f4f8fd]">
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] pt-28 text-slate-950">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,22,47,0.03),rgba(255,255,255,0.85))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
          <div className="self-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-600 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#07162f]" />
              Kurumsal Güvenlik ve Personel Yönetimi
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.28em] text-slate-500">{company.slogan}</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Profesyonel Güvenlik ve Personel Çözümleri
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Türkiye genelinde güvenlik, temizlik ve organizasyon personeli hizmetleri sunuyoruz. Kurumunuz için
              ölçülebilir, denetlenebilir ve temsil gücü yüksek operasyonlar kuruyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="navy">
                <Link href="#teklif">
                  Hemen Teklif Al
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="soft">
                <Link href={company.phoneHref}>
                  <Phone className="h-5 w-5" />
                  Bizi Arayın
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {sectors.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroPoints.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#07162f]" />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:max-w-xl lg:justify-self-end">
            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/usr-security-hero.png"
                  alt="USR Özel Güvenlik profesyonel güvenlik ekibi"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur">
                  7/24 operasyon desteği
                </div>
              </div>

              <div className="border-b border-slate-200 px-5 py-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#07162f] text-white">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-slate-950">Denetimli kadro</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">Saha yönetimi ve kalite kontrol akışı</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#07162f] text-white">
                      <Users className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-slate-950">Hızlı başlangıç</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">Keşif, teklif ve planlama aynı gün içinde</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(240,246,252,1))]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <SectionHeading
              eyebrow="Hizmetler"
              title="İhtiyacınız olan hizmeti tek yerden seçin"
              description="Güvenlik, temizlik ve organizasyon ekibinizi ayrı ayrı yönetmek yerine tek çatı altında planlayın."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 9).map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Referans Logoları"
            title="Kurumsal iş birliklerinin görsel vitrini"
            description="Markaların logolarını hızlı okunabilir bir güven alanı olarak sunuyoruz."
            align="center"
          />
          <div className="mt-10">
            <LogoWall items={referenceLogos.map((item) => ({ name: item.name, src: item.src }))} />
          </div>
        </div>
      </section>

      <section className="bg-[#eef5fb] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Neden USR?"
              title="Kurumsal çalışmayı sade, görünür ve ölçülebilir hale getiriyoruz"
              description="Operasyon, raporlama ve temsil kalitesini tek yönetim standardında topluyoruz."
            />
            <div className="mt-8 grid gap-4">
              {whyUsr.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#07162f]" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Referanslar"
              title="Sektörlere göre güvene dayalı iş birlikleri"
              description="Kurumsal, organizasyon ve marka odaklı referanslarla çalışıyoruz."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {references.slice(0, 8).map((reference) => (
                <Card key={reference.name} className="border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
                  <div className="flex items-center gap-4">
                    {reference.logo ? (
                      <div className="grid h-16 w-24 shrink-0 place-items-center rounded-md border border-slate-200 bg-slate-50 p-2">
                        <Image src={reference.logo} alt={reference.name} width={140} height={72} className="max-h-10 w-auto object-contain" />
                      </div>
                    ) : (
                      <div className="grid h-16 w-24 shrink-0 place-items-center rounded-md bg-slate-100 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                        {reference.name.slice(0, 3)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{reference.sector}</p>
                      <h3 className="mt-1 truncate text-base font-black text-slate-950">{reference.name}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{reference.service}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-500">{reference.city}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Müşteri Yorumları"
            title="Kurumsal müşterilerimizin deneyimi"
            description="İş akışında hız, iletişim ve denetim disiplini en çok öne çıkan noktalar."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.author} className="border-slate-200 bg-slate-50 p-6 shadow-sm">
                <Star className="h-5 w-5 text-[#07162f]" />
                <p className="mt-4 text-sm leading-7 text-slate-700">{item.quote}</p>
                <div className="mt-6">
                  <p className="font-bold text-slate-950">{item.author}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teklif" className="scroll-mt-20 bg-[#eef5fb] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">İletişim</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Kısa formu doldurun, biz dönüş yapalım.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Site, fabrika, AVM, hastane ya da organizasyon için ihtiyacınızı yazın. Size uygun personel ve güvenlik
              planını hızlıca paylaşalım.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-600">
              <p>{company.phone}</p>
              <p>{company.email}</p>
              <p>{company.address}</p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
