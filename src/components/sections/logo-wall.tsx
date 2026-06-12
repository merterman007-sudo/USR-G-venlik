import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoWallItem = {
  name: string;
  src: string;
  className?: string;
};

export function LogoWall({ items }: { items: LogoWallItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.name} className={cn("grid min-h-28 place-items-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm", item.className)}>
          <Image src={item.src} alt={item.name} width={220} height={120} className="max-h-16 w-auto object-contain" />
        </div>
      ))}
    </div>
  );
}
