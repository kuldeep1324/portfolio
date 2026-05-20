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
          Hello! I'm Kuldeep Rajak, a passionate developer and creator who enjoys building solutions that connect both the digital and real world. I specialize in full-stack JavaScript development using the MERN stack (MongoDB, Express.js, React, and Node.js) to create modern, seamless web applications, along with React Native for cross-platform mobile apps. Beyond software, I am deeply interested in IoT and love working with hardware like Arduino and ESP32 to turn ideas into real-world projects. Currently, I am exploring Artificial Intelligence to combine both software & hardware into smarter, connected systems.
        </p>
    

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

      {/* Right — blank space for images */}
      <div className="flex flex-col gap-5 pt-[60px]">
        {/* Add your images here */}
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
