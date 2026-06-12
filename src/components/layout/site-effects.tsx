"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { company } from "@/data/site";

export function SiteEffects() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    setCookie(localStorage.getItem("usr-cookie") !== "accepted");
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-white text-slate-950">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/usr-logo.png"
              alt="USR Özel Güvenlik"
              width={748}
              height={581}
              priority
              className="h-32 w-auto object-contain"
            />
            <div className="flex items-center gap-3">
            <span className="h-3 w-3 animate-pulse rounded-full bg-[#07162f]" />
            <span className="text-sm font-bold uppercase tracking-[0.24em]">USR operasyon hazırlanıyor</span>
            </div>
          </div>
        </div>
      ) : null}

      <Link
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full border-2 border-white bg-[#25d366] text-white shadow-2xl shadow-black/30 transition hover:scale-105 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16"
        aria-label="WhatsApp ile iletişime geç"
      >
        <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />
      </Link>

      {visible ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-5 z-40 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-xl sm:bottom-28 sm:right-7 sm:h-11 sm:w-11"
          aria-label="Yukarı çık"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}

      {cookie ? (
        <div className="fixed inset-x-3 bottom-20 z-40 rounded-xl border border-slate-200 bg-white p-4 pr-12 text-slate-950 shadow-2xl sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm">
          <button
            type="button"
            className="absolute right-3 top-3 text-slate-500"
            onClick={() => setCookie(false)}
            aria-label="Cookie banner kapat"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="pr-8 text-sm font-semibold">Çerez tercihleri</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Deneyimi iyileştirmek ve teklif taleplerini daha doğru yönetmek için çerezlerden yararlanıyoruz.
          </p>
          <button
            type="button"
            onClick={() => {
              localStorage.setItem("usr-cookie", "accepted");
              setCookie(false);
            }}
            className="mt-4 h-10 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white"
          >
            Kabul Et
          </button>
        </div>
      ) : null}
    </>
  );
}
