# USR Özel Güvenlik Kurumsal Web Sitesi

Next.js 15, TypeScript, TailwindCSS, shadcn uyumlu UI bileşenleri ve Framer Motion ile hazırlanmış premium kurumsal web sitesi.

## Çalıştırma

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Üretim

```bash
npm run build
npm run start
```

## Yapı

- `src/data/site.ts`: Hizmetler, referanslar, blog içerikleri ve şirket bilgileri
- `src/components`: UI, layout, form ve section bileşenleri
- `src/app/hizmetler/[slug]`: Her hizmet için SEO uyumlu dinamik detay sayfası
- `src/app/blog/[slug]`: Blog detay sayfaları
- `src/app/sitemap.ts` ve `src/app/robots.ts`: SEO teknik dosyaları

## Notlar

- İletişim ve başvuru formları statik HTML form yapısındadır; gerçek gönderim için CRM, e-posta servisi veya API endpoint bağlanabilir.
- `NEXT_PUBLIC_SITE_URL` ortam değişkeni canlı domain ile set edilirse canonical, Open Graph, sitemap ve schema URL'leri otomatik güncellenir.
