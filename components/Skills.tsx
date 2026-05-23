"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    name: "React / Next.js",
    level: "Expert",
    w: 95,
    description: "Building fast, scalable, responsive web applications with modern frontend technologies.",
  },
  {
    name: "UI/UX Design",
    level: "Expert",
    w: 90,
    description: "Designing intuitive user experiences with clean layouts and engaging visual interactions.",
  },
  {
    name: "Node.js",
    level: "Advanced",
    w: 88,
    description: "Developing secure backend systems, APIs, and scalable server-side application architectures.",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    w: 85,
    description: "Writing maintainable, type-safe, scalable code for modern web application development.",
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    w: 82,
    description: "Managing structured databases with optimized queries, relations, and scalable data handling.",
  },
  {
    name: "MongoDB",
    level: "Advanced",
    w: 80,
    description: "Building flexible NoSQL database structures for scalable modern application ecosystems.",
  },
  {
    name: "Tailwind CSS",
    level: "Expert",
    w: 92,
    description: "Creating responsive, modern interfaces using utility-first styling and clean design systems.",
  },
  {
    name: "Framer Motion",
    level: "Advanced",
    w: 78,
    description: "Crafting smooth animations and interactive transitions for immersive digital user experiences.",
  },
];

const languages = [
  { name: "C", description: "Building strong programming fundamentals through efficient logic, memory management, and algorithms." },
  { name: "C++", description: "Developing high-performance applications using object-oriented programming and optimized data structures." },
  { name: "JavaScript", description: "Creating dynamic, interactive web experiences with modern frontend and backend development." },
  { name: "Python", description: "Building intelligent applications, automation tools, and scalable AI-powered software solutions." },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const view = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      className="py-[120px] px-[60px]"
      style={{
        background: "var(--charcoal)",
        borderTop: "1px solid var(--dark-gray)",
        borderBottom: "1px solid var(--dark-gray)",
      }}
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-20">
        <motion.h2
          className="font-sans font-bold leading-none"
          style={{ fontSize: "clamp(36px,5vw,72px)", letterSpacing: "-0.03em", color: "var(--white)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Technical
          <br />
          Skills
        </motion.h2>

        <motion.p
          className="font-display italic text-right max-w-xs leading-relaxed"
          style={{ fontSize: "1.1rem", color: "var(--muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Combining design, development, and innovation to create impactful digital products.
        </motion.p>
      </div>

      {/* Two-column layout: left = skills grid, right = languages panel */}
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 40 }}>
        {/* Left: skills grid */}
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
              className="skill-cell relative overflow-hidden p-9 group transition-colors duration-300 min-h-[180px]"
              style={{ background: "var(--charcoal)" }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => (e.currentTarget.style.background = "var(--graphite)")}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => (e.currentTarget.style.background = "var(--charcoal)")}
            >
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase relative z-10 mb-10" style={{ color: "var(--accent-dim)" }}>
                0{i + 1}
              </div>

              <div className="font-sans font-semibold mb-3 relative z-10" style={{ color: "var(--soft-white)", fontSize: "1.05rem" }}>
                {s.name}
              </div>

              <div className="font-display font-light leading-relaxed relative z-10 max-w-[18ch]" style={{ color: "var(--muted)" }}>
                {s.description}
              </div>

              <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase relative z-10 mt-5" style={{ color: "var(--accent)" }}>
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

        {/* Right: Languages panel (distinct look) */}
        <aside className="relative">
          <div className="absolute -left-8 top-[20px] w-12 h-12 rounded-full border-2" style={{ borderColor: "rgba(255,255,255,0.06)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {languages.map((lang, idx) => (
              <div
                key={lang.name}
                style={{ padding: "28px 24px", background: "linear-gradient(180deg, rgba(255,255,255,0.01), transparent)" }}
                className="group"
              >
                <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: "var(--accent-dim)", marginBottom: 6 }}>
                  0{idx + 1}
                </div>
                <div className="font-sans font-bold" style={{ color: "var(--soft-white)", fontSize: "1.3rem" }}>
                  {lang.name}
                </div>
                <div className="font-display font-light mt-3" style={{ color: "var(--muted)", maxWidth: "24ch" }}>
                  {lang.description}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <style>{`
        @media(max-width:900px){
          #skills { padding:80px 24px!important; }
          #skills .grid { grid-template-columns:repeat(2,1fr)!important; }
          #skills > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
