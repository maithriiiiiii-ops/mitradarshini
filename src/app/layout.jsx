import { Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site";
import { menuData } from "@/data/menu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = `${siteData.name} | Pure Veg near Krishna Matha, Udupi`;

export const metadata = {
  metadataBase: new URL(siteData.url),
  title: {
    default: title,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.seoDescription,
  applicationName: siteData.name,
  keywords: [
    "Hotel Mitra Darshini",
    "Mitra Darshini Udupi",
    "pure veg restaurant Udupi",
    "vegetarian restaurant in Udupi",
    "South Indian restaurant Udupi",
    "best masala dosa Udupi",
    "breakfast in Udupi",
    "Udupi meals",
    "restaurant near Udupi Krishna Matha",
    "hotel near Krishna Mutt Udupi",
    "veg hotel near Udupi Krishna Temple",
    "restaurant near Rajangana Parking",
    "Maruthi Veethika Udupi",
  ],
  authors: [{ name: siteData.name, url: siteData.url }],
  creator: siteData.name,
  publisher: siteData.name,
  category: "restaurant",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: siteData.seoDescription,
    url: "/",
    siteName: siteData.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteData.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": siteData.locality,
    "geo.position": `${siteData.geo.latitude};${siteData.geo.longitude}`,
    ICBM: `${siteData.geo.latitude}, ${siteData.geo.longitude}`,
  },
};

export const viewport = {
  themeColor: "#2B170E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${siteData.url}/#restaurant`,
      name: siteData.name,
      alternateName: ["Mitra Darshini", siteData.kannadaName],
      description: siteData.description,
      url: siteData.url,
      logo: `${siteData.url}/icon-512.png`,
      image: [
        `${siteData.url}/opengraph-image.jpg`,
        `${siteData.url}/front.jpeg`,
        `${siteData.url}/exterior.jpeg`,
        `${siteData.url}/signboard.jpeg`,
      ],
      ...(siteData.phone && { telephone: siteData.phone }),
      priceRange: "₹",
      currenciesAccepted: "INR",
      servesCuisine: ["South Indian", "Udupi", "Vegetarian", "Karnataka"],
      address: {
        "@type": "PostalAddress",
        streetAddress: siteData.streetAddress,
        addressLocality: siteData.locality,
        addressRegion: siteData.region,
        postalCode: siteData.postalCode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteData.geo.latitude,
        longitude: siteData.geo.longitude,
      },
      hasMap: siteData.mapsUrl,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "06:00",
          closes: "20:00",
        },
      ],
      hasMenu: {
        "@type": "Menu",
        name: `${siteData.name} Menu`,
        url: `${siteData.url}/#menu`,
        inLanguage: "en",
        hasMenuSection: menuData.map((section) => ({
          "@type": "MenuSection",
          name: section.category,
          hasMenuItem: section.items.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            suitableForDiet: "https://schema.org/VegetarianDiet",
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "INR",
            },
          })),
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteData.url}/#website`,
      url: siteData.url,
      name: siteData.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteData.url}/#restaurant` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen bg-[#F5EBE0] text-brand-text`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
