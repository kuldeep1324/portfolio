"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [count, setCount]   = useState(0);
  const [done,  setDone]    = useState(false);
  const interval            = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCount(prev => {
        const next = Math.min(prev + Math.floor(Math.random() * 8) + 2, 100);
        if (next >= 100) {
          clearInterval(interval.current);
          setTimeout(() => setDone(true), 500);
        }
        return next;
      });
    }, 30);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[8000] flex flex-col items-center justify-center"
          style={{ background: "var(--black)" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
        >
          {/* vertical line */}
          <motion.div
            className="w-px mb-8"
            style={{ background: "var(--accent)" }}
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1], delay: 0.3 }}
          />

          {/* text */}
          <div className="overflow-hidden">
            <motion.p
              className="font-display text-sm tracking-[0.4em] uppercase"
              style={{ color: "var(--muted)" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1], delay: 0.8 }}
            >
              Crafting Experience
            </motion.p>
          </div>

          {/* counter */}
          <p
            className="absolute bottom-12 right-12 font-mono text-xs tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            {String(count).padStart(3, "0")}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
