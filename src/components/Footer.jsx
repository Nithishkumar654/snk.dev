// src/components/Footer.jsx — original content preserved
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const socialLinks = [
  { icon: Github,   href: 'https://github.com/Nithishkumar654',          label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/nithishkumars654',    label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:nithishkumar.s654@gmail.com',          label: 'Email' },
]
const cpLinks = [
  { name: 'CodeForces', href: 'https://codeforces.com/profile/nithish654' },
  { name: 'CodeChef',   href: 'https://www.codechef.com/users/nithish654' },
  { name: 'LeetCode',   href: 'https://leetcode.com/u/nithish_654/' },
  { name: 'AtCoder',    href: 'https://atcoder.jp/users/nithish654' },
]

const Footer = () => {
  const { config } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer py-16 px-6 relative overflow-hidden theme-t">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'var(--accent-dim)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="space-y-4">
            <h3 className="text-xl font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>Nithish Kumar</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '.95rem', lineHeight: 1.7 }}>
              Full-Stack Developer & Competitive Programmer crafting elegant solutions to complex problems.
            </p>
            <div className="flex gap-2 pt-2">
              {socialLinks.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg theme-card flex items-center justify-center theme-t"
                  style={{ color: 'var(--text-secondary)' }}
                  whileHover={{ scale: 1.1, color: 'var(--accent)' }} aria-label={s.label}>
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: .1 }} className="space-y-4">
            <h4 className="font-semibold theme-t" style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Navigation</h4>
            <ul className="space-y-2">
              {['About','Skills','Experience','Projects','Achievements'].map(item => (
                <li key={item}>
                  <motion.a href={`#${item.toLowerCase()}`}
                    className="flex items-center gap-2 theme-t"
                    style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}
                    whileHover={{ x: 5, color: 'var(--accent)' }}>{item}</motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CP Profiles */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: .2 }} className="space-y-4">
            <h4 className="font-semibold theme-t" style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>CP Profiles</h4>
            <ul className="space-y-2">
              {cpLinks.map(link => (
                <li key={link.name}>
                  <motion.a href={link.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 group theme-t"
                    style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}
                    whileHover={{ x: 5, color: 'var(--accent-bright)' }}>
                    {link.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get in touch */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: .3 }} className="space-y-4">
            <h4 className="font-semibold theme-t" style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:nithishkumar.s654@gmail.com"
                className="flex items-center gap-2 theme-t"
                style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'}>
                <Mail size={16} />Email me
              </a>
              <a href="https://linkedin.com/in/nithishkumars654" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 theme-t"
                style={{ color: 'var(--text-secondary)', fontSize: '.95rem' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'}>
                <Linkedin size={16} />Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border-card), transparent)', margin: '2rem 0' }} />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: 'var(--text-muted)', fontSize: '.9rem' }}>
            © {year} Nithish Kumar Sirigadde. Made with{' '}
            <Heart size={14} className="inline" style={{ color: 'var(--accent)' }} /> and React.
          </p>
          <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-lg theme-card flex items-center justify-center theme-t"
            style={{ color: 'var(--text-secondary)' }}
            whileHover={{ scale: 1.1, color: 'var(--accent)' }} whileTap={{ scale: .95 }} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>

        <div className="mt-6 text-center" style={{ color: 'var(--text-muted)', fontSize: '.8rem' }}>
          Built with React • Styled with Tailwind CSS • Animated with Framer Motion
        </div>
      </div>
    </footer>
  )
}

export default Footer
