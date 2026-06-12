import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({ title, description, path = "/", image = "/images/usr-social-card.png" }: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "USR Özel Güvenlik",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "USR Özel Güvenlik logosu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: "USR Özel Güvenlik",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/usr-logo.png"),
    image: absoluteUrl("/images/usr-social-card.png"),
    telephone: "+90 535 082 84 60",
    email: "sonay@usrgrup.tr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Selahattin Pınar Caddesi No: 23/1 B Blok, Nilüfer Apartmanı, Daire 3, Mecidiyeköy",
      addressLocality: "Şişli",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: "Türkiye",
    priceRange: "$$",
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
