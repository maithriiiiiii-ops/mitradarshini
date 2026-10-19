'use client';

import { siteData } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Story", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="bg-[#1A0E0A] text-[#FDFBF7] pt-14 md:pt-20 pb-6 relative overflow-hidden rounded-t-[2rem] md:rounded-t-[4rem] mt-[-2rem] z-20">
      
      {/* Decorative top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#8B5A2B]/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-10 md:mb-16 lg:mb-24">
          
          {/* Brand & Logo: side by side on phones, stacked on larger screens */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-5 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0"
          >
            <div className="shrink-0 w-16 h-16 md:w-28 md:h-28 rounded-xl md:rounded-2xl border border-[#8B5A2B]/20 bg-[#24150F] md:mb-6 flex items-center justify-center shadow-lg">
               <Image 
                 src="/logo.webp" 
                 alt={`${siteData.name} Logo`}
                 width={90}
                 height={90}
                 className="w-12 h-12 md:w-20 md:h-20 object-contain opacity-95"
               />
            </div>
            
            <p className="text-[#FDFBF7]/70 leading-relaxed max-w-sm font-light text-[13px] md:text-base">
              Rooted in coastal Karnataka's rich heritage, serving authentic vegetarian flavours with warmth and devotion in the heart of Udupi.
            </p>
          </motion.div>

          {/* Quick Links: one wrapped row on phones, a list on larger screens */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-3 md:col-start-7 flex flex-col items-start"
          >
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8B5A2B] mb-3 md:mb-6">
              Explore
            </h4>
            <ul className="flex flex-wrap md:flex-col gap-x-5 gap-y-2 md:gap-y-4 text-sm font-medium text-[#FDFBF7]/80">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#FDFBF7] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-3 flex flex-col items-start"
          >
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#8B5A2B] mb-3 md:mb-6">
              Visit
            </h4>
            <div className="space-y-2 md:space-y-4 text-[13px] md:text-sm text-[#FDFBF7]/80 font-light">
              <p className="leading-relaxed">{siteData.address}</p>
              <p className="font-medium text-[#FDFBF7]">{siteData.timings.overall}</p>
            </div>
          </motion.div>

        </div>

        {/* Massive Typography spanning the full width */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full border-b border-[#FDFBF7]/10 pb-5 mb-5 md:pb-6 md:mb-6 flex flex-col items-center"
        >
          <h2 className="text-[13.5vw] lg:text-[14vw] font-serif font-medium leading-[0.8] tracking-tighter text-[#FDFBF7] text-center w-full">
            MITRA <span className="italic font-light text-[#8B5A2B]">DARSHINI.</span>
          </h2>
        </motion.div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-[10px] uppercase tracking-widest text-[#FDFBF7]/40 text-center">
          <p>&copy; {currentYear} {siteData.name}. All rights reserved.</p>
          <p className="hidden md:block">Made with love. Served with joy.</p>
          <p>
            Built by{" "}
            {siteData.credit.url ? (
              <a
                href={siteData.credit.url}
                target="_blank"
                rel="noopener"
                className="text-[#FDFBF7]/60 underline decoration-[#8B5A2B]/60 underline-offset-4 hover:text-brand-gold-warm hover:decoration-brand-gold-warm transition-colors"
              >
                {siteData.credit.name}
              </a>
            ) : (
              <span className="text-[#FDFBF7]/60">{siteData.credit.name}</span>
            )}
          </p>
        </div>
        
      </div>
    </footer>
  );
}