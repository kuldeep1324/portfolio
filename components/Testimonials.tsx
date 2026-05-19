"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text:   "Aryan doesn't just write code — he thinks in products. He transformed our clunky internal tool into something our whole team actually loves using. The attention to detail is extraordinary.",
    name:   "Suresh Pillai",
    role:   "CTO, Lumina Corp",
    initials: "SP",
  },
  {
    text:   "Working with Aryan was the best investment we made for our product launch. He delivered an exceptional design system that scaled with us from 5 to 500 users seamlessly.",
    name:   "Neha Kapoor",
    role:   "Founder, Forma Labs",
    initials: "NK",
  },
  {
    text:   "The portfolio he built for our agency was jaw-dropping. Clients noticed immediately — we've seen a 40% increase in inquiry quality since launch. Pure class, pure craft.",
    name:   "Rahul Verma",
    role:   "Creative Director, NovaCraft",
    initials: "RV",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-[120px] px-[60px]"
      style={{ borderTop: "1px solid var(--dark-gray)" }}
    >
      {/* Header */}
      <div className="text-center mb-20">
        <motion.p
          className="font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-4"
          style={{ color: "var(--accent)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          <span className="inline-block w-7 h-px" style={{ background: "var(--accent)" }} />
          Testimonials
          <span className="inline-block w-7 h-px" style={{ background: "var(--accent)" }} />
        </motion.p>
        <motion.h2
          className="font-sans font-bold leading-none mb-4"
          style={{ fontSize: "clamp(36px,5vw,72px)", letterSpacing: "-0.03em", color: "var(--white)" }}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          What People Say
        </motion.h2>
        <p className="font-display italic" style={{ fontSize: "1.15rem", color: "var(--muted)" }}>
          Words from clients and collaborators I've had the privilege of working with.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="testi-card border p-10 relative overflow-hidden"
            style={{ background: "var(--charcoal)", borderColor: "var(--dark-gray)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -6, borderColor: "var(--mid-gray)" }}
          >
            <div className="font-display mb-5 leading-[0.8] opacity-40" style={{ fontSize: "4rem", color: "var(--accent)" }}>
              "
            </div>
            <p className="font-display italic font-light leading-[1.7] mb-8" style={{ color: "var(--warm-gray)" }}>
              {t.text}
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-sans font-bold border"
                style={{ background: "var(--graphite)", borderColor: "var(--dark-gray)", color: "var(--accent)", fontSize: "0.9rem" }}
              >
                {t.initials}
              </div>
              <div>
                <div className="font-sans font-semibold" style={{ color: "var(--soft-white)" }}>{t.name}</div>
                <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase mt-0.5" style={{ color: "var(--muted)" }}>{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media(max-width:900px){
          #testimonials { padding:80px 24px!important; }
          #testimonials .grid { grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
}
