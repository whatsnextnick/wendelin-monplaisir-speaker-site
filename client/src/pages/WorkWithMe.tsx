/*
 * Work With Me Page — Editorial Brutalism
 * Services grid, process steps, contact form, FAQ accordion
 */

import { useState, useEffect, useRef } from "react";
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

const faqs = [
  {
    q: "Do you customize the content for each event?",
    a: "Absolutely. While my core pillars remain consistent, the narrative, case studies, and practical exercises are meticulously tailored to your industry, organizational climate, and specific goals.",
  },
  {
    q: "What industries do you typically work with?",
    a: "I work across sectors including tech, healthcare, and finance. The unifying factor isn't the industry, but the desire for vulnerable authority and transformative leadership within the organization.",
  },
  {
    q: "Are your sessions available virtually?",
    a: "Yes. I have designed high-production virtual experiences that maintain the emotional gravity and interactive nature of an in-person keynote.",
  },
  {
    q: "What are your technical requirements?",
    a: "For in-person events, I require a wireless lavalier microphone, high-quality audio output for media, and a large display for visuals. A full tech rider is provided upon booking.",
  },
  {
    q: "How far in advance should we book?",
    a: "I typically book 6–12 months in advance. However, if your event is sooner, please reach out as schedules occasionally shift.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#f6f3ee] overflow-hidden transition-all duration-300">
      <button
        className="flex justify-between items-center w-full p-6 md:p-8 text-left cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3 className="text-lg md:text-xl font-headline font-bold pr-4">{q}</h3>
        <span
          className={`material-symbols-outlined shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 md:px-8 pb-8 text-[#524439] leading-relaxed text-base md:text-lg">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function WorkWithMe() {
  const pageRef = useScrollFadeIn();

  useEffect(() => {
    document.title = "Work With Me | WENDELIN MONPLAISIR";
    return () => { document.title = "WENDELIN MONPLAISIR | Official Site"; };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Your inquiry has been received.", {
      description: "Wendelin's team will be in touch within 48 hours.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-[#fcf9f4] text-[#1c1c19]">
      <NavBar />

      {/* ── HERO ── */}
      <section className="px-6 md:px-12 pt-40 pb-16 md:pb-24 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-headline font-bold leading-tight mb-8">
            Your Audience Deserves{" "}
            <span className="italic font-normal">More</span> Than a Good Speech.
          </h1>
          <p className="text-xl md:text-2xl text-[#524439] leading-relaxed max-w-2xl">
            Beyond information, I deliver transformation. My engagements are curated psychological
            journeys designed to dismantle resistance and awaken the{" "}
            <span className="italic text-[#C9A84C]">authority</span> within your leaders and teams.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#f6f3ee]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Keynote Card */}
            <div className="bg-white p-10 md:p-12 flex flex-col justify-between shadow-sm min-h-[500px] md:min-h-[600px] fade-in-up">
              <div>
                <span className="material-symbols-outlined text-[#C9A84C] text-5xl mb-8 block">
                  auto_awesome
                </span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 italic">
                  The Transformation Keynote
                </h2>
                <p className="text-lg text-[#524439] mb-10 leading-relaxed">
                  A visceral, immersive experience that combines storytelling with behavioral
                  psychology. Perfect for high-stakes conferences and leadership summits seeking a
                  catalyst for change.
                </p>
                <div className="space-y-5 mb-10">
                  {[
                    { label: "Duration", value: "60–90 Minutes" },
                    { label: "Format", value: "In-Person / Hybrid" },
                    { label: "Ideal For", value: "Annual Summits, Global Meetings" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-4">
                      <span className="font-label text-xs uppercase tracking-widest text-[#857467] w-20 shrink-0">
                        {row.label}
                      </span>
                      <span className="text-base md:text-lg font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => toast.info("Keynote Booking", { description: "Please use the inquiry form below to book this keynote." })}
                className="w-full bg-[#C9A84C] text-white py-5 font-label uppercase tracking-widest hover:bg-[#D4B86A] transition-all active:scale-95"
              >
                Book Keynote
              </button>
            </div>

            {/* Workshop Card */}
            <div className="bg-[#e5e2dd] p-10 md:p-12 flex flex-col justify-between shadow-sm min-h-[500px] md:min-h-[600px] fade-in-up">
              <div>
                <span className="material-symbols-outlined text-[#C9A84C] text-5xl mb-8 block">
                  groups
                </span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 italic">
                  The Mastery Workshop
                </h2>
                <p className="text-lg text-[#524439] mb-10 leading-relaxed">
                  An intensive, hands-on architectural session for small to mid-sized groups. We
                  dive deep into the specific blockages preventing your organization's{" "}
                  <em>healing</em> and growth.
                </p>
                <div className="space-y-5 mb-10">
                  {[
                    { label: "Duration", value: "Half Day / Full Day" },
                    { label: "Format", value: "In-Person Intensive" },
                    { label: "Ideal For", value: "Executive Boards, Management Teams" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-4">
                      <span className="font-label text-xs uppercase tracking-widest text-[#857467] w-20 shrink-0">
                        {row.label}
                      </span>
                      <span className="text-base md:text-lg font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => toast.info("Workshop Booking", { description: "Please use the inquiry form below to book this workshop." })}
                className="w-full border-2 border-[#C9A84C] text-[#C9A84C] py-5 font-label uppercase tracking-widest hover:bg-[#C9A84C] hover:text-white transition-all active:scale-95"
              >
                Book Workshop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-4 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight lg:sticky lg:top-40">
              The Process of{" "}
              <span className="italic text-[#C9A84C]">Alignment</span>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            {[
              {
                num: "01",
                title: "Discovery & Deep Dive",
                desc: "We begin with a psychological audit of your event goals. I don't just ask about the topic; I ask about the feeling you want to leave behind.",
              },
              {
                num: "02",
                title: "Narrative Architecture",
                desc: "I weave your specific organizational challenges into my methodology, creating a bespoke narrative that resonates with your team's unique truth.",
              },
              {
                num: "03",
                title: "The Engagement",
                desc: "The delivery. A high-energy, high-impact presence that challenges and supports simultaneously, driving collective action and personal clarity.",
              },
              {
                num: "04",
                title: "Integration Support",
                desc: "Change doesn't end when I leave the stage. We provide follow-up frameworks to ensure the insights gained become lasting organizational habits.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-8 md:gap-12 group fade-in-up">
                <span className="text-7xl md:text-8xl font-headline text-[#ebe8e3] leading-none group-hover:text-[#D4B86A] transition-colors duration-500 shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[#524439] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#f6f3ee]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Let's Make Your Event <span className="italic">Unforgettable</span>
            </h2>
            <p className="text-lg text-[#524439]">
              Fill in the form below and Wendelin's team will respond within 48 hours.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-16 shadow-sm space-y-8 fade-in-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="font-label text-[10px] tracking-widest uppercase text-[#524439] block mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-[#d8c3b4] bg-transparent py-3 font-label text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#1c1c19]/30"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="font-label text-[10px] tracking-widest uppercase text-[#524439] block mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-[#d8c3b4] bg-transparent py-3 font-label text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#1c1c19]/30"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="font-label text-[10px] tracking-widest uppercase text-[#524439] block mb-3">
                Organization / Event
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full border-b border-[#d8c3b4] bg-transparent py-3 font-label text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#1c1c19]/30"
                placeholder="Company or event name"
              />
            </div>
            <div>
              <label className="font-label text-[10px] tracking-widest uppercase text-[#524439] block mb-3">
                Tell Wendelin About Your Event *
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border-b border-[#d8c3b4] bg-transparent py-3 font-label text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none placeholder-[#1c1c19]/30"
                placeholder="Event date, audience size, goals, and what transformation you're seeking..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#C9A84C] text-white px-12 py-5 font-label font-bold text-sm tracking-widest uppercase hover:bg-[#D4B86A] transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
            >
              {submitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 md:mb-16 text-center italic fade-in-up">
          Refining the Details
        </h2>
        <div className="space-y-3 fade-in-up">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
