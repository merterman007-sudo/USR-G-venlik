"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { references } from "@/data/site";
import { cn } from "@/lib/utils";

export function ReferencesFilter() {
  const sectors = useMemo(() => ["Tümü", ...Array.from(new Set(references.map((item) => item.sector)))], []);
  const [active, setActive] = useState("Tümü");
  const filtered = active === "Tümü" ? references : references.filter((item) => item.sector === active);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {sectors.map((sector) => (
          <button
            key={sector}
            type="button"
            onClick={() => setActive(sector)}
            className={cn(
              "h-10 shrink-0 rounded-md border px-4 text-sm font-semibold transition",
              active === sector ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-950",
            )}
          >
            {sector}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((reference) => (
          <article key={reference.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              {reference.logo ? (
                <div className="grid h-14 w-20 shrink-0 place-items-center rounded-md border border-slate-200 bg-slate-50 p-2">
                  <Image src={reference.logo} alt={reference.name} width={120} height={64} className="max-h-10 w-auto object-contain" />
                </div>
              ) : null}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{reference.sector}</p>
                <h3 className="mt-2 text-xl font-black text-slate-950">{reference.name}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{reference.service}</p>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <MapPin className="h-4 w-4" />
              {reference.city}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
