"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    date:    "2025 — Present",
    role:    "Backend Part",
    company: "Self Learning",
    desc:    "eveloped secure and scalable backend systems using Node.js, Express.js, MongoDB, and PostgreSQL, building RESTful APIs for authentication, transactions, and efficient data management.",
  },
  {
    date:    "2024 — 2025",
    role:    "Frontend Part",
    company: "College Projects, Madhav Institute of Technology and Science",
    desc:    "Built responsive and modern web applications using React, Next.js, and Tailwind CSS, creating interactive dashboards, dynamic UI components, and smooth user experiences across all devices with backend API integration and efficient state management."
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-[120px] px-[60px]"
      style={{ background: "var(--charcoal)", borderTop: "1px solid var(--dark-gray)" }}
    >
      <div className="grid gap-[80px]" style={{ gridTemplateColumns: "1fr 2fr" }}>

        {/* Left */}
        <motion.div
          className="md:sticky md:top-[120px] h-fit"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-5 flex items-center gap-4"
             style={{ color: "var(--accent)" }}>
            <span className="inline-block w-7 h-px" style={{ background: "var(--accent)" }} />
            Journey
          </p>
          <h2 className="font-sans font-bold leading-none mb-8"
              style={{ fontSize: "clamp(36px,5vw,72px)", letterSpacing: "-0.03em", color: "var(--white)" }}>
            My Path 
          </h2>
          <p className="font-display italic font-light leading-[1.65]"
             style={{ fontSize: "1.15rem", color: "var(--muted)" }}>
            "Great products are made when strong technical skills meet real understanding of people and their needs"
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="pl-7 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "var(--dark-gray)" }} />
          {timeline.map((t, i) => (
            <motion.div
              key={t.date}
              className="relative mb-[60px] group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Dot */}
              <div
                className="absolute -left-[33px] top-1.5 w-2.5 h-2.5 rounded-full border transition-colors duration-300 group-hover:bg-[var(--accent)]"
                style={{ background: "var(--charcoal)", borderColor: "var(--accent)" }}
              />
              <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase mb-2.5" style={{ color: "var(--accent)" }}>{t.date}</p>
              <h3 className="font-sans font-bold mb-1" style={{ fontSize: "1.2rem", color: "var(--white)" }}>{t.role}</h3>
              <p className="font-display italic mb-3.5" style={{ color: "var(--silver)" }}>{t.company}</p>
              <p className="font-display font-light leading-[1.65]" style={{ color: "var(--muted)" }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          #experience { padding:80px 24px!important; }
          #experience .grid { grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
}
