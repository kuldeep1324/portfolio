"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  { name: "LinkedIn", handle: "@Kuldeep", href: "#" },
  { name: "GitHub",   handle: "@kuldeep1324",   href: "https://github.com/kuldeep1324" },
  { name: "Twitter",  handle: "@Kuldeep13_24",     href: "https://x.com/kuldeep13_24" },
  { name: "Email",    handle: "kuldeep13rajak@gmail.com", href: "mailto:kuldeep13rajak@gmail.com" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-[120px] px-[60px]"
      style={{ background: "var(--charcoal)", borderTop: "1px solid var(--dark-gray)" }}
    >
      <div className="grid gap-[100px] items-start" style={{ gridTemplateColumns: "1fr 1fr" }}>

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase mb-5 flex items-center gap-4"
             style={{ color: "var(--accent)" }}>
            <span className="inline-block w-7 h-px" style={{ background: "var(--accent)" }} />
            Contact
          </p>
          <h2 className="font-sans font-bold leading-[0.95] mb-8"
              style={{ fontSize: "clamp(36px,5vw,80px)", letterSpacing: "-0.03em", color: "var(--white)" }}>
            Let's Build Something{" "}
            <em className="font-display font-light not-italic" style={{ color: "var(--accent)", fontSize: "1.05em" }}>
              Extraordinary
            </em>
          </h2>
          <p className="font-display font-light leading-[1.7] mb-12"
             style={{ fontSize: "1.15rem", color: "var(--muted)" }}>
            Have a project in mind, a problem to solve, or just want to connect? I'm currently available for select freelance and full-time opportunities.
          </p>

          <div className="flex flex-col">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.href}
                className="social-link flex items-center justify-between border-b py-4 no-underline transition-all duration-300"
                style={{ borderColor: "var(--dark-gray)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.paddingLeft = "12px";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--dark-gray)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <span className="font-sans font-semibold" style={{ color: "var(--soft-white)" }}>{s.name}</span>
                <span className="font-mono text-[0.7rem] tracking-[0.1em] transition-colors duration-300"
                      style={{ color: "var(--muted)" }}>
                  {s.handle} ↗
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {(["Contact No.", "Email Address"] as const).map(label => (
            <div key={label} className="mb-6">
              <label className="block font-mono text-[0.65rem] tracking-[0.2em] uppercase mb-2.5"
                     style={{ color: "var(--muted)" }}>
                {label}
              </label>
              <input
                className="w-full bg-transparent border-b py-3.5 font-display text-[1.1rem] outline-none transition-colors duration-300"
                style={{
                  borderColor: "var(--dark-gray)",
                  color:       "var(--soft-white)",
                  caretColor:  "var(--accent)",
                }}
                placeholder={
                  label === "Contact No."     ? "+91 9644397542"               :
                  label === "Email Address" ? "kuldeep13rajak@gmail.com"        :
                                             "Web App, Design..."
                }
                onFocus={e  => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e   => (e.target.style.borderColor = "var(--dark-gray)")}
              />
            </div>
          ))}
          
        </motion.div>
      </div>

      <style>{`
        @media(max-width:900px){
          #contact { padding:80px 24px!important; }
          #contact .grid { grid-template-columns:1fr!important; gap:60px!important; }
        }
      `}</style>
    </section>
  );
}
