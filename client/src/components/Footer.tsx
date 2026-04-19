/*
 * Footer — Editorial Brutalism
 * Dark charcoal (#1c1c19) background, warm ivory text
 * Minimal design with brand and copyright only
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c19] text-[#fcf9f4] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Brand and tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-8 border-b border-[#fcf9f4]/10">
          <Link href="/">
            <div className="text-2xl font-headline italic tracking-tighter text-[#fcf9f4] hover:text-[#C9A84C] transition-colors duration-500 cursor-pointer">
              WENDELIN MONPLAISIR
            </div>
          </Link>
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-[#fcf9f4]/50 max-w-sm">
            A destination for those who refuse to be defined by the zeitgeist.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-[#fcf9f4]/40">
            © 2024 WENDELIN MONPLAISIR. ALL RIGHTS RESERVED.
          </p>
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-[#fcf9f4]/30">
            Designed for Impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
