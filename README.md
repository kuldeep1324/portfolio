# Aryan Mehta — Premium Portfolio

A handcrafted premium portfolio built with **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scroll.

---

## 🚀 Quick Start

### Prerequisites
- Node.js **18+**
- npm or yarn

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, CSS variables, noise texture
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── Cursor.tsx           # Custom animated cursor + mouse glow
│   ├── Loader.tsx           # Cinematic loading screen with counter
│   ├── Navbar.tsx           # Sticky nav with mobile menu
│   ├── Hero.tsx             # Full-screen hero with parallax + scroll indicator
│   ├── Marquee.tsx          # Infinite scrolling marquee
│   ├── About.tsx            # Split-screen about with animated counters
│   ├── Skills.tsx           # Interactive skill grid with animated bars
│   ├── Projects.tsx         # Filterable project showcase with hover overlays
│   ├── Experience.tsx       # Animated vertical timeline
│   ├── Testimonials.tsx     # Floating testimonial cards
│   ├── Contact.tsx          # Contact form + social links
│   └── Footer.tsx           # Minimal elegant footer
├── public/
│   └── resume.pdf           # Add your resume here
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ Customization

### 1. Personal Info
Edit `components/Hero.tsx` — change name and tagline.

### 2. Projects
Edit the `allProjects` array in `components/Projects.tsx`.

### 3. Experience
Edit the `timeline` array in `components/Experience.tsx`.

### 4. Skills
Edit the `skills` array in `components/Skills.tsx`.

### 5. Testimonials
Edit the `testimonials` array in `components/Testimonials.tsx`.

### 6. Contact / Social Links
Edit the `socials` array in `components/Contact.tsx`.

### 7. Colors
All colors are CSS variables in `app/globals.css` under `:root {}`.

### 8. Resume
Drop your resume PDF at `public/resume.pdf`.

---

## 🎨 Design System

| Token          | Value     | Usage                    |
|----------------|-----------|--------------------------|
| `--black`      | `#0a0a0a` | Page background          |
| `--charcoal`   | `#141414` | Section backgrounds      |
| `--graphite`   | `#1e1e1e` | Cards, hover states      |
| `--accent`     | `#c8b89a` | Highlights, bars, dots   |
| `--soft-white` | `#f0ede8` | Body text, CTAs          |
| `--warm-gray`  | `#c4c0bb` | Descriptive text         |
| `--muted`      | `#6b6b6b` | Labels, subtitles        |

**Fonts:**
- **Cormorant Garamond** — Display / italic text
- **Syne** — Headings, UI labels
- **DM Mono** — Monospace tags, nav links

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — All animations and transitions
- **Lenis** — Ultra-smooth scroll

---

## 📱 Responsive

Fully responsive across mobile, tablet, and desktop. All sections adapt gracefully with maintained premium feel.

---

## 📄 License

MIT — free to use and customize for personal portfolios.
