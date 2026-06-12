"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/data/site";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = encodeURIComponent(
      [
        "Merhaba, iletişim formu üzerinden teklif talebim var.",
        `Ad Soyad: ${name || "-"}`,
        `Firma / Proje: ${companyName || "-"}`,
        `Telefon: ${phone || "-"}`,
        `E-posta: ${email || "-"}`,
        `İlgilendiği hizmet: ${service || "-"}`,
        `Mesaj: ${message || "-"}`,
      ].join("\n"),
    );

    window.open(`${company.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Ad Soyad" required />
        <Input name="company" value={companyName} onChange={(event) => setCompanyName(event.target.value)} placeholder="Firma / Site / Organizasyon" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" placeholder="Telefon" required />
        <Input name="email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="E-posta" required />
      </div>
      <Input name="service" value={service} onChange={(event) => setService(event.target.value)} placeholder="İlgilendiğiniz hizmet" />
      <Textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="İhtiyacınızı kısaca anlatın" rows={compact ? 4 : 6} />
      <Button type="submit" variant="dark" size="lg">
        <Send className="h-4 w-4" />
        Teklif Talebi Gönder
      </Button>
      <p className="text-xs leading-5 text-slate-500">
        Formu göndererek KVKK kapsamında iletişim kurulmasını kabul etmiş olursunuz.
      </p>
    </form>
  );
}
