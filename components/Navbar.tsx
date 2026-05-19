"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About",    href: "#about"       },
  { label: "Skills",   href: "#skills"      },
  { label: "Work",     href: "#projects"    },
  { label: "Journey",  href: "#experience"  },
  { label: "Contact",  href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[60px] transition-all duration-300"
        style={{
          paddingTop:    scrolled ? "18px" : "28px",
          paddingBottom: scrolled ? "18px" : "28px",
          background:    scrolled ? "rgba(10,10,10,.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom:  scrolled ? "1px solid rgba(255,255,255,.04)" : "none",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-light tracking-wide no-underline" style={{ color: "var(--white)" }}>
          K<span style={{ color: "var(--accent)" }}>.</span>R
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[0.72rem] tracking-[0.15em] uppercase no-underline relative group transition-colors duration-300"
                style={{ color: "var(--silver)" }}
              >
                {l.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--accent)" }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-[0.72rem] tracking-[0.15em] uppercase px-6 py-3 no-underline transition-colors duration-300"
          style={{ background: "var(--accent)", color: "var(--black)" }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--warm-gray)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-none p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px transition-all duration-300" style={{ background: "var(--soft-white)", transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: "var(--soft-white)", opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: "var(--soft-white)", transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="fixed inset-0 z-[900] flex flex-col items-center justify-center"
          style={{ background: "var(--charcoal)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <ul className="list-none flex flex-col gap-8 text-center">
            {links.map((l, i) => (
              <motion.li key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <a
                  href={l.href}
                  className="font-sans text-4xl font-bold no-underline"
                  style={{ color: "var(--soft-white)" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
