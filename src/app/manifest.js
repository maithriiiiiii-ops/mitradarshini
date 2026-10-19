import { siteData } from "@/data/site";

export default function manifest() {
  return {
    name: siteData.name,
    short_name: "Mitra Darshini",
    description: siteData.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#F5EFE6",
    theme_color: "#2B170E",
    categories: ["food", "lifestyle"],
    lang: "en-IN",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
