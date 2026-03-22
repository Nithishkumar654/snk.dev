// src/components/Sections.jsx
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Database,
  Globe,
  Layers,
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  ArrowRight,
  Trophy,
  Star,
  Award,
  Zap,
  Mail,
  Linkedin,
} from "lucide-react";

// ─────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────
const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    icon: Palette,
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot",
      "RESTful APIs",
      ".NET",
      "Flask",
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Azure Cosmos DB", "Firebase"],
  },
  {
    icon: Globe,
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Azure", "Vercel", "Render"],
  },
  {
    icon: Layers,
    title: "Competitive Programming",
    skills: [
      "Data Structures",
      "Advanced Algorithms",
      "Dynamic Programming",
      "Graph Theory",
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-16 px-6 section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="section-label justify-center">Skills</div>
        <h2 className="section-heading">
          My <span className="hl">Skills</span>
        </h2>
        <p
          className="mt-3"
          style={{ color: "var(--text-secondary)", fontSize: "1rem" }}
        >
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="theme-card p-5 rounded-xl group"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              style={{
                background: "var(--accent-dim)",
                color: "var(--accent)",
                border: "1px solid var(--border-card)",
              }}
            >
              <cat.icon size={20} />
            </div>
            <h3
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
                fontSize: "1.2rem",
              }}
            >
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((sk) => (
                <span key={sk} className="skill-chip">
                  {sk}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────
// EXPERIENCE — horizontal split card design
// ─────────────────────────────────────────────────────
const experiences = [
  {
    company: "Chubb",
    position: "Software Engineer",
    duration: "Jan 2025 - Present",
    location: "Hyderabad, India",
    type: "Full-Time",
    description:
      "Building frontend applications using DuckCreek platform for insurance policy creation. Developing UI components and implementing new features for underwriter and customer-facing applications.",
    highlights: ["Frontend Development", "DuckCreek"],
  },
];
const mentoring = [
  {
    organization: "Smart Interviews",
    role: "DSA Mentor",
    duration: "Feb 2024 - Nov 2024",
    highlights:
      "Mentored 250+ students • Global Rank 1 Leaderboard • Diamond Certified Smart Coder",
  },
];

const Experience = () => (
  <section id="experience" className="py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="section-label justify-center">Experience</div>
        <h2 className="section-heading">
          Professional <span className="hl">Experience</span>
        </h2>
        <p
          className="mt-3"
          style={{ color: "var(--text-secondary)", fontSize: "1rem" }}
        >
          My journey in the tech industry
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {/* Full-Time */}
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            {/* Timeline column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 0 3px var(--accent-dim)",
                  marginTop: "5px",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  width: "1px",
                  flex: 1,
                  minHeight: "60px",
                  background: "var(--border-card)",
                  marginTop: "6px",
                }}
              />
            </div>

            {/* Card */}
            <div
              className="theme-card"
              style={{
                flex: 1,
                borderRadius: "12px",
                padding: "14px 16px",
                transition: "border-color .3s, box-shadow .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.boxShadow = "var(--glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <div>
                  <h4
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-display)",
                      margin: 0,
                    }}
                  >
                    {exp.position}
                  </h4>
                  <p
                    style={{
                      color: "var(--accent)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      margin: "3px 0 0",
                    }}
                  >
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span
                  className="theme-pill"
                  style={{ fontSize: "0.7rem", flexShrink: 0 }}
                >
                  {exp.type}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                  marginBottom: "10px",
                }}
              >
                <Calendar size={12} />
                {exp.duration}
              </div>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  margin: "0 0 10px",
                }}
              >
                {exp.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.highlights.map((h) => (
                  <span
                    key={h}
                    className="theme-pill"
                    style={{ fontSize: "0.72rem" }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Mentoring */}
        {mentoring.map((m, i) => (
          <motion.div
            key={m.organization}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1 }}
            style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
          >
            {/* Timeline column — no tail on last item */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--accent-bright)",
                  boxShadow: "0 0 0 3px var(--accent-dim)",
                  marginTop: "5px",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Card */}
            <div
              className="theme-card"
              style={{
                flex: 1,
                borderRadius: "12px",
                padding: "14px 16px",
                transition: "border-color .3s, box-shadow .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.boxShadow = "var(--glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <div>
                  <h4
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-display)",
                      margin: 0,
                    }}
                  >
                    {m.role}
                  </h4>
                  <p
                    style={{
                      color: "var(--accent-bright)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      margin: "3px 0 0",
                    }}
                  >
                    {m.organization}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                  marginBottom: "10px",
                }}
              >
                <Calendar size={12} />
                {m.duration}
              </div>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {m.highlights}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────
// PROJECTS — compact 2×2 grid, smaller cards
// ─────────────────────────────────────────────────────
const projects = [
  {
    title: "Cht Vth Me",
    description:
      "Real-time messaging platform with user authentication & live chat. Built with React, Socket.io and MongoDB.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=280&fit=crop",
    github: "https://github.com/Nithishkumar654/ChatApp",
    live: "https://chtvthme.onrender.com",
  },
  {
    title: "Voice Bridge",
    description:
      "Real-time speech transliteration supporting 100+ languages with instant translation.",
    tags: ["React", "Web Speech API", "Real-time"],
    image:
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=280&fit=crop",
    github: "https://github.com/Nithishkumar654/VoiceBridge",
    live: "https://voicebridge-omega.vercel.app/",
  },
  {
    title: "Code Quill",
    description:
      "Online code editor with I/O management, multi-language support for competitive programming.",
    tags: ["React", "Code Execution", "Multi-Language"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=280&fit=crop",
    github: "https://github.com/Nithishkumar654/CodeQuill",
    live: "https://codequill-m8ak.onrender.com",
  },
  {
    title: "Vehicle Management",
    description:
      "Enterprise rental system with Spring Boot — admin dashboard, inventory tracking, email notifications.",
    tags: ["Java", "Spring Boot", "MySQL", "JPA"],
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=280&fit=crop",
    github: "https://github.com/Nithishkumar654/VehicleManagementSystem",
    live: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-16">
    <div className="max-w-6xl mx-auto text-lg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="section-label justify-center">Projects</div>
        <h2 className="section-heading">
          Featured <span className="hl">Projects</span>
        </h2>
        <p
          className="mt-3"
          style={{ color: "var(--text-secondary)", fontSize: "1rem" }}
        >
          Full-stack applications and innovative solutions I've built
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group px-10"
          >
            <div className="project-card h-full flex flex-col">
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "150px" }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--bg-primary), transparent)",
                    opacity: 0.7,
                  }}
                />
              </div>
              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3
                  className="font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                    fontSize: "1.2rem",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="mb-2 flex-1"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                    lineHeight: 1.55,
                  }}
                >
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="theme-pill"
                      style={{ fontSize: "0.6rem", padding: "0.15rem 0.5rem" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.78rem",
                    }}
                    whileHover={{ x: 2 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                  </motion.a>
                  {p.live !== "#" && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.78rem",
                      }}
                      whileHover={{ x: 2 }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <ExternalLink size={13} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <motion.a
          href="https://github.com/Nithishkumar654"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
          style={{ color: "var(--accent)", fontSize: "0.95rem" }}
          whileHover={{ scale: 1.05 }}
        >
          View more on GitHub <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────────────
const achievements = [
  {
    icon: Trophy,
    title: "IICPC Regionalist 2025",
    description: "Prelims Rank: 187 | Regional Rank: 102",
  },
  {
    icon: Star,
    title: "Meta Hacker Cup 2024",
    description: "Global Rank 3,331 out of 5,000 in Round 2",
  },
  {
    icon: Award,
    title: "Global Rank 1 — Smart Interviews",
    description: "Highest contributor on DSA Leaderboard",
  },
  {
    icon: Zap,
    title: "CP Ratings",
    description:
      "CodeForces Expert (1741) • LeetCode Guardian (2306) • CodeChef 5★ (2017)",
  },
];
const hackathons = [
  { title: "Fosterate Hackathon '24", position: "Winner" },
  { title: "Chubb Chess Tournament 2025", position: "Runner-up" },
  { title: "VNR Design-a-thon '24", position: "Runner-Up" },
  { title: "CodeNox 2k24", position: "Runner-Up" },
  { title: "Turing Cup 2k25", position: "Top 10" },
  { title: "VJ Hackathon '22", position: "Finalist" },
  { title: "Codekaze Sep '23", position: "Finalist (AIR: 2623)" },
];
const cpPlatforms = [
  {
    name: "CodeForces",
    rating: "Expert • 1741",
    href: "https://codeforces.com/profile/nithish654",
  },
  {
    name: "CodeChef",
    rating: "★★★★★ • 2017",
    href: "https://www.codechef.com/users/nithish654",
  },
  {
    name: "LeetCode",
    rating: "Guardian • 2306",
    href: "https://leetcode.com/u/nithish_654/",
  },
  {
    name: "AtCoder",
    rating: "4 Kyu • 1247",
    href: "https://atcoder.jp/users/nithish654",
  },
];
const certifications = [
  { title: "Certificate of Mentorship", issuer: "Smart Interviews" },
  { title: "Software Engineer Certificate", issuer: "HackerRank" },
  { title: "Diamond Certified Smart Coder", issuer: "Smart Interviews" },
];

const Achievements = () => (
  <section id="achievements" className="py-16 px-6 section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="section-label justify-center">Achievements</div>
        <h2 className="section-heading">
          Awards & <span className="hl">Achievements</span>
        </h2>
        <p
          className="mt-3"
          style={{ color: "var(--text-secondary)", fontSize: "1rem" }}
        >
          Recognition and accomplishments in competitive programming and
          development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="achievement-card group"
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
              style={{
                background: "var(--accent-dim)",
                color: "var(--accent)",
                border: "1px solid var(--border-card)",
              }}
            >
              <a.icon size={22} />
            </div>
            <h3
              className="font-bold mb-1.5"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
                fontSize: "1.05rem",
              }}
            >
              {a.title}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="theme-card rounded-xl p-5"
        >
          <h3
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
              fontSize: "1.3rem",
            }}
          >
            Competitions & Events
          </h3>
          <div className="space-y-2">
            {hackathons.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-2 rounded-lg"
                style={{ transition: "background .2s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                >
                  {h.title}
                </span>
                <span
                  className="theme-pill"
                  style={{
                    color: "var(--accent)",
                    flexShrink: 0,
                    marginLeft: "0.5rem",
                    fontSize: "0.75rem",
                  }}
                >
                  {h.position}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="theme-card rounded-xl p-5"
        >
          <h3
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
              fontSize: "1.3rem",
            }}
          >
            CP Platforms
          </h3>
          <div className="space-y-3">
            {cpPlatforms.map((cp, i) => (
              <motion.a
                key={cp.name}
                href={cp.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center justify-between p-3 rounded-lg"
                style={{
                  border: "1px solid var(--border-card)",
                  display: "flex",
                  transition: "border-color .25s",
                }}
                whileHover={{ x: 3 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-card)";
                }}
              >
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--text-primary)", fontSize: "1rem" }}
                  >
                    {cp.name}
                  </h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {cp.rating}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  style={{ color: "var(--text-muted)", flexShrink: 0 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="theme-card rounded-xl p-5"
      >
        <h3
          className="font-bold mb-4"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
            fontSize: "1.3rem",
          }}
        >
          Certifications
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-3 rounded-lg"
              style={{
                border: "1px solid var(--border-card)",
                transition: "border-color .25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card)";
              }}
            >
              <h4
                className="font-semibold mb-1"
                style={{ color: "var(--text-primary)", fontSize: "0.95rem" }}
              >
                {c.title}
              </h4>
              <p
                style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}
              >
                {c.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────
const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "nithishkumar.s654@gmail.com",
    link: "mailto:nithishkumar.s654@gmail.com",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out my projects",
    link: "https://github.com/Nithishkumar654",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with me",
    link: "https://linkedin.com/in/nithishkumars654",
  },
];

const Contact = () => (
  <section id="contact" className="py-16 px-6 relative overflow-hidden">
    <div
      className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
      style={{ background: "var(--accent-dim)" }}
    />
    <div
      className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
      style={{ background: "var(--accent-dim)", opacity: 0.5 }}
    />
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="section-label justify-center">Contact</div>
        <h2 className="section-heading">
          Let's <span className="hl">Connect</span>
        </h2>
        <p
          className="mt-3 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)", fontSize: "1rem" }}
        >
          Got a project in mind? Want to collaborate or just say hello? I'm
          always excited to connect!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-5">
        {contactMethods.map((m, i) => (
          <motion.a
            key={m.title}
            href={m.link}
            target={m.link.startsWith("http") ? "_blank" : undefined}
            rel={m.link.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="contact-method h-full">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform hover:scale-110"
                style={{
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  border: "1px solid var(--border-card)",
                }}
              >
                <m.icon size={28} />
              </div>
              <h3
                className="font-bold mb-1.5"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                  fontSize: "1.25rem",
                }}
              >
                {m.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                {m.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export { Skills, Experience, Projects, Achievements, Contact };
