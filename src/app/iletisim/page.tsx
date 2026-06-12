import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { company } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "İletişim",
  description: "USR Özel Güvenlik telefon, e-posta, adres, WhatsApp ve teklif iletişim formu.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <main className="pt-28">
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#eef5fb] py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "İletişim", href: "/iletisim" }]} />
          <h1 className="mt-8 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">Teklif ve keşif talepleriniz için ulaşın.</h1>
        </div>
      </section>
      <section id="teklif" className="bg-[#f4f8fd] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="İletişim" title="Aynı gün ön değerlendirme alın" />
            <div className="mt-8 grid gap-4">
              <a href={company.phoneHref} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                <Phone className="h-6 w-6 text-[#07162f]" />
                <span className="font-semibold text-slate-800">{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                <Mail className="h-6 w-6 text-[#07162f]" />
                <span className="font-semibold text-slate-800">{company.email}</span>
              </a>
              <Link href={company.whatsapp} target="_blank" className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                <MessageCircle className="h-6 w-6 text-[#20b15a]" />
                <span className="font-semibold text-slate-800">WhatsApp üzerinden yazın</span>
              </Link>
              <div className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                <MapPin className="h-6 w-6 text-[#07162f]" />
                <span className="font-semibold text-slate-800">{company.address}</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <iframe
            title="USR Özel Güvenlik Google Maps"
            src="https://www.google.com/maps?q=Selahattin%20P%C4%B1nar%20Caddesi%20No%2023%2F1%20B%20Blok%20Nil%C3%BCfer%20Apartman%C4%B1%20Daire%203%20Mecidiyek%C3%B6y%20%C5%9Ei%C5%9Fli%20%C4%B0stanbul&output=embed"
            className="h-[420px] w-full rounded-lg border-0"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
