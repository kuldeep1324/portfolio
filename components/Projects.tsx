"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
  {
    id: 1, num: "01", large: true,
    title: "Lumina — SaaS Dashboard",
    desc:  "A data-rich analytics platform built for enterprise clients with real-time processing and a luxury UI system.",
    tags:  ["Next.js", "TypeScript", "PostgreSQL", "Framer Motion"],
    bg:    "#1a1a1a",
    pattern: "repeating-linear-gradient(45deg,rgba(255,255,255,.015) 0,rgba(255,255,255,.015) 1px,transparent 0,transparent 50%)",
    category: "Web App",
    demo: "#", github: "#",
  },
  {
    id: 2, num: "02", large: false,
    title: "Forma — Design System",
    desc:  "A comprehensive design system and component library used across 3 startup teams.",
    tags:  ["React", "Storybook", "CSS"],
    bg:    "#1a1714",
    category: "Design",
    demo: "#", github: "#",
  },
  {
    id: 3, num: "03", large: false,
    title: "Mira — AI Writing App",
    desc:  "A clean AI-powered writing assistant that feels human and premium.",
    tags:  ["React", "OpenAI", "Node.js"],
    bg:    "#161a1a",
    category: "Web App",
    demo: "#", github: "#",
  },
  {
    id: 4, num: "04", large: false,
    title: "Veil — E-Commerce",
    desc:  "A luxury fashion storefront with immersive product showcases and smooth UX.",
    tags:  ["Next.js", "Stripe", "Sanity"],
    bg:    "#1a1619",
    category: "Web App",
    demo: "#", github: "#",
  },
  {
    id: 5, num: "05", large: false,
    title: "Apex — Mobile App",
    desc:  "A fitness tracking mobile application with social features and live data.",
    tags:  ["React Native", "Firebase", "Expo"],
    bg:    "#191a16",
    category: "Mobile",
    demo: "#", github: "#",
  },
];

const filters = ["All", "Web App", "Design", "Mobile"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? allProjects : allProjects.filter(p => p.category === active);

  return (
    <section id="projects" className="py-[120px] px-[60px]">
      {/* Header */}
      <div className="flex items-end justify-between mb-20">
        <motion.h2
          className="font-sans font-bold leading-none"
          style={{ fontSize: "clamp(36px,5vw,72px)", letterSpacing: "-0.03em", color: "var(--white)" }}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Selected<br/>Work
        </motion.h2>

        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              className="font-mono text-[0.68rem] tracking-[0.15em] uppercase px-[18px] py-2.5 border transition-all duration-300"
              style={{
                background:   active === f ? "var(--soft-white)" : "transparent",
                color:        active === f ? "var(--black)"      : "var(--muted)",
                borderColor:  active === f ? "var(--soft-white)" : "var(--dark-gray)",
              }}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        className="grid"
        style={{ gridTemplateColumns: "1fr 1fr", gap: "2px", background: "var(--dark-gray)" }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              className={`project-card relative overflow-hidden group ${p.large ? "col-span-2" : ""}`}
              style={{ aspectRatio: p.large ? "16/7" : "4/3", cursor: "none" }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              {/* BG with pattern */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                style={{
                  background:      p.bg,
                  backgroundImage: p.pattern,
                  backgroundSize:  "20px 20px",
                }}
              />

              {/* Number */}
              <span
                className="absolute top-7 left-7 font-mono text-[0.65rem] tracking-[0.2em] z-10"
                style={{ color: "var(--accent-dim)" }}
              >
                {p.num}
              </span>

              {/* Static title */}
              <span
                className="absolute bottom-7 left-7 font-sans font-bold z-10 transition-opacity duration-300 group-hover:opacity-0"
                style={{ fontSize: "1.1rem", color: "var(--soft-white)" }}
              >
                {p.title}
              </span>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 z-20 flex flex-col justify-end p-8 transition-all duration-400"
                style={{ background: "rgba(10,10,10,0)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(10,10,10,.76)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(10,10,10,0)")}
              >
                <motion.div
                  className="project-content"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <h3
                    className="font-sans font-bold mb-2"
                    style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", color: "var(--white)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="font-display font-light mb-5 leading-snug" style={{ color: "var(--warm-gray)" }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-[0.6rem] tracking-[0.1em] uppercase px-2.5 py-1 border"
                            style={{ color: "var(--muted)", borderColor: "var(--mid-gray)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={p.demo} className="font-mono text-[0.65rem] tracking-[0.15em] uppercase no-underline border-b pb-0.5 transition-colors duration-300"
                       style={{ color: "var(--soft-white)", borderColor: "var(--mid-gray)" }}
                       onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                       onMouseLeave={e => { e.currentTarget.style.color = "var(--soft-white)"; e.currentTarget.style.borderColor = "var(--mid-gray)"; }}>
                      Live Demo ↗
                    </a>
                    <a href={p.github} className="font-mono text-[0.65rem] tracking-[0.15em] uppercase no-underline border-b pb-0.5 transition-colors duration-300"
                       style={{ color: "var(--soft-white)", borderColor: "var(--mid-gray)" }}
                       onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                       onMouseLeave={e => { e.currentTarget.style.color = "var(--soft-white)"; e.currentTarget.style.borderColor = "var(--mid-gray)"; }}>
                      GitHub ↗
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <style>{`
        @media(max-width:900px){
          #projects { padding:80px 24px!important; }
          #projects .grid { grid-template-columns:1fr!important; }
          #projects .col-span-2 { grid-column:span 1!important; aspect-ratio:4/3!important; }
        }
      `}</style>
    </section>
  );
}
