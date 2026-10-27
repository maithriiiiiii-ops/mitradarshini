'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="py-16 lg:py-20 bg-[#FDFBF7] relative overflow-hidden">

      {/* Decorative floating line-arts */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -left-8 md:bottom-0 md:left-2 w-36 h-36 md:w-52 md:h-52 opacity-10 pointer-events-none z-0 -rotate-12"
      >
        <Image src="/pulav.webp" alt="" fill className="object-contain" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-4 -right-8 md:top-8 md:right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 pointer-events-none z-0 rotate-12"
      >
        <Image src="/badam-milk.webp" alt="" fill className="object-contain" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        
        {/* Reduced gap between the text and the video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div 
            className="flex flex-col items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#8B5A2B]/40"></span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8B5A2B]">
                Our Story
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A0E0A] mb-6 leading-[1.1] tracking-tight">
              Serving authentic South Indian flavours & <br />
              <span className="italic font-light text-[#8B5A2B]">Udupi tradition</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-lg font-light">
              Rooted in the rich culinary heritage of coastal Karnataka, we bring you recipes passed down through generations. Every dish is crafted with pure ingredients, warmth, and devotion.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Link
                href="#gallery"
                className="group inline-flex items-center gap-4 px-8 py-3.5 bg-[#1A0E0A] text-[#FDFBF7] font-semibold rounded-full hover:bg-[#8B5A2B] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                See Our Gallery
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Standard Video Frame */}
          <motion.div 
            className="relative flex justify-center lg:justify-end w-full mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Standard rounded corners, removed arch and circular text */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-[#1A0E0A] border-[6px] border-[#FDFBF7]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none z-10" />
              
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover z-0"
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#FDFBF7]/95 backdrop-blur-md px-5 py-2 rounded-full shadow-lg z-20 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A0E0A] whitespace-nowrap">
                  Watch Our Story
                </span>
              </div>
            </motion.div>

            {/* Adjusted decorative shadow block to match the standard rounded corners */}
            <div className="absolute -inset-1 bg-[#F5EFE6] rounded-[1.25rem] -z-10 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}