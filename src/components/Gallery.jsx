'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/street-view.webp", caption: "Find Us on the Road", alt: "Road view of Hotel Mitra Darshini below Vishwamanya Mandira Lodge, Maruthi Veethika, Udupi", position: "47% center", rotate: "-rotate-6", z: "z-10" },
  { src: "/signboard.webp", caption: "Shuddha Sasyahari", alt: "Hotel Mitra Darshini pure vegetarian signboard in Kannada and English", position: "32% center", rotate: "-rotate-2", z: "z-20", translate: "-translate-y-4" },
  { src: "/front.webp", caption: "Evenings at Mitra Darshini", alt: "Hotel Mitra Darshini restaurant building in Udupi in the evening", position: "36% center", rotate: "rotate-3", z: "z-30", translate: "-translate-y-8" },
  { src: "/exterior.webp", caption: "Our Entrance", alt: "Entrance of Hotel Mitra Darshini with its lit name board", position: "85% center", rotate: "rotate-6", z: "z-40", translate: "-translate-y-4" },
  { src: "/menu1.webp", caption: "Our Menu", alt: "Hotel Mitra Darshini menu with tiffins, dosas, meals and beverages with prices", position: "center top", rotate: "rotate-12", z: "z-10" },
];

// On mobile the story reads in order: arrive, step in, spot the board, find the road, see the menu
const mobileOrder = [2, 3, 1, 0, 4].map((i) => images[i]);

const CARD_WIDTH = "min(72vw, 300px)";
const GAP = 16;

function MobileCarousel() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const step = () => {
    const card = trackRef.current?.querySelector("[data-card]");
    return card ? card.offsetWidth + GAP : 1;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const index = Math.round(track.scrollLeft / step());
        setActive(Math.max(0, Math.min(mobileOrder.length - 1, index)));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (index) => {
    trackRef.current?.scrollTo({ left: index * step(), behavior: "smooth" });
  };

  // Spacers let the first and last cards sit in the centre of the screen
  const spacer = <div aria-hidden className="shrink-0" style={{ width: `calc((100% - ${CARD_WIDTH}) / 2 - ${GAP}px)` }} />;

  return (
    <div className="lg:hidden w-full">
      <div
        ref={trackRef}
        className="flex items-center overflow-x-auto snap-x snap-mandatory py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ gap: GAP }}
        aria-label="Gallery"
      >
        {spacer}
        {mobileOrder.map((img, index) => {
          const isActive = index === active;
          const tilt = index % 2 === 0 ? "-rotate-3" : "rotate-3";
          return (
            <figure
              key={img.src}
              data-card
              onClick={() => goTo(index)}
              className={`shrink-0 snap-center bg-[#F5EFE6] p-2.5 pb-0 rounded-xl transition-all duration-500 ease-out ${
                isActive
                  ? "rotate-0 scale-100 opacity-100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]"
                  : `${tilt} scale-[0.88] opacity-60 shadow-xl`
              }`}
              style={{ width: CARD_WIDTH }}
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 300px, 72vw"
                  className="object-cover"
                  style={{ objectPosition: img.position }}
                  loading="eager"
                />
              </div>
              <figcaption className="font-serif text-[#24160F] text-base text-center py-3.5 leading-tight">
                {img.caption}
              </figcaption>
            </figure>
          );
        })}
        {spacer}
      </div>

      <div className="flex items-center justify-center gap-4 -mt-2">
        <span className="font-serif text-xs text-[#F5EFE6]/50 tabular-nums w-6 text-right">
          {String(active + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {mobileOrder.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${img.caption}`}
              aria-current={index === active}
              className="py-3"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  index === active ? "w-6 bg-[#C99435]" : "w-1.5 bg-[#F5EFE6]/30"
                }`}
              />
            </button>
          ))}
        </div>
        <span className="font-serif text-xs text-[#F5EFE6]/50 tabular-nums w-6 text-left">
          {String(mobileOrder.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-16 bg-[#20100C] relative overflow-hidden">

      {/* Decorative background shapes if needed */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F5EFE6] to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center flex flex-col items-center">

        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#F5EFE6]/20 mb-5 md:mb-6 bg-transparent">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#F5EFE6]">
            A Glimpse of Our Heritage
          </span>
        </div>

        <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#F5EFE6] mb-2 lg:mb-12 leading-[1.15] tracking-tight max-w-md md:max-w-none">
          Immerse yourself in our culinary artistry
        </h2>

        {/* Fan layout of gallery images */}
        <div className="hidden lg:flex justify-center items-center h-[400px] w-full mt-6">
          <div className="flex justify-center w-full max-w-4xl relative">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative w-64 h-[22rem] bg-[#F5EFE6] p-3 rounded-xl shadow-2xl transition-transform hover:z-50 hover:scale-110 duration-300 -ml-16 first:ml-0 ${img.rotate} ${img.translate || ''} ${img.z}`}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="256px"
                    className="object-cover"
                    style={{ objectPosition: img.position }}
                  />
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <span className="font-serif text-[#24160F] text-sm bg-[#F5EFE6]/90 px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Swipeable polaroids on phones and tablets */}
      <div className="relative z-10">
        <MobileCarousel />
      </div>
    </section>
  );
}
