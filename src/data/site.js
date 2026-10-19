// Vercel sets this to the project's production address (the .vercel.app link,
// or a custom domain once one is added in Vercel), even on preview builds.
const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

const geo = { latitude: 13.343738, longitude: 74.752078 }; // Plus Code 8QV2+FRW, Udupi

export const siteData = {
  // NEXT_PUBLIC_SITE_URL overrides the address if ever needed
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
  ).replace(/\/$/, ""),
  name: "Hotel Mitra Darshini",
  kannadaName: "ಹೋಟೆಲ್ ಮಿತ್ರ ದರ್ಶಿನಿ",
  tagline: "Homely Taste. Always.",
  shortDescription: "Pure Vegetarian",
  // Kept under ~160 characters so Google shows it in full
  seoDescription: "Pure vegetarian restaurant near Udupi Sri Krishna Matha, by Rajangana Parking. Authentic South Indian tiffins, dosas, idli-vada & meals. Open daily 6 AM–8 PM.",
  description: "Hotel Mitra Darshini is a highly-rated pure vegetarian restaurant in Udupi offering authentic South Indian cuisine, traditional breakfast tiffins, crispy dosas, and hearty thali meals. Enjoy homely taste and warm hospitality near the Rajangana Parking Area.",
  streetAddress: "Ground Floor, Vishwamanya Mandira Lodge, Maruthi Veethika, Near Sri Krishna Matha & Rajangana Parking",
  locality: "Udupi",
  region: "Karnataka",
  postalCode: "576101",
  address: "Near Sri Krishna Matha & Rajangana Parking, Ground Floor, Below Vishwamanya Mandira Lodge, Maruthi Veethika, Udupi – 576101, Karnataka, India",
  directionsExtra: "While moving from Kalsanka to Rajangana, the restaurant is on the left side.",
  plusCode: "8QV2+FRW",
  geo,
  // Coordinates pin the exact spot until the Google Business listing is verified
  mapQuery: `${geo.latitude},${geo.longitude}`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${geo.latitude},${geo.longitude}`,
  timings: {
    overall: "6:00 AM – 8:00 PM",
    lunch: "12:30 PM – 4:00 PM",
    morning: "6:00 AM",
    evening: "8:00 PM"
  },
  phone: "", // To be updated by client
  credit: {
    name: "Maithri",
    url: "https://maithri-portfolio-amber.vercel.app/", // Portfolio link
  },
};
