'use client';

import { menuData } from "@/data/menu";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Menu() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  const floatAnimation = (delay) => ({
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }
  });

  return (
    // Reduced py-20 lg:py-28 to py-12 lg:py-16 for a tighter section
    <section id="menu" className="py-12 lg:py-16 bg-[#F5EFE6] relative overflow-hidden">
      
      {/* FLOATING DECORATIVE ARTWORK - Scaled down for mobile */}
      <motion.div 
        animate={floatAnimation(0)}
        className="absolute -top-4 -right-10 md:top-10 md:right-10 w-32 h-32 md:w-56 md:h-56 opacity-30 pointer-events-none z-0 rotate-12"
      >
        <Image src="/coffee-art.webp" alt="" fill className="object-contain" />
      </motion.div>

      <motion.div 
        animate={floatAnimation(2)}
        className="absolute top-1/4 -left-12 md:left-4 w-40 h-40 md:w-64 md:h-64 opacity-30 pointer-events-none z-0 -rotate-12"
      >
        <Image src="/dosa-thali.webp" alt="" fill className="object-contain" />
      </motion.div>

      <motion.div 
        animate={floatAnimation(1)}
        className="absolute bottom-10 -right-8 md:bottom-20 md:right-8 w-32 h-32 md:w-48 md:h-48 opacity-30 pointer-events-none z-0 rotate-6"
      >
        <Image src="/poori.webp" alt="" fill className="object-contain" />
      </motion.div>

      <motion.div 
        animate={floatAnimation(3)}
        className="absolute top-32 left-10 w-32 h-32 md:w-40 md:h-40 opacity-30 pointer-events-none z-0 -rotate-6 hidden md:block"
      >
        <Image src="/pulav.webp" alt="" fill className="object-contain" />
      </motion.div>

      <motion.div 
        animate={floatAnimation(1.5)}
        className="absolute bottom-40 -left-10 md:bottom-56 md:left-12 w-28 h-28 md:w-48 md:h-48 opacity-30 pointer-events-none z-0 rotate-12 hidden md:block"
      >
        <Image src="/badam-milk.webp" alt="" fill className="object-contain" />
      </motion.div>

      <motion.div 
        animate={floatAnimation(2.5)}
        className="absolute top-1/2 -right-16 md:right-4 w-36 h-36 md:w-52 md:h-52 opacity-30 pointer-events-none z-0 -rotate-12"
      >
        <Image src="/sharbat.webp" alt="" fill className="object-contain" />
      </motion.div>

      <div className="container mx-auto px-5 lg:px-12 max-w-6xl relative z-10">
        
        {/* Header - Reduced mb-16 to mb-10 */}
        <motion.div 
          className="text-center mb-10 lg:mb-14 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#8B5A2B]/40"></span>
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-[#8B5A2B]">
              Fresh Everyday
            </span>
            <span className="w-6 h-[1px] bg-[#8B5A2B]/40"></span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A0E0A] leading-tight tracking-tight">
            Our <span className="italic font-light text-[#8B5A2B]">Full Menu</span>
          </motion.h2>
        </motion.div>

        {/* Menu Grid - Reduced gaps (gap-x-12 lg:gap-x-20 gap-y-10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 lg:gap-y-12">
          {menuData.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {/* Category Title - Reduced mb-8 pb-4 to mb-5 pb-3 */}
              <motion.h3 
                variants={fadeUp} 
                className="text-2xl lg:text-3xl font-serif text-[#1A0E0A] mb-5 pb-3 border-b border-[#1A0E0A]/10"
              >
                {category.category}
              </motion.h3>
              
              {/* Item List - Reduced space-y-6 to space-y-4 */}
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.li key={itemIndex} variants={fadeUp} className="flex flex-col group">
                    <div className="flex justify-between items-baseline gap-2 md:gap-4 w-full">
                      
                      <span className="font-medium text-[#1A0E0A] text-base lg:text-lg transition-colors group-hover:text-[#8B5A2B] whitespace-nowrap">
                        {item.name}
                      </span>
                      
                      {/* Added min-w-[2rem] so the dots don't collapse completely on narrow mobile screens */}
                      <div className="flex-grow border-b-2 border-dotted border-[#1A0E0A]/20 relative top-[-6px] min-w-[2rem]"></div>
                      
                      <span className="font-serif font-medium text-[#8B5A2B] text-base lg:text-lg whitespace-nowrap">
                        ₹{item.price}
                      </span>
                      
                    </div>
                    
                    {/* Note - Reduced margin top */}
                    {item.note && (
                      <span className="text-[10px] lg:text-xs uppercase tracking-wider text-neutral-500 mt-1">
                        {item.note}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}