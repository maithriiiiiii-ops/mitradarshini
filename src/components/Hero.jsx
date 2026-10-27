'use client';

import { siteData } from "@/data/site";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const float = (delay = 0) => ({
  animate: { y: [0, -12, 0] },
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
});

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    // Reduced pt-24 pb-20 to pt-20 pb-12 to tighten vertical space
    <section id="home" className="relative bg-[#F5EFE6] pt-20 pb-12 overflow-hidden flex flex-col items-center">

      {/* Decorative floating line-arts */}
      <motion.div {...float(0)} className="absolute top-16 -left-6 md:left-4 lg:left-10 w-28 h-28 md:w-40 md:h-40 opacity-20 pointer-events-none z-10 -rotate-12">
        <Image src="/dosa-thali.webp" alt="" fill className="object-contain" />
      </motion.div>
      <motion.div {...float(2.5)} className="absolute top-10 -right-4 md:right-6 lg:right-14 w-24 h-24 md:w-36 md:h-36 opacity-15 pointer-events-none z-10 rotate-12">
        <Image src="/sharbat.webp" alt="" fill className="object-contain" />
      </motion.div>
      <motion.div {...float(1.2)} className="absolute bottom-6 -right-6 md:right-4 lg:right-8 w-32 h-32 md:w-44 md:h-44 opacity-20 pointer-events-none z-10 rotate-6">
        <Image src="/coffee-art.webp" alt="" fill className="object-contain" />
      </motion.div>

      {/* Top Text Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 flex flex-col items-center text-center relative z-20"
      >
        {/* Reduced mb-16 to mb-6 to bring the heading closer to the logo */}
        <motion.div variants={itemVariants} className="max-w-5xl mx-auto mb-6 relative">
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif font-normal text-[#24160F] leading-[0.9] tracking-tight">
            The Authentic Taste <br className="hidden md:block"/> of Udupi
          </h1>
        </motion.div>
      </motion.div>

      {/* Overlapping Circular Button */}
      {/* Adjusted negative margin to keep the overlap correct with the new spacing */}
      <div className="relative z-30 -mb-12 md:-mb-16 flex justify-center w-full pointer-events-none">
        <Link href="#about" className="pointer-events-auto group">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
            className="w-32 h-32 md:w-40 md:h-40 bg-[#F5EFE6] rounded-full flex flex-col items-center justify-center border-8 border-[#F5EFE6] shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            {/* Restored your original logo-2.png */}
            <Image 
              src="/logo-2.webp" 
              alt={`${siteData.name} Logo`}
              fill
              className="object-contain p-2 md:p-3"
            />
          </motion.div>
        </Link>
      </div>

      {/* Large Image Below */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-[95%] lg:max-w-[90%] mx-auto h-[50vh] md:h-[70vh] relative rounded-lg overflow-hidden shadow-lg z-10"
      >
        <Image
          src="/hero.webp"
          alt="Hotel Mitra Darshini pure vegetarian restaurant in Udupi, lit up at sunset"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      
    </section>
  );
}