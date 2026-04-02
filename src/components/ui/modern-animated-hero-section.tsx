'use client'

import { useEffect, useRef } from 'react'

const CHARS = '!<>-_\\/[]{}=+*^?#COMPOUND'
const BRAND_COLOR = '#c5d82d'
const FONT_SIZE = 20
const COL_WIDTH = 20

const SCRAMBLE_PHRASES = [
  'Download the Skill',
  'Install in 30 Seconds',
  'Start Creating',
  'World-Class Creative',
  'At Your Fingertips',
  'No Design Degree Needed',
]

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

class TextScramble {
  el: HTMLElement
  chars: string
  queue: Array<{ from: string; to: string; start: number; end: number; char?: string }>
  frame: number
  frameRequest: number
  resolve: (value: void | PromiseLike<void>) => void

  constructor(el: HTMLElement) {
    this.el = el
    this.chars = '!<>-_\\/[]{}=+*^?#'
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => (this.resolve = resolve))
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      const item = this.queue[i]
      const { from, to, start, end } = item
      let { char } = item
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          item.char = char
        }
        output += `<span style="color:${BRAND_COLOR};opacity:0.6">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

function ScrambledTitle() {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const fx = new TextScramble(el)
    let idx = 0
    let timeoutId: ReturnType<typeof setTimeout>
    let cancelled = false

    const next = () => {
      if (cancelled) return
      fx.setText(SCRAMBLE_PHRASES[idx]).then(() => {
        if (!cancelled) timeoutId = setTimeout(next, 2000)
      })
      idx = (idx + 1) % SCRAMBLE_PHRASES.length
    }

    next()

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
      cancelAnimationFrame(fx.frameRequest)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
      <div
        ref={elRef}
        style={{
          color: BRAND_COLOR,
          fontSize: '2.5rem',
          fontWeight: 900,
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          minWidth: '20ch',
          textAlign: 'center',
        }}
      />
    </div>
  )
}

export function RainingLetters({ showTitle = false }: { showTitle?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let cols = 0
    let drops: number[] = []
    // Trail chars: sparse map of {col, row} -> char for in-trail mutations
    let trailChars: string[][] = []
    let logicalW = 0
    let logicalH = 0

    function init() {
      logicalW = canvas!.offsetWidth || 800
      logicalH = canvas!.offsetHeight || 600

      const dpr = window.devicePixelRatio || 1
      canvas!.width = logicalW * dpr
      canvas!.height = logicalH * dpr
      ctx!.scale(dpr, dpr)

      cols = Math.floor(logicalW / COL_WIDTH)
      drops = []
      trailChars = []

      const rows = Math.ceil(logicalH / FONT_SIZE)

      for (let i = 0; i < cols; i++) {
        // Stagger starts so columns don't all begin together
        drops[i] = -(Math.random() * rows * 1.5)
        trailChars[i] = Array.from({ length: rows }, () => randomChar())
      }

      // Opaque black base
      ctx!.fillStyle = '#0a0a0a'
      ctx!.fillRect(0, 0, logicalW, logicalH)
    }

    init()

    let frameCount = 0

    function draw() {
      frameCount++

      // Fade previous frame — this is what creates the fading trail
      ctx!.fillStyle = 'rgba(10, 10, 10, 0.03)'
      ctx!.fillRect(0, 0, logicalW, logicalH)

      ctx!.font = `${FONT_SIZE}px monospace`

      // Every 3 frames, mutate a random character in some trails
      const mutatePeriod = frameCount % 3 === 0

      for (let col = 0; col < cols; col++) {
        const headRow = Math.floor(drops[col])
        const x = col * COL_WIDTH

        // Draw head character — full brightness
        if (headRow >= 0 && headRow < Math.ceil(logicalH / FONT_SIZE)) {
          const headY = headRow * FONT_SIZE + FONT_SIZE
          ctx!.fillStyle = `rgba(197, 216, 45, ${0.85 + Math.random() * 0.15})`
          ctx!.fillText(randomChar(), x, headY)
          trailChars[col][headRow] = randomChar()
        }

        // Occasionally mutate trail chars and flash them bright
        if (mutatePeriod && Math.random() < 0.04) {
          const trailRow = headRow - 1 - Math.floor(Math.random() * 8)
          const rows = Math.ceil(logicalH / FONT_SIZE)
          if (trailRow >= 0 && trailRow < rows) {
            trailChars[col][trailRow] = randomChar()
            // Flash it bright to simulate the shimmer effect
            const flashY = trailRow * FONT_SIZE + FONT_SIZE
            ctx!.fillStyle = `rgba(197, 216, 45, ${0.8 + Math.random() * 0.2})`
            ctx!.fillText(trailChars[col][trailRow], x, flashY)
          }
        }

        // Advance head
        drops[col] += 0.15

        // Reset when off screen, with random hold at bottom
        if (drops[col] * FONT_SIZE > logicalH && Math.random() > 0.975) {
          drops[col] = -(Math.random() * Math.ceil(logicalH / FONT_SIZE) * 0.5)
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    const ro = new ResizeObserver(() => {
      init()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: '#0a0a0a' }}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      {showTitle && <ScrambledTitle />}
    </div>
  )
}
