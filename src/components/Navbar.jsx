// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const NAV_ITEMS = [
  { name: 'Home',         href: '#home' },
  { name: 'About',        href: '#about' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Experience',   href: '#experience' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact',      href: '#contact' },
]

const Navbar = () => {
  const { config } = useTheme()
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId,   setActiveId]   = useState('home')

  /* ── Scroll glass effect ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* ── IntersectionObserver — real-time active section ── */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(i => i.href.slice(1))
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-50% 0px -45% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5 !bg-transparent !border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold theme-t"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: .96 }}
        >
          {config.logoText}
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={`nav-link theme-t ${activeId === item.href.slice(1) ? 'active' : ''}`}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setActiveId(item.href.slice(1))}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden theme-t"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setMobileOpen(o => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 theme-card rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link py-2 theme-t ${activeId === item.href.slice(1) ? 'active' : ''}`}
                  onClick={() => { setActiveId(item.href.slice(1)); setMobileOpen(false) }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
