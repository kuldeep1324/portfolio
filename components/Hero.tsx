"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const slideUp = {
  hidden:  { y: "100%", opacity: 0 },
  visible: (d: number) => ({
    y: 0, opacity: 1,
    transition: { duration: 0.9, ease: [0.77, 0, 0.18, 1], delay: d },
  }),
};

export default function Hero() {
  const bgNumRef = useRef<HTMLDivElement>(null);
  const defaultCoverSrc = "/portfolio-cover-page.png";

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!bgNumRef.current) return;
      const x = (e.clientX / window.innerWidth  - 0.5) * 22;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      bgNumRef.current.style.transform = `translateY(calc(-50% + ${y}px)) translateX(${x}px)`;
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  const magnetize = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) * 0.25;
    const dy = (e.clientY - r.top  - r.height / 2) * 0.25;
    el.style.transform = `translate(${dx}px,${dy}px)`;
  };
  const demagnetize = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
    e.currentTarget.style.transition = "transform .5s cubic-bezier(.25,.46,.45,.94)";
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end items-start min-h-screen overflow-hidden"
      style={{ padding: "0 60px 80px" }}
    >
      {/* Big background number */}
      <div
        ref={bgNumRef}
        className="absolute right-[60px] top-1/2 -translate-y-1/2 font-display font-light pointer-events-none select-none leading-none transition-transform duration-75"
        style={{ fontSize: "clamp(180px,22vw,360px)", color: "rgba(255,255,255,.02)" }}
      >
        01
      </div>

      {/* Cover image */}

      {/* Tag */}
      <div className="overflow-hidden mb-7">
        <motion.p
          className="font-mono text-[0.72rem] tracking-[0.25em] uppercase"
          style={{ color: "var(--accent)" }}
          variants={slideUp} initial="hidden" animate="visible" custom={1.6}
        >
          Full Stack Developer · Graphic Designer 
        </motion.p>
      </div>

      {/* Name */}
      <h1
        className="font-sans font-extrabold leading-[0.92] mb-9"
        style={{ fontSize: "clamp(26px,4vw,70px)", letterSpacing: "-0.03em", color: "var(--white)" }}
      >
        {["Kuldeep", "Rajak", "— Portfolio"].map((word, i) => (
          <span key={word} className="block overflow-hidden">
            <motion.span
              className="inline-block"
              style={{ color: i === 2 ? "var(--accent)" : "var(--white)" }}
              variants={slideUp} initial="hidden" animate="visible" custom={1.7 + i * 0.15}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-8">
        <div className="overflow-hidden">
          <motion.p
            className="font-display italic font-light max-w-sm leading-relaxed"
            style={{ fontSize: "clamp(1.1rem,2.2vw,1.6rem)", color: "var(--warm-gray)" }}
            variants={slideUp} initial="hidden" animate="visible" custom={2.2}
          >
            Crafting digital experiences that blur the line between art and technology.
          </motion.p>
        </div>

        <motion.div
          className="flex gap-4 items-center"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: [0.77, 0, 0.18, 1] }}
        >
          <a
            href="#projects"
            className="font-mono text-[0.72rem] tracking-[0.15em] uppercase px-9 py-4 no-underline inline-block transition-colors duration-300"
            style={{ background: "var(--soft-white)", color: "var(--black)" }}
            onMouseMove={magnetize} onMouseLeave={demagnetize}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent)")}
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
