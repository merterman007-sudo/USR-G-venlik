"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/data/site";

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = encodeURIComponent([
      "Merhaba, teklif talebim var.",
      `Ad Soyad: ${name || "-"}`,
      `Telefon: ${phone || "-"}`,
      `Firma / Proje: ${companyName || "-"}`,
      `Hizmet: ${service || "-"}`,
      `Mesaj: ${message || "-"}`,
    ].join("\n"));

    window.open(`${company.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-xl sm:p-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Kurumsal Teklif Formu</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950">24 saat içinde dönüş alın</h2>
      </div>

      <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Ad Soyad" required />
      <Input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Telefon" required />
      <Input value={companyName} onChange={(event) => setCompanyName(event.target.value)} placeholder="Firma / Site / Organizasyon" />
      <Input value={service} onChange={(event) => setService(event.target.value)} placeholder="İstenen Hizmet" />
      <Textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Kısaca ihtiyacınızı yazın" rows={4} />

      <Button type="submit" variant="dark" size="lg" className="w-full">
        <Send className="h-4 w-4" />
        Teklif Talebini Gönder
      </Button>
      <p className="text-xs leading-5 text-slate-500">
        Form, WhatsApp üzerinden hızlı teklif sürecini başlatır.
      </p>
    </form>
  );
}
