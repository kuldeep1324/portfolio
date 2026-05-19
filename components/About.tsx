"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCounter(target: number, start: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const prog = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(prog * target));
      if (prog < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

const cards = [
  { num: "01", title: "Design with Purpose",          text: "Every pixel I place has a reason. I approach every project with the mindset of a designer and the precision of an engineer, creating work that is both beautiful and functional." },
  { num: "02", title: "Technology Meets Craft",       text: "I bridge the gap between complex engineering and refined aesthetics. From architecture decisions to micro-interactions, every detail receives full attention." },
  { num: "03", title: "Partner, Not Just Developer",  text: "I work closely with founders, product teams, and creative directors to understand not just what to build, but why — ensuring the final product exceeds expectations." },
];

export default function About() {
  const statsRef  = useRef<HTMLDivElement>(null);
  const statsView = useInView(statsRef, { once: true, amount: 0.5 });

  const c1 = useCounter(48, statsView);
  const c2 = useCounter(30, statsView);
  const c3 = useCounter(5,  statsView);

  const sectionRef  = useRef(null);
  const sectionView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="grid gap-[80px] px-[60px] py-[120px]"
      style={{ gridTemplateColumns: "1fr 1fr" }}
    >
      {/* Left — sticky */}
      <motion.div
        className="md:sticky md:top-[100px] h-fit"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-5 flex items-center gap-4"
           style={{ color: "var(--accent)" }}>
          <span className="inline-block w-7 h-px" style={{ background: "var(--accent)" }} />
          About Me
        </p>
        <h2 className="font-sans font-bold mb-8 leading-none"
            style={{ fontSize: "clamp(36px,5vw,72px)", letterSpacing: "-0.03em", color: "var(--white)" }}>
          Turning ideas into{" "}
          <em className="font-display font-light not-italic" style={{ color: "var(--accent)", fontSize: "1.1em" }}>
            remarkable
          </em>{" "}
          digital realities
        </h2>
        <p className="font-display font-light leading-[1.75] mb-12"
           style={{ fontSize: "clamp(1.1rem,1.8vw,1.35rem)", color: "var(--warm-gray)" }}>
          I am a creative developer and designer based in Gwalior, with a passion for building products that are both technically excellent and visually unforgettable.
        </p>

        {/* Stats */}
        <div ref={statsRef} className="flex gap-10 mb-12">
          {[
            { val: c1, suffix: "+", label: "Projects Shipped" },
            { val: c2, suffix: "+", label: "Happy Clients"    },
            { val: c3, suffix: "",  label: "Years Experience" },
          ].map(s => (
            <div key={s.label} className="border-t pt-5" style={{ borderColor: "var(--dark-gray)" }}>
              <div className="font-sans font-extrabold leading-none mb-1.5"
                   style={{ fontSize: "2.8rem", letterSpacing: "-0.04em", color: "var(--white)" }}>
                <span style={{ color: "var(--accent)" }}>{s.val}</span>{s.suffix}
              </div>
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase"
                   style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <a
          href="/resume.pdf"
          className="inline-block font-mono text-[0.72rem] tracking-[0.15em] uppercase px-9 py-4 no-underline transition-colors duration-300"
          style={{ background: "var(--soft-white)", color: "var(--black)" }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--soft-white)")}
        >
          Download Resume
        </a>
      </motion.div>

      {/* Right — cards */}
      <div className="flex flex-col gap-5 pt-[60px]">
        {cards.map((c, i) => (
          <motion.div
            key={c.num}
            className="about-card border p-9 relative overflow-hidden group"
            style={{ background: "var(--charcoal)", borderColor: "var(--dark-gray)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={sectionView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ x: 6, borderColor: "var(--mid-gray)" }}
          >
            {/* left accent bar */}
            <span
              className="absolute top-0 left-0 w-px transition-all duration-500 group-hover:h-full"
              style={{ background: "var(--accent)", height: 0 }}
            />
            <div className="font-mono text-[0.65rem] tracking-[0.2em] mb-4" style={{ color: "var(--accent-dim)" }}>{c.num}</div>
            <div className="font-sans font-semibold mb-3" style={{ fontSize: "1.1rem", color: "var(--soft-white)" }}>{c.title}</div>
            <p className="font-display font-light leading-[1.65]" style={{ color: "var(--silver)" }}>{c.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: single column */}
      <style>{`
        @media(max-width:900px){
          #about { grid-template-columns:1fr!important; padding:80px 24px!important; }
        }
      `}</style>
    </section>
  );
}
