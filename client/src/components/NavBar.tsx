/**
 * Modern One-Page Navigation
 * Sticky header with smooth scroll anchors
 */

import { useState, useEffect } from "react";

export default function NavBar({ onBookClick }: { onBookClick?: () => void }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      // Hide immediately on any scroll; reveal 800ms after scrolling stops
      if (currentY > 80) {
        setHidden(true);
        clearTimeout(timer);
        timer = setTimeout(() => setHidden(false), 800);
      } else {
        setHidden(false);
        clearTimeout(timer);
      }

      // Detect active section
      const sections = ["hero", "keynotes", "bio", "testimonial", "manifesto"];
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
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
    { id: "bio", label: "About" },
    { id: "testimonial", label: "Testimonial" },
    { id: "manifesto", label: "Mission" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled
          ? "bg-[#0D0D0D]/60 backdrop-blur-md border-b border-[#A8A8BC]/10"
          : "bg-[#0D0D0D]/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 md:py-3 flex items-center justify-between">
        {/* Logo */}
        {/* Logo — image has ~21% transparent padding top, 15% left; crop it out */}
        <button
          onClick={() => scrollToSection("hero")}
          className="hover:opacity-90 transition-opacity flex-shrink-0"
          style={{ overflow: "hidden", width: "65px", height: "55px" }}
        >
          <img
            src="/WMsite_logo.png"
            alt="Wendelin Monplaisir"
            style={{ display: "block", width: "94px", height: "94px", marginTop: "-20px", marginLeft: "-14px" }}
          />
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-label text-xs tracking-widest uppercase transition-all duration-300 pb-1 border-b-2 ${
                activeSection === item.id
                  ? "text-[#A8A8BC] border-[#A8A8BC]"
                  : "text-[#FAF7F2]/60 border-transparent hover:text-[#FAF7F2]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onBookClick}
          className="bg-[#1C1C2E] text-[#FAF7F2] px-8 py-3 md:px-10 md:py-4 font-label font-medium text-[10px] md:text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-[#A8A8BC] hover:text-[#1A1A1A] active:scale-95">
          Book Wendelin
        </button>
      </div>

      {/* Mobile Menu Indicator */}
      <div className="md:hidden px-6 pb-2 flex gap-2 justify-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-[#A8A8BC] w-6"
                : "bg-[#FAF7F2]/20 w-1.5"
            }`}
          />
        ))}
      </div>
    </nav>
  );
}
