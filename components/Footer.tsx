export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-[60px] py-10"
      style={{ background: "var(--black)", borderTop: "1px solid var(--dark-gray)" }}
    >
      <div className="font-display font-light tracking-[0.08em]" style={{ fontSize: "1.3rem", color: "var(--muted)" }}>
        A<span style={{ color: "var(--accent)" }}>.</span>Mehta
      </div>
      <p className="font-mono text-[0.65rem] tracking-[0.1em]" style={{ color: "var(--mid-gray)" }}>
        © {new Date().getFullYear()} Aryan Mehta. All rights reserved.
      </p>
      <a
        href="#"
        className="font-mono text-[0.65rem] tracking-[0.15em] uppercase no-underline border-b pb-0.5 transition-colors duration-300"
        style={{ color: "var(--muted)", borderColor: "var(--dark-gray)" }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
      >
        Back to Top ↑
      </a>

      <style>{`
        @media(max-width:900px){
          footer { flex-direction:column!important; gap:16px!important; text-align:center!important; padding:32px 24px!important; }
        }
      `}</style>
    </footer>
  );
}
