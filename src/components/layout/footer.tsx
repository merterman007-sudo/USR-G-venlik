import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navigation, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" aria-label="USR Özel Güvenlik ana sayfa" className="inline-block">
            <Image
              src="/images/usr-logo.png"
              alt="USR Özel Güvenlik"
              width={748}
              height={581}
              className="h-28 w-auto object-contain"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600">
            Türkiye genelinde güvenlik, temizlik ve organizasyon personeli hizmetleriyle kurumların operasyonel güvenini güçlendiriyoruz.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Site</h2>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Hizmetler</h2>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/hizmetler/${service.slug}`} className="text-sm text-slate-600 hover:text-slate-950">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">İletişim</h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-600">
            <a href={company.phoneHref} className="flex gap-3 hover:text-slate-950">
              <Phone className="h-5 w-5 shrink-0" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-slate-950">
              <Mail className="h-5 w-5 shrink-0" />
              {company.email}
            </a>
            <span className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0" />
              {company.shortAddress}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-1">
            <p>© 2026 USR Özel Güvenlik. Tüm hakları saklıdır.</p>
            <p>
              Bu site{" "}
              <a
                href="https://midigital.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 hover:text-slate-950"
              >
                midigital.com.tr
              </a>{" "}
              tarafından hazırlanmıştır.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/kvkk" className="hover:text-slate-950">KVKK</Link>
            <Link href="/gizlilik-politikasi" className="hover:text-slate-950">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="hover:text-slate-950">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
