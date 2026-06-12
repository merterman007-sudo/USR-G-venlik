import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "USR Özel Güvenlik",
    short_name: "USR Güvenlik",
    description: "Profesyonel güvenlik ve personel çözümleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#219ebc",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
