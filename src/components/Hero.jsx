// src/components/Hero.jsx
// Original content preserved exactly. Theme-specific interactive elements added.
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Terminal, Zap } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { addRipple } from "./ThemeCanvas";

const floatingIcons = [
  { Icon: Code, delay: 0, x: "10%", y: "20%" },
  { Icon: Terminal, delay: 0.2, x: "85%", y: "15%" },
  { Icon: Zap, delay: 0.4, x: "90%", y: "60%" },
];

const Hero = () => {
  const { theme, config } = useTheme();
  const heroRef = useRef(null);

  const handleClick = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    addRipple(e.clientX - rect.left + rect.left, e.clientY, theme);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ background: "var(--accent-dim)", opacity: 0.8 }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: "var(--accent-dim)",
            opacity: 0.5,
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Floating icons — original */}
      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: x, top: y, color: "var(--accent)", opacity: 0.3 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      {/* ── THEME-SPECIFIC INTERACTIVE DECORATION ── */}
      {theme === "ocean" && <OceanDecoration />}
      {theme === "space" && <SpaceDecoration />}
      {theme === "forest" && <ForestDecoration />}
      {theme === "solar" && <SolarDecoration />}

      {/* Content — original text preserved */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-5 py-2.5 rounded-full glass mb-6 text-base font-medium"
            style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
          >
            {config.heroBadge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold mb-6 theme-t"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          Hi, I'm <span className="gradient-text">Nithish Kumar Sirigadde</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 theme-t"
          style={{
            fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Full-Stack Developer | Competitive Programmer | Problem Solver
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-2xl mx-auto theme-t"
          style={{
            fontSize: "clamp(.95rem, 1.8vw, 1.1rem)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          {config.heroStats}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center pointer-events-auto"
        >
          <motion.a
            href="#projects"
            className="btn-primary theme-t"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary theme-t"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Click hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 theme-t"
          style={{
            fontSize: ".75rem",
            letterSpacing: ".2em",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
            textTransform: "uppercase",
          }}
        >
          {config.interactiveHint}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color: "var(--text-muted)" }}
      >
        <ArrowDown size={26} />
      </motion.div>
    </section>
  );
};

/* ── Ocean: depth meter sidebar ── */
const OceanDecoration = () => (
  <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-start gap-6 pointer-events-none">
    {[
      ["0m", "surface"],
      ["200m", "twilight"],
      ["1000m", "midnight"],
      ["4000m", "abyss"],
    ].map(([d, l]) => (
      <div
        key={d}
        className="flex items-center gap-2"
        style={{
          color: "var(--text-muted)",
          fontFamily: "var(--font-body)",
          fontSize: ".7rem",
          letterSpacing: ".15em",
        }}
      >
        <div style={{ width: 8, height: 1, background: "var(--text-muted)" }} />
        <span>
          {d} — {l}
        </span>
      </div>
    ))}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 1,
        background: "var(--border-card)",
      }}
    />
  </div>
);

/* ── Space: coordinate readout ── */
const SpaceDecoration = () => (
  <div
    className="absolute right-8 bottom-24 hidden lg:block pointer-events-none"
    style={{
      fontFamily: "Courier New, monospace",
      fontSize: ".7rem",
      color: "var(--text-muted)",
      letterSpacing: ".12em",
      textAlign: "right",
      lineHeight: 2,
    }}
  >
    <div>RA: 23h 52m 46s</div>
    <div>DEC: +02° 08′</div>
    <div>SECTOR: 7G</div>
    <div style={{ color: "var(--accent)" }}>STATUS: ONLINE</div>
  </div>
);

/* ── Forest: season badge ── */
const ForestDecoration = () => (
  <div className="absolute right-8 top-1/3 hidden lg:flex flex-col gap-3 pointer-events-none">
    {["🌱 Grow", "🌿 Build", "🌳 Scale"].map((t, i) => (
      <motion.div
        key={t}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 + i * 0.2 }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: ".8rem",
          color: "var(--text-muted)",
          letterSpacing: ".12em",
        }}
      >
        {t}
      </motion.div>
    ))}
  </div>
);

/* ── Solar: temperature gauge ── */
const SolarDecoration = () => (
  <div className="absolute left-8 bottom-32 hidden lg:block pointer-events-none">
    <div
      style={{
        fontFamily: "Courier New, monospace",
        fontSize: ".65rem",
        color: "var(--text-muted)",
        letterSpacing: ".15em",
        lineHeight: 2,
      }}
    >
      <div>TEMP: 5,778 K</div>
      <div>OUTPUT: MAX</div>
      <div style={{ color: "var(--accent)" }}>INTENSITY: ████████</div>
    </div>
  </div>
);

export default Hero;
