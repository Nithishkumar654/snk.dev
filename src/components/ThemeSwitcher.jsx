// src/components/ThemeSwitcher.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

const ThemeSwitcher = () => {
  const { theme, setTheme, allThemes } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="theme-switcher">
      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-menu open"
            initial={{ opacity: 0, y: 10, scale: .95 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
            exit={{ opacity: 0, y: 10, scale: .95 }}
          >
            {Object.values(allThemes).map((t, i) => (
              <motion.div
                key={t.id}
                className={`theme-option ${theme === t.id ? 'active' : ''}`}
                custom={i}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.055 } }}
                onClick={() => { setTheme(t.id); setOpen(false) }}
                whileHover={{ x: -3 }} whileTap={{ scale: .97 }}
              >
                <div className="theme-swatch" style={{ background: t.swatch, boxShadow: `0 0 8px ${t.swatch}66` }} />
                <span className="theme-opt-name">{t.label}</span>
                {theme === t.id && <span style={{ marginLeft: 'auto', fontSize: '.7rem', color: 'rgba(255,255,255,.45)', letterSpacing: '.06em' }}>active</span>}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className={`theme-fab ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }} whileTap={{ scale: .93 }}
        aria-label="Switch theme"
        title="Change theme"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          {open ? '✕' : allThemes[theme]?.icon}
        </motion.span>
      </motion.button>
    </div>
  )
}

export default ThemeSwitcher
