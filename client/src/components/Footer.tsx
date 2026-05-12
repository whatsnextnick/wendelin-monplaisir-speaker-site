/*
 * Footer — Editorial Brutalism
 * Dark charcoal (#0D0D0D) background, warm ivory text
 * Minimal design with brand and copyright only
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#FAF7F2] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Brand and tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-8 border-b border-[#FAF7F2]/10">
          <Link href="/">
            <div className="text-2xl font-headline italic tracking-tighter text-[#FAF7F2] hover:text-[#A8A8BC] transition-colors duration-500 cursor-pointer">
              WENDELIN MONPLAISIR
            </div>
          </Link>
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/50 max-w-sm">
            A destination for those who refuse to be defined by the zeitgeist.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/40">
            © 2024 WENDELIN MONPLAISIR. ALL RIGHTS RESERVED.
          </p>
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/30">
            Designed for Impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
