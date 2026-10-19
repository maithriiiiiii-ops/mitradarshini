export const siteData = {
  // Live domain of the site. Set NEXT_PUBLIC_SITE_URL on the host if it differs.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://mitradarshini.com").replace(/\/$/, ""),
  name: "Hotel Mitra Darshini",
  kannadaName: "ಹೋಟೆಲ್ ಮಿತ್ರ ದರ್ಶಿನಿ",
  tagline: "Homely Taste. Always.",
  shortDescription: "Pure Vegetarian",
  // Kept under ~160 characters so Google shows it in full
  seoDescription: "Pure vegetarian restaurant in Udupi near Rajangana Parking. Authentic South Indian tiffins, crispy dosas, idli-vada and hearty meals. Open daily 6 AM – 8 PM.",
  description: "Hotel Mitra Darshini is a highly-rated pure vegetarian restaurant in Udupi offering authentic South Indian cuisine, traditional breakfast tiffins, crispy dosas, and hearty thali meals. Enjoy homely taste and warm hospitality near the Rajangana Parking Area.",
  streetAddress: "Ground Floor, Vishwamanya Mandira Lodge, Maruthi Veethika, Near Rajangana Parking Area",
  locality: "Udupi",
  region: "Karnataka",
  postalCode: "576101",
  address: "Near Rajangana Parking Area, Ground Floor, Below Vishwamanya Mandira Lodge, Maruthi Veethika, Udupi – 576101, Karnataka, India",
  directionsExtra: "While moving from Kalsanka to Rajangana, the restaurant is on the left side.",
  mapQuery: "Hotel Mitra Darshini, Maruthi Veethika, Udupi",
  timings: {
    overall: "6:00 AM – 8:00 PM",
    lunch: "12:30 PM – 4:00 PM",
    morning: "6:00 AM",
    evening: "8:00 PM"
  },
  phone: "", // To be updated by client
};
