import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { services } from "@/data/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Card className="group h-full overflow-hidden border-slate-200 transition hover:-translate-y-1 hover:border-slate-950 hover:shadow-xl">
      <CardHeader>
        <div className="grid h-12 w-12 place-items-center rounded-md border border-slate-200 bg-sky-50 text-[#07162f]">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="pt-4">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="min-h-24 text-sm leading-7 text-slate-600">{service.summary}</p>
        <Link href={`/hizmetler/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
          Detayları İncele
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
