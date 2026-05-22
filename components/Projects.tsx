"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: number;
  num: string;
  title: string;
  image: string;
  category: string;
  demo?: string;
  github?: string;
  bg: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    num: "01",
    title: "RentHub Ecommerce Website",
    image: "/RentHub-dark.png",
    category: "Web App",
    demo: "https://rent-hub-plum.vercel.app/",
    github: "https://github.com/kuldeep1324/RentHub",
    bg: "#1a1a1a",
  },
  {
    id: 2,
    num: "02",
    title: "Gaming Posters Collection",
    image: "GamingPosters.png",
    category: "Design",
    demo: "https://canva.link/24lp86dwu9ttqp8",
    bg: "#1a1714",
  },
  {
    id: 3,
    num: "03",
    title: "Upcoming Project",
    image: "/portfolio-cover-page.png",
    category: "Mobile",
    demo: "#",
    github: "#",
    bg: "#161a1a",
  },
];

const filters = ["All", "Web App", "Design", "Mobile"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === active);

  return (
    <section id="projects" className="py-[120px] px-[60px]">
      <div className="flex items-end justify-between mb-20">
        <motion.h2
          className="font-sans font-bold leading-none"
          style={{
            fontSize: "clamp(36px,5vw,72px)",
            letterSpacing: "-0.03em",
            color: "var(--white)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Selected
          <br />
          Work
        </motion.h2>

        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              className="font-mono text-[0.68rem] tracking-[0.15em] uppercase px-[18px] py-2.5 border transition-all duration-300"
              style={{
                background:
                  active === filter ? "var(--soft-white)" : "transparent",
                color: active === filter ? "var(--black)" : "var(--muted)",
                borderColor:
                  active === filter ? "var(--soft-white)" : "var(--dark-gray)",
              }}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(3, minmax(240px, 1fr))",
          gap: "12px",
          maxWidth: "1380px",
          margin: "0 auto",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              className="project-card relative overflow-hidden group"
              style={{ aspectRatio: "16 / 10", minHeight: "220px", cursor: "none" }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.08]"
                style={{
                  backgroundColor: project.bg,
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "scale(1.08)",
                  filter: "blur(6px) saturate(1.05) contrast(1.02) brightness(0.88)",
                }}
              />

              {/* Glossy reflection layer */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-75"
                style={{
                  opacity: 0.62,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,.36) 2%, rgba(255,255,255,.16) 13%, rgba(255,255,255,0) 38%), radial-gradient(circle at 82% 20%, rgba(255,255,255,.18), rgba(255,255,255,0) 46%)",
                  mixBlendMode: "screen",
                }}
              />

              {/* Soft glass edge to increase sheen without changing theme */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,.08), inset 0 -36px 80px rgba(0,0,0,.28)",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,.58), rgba(10,10,10,.16))",
                }}
              />

              <span
                className="absolute top-4 left-4 font-mono text-[0.62rem] tracking-[0.2em] z-10"
                style={{ color: "var(--accent-dim)" }}
              >
                {project.num}
              </span>

              <div className="absolute inset-0 z-10 flex items-center justify-center px-5 pointer-events-none">
                <div
                  className="font-sans font-bold text-center"
                  style={{
                    color: "var(--white)",
                    fontSize: "clamp(1rem,1.85vw,2rem)",
                    lineHeight: 1.2,
                    background: "rgba(10,10,10,.68)",
                    border: "1px solid rgba(255,255,255,.07)",
                    borderRadius: "16px",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    padding: "16px 24px",
                    maxWidth: "88%",
                  }}
                >
                  {project.title}
                </div>
              </div>

              <div
                className="absolute inset-0 z-20 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,10,.72), rgba(10,10,10,.18))",
                }}
              >
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="font-mono text-[0.62rem] tracking-[0.15em] uppercase no-underline border-b pb-0.5 transition-colors duration-300"
                    style={{ color: "var(--soft-white)", borderColor: "var(--mid-gray)" }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = "var(--accent)";
                      event.currentTarget.style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = "var(--soft-white)";
                      event.currentTarget.style.borderColor = "var(--mid-gray)";
                    }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="font-mono text-[0.62rem] tracking-[0.15em] uppercase no-underline border-b pb-0.5 transition-colors duration-300"
                    style={{ color: "var(--soft-white)", borderColor: "var(--mid-gray)" }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = "var(--accent)";
                      event.currentTarget.style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = "var(--soft-white)";
                      event.currentTarget.style.borderColor = "var(--mid-gray)";
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          #projects .grid {
            grid-template-columns: repeat(2, minmax(220px, 1fr)) !important;
          }
        }

        @media (max-width: 900px) {
          #projects {
            padding: 80px 24px !important;
          }

          #projects .grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          #projects .project-card {
            min-height: 210px !important;
          }
        }
      `}</style>
    </section>
  );
}
