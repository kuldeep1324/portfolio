"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef  = useRef<HTMLDivElement>(null);
  const ringRef    = useRef<HTMLDivElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top  = `${my}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${mx}px`;
        glowRef.current.style.top  = `${my}px`;
      }
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top  = `${ry}px`;
      }
      requestAnimationFrame(animRing);
    };

    const onEnter = () => document.body.classList.add("cursor-hover");
    const onLeave = () => document.body.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMove);
    animRing();

    const targets = document.querySelectorAll(
      "a, button, .project-card, .about-card, .skill-cell, .social-link, .testi-card"
    );
    targets.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <style>{`
        #cursor {
          position:fixed;width:12px;height:12px;
          background:var(--accent);border-radius:50%;
          pointer-events:none;z-index:10000;
          transform:translate(-50%,-50%);
          transition:width .3s,height .3s;
        }
        #cursor-ring {
          position:fixed;width:36px;height:36px;
          border:1px solid rgba(200,184,154,.35);
          border-radius:50%;pointer-events:none;
          z-index:9999;transform:translate(-50%,-50%);
          transition:width .4s cubic-bezier(.25,.46,.45,.94),
                      height .4s cubic-bezier(.25,.46,.45,.94),
                      border-color .3s;
        }
        #mouse-glow {
          position:fixed;width:400px;height:400px;border-radius:50%;
          background:radial-gradient(circle,rgba(200,184,154,.06) 0%,transparent 70%);
          pointer-events:none;z-index:0;
          transform:translate(-50%,-50%);
        }
        body.cursor-hover #cursor      { width:6px;height:6px; }
        body.cursor-hover #cursor-ring { width:54px;height:54px;border-color:var(--accent); }
      `}</style>
      <div id="cursor"      ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef}   />
      <div id="mouse-glow"  ref={glowRef}   />
    </>
  );
}
