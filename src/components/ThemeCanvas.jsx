// src/components/ThemeCanvas.jsx
import { useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'

const R  = (a, b) => Math.random() * (b - a) + a
const RI = (a, b) => Math.round(R(a, b))

class Particle {
  constructor(W, H, theme) { this.W = W; this.H = H; this.theme = theme; this.reset(true) }
  reset(init = false) {
    this.x = R(0, this.W); this.angle = R(0, Math.PI * 2); this.spin = R(-0.025, 0.025)
    this.life = 0; this.maxLife = R(100, 280); this.type = RI(0, 3)
    switch (this.theme) {
      case 'ocean':
        this.r = R(2, 6); this.vx = R(-0.25, 0.25); this.vy = -R(0.15, 0.55)
        this.y = init ? R(0, this.H) : this.H + 10; break
      case 'space':
        this.r = R(0.5, 2.2); this.vx = R(-0.08, 0.08); this.vy = -R(0.03, 0.18)
        this.y = init ? R(0, this.H) : R(0, this.H); this.maxLife = R(200, 700); break
      case 'forest':
        this.r = R(4, 10); this.vx = R(-0.6, 0.6); this.vy = R(0.25, 0.8)
        this.y = init ? R(0, this.H) : -20; break
      case 'solar':
        this.r = R(1, 4); this.vx = R(-0.7, 0.7); this.vy = -R(0.4, 1.1)
        this.y = init ? R(0, this.H) : R(this.H * 0.6, this.H); this.maxLife = R(60, 140); break
    }
  }
  draw(ctx) {
    const t = this.life / this.maxLife
    const a = Math.sin(t * Math.PI)
    ctx.save()
    switch (this.theme) {
      case 'ocean':
        if (this.type === 0) {
          ctx.globalAlpha = a * 0.55; ctx.strokeStyle = '#00c9d4'; ctx.lineWidth = 0.7
          ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.stroke()
          ctx.globalAlpha = a * 0.2; ctx.fillStyle = 'rgba(200,240,255,.3)'
          ctx.beginPath(); ctx.arc(this.x - this.r * .3, this.y - this.r * .3, this.r * .35, 0, Math.PI * 2); ctx.fill()
        } else {
          ctx.globalAlpha = a * 0.7; ctx.fillStyle = this.type === 1 ? '#00ffe0' : '#00c9d4'
          ctx.shadowBlur = 8; ctx.shadowColor = '#00ffe0'
          ctx.beginPath(); ctx.arc(this.x, this.y, this.r * .45, 0, Math.PI * 2); ctx.fill()
          ctx.shadowBlur = 0
        }
        break
      case 'space':
        ctx.globalAlpha = a * (this.type === 0 ? 0.9 : 0.55)
        ctx.fillStyle = ['#fff','#a855f7','#e040fb','#60a5fa'][this.type % 4]
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill()
        if (this.type === 1 && this.r > 1.2) {
          ctx.globalAlpha = a * 0.1; ctx.beginPath(); ctx.arc(this.x, this.y, this.r * 4.5, 0, Math.PI * 2); ctx.fill()
        }
        break
      case 'forest':
        ctx.globalAlpha = a * 0.45; ctx.translate(this.x, this.y); ctx.rotate(this.angle)
        ctx.fillStyle = ['#4ade80','#86efac','#16a34a','#a3e635'][this.type % 4]
        if (this.type === 2) {
          ctx.beginPath(); ctx.ellipse(0, 0, this.r * .6, this.r * 2.2, 0, 0, Math.PI * 2); ctx.fill()
        } else {
          ctx.beginPath(); ctx.ellipse(0, 0, this.r * 1.6, this.r, 0, 0, Math.PI * 2); ctx.fill()
          ctx.globalAlpha *= .6; ctx.strokeStyle = 'rgba(22,163,74,.5)'; ctx.lineWidth = .4
          ctx.beginPath(); ctx.moveTo(-this.r * 1.4, 0); ctx.lineTo(this.r * 1.4, 0); ctx.stroke()
        }
        break
      case 'solar':
        ctx.globalAlpha = a * 0.72; ctx.fillStyle = ['#f97316','#fbbf24','#ea580c','#fff7ed'][this.type % 4]
        ctx.translate(this.x, this.y)
        if (this.type === 0) {
          ctx.rotate(this.angle); ctx.beginPath()
          for (let i = 0; i < 4; i++) {
            const ang = i * Math.PI / 2
            ctx.lineTo(Math.cos(ang) * this.r * 3, Math.sin(ang) * this.r * 3)
            ctx.lineTo(Math.cos(ang + Math.PI / 4) * this.r, Math.sin(ang + Math.PI / 4) * this.r)
          }
          ctx.closePath(); ctx.fill()
        } else {
          ctx.shadowBlur = 6; ctx.shadowColor = '#fbbf24'
          ctx.beginPath(); ctx.arc(0, 0, this.r, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0
        }
        break
    }
    ctx.restore()
  }
  update() {
    this.x += this.vx + Math.sin(this.life * 0.018) * 0.35; this.y += this.vy
    this.angle += this.spin; this.life++
    if (this.life > this.maxLife) this.reset(false)
  }
}

function drawOceanBG(ctx, W, H, f) {
  const g = ctx.createLinearGradient(0, 0, 0, H)
  g.addColorStop(0, 'rgba(10,61,92,.07)'); g.addColorStop(1, 'rgba(1,8,16,0)')
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)
  const waves = [
    { y: H * .13, amp: 5,   s: .007, fr: .005, a: .07 },
    { y: H * .14, amp: 4,   s: .009, fr: .007, a: .05 },
    { y: H * .155, amp: 6,  s: .005, fr: .004, a: .04 },
    { y: H * .17, amp: 3.5, s: .011, fr: .009, a: .025 },
  ]
  waves.forEach(({ y, amp, s, fr, a }) => {
    ctx.beginPath(); ctx.moveTo(0, y)
    for (let x = 0; x <= W; x += 4)
      ctx.lineTo(x, y + Math.sin(x * fr + f * s) * amp + Math.sin(x * fr * 2 + f * s * 1.3) * (amp * .4))
    ctx.strokeStyle = `rgba(0,180,220,${a})`; ctx.lineWidth = 1; ctx.stroke()
  })
}

function drawSpaceBG(ctx, W, H, f) {
  const nebulas = [
    { cx: W * .18, cy: H * .28, r: 190, c: 'rgba(124,58,237,.038)' },
    { cx: W * .82, cy: H * .62, r: 230, c: 'rgba(168,85,247,.03)' },
    { cx: W * .5,  cy: H * .12, r: 150, c: 'rgba(224,64,251,.024)' },
  ]
  nebulas.forEach(({ cx, cy, r, c }) => {
    const gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
    gr.addColorStop(0, c); gr.addColorStop(1, 'transparent')
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill()
  })
  const cx = W * .82, cy = H * .22
  const orbits = [
    { rx: 55,  ry: 16, sp: .006, off: 0,   sz: 5,  col: '#7c3aed' },
    { rx: 88,  ry: 25, sp: .004, off: 1.5, sz: 7,  col: '#a855f7' },
    { rx: 118, ry: 33, sp: .003, off: 3.2, sz: 5,  col: '#60a5fa' },
    { rx: 150, ry: 43, sp: .002, off: .8,  sz: 9,  col: '#f59e0b' },
  ]
  orbits.forEach(({ rx, ry }) => {
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(168,85,247,.07)'; ctx.lineWidth = .5; ctx.stroke()
  })
  orbits.forEach(({ rx, ry, sp, off, sz, col }) => {
    const a = f * sp + off
    const px = cx + Math.cos(a) * rx, py = cy + Math.sin(a) * ry
    ctx.beginPath(); ctx.arc(px, py, sz, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill()
    const gr2 = ctx.createRadialGradient(px, py, 0, px, py, sz * 3)
    gr2.addColorStop(0, col + '44'); gr2.addColorStop(1, 'transparent')
    ctx.fillStyle = gr2; ctx.beginPath(); ctx.arc(px, py, sz * 3, 0, Math.PI * 2); ctx.fill()
  })
  const sg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 24)
  sg.addColorStop(0, '#fff9'); sg.addColorStop(.3, '#a855f7aa'); sg.addColorStop(1, 'transparent')
  ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(cx, cy, 24, 0, Math.PI * 2); ctx.fill()
}

function drawForestBG(ctx, W, H, f) {
  for (let i = 0; i < 6; i++) {
    const x = (W / 5) * i + Math.sin(f * .004 + i) * 20
    const gr = ctx.createLinearGradient(x, 0, x + 40, H * .7)
    gr.addColorStop(0, 'rgba(74,222,128,.05)'); gr.addColorStop(.6, 'rgba(74,222,128,.018)'); gr.addColorStop(1, 'transparent')
    ctx.save(); ctx.translate(x, 0); ctx.rotate(.08 * (i % 2 === 0 ? 1 : -1))
    ctx.fillStyle = gr; ctx.fillRect(-18, 0, 36, H * .7); ctx.restore()
  }
  const mg = ctx.createLinearGradient(0, H * .85, 0, H)
  mg.addColorStop(0, 'transparent'); mg.addColorStop(1, 'rgba(74,222,128,.04)')
  ctx.fillStyle = mg; ctx.fillRect(0, H * .85, W, H * .15)
}

function drawSolarBG(ctx, W, H, f) {
  const sx = W * .5, sy = H + 60
  const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, H * 1.15)
  sg.addColorStop(0, 'rgba(251,191,36,.2)'); sg.addColorStop(.25, 'rgba(249,115,22,.12)')
  sg.addColorStop(.6, 'rgba(234,88,12,.05)'); sg.addColorStop(1, 'transparent')
  ctx.fillStyle = sg; ctx.fillRect(0, 0, W, H)
  for (let i = 0; i < 10; i++) {
    const ang = (i / 10) * Math.PI + f * .003 * (i % 2 === 0 ? 1 : -1)
    const len = H * (.55 + Math.sin(f * .006 + i) * .08)
    const al = .038 + Math.sin(f * .008 + i * .5) * .018
    ctx.save(); ctx.translate(sx, sy); ctx.rotate(ang - Math.PI / 2)
    const rg = ctx.createLinearGradient(0, 0, 0, -len)
    rg.addColorStop(0, `rgba(251,191,36,${al * 3})`); rg.addColorStop(.3, `rgba(249,115,22,${al})`); rg.addColorStop(1, 'transparent')
    ctx.fillStyle = rg; ctx.fillRect(-(28 + i * 7) / 2, -len, 28 + i * 7, len); ctx.restore()
  }
  for (let i = 0; i < 4; i++) {
    const y = H * (.72 + i * .06) + Math.sin(f * .022 + i) * 2.5
    ctx.beginPath(); ctx.moveTo(0, y)
    for (let x = 0; x <= W; x += 8) ctx.lineTo(x, y + Math.sin(x * .032 + f * .042 + i) * 1.5)
    ctx.strokeStyle = `rgba(251,191,36,${.032 - i * .005})`; ctx.lineWidth = 1; ctx.stroke()
  }
}

// Click ripple system
const ripples = []
export function addRipple(x, y, theme) {
  ripples.push({ x, y, r: 0, maxR: 120, theme, a: 0.8 })
}

const ThemeCanvas = () => {
  const { theme, config } = useTheme()
  const canvasRef = useRef(null)
  const stateRef  = useRef({ particles: [], frame: 0, animId: null, theme: 'ocean' })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const state = stateRef.current
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)

    function initP() {
      const W = canvas.width, H = canvas.height
      const counts = { ocean: 80, space: 200, forest: 55, solar: 70 }
      state.particles = Array.from({ length: counts[state.theme] || 80 }, () => {
        const p = new Particle(W, H, state.theme)
        p.life = Math.floor(Math.random() * p.maxLife); return p
      })
    }
    initP()

    function loop() {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)
      const bgMap = { ocean: '#020d1a', space: '#030008', forest: '#030c04', solar: '#0a0500' }
      ctx.fillStyle = bgMap[state.theme]; ctx.fillRect(0, 0, W, H)
      if (state.theme === 'ocean')  drawOceanBG(ctx, W, H, state.frame)
      if (state.theme === 'space')  drawSpaceBG(ctx, W, H, state.frame)
      if (state.theme === 'forest') drawForestBG(ctx, W, H, state.frame)
      if (state.theme === 'solar')  drawSolarBG(ctx, W, H, state.frame)
      state.particles.forEach(p => { p.W = W; p.H = H; p.theme = state.theme; p.update(); p.draw(ctx) })
      // Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]
        ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
        const colors = { ocean: '0,200,220', space: '168,85,247', forest: '74,222,128', solar: '249,115,22' }
        ctx.strokeStyle = `rgba(${colors[rp.theme]},${rp.a})`; ctx.lineWidth = 1.5; ctx.stroke()
        rp.r += 3.5; rp.a -= 0.025
        if (rp.a <= 0) ripples.splice(i, 1)
      }
      state.frame++; state.animId = requestAnimationFrame(loop)
    }
    loop()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(state.animId) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const state = stateRef.current; state.theme = theme
    const canvas = canvasRef.current
    const W = canvas.width, H = canvas.height
    const counts = { ocean: 80, space: 200, forest: 55, solar: 70 }
    state.particles = Array.from({ length: counts[theme] || 80 }, () => {
      const p = new Particle(W, H, theme); p.life = Math.floor(Math.random() * p.maxLife); return p
    })
  }, [theme])

  return <canvas ref={canvasRef} id="bg-canvas" />
}

export default ThemeCanvas
