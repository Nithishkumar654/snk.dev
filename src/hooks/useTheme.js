// src/hooks/useTheme.js  ← keep as .js, no JSX in this file
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

export const THEMES = {
  ocean: {
    id: 'ocean', label: 'Ocean Deep', icon: '🌊', swatch: '#00c9d4',
    logoText: '~ nithish.dev',
    heroBadge: 'Software Engineer @Chubb • Deep under the Ocean',
    heroStats: 'IICPC Regionalist 2025 • Expert on CodeForces (1741) • Guardian on LeetCode (2306) • 5★ on CodeChef (2017)',
    interactiveHint: 'Click anywhere to create ripples',
  },
  space: {
    id: 'space', label: 'Solar System', icon: '🪐', swatch: '#a855f7',
    logoText: '⬡ nithish.sys',
    heroBadge: 'Software Engineer @Chubb • Navigating the Cosmos',
    heroStats: 'IICPC Regionalist 2025 • Expert on CodeForces (1741) • Guardian on LeetCode (2306) • 5★ on CodeChef (2017)',
    interactiveHint: 'Click to launch stars',
  },
  forest: {
    id: 'forest', label: 'Deep Forest', icon: '🌿', swatch: '#4ade80',
    logoText: '✦ nithish.leaf',
    heroBadge: 'Software Engineer @Chubb • Rooted in Craft',
    heroStats: 'IICPC Regionalist 2025 • Expert on CodeForces (1741) • Guardian on LeetCode (2306) • 5★ on CodeChef (2017)',
    interactiveHint: 'Hover cards to bloom',
  },
  solar: {
    id: 'solar', label: 'Solar Flare', icon: '☀️', swatch: '#f97316',
    logoText: '◉ nithish.sol',
    heroBadge: 'Software Engineer @Chubb • Forged in Fire',
    heroStats: 'IICPC Regionalist 2025 • Expert on CodeForces (1741) • Guardian on LeetCode (2306) • 5★ on CodeChef (2017)',
    interactiveHint: 'Click to ignite sparks',
  },
}

// ── Single shared context ──────────────────────────────
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const saved = typeof localStorage !== 'undefined'
      ? localStorage.getItem('portfolio-theme')
      : null
    return (saved && THEMES[saved]) ? saved : 'ocean'
  })

  const setTheme = useCallback((id) => {
    if (!THEMES[id]) return
    setThemeState(id)
    document.documentElement.setAttribute('data-theme', id)
    localStorage.setItem('portfolio-theme', id)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, setTheme, config: THEMES[theme], allThemes: THEMES } },
    children
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
