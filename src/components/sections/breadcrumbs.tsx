import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: Array<{ name: string; href: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
      {items.map((item, index) => (
        <span key={item.href} className="inline-flex items-center gap-2">
          {index > 0 ? <ChevronRight className="h-4 w-4" /> : null}
          <Link href={item.href} className={index === items.length - 1 ? "font-semibold text-slate-950" : "hover:text-slate-950"}>
            {item.name}
          </Link>
        </span>
      ))}
    </nav>
  );
}
