"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/data/site";

export function JobApplicationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [city, setCity] = useState("");
  const [experience, setExperience] = useState("");
  const [cvName, setCvName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = encodeURIComponent(
      [
        "Merhaba, kariyer başvurusu yapmak istiyorum.",
        `Ad Soyad: ${name || "-"}`,
        `Telefon: ${phone || "-"}`,
        `E-posta: ${email || "-"}`,
        `Başvurulan pozisyon: ${position || "-"}`,
        `Şehir: ${city || "-"}`,
        `CV dosyası: ${cvName || "-"}`,
        `Deneyim notu: ${experience || "-"}`,
      ].join("\n"),
    );

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Kariyer başvurusu")}&body=${text}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Ad Soyad" required />
        <Input value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" placeholder="Telefon" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="E-posta" />
        <Input value={position} onChange={(event) => setPosition(event.target.value)} placeholder="Başvurulan pozisyon" />
      </div>
      <Input value={city} onChange={(event) => setCity(event.target.value)} placeholder="Şehir" />
      <label className="flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-sm text-slate-600">
        <UploadCloud className="mb-3 h-7 w-7 text-slate-500" />
        <span>{cvName || "CV dosyanızı seçin"}</span>
        <span className="mt-2 max-w-md text-xs leading-5 text-slate-500">
          E-posta uygulamanız açıldığında seçtiğiniz CV dosyasını iletiye ayrıca ekleyin.
        </span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setCvName(event.target.files?.[0]?.name ?? "")}
        />
      </label>
      <Textarea value={experience} onChange={(event) => setExperience(event.target.value)} placeholder="Deneyiminiz ve uygun olduğunuz vardiya bilgileri" />
      <Button type="submit" variant="dark" size="lg">Başvuruyu Gönder</Button>
    </form>
  );
}
