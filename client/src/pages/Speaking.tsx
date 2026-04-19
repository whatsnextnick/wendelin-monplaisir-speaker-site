/**
 * Speaking Topics Page — Keynote Offerings
 * Hero section with keynotes, three signature offerings, conversion zone, and benefits strip
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    container.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function handlePlaceholder(e: React.MouseEvent, label: string) {
  e.preventDefault();
  toast.info(`${label} — Coming Soon`, {
    description: "This section is currently being curated.",
  });
}

export default function Speaking() {
  const pageRef = useScrollFadeIn();

  useEffect(() => {
    document.title = "Speaking Topics | WENDELIN MONPLAISIR";
    return () => { document.title = "WENDELIN MONPLAISIR | Official Site"; };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#fcf9f4] text-[#1c1c19]">
      <NavBar />

      {/* ── HERO ── */}
      <section className="px-6 md:px-12 pt-32 pb-24 md:pb-32 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight tracking-tight mb-8">
            If You Don't Own It, <span className="italic font-normal">It Owns You</span>
          </h1>
          <p className="text-lg md:text-xl text-[#524439] leading-relaxed max-w-3xl mb-8">
            Wendelin Monplaisir delivers bold, transformative keynotes that challenge high-functioning women and professionals to break burnout cycles, reclaim their power, and build a life by design.
          </p>
          <p className="text-base md:text-lg text-[#894d0d] font-label tracking-widest uppercase font-semibold mb-12">
            Not just motivation. Transformation that demands ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
            <Link href="/work-with-me">
              <button className="bg-[#894d0d] text-white px-10 py-5 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-[#a76526] active:scale-95">
                Book Wendelin
              </button>
            </Link>
            <button 
              onClick={(e) => handlePlaceholder(e, "View Keynotes")}
              className="border border-[#1c1c19]/20 text-[#1c1c19] px-10 py-5 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:border-[#1c1c19] hover:bg-[#1c1c19]/5"
            >
              View Keynotes
            </button>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE KEYNOTE ── */}
      <section className="bg-[#f6f3ee] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-3xl fade-in-up mb-16">
            <span className="text-sm font-label uppercase tracking-widest text-[#894d0d] font-bold mb-4 block">
              Signature Framework
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-8 leading-tight">
              Burn It. Build It.
            </h2>
            <p className="text-2xl md:text-3xl italic text-[#524439] mb-8 leading-relaxed">
              Release What Broke You. Claim What Will Define You
            </p>
            <p className="text-lg text-[#524439] leading-relaxed mb-8">
              This is Wendelin's signature framework — a powerful, no-excuses methodology that walks audiences through releasing the past, reclaiming their identity, and intentionally building their future.
            </p>
            <div className="border-l-4 border-[#894d0d] pl-8 py-4">
              <p className="text-lg font-semibold text-[#1c1c19]">
                ✓ Your audience will walk away with the clarity and courage to release what's holding them back and take ownership of what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEYNOTE 01: CORPORATE LEADERSHIP ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#fcf9f4]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Content */}
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#894d0d]/30 font-bold">01</span>
                <span className="bg-[#894d0d]/10 text-[#894d0d] px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  Corporate Leadership
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 leading-tight">
                If You Don't Own It, <span className="italic font-normal">It Owns You</span>
              </h3>
              <p className="text-lg text-[#524439] mb-6 leading-relaxed">
                How High-Responsibility Professionals Break Hidden Burnout Cycles, Reclaim Authority, and Execute at a Higher Level Through Radical Ownership
              </p>
              <p className="text-base text-[#524439] mb-8 leading-relaxed">
                Designed for high-performing teams and leaders, this keynote exposes the hidden patterns that drive burnout, disengagement, and stalled performance — and replaces them with clarity, ownership, and execution.
              </p>
              <div className="border-l-4 border-[#894d0d] pl-6 py-4 bg-[#f6f3ee] px-6">
                <p className="text-base font-semibold text-[#1c1c19]">
                  ✓ Your team will identify what's silently limiting performance and leave equipped to operate with clarity, accountability, and elevated execution.
                </p>
              </div>
            </div>
            {/* Right: Visual Accent */}
            <div className="fade-in-up hidden md:flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-[#894d0d]/10 to-[#894d0d]/5 rounded-lg flex items-center justify-center">
                <span className="text-6xl text-[#894d0d]/20 font-headline font-bold">Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEYNOTE 02: WOMEN'S CONFERENCES ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#f6f3ee]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Visual Accent */}
            <div className="fade-in-up hidden md:flex items-center justify-center order-last md:order-first">
              <div className="w-full h-96 bg-gradient-to-br from-[#894d0d]/10 to-[#894d0d]/5 rounded-lg flex items-center justify-center">
                <span className="text-6xl text-[#894d0d]/20 font-headline font-bold">Power</span>
              </div>
            </div>
            {/* Right: Content */}
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#894d0d]/30 font-bold">02</span>
                <span className="bg-[#894d0d]/10 text-[#894d0d] px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  Women's Conferences
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 leading-tight">
                The Cost of Being <span className="italic font-normal">Unbreakable</span>
              </h3>
              <p className="text-lg text-[#524439] mb-6 leading-relaxed">
                Why the Strongest Women Are Often the Most Exhausted — and How to Reclaim Their Power, Release the Pressure, and Build a Life They Actually Want
              </p>
              <p className="text-base text-[#524439] mb-8 leading-relaxed">
                This deeply personal and transformative keynote speaks to the woman who holds everything together for everyone else — while silently carrying the weight of it all.
              </p>
              <div className="border-l-4 border-[#894d0d] pl-6 py-4 bg-white px-6">
                <p className="text-base font-semibold text-[#1c1c19]">
                  ✓ Your audience will feel seen, validated, and empowered to release the pressure and step into a more aligned, powerful version of themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEYNOTE 03: MINDSET & PERSONAL DEVELOPMENT ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#fcf9f4]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Content */}
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#894d0d]/30 font-bold">03</span>
                <span className="bg-[#894d0d]/10 text-[#894d0d] px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  Mindset & Development
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 leading-tight">
                Break the Pattern. <span className="italic font-normal">Build the Power.</span>
              </h3>
              <p className="text-lg text-[#524439] mb-6 leading-relaxed">
                Identify the Root Triggers Controlling Your Life, Release Outdated Identities, and Rewire Your Mindset to Create What You Actually Want
              </p>
              <p className="text-base text-[#524439] mb-8 leading-relaxed">
                A powerful mindset-shifting experience that helps audiences uncover the root of their limitations and rebuild their thinking from a place of clarity and intention.
              </p>
              <div className="border-l-4 border-[#894d0d] pl-6 py-4 bg-[#f6f3ee] px-6">
                <p className="text-base font-semibold text-[#1c1c19]">
                  ✓ Your audience will leave with the awareness and tools to break destructive cycles and consciously create the life they've been avoiding or delaying.
                </p>
              </div>
            </div>
            {/* Right: Visual Accent */}
            <div className="fade-in-up hidden md:flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-[#894d0d]/10 to-[#894d0d]/5 rounded-lg flex items-center justify-center">
                <span className="text-6xl text-[#894d0d]/20 font-headline font-bold">Clarity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS STRIP ── */}
      <section className="bg-[#1c1c19] text-white py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              "Transformational, Not Motivational",
              "Framework-Driven & Actionable",
              "Designed for Immediate Impact",
              "Tailored for Your Audience",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-4 fade-in-up">
                <span className="material-symbols-outlined text-[#894d0d] text-2xl shrink-0 mt-1">
                  check_circle
                </span>
                <p className="text-lg font-semibold leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONVERSION ZONE ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#fcf9f4]">
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-8 leading-tight">
            This Isn't Another Talk. <span className="italic font-normal">It's a Turning Point.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#524439] leading-relaxed mb-8">
            Wendelin doesn't just inspire audiences — she challenges them to confront what's been controlling them and equips them to take ownership of their next level.
          </p>
          <p className="text-lg text-[#524439] leading-relaxed mb-12">
            If your audience is ready for truth, transformation, and lasting impact…<br />
            <span className="font-semibold text-[#1c1c19]">this is the conversation they didn't know they needed.</span>
          </p>
          <Link href="/work-with-me">
            <button className="bg-[#894d0d] text-white px-12 py-6 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-[#a76526] active:scale-95">
              Book Wendelin Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
