# Portfolio V2 — Multi-Theme System

A production-ready React portfolio with 4 fully animated, interactive, switchable themes.

## What's New in V2

- ✅ Larger, readable font sizes across all sections
- ✅ IntersectionObserver-based active nav (updates in real-time while scrolling)
- ✅ Theme-specific interactive elements per section
- ✅ Original content preserved exactly from your source files
- ✅ Click-anywhere ripple effect on Hero (unique per theme)
- ✅ All 4 themes: Ocean Deep · Solar System · Deep Forest · Solar Flare

## Themes

| Theme | Accent | Font | Background FX |
|-------|--------|------|---------------|
| 🌊 Ocean Deep   | `#00c9d4` | Cormorant Garamond | Sine waves + bubbles + bioluminescence |
| 🪐 Solar System | `#a855f7` | Orbitron + Raleway | Orbiting planets + star field + nebula |
| 🌿 Deep Forest  | `#4ade80` | Playfair Display   | Falling leaves + god-rays + mist |
| ☀️ Solar Flare  | `#f97316` | Cormorant + Raleway| Corona rays + embers + heat shimmer |

## Interactive Elements Per Theme

| Theme | Hero | Cards | Sections |
|-------|------|-------|---------|
| Ocean | Click for ripples + depth ruler | Sonar-style glow border | Wave lines animate behind |
| Space | Click to launch star bursts + coordinate HUD | Orbit ring decoration | Planet system canvas |
| Forest | Click for leaf ripples + growth badges | Breathing border animation | God-ray light shafts |
| Solar | Click for fire ripples + temperature gauge | Top-edge heat shimmer | Corona rays from below |

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
portfolio-v2/
├── index.html                        ← data-theme="ocean" pre-set
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                     ← All 4 theme CSS variable blocks + readable font scale
    ├── hooks/
    │   └── useTheme.js               ← Theme state, localStorage persistence
    └── components/
        ├── ThemeCanvas.jsx           ← Canvas animations (all 4 themes) + ripple system
        ├── ThemeSwitcher.jsx         ← Floating FAB bottom-right
        ├── Navbar.jsx                ← IntersectionObserver active-section tracking
        ├── Hero.jsx                  ← Original content + theme-specific decorations
        ├── About.jsx                 ← Original content
        ├── Sections.jsx              ← Skills, Experience, Projects, Achievements, Contact
        └── Footer.jsx                ← Original content
```

## Add Your Profile Photo

Place your photo at: `public/profile.jpg`

## How Theme Switching Works

1. `useTheme()` writes `data-theme="ocean|space|forest|solar"` to `<html>`
2. CSS variables in `index.css` are scoped per `[data-theme]` selector
3. Every component reads colors + fonts via CSS variables → all update instantly
4. `ThemeCanvas.jsx` reinitialises its particle system on theme change
5. Selected theme is saved to `localStorage` and restored on next visit

## Font Scale (readable at a glance)

| Element | Size |
|---------|------|
| H1 (hero name) | `clamp(2.8rem, 7vw, 5.5rem)` |
| H2 (section heading) | `clamp(2rem, 4.5vw, 3rem)` |
| H3 (card title) | `clamp(1.35rem, 2.5vw, 1.75rem)` |
| Body paragraph | `clamp(1rem, 1.5vw, 1.125rem)` |
| Nav links | `0.95rem` |
| Tags / pills | `0.8–0.9rem` |

## Dependencies

- `react` + `react-dom` ^18
- `framer-motion` ^11
- `lucide-react` ^0.383
- `tailwindcss` ^3.4
- `vite` ^5.4
