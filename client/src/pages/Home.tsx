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
    <div ref={pageRef} className="min-h-screen bg-[#fcf9f4] text-[#1c1c19]">
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <NavBar onBookClick={() => setBookingOpen(true)} />

      {/* ── HERO ── */}
      <section id="hero" className="min-h-screen flex flex-col md:flex-row items-stretch bg-[#fcf9f4] pt-20">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24 py-16 md:py-0 flex flex-col justify-center items-start">
          <span className="font-label text-[11px] tracking-[0.25em] uppercase text-[#C9A84C] mb-6 fade-in-up">
            Transformational Speaking
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-10 text-[#1c1c19] fade-in-up">
            If You Don't Own It, <span className="italic font-normal">It Owns You</span>
          </h1>
          <p className="text-lg md:text-xl text-[#524439] leading-relaxed max-w-2xl mb-8 fade-in-up">
            Wendelin Monplaisir delivers bold, transformative keynotes that challenge high-functioning women and professionals to break burnout cycles, reclaim their power, and build a life by design.
          </p>
          <p className="text-base md:text-lg text-[#C9A84C] font-label tracking-widest uppercase font-semibold mb-12 fade-in-up">
            Not just motivation. Transformation that demands ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-[#C9A84C] text-white px-10 py-5 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-[#D4B86A] active:scale-95">
              Book Wendelin
            </button>
            <button 
              onClick={(e) => handlePlaceholder(e, "View Keynotes")}
              className="border border-[#1c1c19]/20 text-[#1c1c19] px-10 py-5 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:border-[#1c1c19] hover:bg-[#1c1c19]/5"
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f4] via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── SIGNATURE KEYNOTE ── */}
      <section className="bg-[#f6f3ee] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Content */}
            <div className="max-w-3xl fade-in-up">
              <span className="text-sm font-label uppercase tracking-widest text-[#C9A84C] font-bold mb-4 block">
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
              <div className="border-l-4 border-[#C9A84C] pl-8 py-4">
                <p className="text-lg font-semibold text-[#1c1c19]">
                  ✓ Your audience will walk away with the clarity and courage to release what's holding them back and take ownership of what comes next.
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="fade-in-up hidden md:flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663201602371/cS4nQ566iFS6DKVhdS5Vjw/Gemini_Generated_Image_q2cpyeq2cpyeq2cp_b21197b9.png"
                alt="Burn It. Build It. — Match igniting transformation"
                className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── KEYNOTES SECTION ── */}
      <section id="keynotes" className="py-24 md:py-32 px-6 md:px-12 bg-[#fcf9f4]">
        <div className="max-w-screen-2xl mx-auto">
          {/* Keynote 01 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-24 md:mb-32">
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#C9A84C]/30 font-bold">01</span>
                <span className="bg-[#C9A84C]/10 text-[#C9A84C] px-4 py-2 text-xs font-bold uppercase tracking-widest">
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
              <div className="border-l-4 border-[#C9A84C] pl-6 py-4 bg-[#f6f3ee] px-6">
                <p className="text-base font-semibold text-[#1c1c19]">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-24 md:mb-32 bg-[#f6f3ee] -mx-6 md:-mx-12 px-6 md:px-12 py-24 md:py-32">
            <div className="fade-in-up hidden md:flex items-center justify-center order-last md:order-first">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663201602371/cS4nQ566iFS6DKVhdS5Vjw/Gemini_Generated_Image_vknigtvknigtvkni_f4bcb308.webp"
                alt="The Cost of Being Unbreakable — Woman in spotlight"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#C9A84C]/30 font-bold">02</span>
                <span className="bg-[#C9A84C]/10 text-[#C9A84C] px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  Women's Conferences
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 leading-tight">
                The Cost of Being <span className="italic font-normal">Unbreakable</span>
              </h3>
              <p className="text-lg text-[#524439] mb-6 leading-relaxed">
                Why the Strongest Women Are Often the Most Exhausted — and How to Release the Pressure, Reclaim Their Power, and Build a Life They Actually Want
              </p>
              <p className="text-base text-[#524439] mb-8 leading-relaxed">
                This deeply personal and transformative keynote speaks to the woman who holds everything together for everyone else — while silently carrying the weight of it all.
              </p>
              <div className="border-l-4 border-[#C9A84C] pl-6 py-4 bg-white px-6">
                <p className="text-base font-semibold text-[#1c1c19]">
                  ✓ Your audience will feel seen, validated, and empowered to release the pressure and step into a more aligned, powerful version of themselves.
                </p>
              </div>
            </div>
          </div>

          {/* Keynote 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline italic text-[#C9A84C]/30 font-bold">03</span>
                <span className="bg-[#C9A84C]/10 text-[#C9A84C] px-4 py-2 text-xs font-bold uppercase tracking-widest">
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
              <div className="border-l-4 border-[#C9A84C] pl-6 py-4 bg-[#f6f3ee] px-6">
                <p className="text-base font-semibold text-[#1c1c19]">
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
                <span className="material-symbols-outlined text-[#C9A84C] text-2xl shrink-0 mt-1">
                  check_circle
                </span>
                <p className="text-lg font-semibold leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section id="testimonial" className="py-24 md:py-32 bg-[#f0ede9] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative">
          <span className="font-headline text-8xl text-[#C9A84C]/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none">
            "
          </span>
          <div className="relative z-10 fade-in-up">
            <p className="font-headline italic text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#1c1c19]">
              "Wendelin's ability to pinpoint the exact structural weakness in our brand strategy was
              chilling. Within three hours, she had rewritten our trajectory for the next decade."
            </p>
            <div className="mt-10">
              <p className="font-label font-bold text-[10px] tracking-widest uppercase">
                Marcello Rossi
              </p>
              <p className="text-[#5f5e5e] text-[10px] tracking-widest uppercase mt-1">
                Chief Creative Officer, LVMH Group
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <div className="h-1 w-8 bg-[#C9A84C]" />
            <div className="h-1 w-8 bg-[#d8c3b4]/30" />
            <div className="h-1 w-8 bg-[#d8c3b4]/30" />
          </div>
        </div>
      </section>

      {/* ── STATS + LOGOS ── */}
      <section id="stats" className="py-24 md:py-32 px-6 md:px-10 bg-[#fcf9f4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24 border-b border-[#d8c3b4]/15 pb-16">
            {[
              { num: "120+", label: "Global Engagements" },
              { num: "14", label: "Creative Directives" },
              { num: "2.4M", label: "Reader Reach" },
              { num: "0", label: "Compromises Made" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2 fade-in-up">
                <p className="font-headline text-5xl text-[#C9A84C]">{stat.num}</p>
                <p className="font-label text-[10px] tracking-widest uppercase text-[#5f5e5e]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {["VOGUE", "MONOCLE", "HYPEBEAST", "WIRED", "FORBES"].map((brand) => (
              <span key={brand} className="font-headline text-2xl tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section id="manifesto" className="bg-[#1c1c19] text-[#fcf9f4] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-label text-[10px] tracking-[0.4em] uppercase text-[#fcf9f4]/40 mb-12 fade-in-up">
            The Manifesto
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12 fade-in-up">
            To bridge the gap between{" "}
            <span className="italic text-[#C9A84C]">raw instinct</span> and{" "}
            <span className="italic text-[#C9A84C]">architectural precision</span>.
          </h2>
          <p className="font-label text-lg text-[#fcf9f4]/60 leading-relaxed max-w-2xl mx-auto fade-in-up">
            We do not facilitate trends. We design legacies. Our mission is to empower the thinkers
            and doers who are ready to abandon the mediocre for the monumental.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 md:py-40 px-6 md:px-10 text-center relative overflow-hidden bg-[#f6f3ee]">
        <div className="max-w-3xl mx-auto fade-in-up">
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            This Isn't Another Talk. <span className="italic font-normal">It's a Turning Point.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#524439] leading-relaxed mb-12">
            Wendelin doesn't just inspire audiences — she challenges them to confront what's been controlling them and equips them to take ownership of their next level.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="bg-[#C9A84C] text-white px-12 py-6 font-label font-medium text-[11px] tracking-widest uppercase transition-all duration-300 hover:bg-[#D4B86A] active:scale-95">
            Book Wendelin Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
