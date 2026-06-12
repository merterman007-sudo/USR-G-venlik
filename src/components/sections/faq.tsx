import { faqs } from "@/data/site";

export function Faq({ items = faqs }: { items?: Array<{ question: string; answer: string }> }) {
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="cursor-pointer list-none text-base font-bold text-slate-950">
            {item.question}
            <span className="float-right text-slate-400 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
