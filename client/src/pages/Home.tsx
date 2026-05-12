/**
 * Home Page — Single-Page Experience
 * Hero | Keynotes | Testimonial | Stats | Manifesto | CTA | Footer
 */

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    container.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const C = "#FAF7F2"; // cream
const W = "#F2EBE0"; // warm cream
const D = "#0D0D0D"; // dark

function SectionBlend({ from, to, height = 120 }: { from: string; to: string; height?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: `${height}px`,
        marginTop: `-${height / 2}px`,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        position: "relative",
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
}

function handlePlaceholder(e: React.MouseEvent, label: string) {
  e.preventDefault();
  toast.info(`${label} — Coming Soon`, {
    description: "This section is currently being curated.",
  });
}

export default function Home() {
  const pageRef = useScrollFadeIn();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#FAF7F2] text-[#1A1A1A]">
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <NavBar onBookClick={() => setBookingOpen(true)} />

      {/* ── HERO ── */}
      <section id="hero" className="min-h-screen flex flex-col md:flex-row items-stretch bg-[#FAF7F2] pt-20">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24 py-16 md:py-0 flex flex-col justify-center items-start">
          <span className="font-label text-[11px] tracking-[0.25em] uppercase text-[#A8A8BC] mb-6 fade-in-up">
            Transformational Speaking
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-10 text-[#1A1A1A] fade-in-up">
            If You Don't Own It, <span className="italic font-normal">It Owns You</span>
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A1A] leading-relaxed max-w-2xl mb-8 fade-in-up">
            Wendelin Monplaisir delivers bold, transformative keynotes that challenge high-functioning women and professionals to break burnout cycles, reclaim their power, and build a life by design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-[#1C1C2E] text-[#FAF7F2] px-10 py-5 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-[#A8A8BC] hover:text-[#1A1A1A] active:scale-95">
              Book Wendelin
            </button>
            <button
              onClick={(e) => handlePlaceholder(e, "View Keynotes")}
              className="border border-[#1A1A1A]/20 text-[#1A1A1A] px-10 py-5 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:border-[#1A1A1A] hover:bg-[#A8A8BC]/10"
            >
              View Keynotes
            </button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 min-h-[55vw] md:min-h-screen relative overflow-hidden order-first md:order-last">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663201602371/cS4nQ566iFS6DKVhdS5Vjw/pasted_file_qEBFHx_image_2b8c1b97.png"
            alt="Wendelin Monplaisir — Strategic Authority portrait"
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #FAF7F2 0%, #FAF7F2 5%, rgba(250,247,242,0.55) 45%, transparent 75%)" }} />
        </div>
      </section>

      <SectionBlend from={C} to={D} />

      {/* ── VIDEO STATEMENT ── */}
      <section className="flex flex-col md:flex-row min-h-[60vh] bg-[#0D0D0D]">
        {/* Left: dramatic text on black */}
        <div className="w-full md:w-1/2 bg-[#0D0D0D] flex items-center justify-center px-10 md:px-16 lg:px-24 py-16 md:py-0">
          <p className="font-headline text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic leading-[1.1] text-[#FAF7F2] fade-in-up">
            Not just motivation.<br />
            <span className="not-italic font-bold">Transformation</span>{" "}
            that demands ownership.
          </p>
        </div>
        {/* Right: video */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[40vw] md:min-h-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/timeline.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      <SectionBlend from={D} to={W} />

      {/* ── SIGNATURE KEYNOTE ── */}
      <section className="bg-[#F2EBE0] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Content */}
            <div className="max-w-3xl fade-in-up">
              <span className="text-sm font-label uppercase tracking-widest text-[#A8A8BC] font-bold mb-4 block">
                Signature Framework
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-8 leading-tight">
                Burn It. Build It.
              </h2>
              <p className="text-2xl md:text-3xl italic text-[#1A1A1A] mb-8 leading-relaxed">
                Release What Broke You. Claim What Will Define You
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
                This is Wendelin's signature framework — a powerful, no-excuses methodology that walks audiences through releasing the past, reclaiming their identity, and intentionally building their future.
              </p>
              <div className="border-l-4 border-[#A8A8BC] pl-8 py-4">
                <p className="text-lg font-semibold text-[#1A1A1A]">
                  ✓ Your audience will walk away with the clarity and courage to release what's holding them back and take ownership of what comes next.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="fade-in-up hidden md:flex items-center justify-center">
              <img
                src="/nails.png"
                alt="Burn It. Build It. — Woman's elegantly manicured nails"
                className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionBlend from={W} to={C} height={60} />

      {/* ── KEYNOTES SECTION ── */}
      <section id="keynotes" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-screen-2xl mx-auto">
          {/* Keynote 01 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-24 md:mb-32">
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#A8A8BC]/30 font-bold">01</span>
                <span className="bg-[#A8A8BC]/10 text-[#A8A8BC] px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  Corporate Leadership
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 leading-tight">
                If You Don't Own It, <span className="italic font-normal">It Owns You</span>
              </h3>
              <p className="text-lg text-[#1A1A1A] mb-6 leading-relaxed">
                How High-Responsibility Professionals Break Hidden Burnout Cycles, Reclaim Authority, and Execute at a Higher Level Through Radical Ownership
              </p>
              <p className="text-base text-[#1A1A1A] mb-8 leading-relaxed">
                Designed for high-performing teams and leaders, this keynote exposes the hidden patterns that drive burnout, disengagement, and stalled performance — and replaces them with clarity, ownership, and execution.
              </p>
              <div className="border-l-4 border-[#A8A8BC] pl-6 py-4 bg-[#F2EBE0] px-6">
                <p className="text-base font-semibold text-[#1A1A1A]">
                  ✓ Your team will identify what's silently limiting performance and leave equipped to operate with clarity, accountability, and elevated execution.
                </p>
              </div>
            </div>
            <div className="fade-in-up hidden md:flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663201602371/cS4nQ566iFS6DKVhdS5Vjw/Gemini_Generated_Image_8w3vx08w3vx08w3v_20f006b1.png"
                alt="Corporate Leadership — Executive boardroom with city skyline"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Keynote 02 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-24 md:mb-32 bg-[#F2EBE0] -mx-6 md:-mx-12 px-6 md:px-12 py-24 md:py-32">
            <div className="fade-in-up hidden md:flex items-center justify-center order-last md:order-first">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663201602371/cS4nQ566iFS6DKVhdS5Vjw/Gemini_Generated_Image_vknigtvknigtvkni_f4bcb308.webp"
                alt="The Cost of Being Unbreakable — Woman in spotlight"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#A8A8BC]/30 font-bold">02</span>
                <span className="bg-[#A8A8BC]/10 text-[#A8A8BC] px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  Women's Conferences
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 leading-tight">
                The Cost of Being <span className="italic font-normal">Unbreakable</span>
              </h3>
              <p className="text-lg text-[#1A1A1A] mb-6 leading-relaxed">
                Why the Strongest Women Are Often the Most Exhausted — and How to Release the Pressure, Reclaim Their Power, and Build a Life They Actually Want
              </p>
              <p className="text-base text-[#1A1A1A] mb-8 leading-relaxed">
                This deeply personal and transformative keynote speaks to the woman who holds everything together for everyone else — while silently carrying the weight of it all.
              </p>
              <div className="border-l-4 border-[#A8A8BC] pl-6 py-4 bg-white px-6">
                <p className="text-base font-semibold text-[#1A1A1A]">
                  ✓ Your audience will feel seen, validated, and empowered to release the pressure and step into a more aligned, powerful version of themselves.
                </p>
              </div>
            </div>
          </div>

          {/* Keynote 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#A8A8BC]/30 font-bold">03</span>
                <span className="bg-[#A8A8BC]/10 text-[#A8A8BC] px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  Mindset & Development
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 leading-tight">
                Break the Pattern. <span className="italic font-normal">Build the Power.</span>
              </h3>
              <p className="text-lg text-[#1A1A1A] mb-6 leading-relaxed">
                Identify the Root Triggers Controlling Your Life, Release Outdated Identities, and Rewire Your Mindset to Create What You Actually Want
              </p>
              <p className="text-base text-[#1A1A1A] mb-8 leading-relaxed">
                A powerful mindset-shifting experience that helps audiences uncover the root of their limitations and rebuild their thinking from a place of clarity and intention.
              </p>
              <div className="border-l-4 border-[#A8A8BC] pl-6 py-4 bg-[#F2EBE0] px-6">
                <p className="text-base font-semibold text-[#1A1A1A]">
                  ✓ Your audience will leave with the awareness and tools to break destructive cycles and consciously create the life they've been avoiding or delaying.
                </p>
              </div>
            </div>
            <div className="fade-in-up hidden md:flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663201602371/cS4nQ566iFS6DKVhdS5Vjw/Gemini_Generated_Image_niwje0niwje0niwj_f06a90f0.webp"
                alt="Break the Pattern. Build the Power. — Microphone on stage with audience"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionBlend from={C} to={D} />

      {/* ── BENEFITS STRIP ── */}
      <section className="bg-[#0D0D0D] text-white py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              "Transformational, Not Motivational",
              "Framework-Driven & Actionable",
              "Designed for Immediate Impact",
              "Tailored for Your Audience",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-4 fade-in-up">
                <span className="material-symbols-outlined text-[#A8A8BC] text-2xl shrink-0 mt-1">
                  check_circle
                </span>
                <p className="text-lg font-semibold leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionBlend from={D} to={C} />

      {/* ── BIO ── */}
      <section id="bio" className="py-24 md:py-36 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-16 fade-in-up">
            <span className="font-label text-[11px] tracking-[0.3em] uppercase text-[#A8A8BC] mb-4 block">About Wendelin</span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
              Not just a speaker —<br /><span className="italic font-normal">a catalyst for identity reinvention.</span>
            </h2>
          </div>

          {/* Two-column: narrative + pull quotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
            <div className="space-y-6 fade-in-up">
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                As a transformational speaker and Personal Development Strategist, Wendelin challenges women to confront the truth about what's controlling their lives — and equips them to take back their power through radical ownership.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                Her work is not built on theory — it is forged through lived experience. Behind her commanding presence is a life that demanded resilience at every level. Wendelin has navigated profound personal adversity, psychological pressure, and defining life disruptions that would have broken most. Instead of collapsing under the weight, she made a deliberate decision to confront it, understand it, and ultimately transform it into fuel.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                From leading high-pressure environments in luxury hospitality to overseeing multi-million-dollar operations and large-scale teams, Wendelin built her career on discipline, execution, and excellence. But like many women she now serves, she mastered the art of appearing unbreakable — while carrying the silent weight of everything she had endured.
              </p>
              <p className="text-lg text-[#1A1A1A] leading-relaxed">
                Through deep self-exploration and the power of voice, Wendelin transformed her story into a movement — one that teaches women how to stop surviving and start designing their lives with intention.
              </p>
            </div>

            {/* Pull quotes */}
            <div className="space-y-10 fade-in-up">
              <blockquote className="border-l-4 border-[#A8A8BC] pl-8 py-2">
                <p className="font-headline italic text-2xl md:text-3xl text-[#1A1A1A] leading-snug">
                  "What once required survival… she turned into strategy."
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-[#A8A8BC] pl-8 py-2">
                <p className="font-headline italic text-2xl md:text-3xl text-[#1A1A1A] leading-snug">
                  "Her breaking point became her turning point."
                </p>
              </blockquote>
              <blockquote className="border-l-4 border-[#A8A8BC] pl-8 py-2">
                <p className="font-headline italic text-2xl md:text-3xl text-[#1A1A1A] leading-snug">
                  "Her message is bold. Her presence is undeniable. Her impact is lasting."
                </p>
              </blockquote>
            </div>
          </div>

          {/* Framework */}
          <div className="bg-[#0D0D0D] text-[#FAF7F2] px-8 md:px-14 py-14 mb-20 fade-in-up">
            <p className="font-label text-[11px] tracking-[0.3em] uppercase text-[#A8A8BC] mb-6">The Framework</p>
            <h3 className="font-headline text-3xl md:text-4xl mb-10">BREATHE. BURN. BUILD.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { word: "BREATHE", desc: "Give yourself grace. Acknowledge where you are." },
                { word: "BURN", desc: "Release outdated identities, narratives, and emotional weight." },
                { word: "BUILD", desc: "Intentionally design a life aligned with your truth and power." },
              ].map(({ word, desc }) => (
                <div key={word} className="border-t border-[#A8A8BC]/30 pt-6">
                  <p className="font-label font-bold text-[#A8A8BC] tracking-widest text-sm mb-3">{word}</p>
                  <p className="text-[#FAF7F2]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who she speaks to */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center fade-in-up">
            <div>
              <p className="font-label text-[11px] tracking-[0.3em] uppercase text-[#A8A8BC] mb-6">She Speaks Directly To Women Who</p>
              <ul className="space-y-4">
                {[
                  "Appear unbreakable — but feel broken internally",
                  "Are exhausted from carrying everything and everyone",
                  "Are ready to release what no longer serves them",
                  "Want to build a life of clarity, confidence, and true ownership",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[#1A1A1A] text-lg leading-snug">
                    <span className="text-[#A8A8BC] mt-1 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="font-headline italic text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                "If you don't own it,{" "}
                <span className="text-[#A8A8BC]">it owns you.</span>"
              </p>
            </div>
          </div>

        </div>
      </section>

      <SectionBlend from={C} to={W} height={60} />

      {/* ── TESTIMONIAL ── */}
      <section id="testimonial" className="py-24 md:py-32 bg-[#F2EBE0] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-20">
          {/* Testimonial 1 */}
          <div className="text-center relative fade-in-up">
            <span className="font-headline text-8xl text-[#A8A8BC]/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none">
              "
            </span>
            <div className="relative z-10">
              <p className="font-headline italic text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#1A1A1A]">
                "Wendelin has a way of seeing straight through the noise and getting to the heart of what matters. Her influence has pushed me to be braver, more confident, and unapologetic about owning my voice and my worth."
              </p>
              <div className="mt-10">
                <p className="font-label font-bold text-[10px] tracking-widest uppercase">
                  Shyla M. Rivera
                </p>
                <p className="text-[#1A1A1A] text-[10px] tracking-widest uppercase mt-1">
                  MS-HRM, SHRM-CP, NDCCDP
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="h-px w-24 bg-[#A8A8BC]/30" />
          </div>

          {/* Testimonial 2 */}
          <div className="text-center relative fade-in-up">
            <span className="font-headline text-8xl text-[#A8A8BC]/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none">
              "
            </span>
            <div className="relative z-10">
              <p className="font-headline italic text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#1A1A1A]">
                "Wendelin changed my life. What began as a professional relationship became one of the most defining leadership experiences of my career. Her standard of excellence, discipline, and accountability shaped how I show up in business and in life. Because of her, I lead with confidence, clarity, and results."
              </p>
              <div className="mt-10">
                <p className="font-label font-bold text-[10px] tracking-widest uppercase">
                  Nel Peralta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionBlend from={W} to={D} />

      {/* ── MANIFESTO ── */}
      <section id="manifesto" className="bg-[#0D0D0D] text-[#FAF7F2] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-label text-[10px] tracking-[0.4em] uppercase text-[#FAF7F2]/40 mb-12 fade-in-up">
            The Mission
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12 fade-in-up">
            To help women{" "}
            <span className="italic text-[#A8A8BC]">break the cycle of burnout</span>{" "}
            by confronting what's been controlling them and reclaiming their power through{" "}
            <span className="italic text-[#A8A8BC]">radical ownership</span>.
          </h2>
          <p className="font-label text-lg text-[#FAF7F2]/60 leading-relaxed max-w-2xl mx-auto fade-in-up">
            Through the{" "}
            <span className="text-[#A8A8BC] font-bold tracking-widest uppercase text-sm">BREATHE. BURN. BUILD.</span>{" "}
            framework, they release what no longer serves them and intentionally design a life on their terms.
          </p>
        </div>
      </section>

      <SectionBlend from={D} to={W} />

      {/* ── FINAL CTA ── */}
      <section className="py-32 md:py-40 px-6 md:px-10 text-center relative overflow-hidden bg-[#F2EBE0]">
        <div className="max-w-3xl mx-auto fade-in-up">
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            This Isn't Another Talk. <span className="italic font-normal">It's a Turning Point.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1A1A1A] leading-relaxed mb-12">
            Wendelin doesn't just inspire audiences — she challenges them to confront what's been controlling them and equips them to take ownership of their next level.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="bg-[#1C1C2E] text-[#FAF7F2] px-12 py-6 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-[#A8A8BC] hover:text-[#1A1A1A] active:scale-95">
            Book Wendelin Now
          </button>
        </div>
      </section>

      <SectionBlend from={W} to={D} />

      <Footer />
    </div>
  );
}
