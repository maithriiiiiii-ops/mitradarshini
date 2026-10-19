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
        "/front.jpeg",
        "/exterior.jpeg",
        "/signboard.jpeg",
        "/street-view.jpeg",
        "/menu1.jpeg",
      ].map((path) => `${siteData.url}${path}`),
    },
  ];
}
