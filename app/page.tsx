"use client";

import { useEffect } from "react";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Lenis smooth scroll — loaded dynamically to avoid SSR issues
  useEffect(() => {
    let lenis: any;
    (async () => {
      const LenisModule = await import("lenis");
      const Lenis = LenisModule.default;
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    })();
    return () => lenis?.destroy();
  }, []);

  return (
    <main>
      <Cursor />
      <Loader />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
