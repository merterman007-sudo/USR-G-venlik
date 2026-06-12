"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, navigation, services } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const featuredServices = services.slice(0, 8);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/90 text-slate-950 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="USR Özel Güvenlik ana sayfa">
          <Image
            src="/images/usr-logo.png"
            alt="USR Özel Güvenlik"
            width={748}
            height={581}
            priority
            className="h-14 w-auto object-contain sm:h-[4.5rem]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.label === "Hizmetler" ? (
              <div className="group relative" key={item.href}>
                <Link href={item.href} className="flex h-11 items-center gap-1 rounded-md px-4 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="pointer-events-none absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-2xl">
                    {featuredServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/hizmetler/${service.slug}`}
                        className="rounded-md p-4 transition hover:bg-slate-50"
                      >
                        <span className="text-sm font-bold text-slate-950">{service.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-slate-500">{service.summary}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex h-11 items-center rounded-md px-4 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="soft">
            <Link href={company.phoneHref}>
              <Phone className="h-4 w-4" />
              Bizi Arayın
            </Link>
          </Button>
          <Button asChild variant="navy">
            <Link href="/iletisim#teklif">Hemen Teklif Al</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-5 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Button asChild variant="soft">
              <Link href={company.phoneHref}>Bizi Arayın</Link>
            </Button>
            <Button asChild variant="navy">
              <Link href="/iletisim#teklif">Teklif Al</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
