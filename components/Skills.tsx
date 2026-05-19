"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { icon: "⚛",  name: "React / Next.js",  level: "Expert",   w: 95 },
  { icon: "🎨", name: "UI/UX Design",     level: "Expert",   w: 90 },
  { icon: "🟢", name: "Node.js",          level: "Advanced", w: 88 },
  { icon: "🔷", name: "TypeScript",       level: "Advanced", w: 85 },
  { icon: "🗄",  name: "PostgreSQL",       level: "Advanced", w: 82 },
  { icon: "☁",  name: "AWS / Cloud",      level: "Advanced", w: 80 },
  { icon: "🌊", name: "Tailwind CSS",     level: "Expert",   w: 92 },
  { icon: "🎬", name: "Framer Motion",    level: "Advanced", w: 78 },
];

export default function Skills() {
  const ref  = useRef(null);
  const view = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      className="py-[120px] px-[60px]"
      style={{
        background:   "var(--charcoal)",
        borderTop:    "1px solid var(--dark-gray)",
        borderBottom: "1px solid var(--dark-gray)",
      }}
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-20">
        <motion.h2
          className="font-sans font-bold leading-none"
          style={{ fontSize: "clamp(36px,5vw,72px)", letterSpacing: "-0.03em", color: "var(--white)" }}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Technical<br/>Mastery
        </motion.h2>
        <motion.p
          className="font-display italic text-right max-w-xs leading-relaxed"
          style={{ fontSize: "1.1rem", color: "var(--muted)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          A curated set of technologies I've mastered over years of real-world product development.
        </motion.p>
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="grid"
        style={{
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "1px",
          background: "var(--dark-gray)",
          border: "1px solid var(--dark-gray)",
        }}
      >
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="skill-cell relative overflow-hidden p-9 group transition-colors duration-300"
            style={{ background: "var(--charcoal)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--graphite)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--charcoal)")}
          >
            <div className="text-2xl mb-5 relative z-10 transition-transform duration-300 group-hover:scale-110">
              {s.icon}
            </div>
            <div className="font-sans font-semibold mb-2 relative z-10" style={{ color: "var(--soft-white)" }}>
              {s.name}
            </div>
            <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase relative z-10" style={{ color: "var(--accent)" }}>
              {s.level}
            </div>

            {/* Animated bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px]"
              style={{ background: "var(--accent)" }}
              initial={{ width: 0 }}
              animate={view ? { width: `${s.w}%` } : { width: 0 }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.77, 0, 0.18, 1] }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:900px){
          #skills { padding:80px 24px!important; }
          #skills .grid { grid-template-columns:repeat(2,1fr)!important; }
        }
      `}</style>
    </section>
  );
}
