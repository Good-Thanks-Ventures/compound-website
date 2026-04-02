'use client'

import { useEffect, useRef } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#COMPOUND'
const BRAND_COLOR = '#c5d82d'
const COLUMN_COUNT = 80
const BG_COLOR = '#0a0a0a'

interface Column {
  x: number
  y: number
  speed: number
  fontSize: number
  opacity: number
  char: string
}

function randomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export function FallingCharacters() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrameId: number
    let columns: Column[] = []

    function initColumns(width: number, height: number) {
      columns = Array.from({ length: COLUMN_COUNT }, () => {
        const fontSize = randomBetween(11, 20)
        return {
          x: randomBetween(0, width),
          y: randomBetween(-height, 0),
          speed: randomBetween(0.8, 2.8),
          fontSize,
          opacity: randomBetween(0.1, 0.4),
          char: randomChar(),
        }
      })
    }

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      canvas!.width = parent.offsetWidth
      canvas!.height = parent.offsetHeight
      initColumns(canvas!.width, canvas!.height)
    }

    resize()

    const resizeObserver = new ResizeObserver(resize)
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement)

    let lastChar = 0

    function draw(timestamp: number) {
      const w = canvas!.width
      const h = canvas!.height

      // Semi-transparent fill for trail effect
      ctx!.fillStyle = BG_COLOR + '18'
      ctx!.fillRect(0, 0, w, h)

      // Change chars every ~120ms
      const changeChar = timestamp - lastChar > 120
      if (changeChar) lastChar = timestamp

      for (const col of columns) {
        ctx!.font = `${col.fontSize}px monospace`
        ctx!.fillStyle =
          BRAND_COLOR +
          Math.round(col.opacity * 255)
            .toString(16)
            .padStart(2, '0')

        ctx!.fillText(col.char, col.x, col.y)

        col.y += col.speed

        if (changeChar && Math.random() < 0.08) {
          col.char = randomChar()
        }

        if (col.y > h + col.fontSize) {
          col.y = -col.fontSize * 2
          col.x = randomBetween(0, w)
          col.speed = randomBetween(0.8, 2.8)
          col.fontSize = randomBetween(11, 20)
          col.opacity = randomBetween(0.1, 0.4)
          col.char = randomChar()
        }
      }

      animFrameId = requestAnimationFrame(draw)
    }

    animFrameId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animFrameId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
