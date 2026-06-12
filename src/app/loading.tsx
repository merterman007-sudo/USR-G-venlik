export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-white text-slate-950">
      <div className="flex items-center gap-4">
        <span className="h-3 w-3 animate-pulse rounded-full bg-[#07162f]" />
        <span className="text-sm font-bold uppercase tracking-[0.24em]">USR yükleniyor</span>
      </div>
    </div>
  );
}
