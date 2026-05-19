"use client";

const items = [
  "Full-Stack Developer",
  "UI/UX Design",
  "Creative Direction",
  "Motion Design",
  "Product Engineering",
  "Brand Identity",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-[18px]"
      style={{
        borderTop:    "1px solid var(--dark-gray)",
        borderBottom: "1px solid var(--dark-gray)",
        background:   "var(--charcoal)",
      }}
    >
      <div
        className="flex gap-[60px] whitespace-nowrap w-max"
        style={{ animation: "marquee 25s linear infinite" }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-light italic tracking-[0.05em] flex items-center gap-[60px]"
            style={{ fontSize: "1.1rem", color: "var(--muted)" }}
          >
            {item}
            <span style={{ fontStyle: "normal", color: "var(--accent-dim)" }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
