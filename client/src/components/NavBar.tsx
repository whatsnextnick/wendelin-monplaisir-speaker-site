/**
 * Modern One-Page Navigation
 * Sticky header with smooth scroll anchors
 */

import { useState, useEffect } from "react";

export default function NavBar({ onBookClick }: { onBookClick?: () => void }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["hero", "keynotes", "testimonial", "stats", "manifesto"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "keynotes", label: "Keynotes" },
    { id: "testimonial", label: "Testimonial" },
    { id: "stats", label: "Impact" },
    { id: "manifesto", label: "Mission" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fcf9f4]/95 backdrop-blur-md border-b border-[#d8c3b4]/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="font-headline italic text-lg md:text-xl font-bold text-[#1c1c19] hover:text-[#C9A84C] transition-colors"
        >
          WENDELIN
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-label text-xs tracking-widest uppercase transition-all duration-300 pb-1 border-b-2 ${
                activeSection === item.id
                  ? "text-[#C9A84C] border-[#C9A84C]"
                  : "text-[#5f5e5e] border-transparent hover:text-[#1c1c19]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onBookClick}
          className="bg-[#C9A84C] text-white px-8 py-3 md:px-10 md:py-4 font-label font-medium text-[10px] md:text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-[#D4B86A] active:scale-95">
          Book Wendelin
        </button>
      </div>

      {/* Mobile Menu Indicator */}
      <div className="md:hidden px-6 py-3 flex gap-2 justify-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-[#C9A84C] w-6"
                : "bg-[#d8c3b4]/30 w-1.5"
            }`}
          />
        ))}
      </div>
    </nav>
  );
}
