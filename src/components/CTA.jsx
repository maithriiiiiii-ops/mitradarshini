'use client';

import { siteData } from "@/data/site";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  // URL for the "Get Directions" button to open in Google Maps app/new tab
  const mapUrl = siteData.mapsUrl;
  
  // URL for the embedded iframe map
  // If siteData.mapQuery is undefined in your testing, you can hardcode the restaurant name here temporarily
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(siteData.mapQuery || "Hotel Mitra Darshini Udupi")}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    // section is relative, taking up 70vh (viewport height) on desktop
    <section id="location" className="relative w-full h-auto lg:h-[70vh] min-h-[600px] flex flex-col lg:flex-row items-center justify-center bg-[#FDFBF7] border-t border-[#1A0E0A]/5">
      
      {/* FULL WIDTH MAP BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src={mapEmbedUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          // Applying filters to tone down the map colors to match your brand
          className="grayscale-[20%] contrast-[1.05] opacity-90" 
        ></iframe>
      </div>

      {/* OVERLAY INFO CARD */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-center lg:justify-start w-full h-full items-center py-16 lg:py-0">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="bg-[#FDFBF7]/95 backdrop-blur-md p-8 md:p-12 lg:p-14 rounded-[2rem] shadow-2xl max-w-md w-full border border-[#1A0E0A]/10"
        >
          {/* Kicker */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#8B5A2B]/40"></span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8B5A2B]">
              Location
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#1A0E0A] mb-8 leading-[1.1] tracking-tight">
            Visit <span className="italic font-light text-[#8B5A2B]">Mitra Darshini</span>
          </h2>

          <div className="space-y-6 mb-10">
            {/* Address Row */}
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-[#8B5A2B] shrink-0 mt-1" />
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A0E0A]/50 mb-1">
                  Address
                </h4>
                <p className="font-serif text-lg text-[#1A0E0A] leading-relaxed">
                  {siteData.address}
                </p>
              </div>
            </div>

            {/* Timings Row */}
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-[#8B5A2B] shrink-0 mt-1" />
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A0E0A]/50 mb-1">
                  Opening Hours
                </h4>
                <p className="font-serif text-lg text-[#1A0E0A] leading-relaxed">
                  Everyday: {siteData.timings.overall} <br/>
                  Lunch: {siteData.timings.lunch}
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1A0E0A] text-[#FDFBF7] text-sm font-semibold tracking-wide rounded-full hover:bg-[#8B5A2B] transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <MapPin className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            Get Directions
          </a>
        </motion.div>
      </div>
      
    </section>
  );
}