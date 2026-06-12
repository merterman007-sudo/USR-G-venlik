import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { services } from "@/data/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-700/40 hover:shadow-2xl hover:shadow-slate-300/50">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
        <Image
          src={service.image}
          alt={`${service.title} profesyonel ekip`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl border border-white/30 bg-white/95 text-[#07162f] shadow-lg backdrop-blur">
          <Icon className="h-6 w-6" />
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-slate-950/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
          {service.category}
        </span>
      </div>
      <CardHeader className="px-5 pb-0 pt-5 sm:px-6">
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col px-5 pb-6 pt-3 sm:px-6">
        <p className="text-sm leading-7 text-slate-600">{service.summary}</p>
        <Link href={`/hizmetler/${service.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-slate-950">
          Detayları İncele
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
