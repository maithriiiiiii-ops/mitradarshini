import { siteData } from "@/data/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteData.url}/sitemap.xml`,
    host: siteData.url,
  };
}
