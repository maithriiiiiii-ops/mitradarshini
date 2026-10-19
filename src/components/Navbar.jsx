'use client';

import { useState, useEffect } from "react";
import { siteData } from "@/data/site";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sections matching your page.jsx
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" }, // Assuming your CTA has id="location"
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(26,14,10,0.05)] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="#home" className="flex items-center z-50 group">
            <Image 
              src="/logo.png" // Ensure this matches your actual transparent logo file
              alt={`${siteData.name} Logo`}
              width={120}
              height={60}
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A0E0A] hover:text-[#8B5A2B] transition-colors relative group"
              >
                {link.name}
                {/* Subtle underline animation on hover */}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#8B5A2B] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden justify-end z-50">
            <button
              className={`p-2 transition-colors duration-300 ${isOpen || scrolled ? "text-[#1A0E0A]" : "text-[#1A0E0A]"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full bg-[#FDFBF7] shadow-2xl transition-all duration-500 ease-[0.16,1,0.3,1] overflow-hidden ${
          isOpen ? "max-h-[500px] pt-24 pb-10 border-b border-[#1A0E0A]/10" : "max-h-0 pt-0 pb-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-sm uppercase tracking-[0.25em] font-bold text-[#1A0E0A] hover:text-[#8B5A2B] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Small decorative element for mobile menu footer */}
          <div className="w-12 h-[1px] bg-[#8B5A2B]/30 mt-4"></div>
        </div>
      </div>
    </header>
  );
}