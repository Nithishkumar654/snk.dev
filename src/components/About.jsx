// src/components/About.jsx — original content preserved exactly
import { motion } from "framer-motion";
import { Target, Zap, Sparkles } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const About = () => {
  const { theme } = useTheme();

  const stats = [
    { icon: Target, value: "IICPC", label: "2025", description: "Regionalist" },
    {
      icon: Zap,
      value: "1741",
      label: "CodeForces",
      description: "Expert Rating",
    },
    {
      icon: Sparkles,
      value: "250+",
      label: "Students",
      description: "Mentored at SmartInterviews",
    },
  ];

  const highlights = [
    "Code crafted with intention",
    "Algorithms at scale",
    "Competitive mindset",
  ];

  return (
    <section
      id="about"
      className="py-16 px-6 relative overflow-hidden section-alt theme-t"
    >
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent-dim)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent-dim)", opacity: 0.6 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label justify-center">About</div>
          <h2 className="section-heading theme-t">
            About <span className="hl">Me</span>
          </h2>
          <p
            className="mt-4 max-w-3xl mx-auto theme-t"
            style={{ color: "var(--text-secondary)" }}
          >
            Software Engineer • Full-Stack Developer • Competitive Programmer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div
              className="absolute -inset-6 rounded-3xl blur-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-dim), transparent)",
              }}
            />
            <div
              className="relative w-4/5 rounded-3xl overflow-hidden aspect-square theme-t"
              style={{
                border: "2px solid var(--border-card)",
                boxShadow: "var(--glow)",
              }}
            >
              <div
                className="aspect-square overflow-hidden"
                style={{ background: "var(--bg-secondary)" }}
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQE6Z4Mele2DKw/profile-displayphoto-scale_400_400/B56ZxHSP4nIYAg-/0/1770722513809?e=1775692800&v=beta&t=0nYTs01iKumlyc3qn5F5iLF3lMXG9GJOQY8BdLGMnds"
                  alt="Nithish Kumar Sirigadde"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--bg-primary), transparent 50%)",
                    opacity: 0.55,
                  }}
                />
              </div>
              <div
                className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full theme-card text-sm"
                style={{
                  color: "var(--accent)",
                  border: "1px solid var(--border-card)",
                  fontFamily: "var(--font-body)",
                }}
              >
                📍 Hyderabad, India
              </div>
            </div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-dim), transparent)",
              }}
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-dim), transparent)",
                opacity: 0.6,
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="font-bold mb-4 theme-t"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                Passionate about
                <br />
                <span className="gradient-text">
                  Problem Solving & Development
                </span>
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Hi! I'm Nithish Kumar Sirigadde, a Software Engineer at Chubb
                with a strong passion for building scalable applications and
                solving complex algorithmic challenges.
              </p>
            </div>
            <div className="space-y-4">
              <p style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  Currently:{" "}
                </span>
                Software Engineer at Chubb, building frontend applications using
                DuckCreek to create insurance policies for underwriters and
                customers.
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                <span
                  style={{ color: "var(--accent-bright)", fontWeight: 600 }}
                >
                  Passion:{" "}
                </span>
                Solving complex problems through code and competitive
                programming. Strong foundation in data structures and algorithms
                with a record of achievements across multiple competitive
                platforms.
              </p>
            </div>
            <div
              className="space-y-3 pt-4"
              style={{ borderTop: "1px solid var(--border-card)" }}
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 6px var(--accent)",
                    }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>{h}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card theme-t group"
            >
              <div className="stat-glow-orb" />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-lg theme-t group-hover:scale-110 transition-transform"
                  style={{
                    background: "var(--accent-dim)",
                    color: "var(--accent)",
                    border: "1px solid var(--border-card)",
                  }}
                >
                  <s.icon size={22} />
                </div>
              </div>
              <div
                className="text-3xl font-bold mb-1 gradient-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.value}
              </div>
              <div
                className="font-semibold theme-t"
                style={{ color: "var(--text-secondary)", fontSize: ".875rem" }}
              >
                {s.label}
              </div>
              <div
                className="mt-1 theme-t"
                style={{ color: "var(--text-muted)", fontSize: ".8rem" }}
              >
                {s.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
