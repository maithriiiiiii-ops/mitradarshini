import { Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://mitradarshini.com"),
  title: `${siteData.name} | ${siteData.shortDescription} Restaurant in Udupi`,
  description: siteData.description,
  openGraph: {
    title: `${siteData.name} | ${siteData.shortDescription}`,
    description: siteData.description,
    url: "https://mitradarshini.com",
    siteName: siteData.name,
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: siteData.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: siteData.name,
              image: "/hero.jpeg",
              "@id": "",
              url: "https://mitradarshini.com",
              telephone: siteData.phone || undefined,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Maruthi Veethika",
                addressLocality: "Udupi",
                postalCode: "576101",
                addressCountry: "IN",
                addressRegion: "Karnataka"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 13.3409, // approximate lat for Udupi
                longitude: 74.7421 // approximate lng for Udupi
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  opens: "06:00",
                  closes: "20:00"
                }
              ],
              servesCuisine: "South Indian, Pure Vegetarian, Udupi"
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen bg-[#F5EBE0] text-brand-text`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
