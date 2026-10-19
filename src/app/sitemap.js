import { siteData } from "@/data/site";

export default function sitemap() {
  return [
    {
      url: siteData.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "/opengraph-image.jpg",
        "/front.webp",
        "/exterior.webp",
        "/signboard.webp",
        "/street-view.webp",
        "/menu1.webp",
      ].map((path) => `${siteData.url}${path}`),
    },
  ];
}
