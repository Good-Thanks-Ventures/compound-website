'use client'

import { useEffect, useRef } from 'react'

interface NodePoint {
  x: number
  y: number
  vx: number
  vy: number
}

interface RibbonLine {
  spring: number
  friction: number
  nodes: NodePoint[]
  update: (mouseX: number, mouseY: number) => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

const SETTINGS = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
  springBase: 0.45,
  color: '#c5d82d',
}

function createNode(x = 0, y = 0): NodePoint {
  return { x, y, vx: 0, vy: 0 }
}

function createLine(spring: number): RibbonLine {
  const nodes: NodePoint[] = Array.from({ length: SETTINGS.size }, () =>
    createNode()
  )

  return {
    spring,
    friction: SETTINGS.friction + Math.random() * 0.01,
    nodes,

    update(mouseX: number, mouseY: number) {
      let s = this.spring
      let node = this.nodes[0]
      node.vx += (mouseX - node.x) * s
      node.vy += (mouseY - node.y) * s
      for (let i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i]
        if (i > 0) {
          const prev = this.nodes[i - 1]
          node.vx += (prev.x - node.x) * s
          node.vy += (prev.y - node.y) * s
          node.vx += prev.vx * SETTINGS.dampening
          node.vy += prev.vy * SETTINGS.dampening
        }
        node.vx *= this.friction
        node.vy *= this.friction
        node.x += node.vx
        node.y += node.vy
        s *= SETTINGS.tension
      }
    },

    draw(ctx: CanvasRenderingContext2D) {
      let x = this.nodes[0].x
      let y = this.nodes[0].y
      ctx.beginPath()
      ctx.moveTo(x, y)
      for (let i = 1; i < this.nodes.length - 1; i++) {
        const next = this.nodes[i + 1]
        const curr = this.nodes[i]
        x = (curr.x + next.x) * 0.5
        y = (curr.y + next.y) * 0.5
        ctx.quadraticCurveTo(curr.x, curr.y, x, y)
      }
      const last = this.nodes[this.nodes.length - 1]
      ctx.lineTo(last.x, last.y)
      ctx.stroke()
    },
  }
}

export function MouseRibbons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let mouseX = 0
    let mouseY = 0
    let running = false

    const lines: RibbonLine[] = Array.from({ length: SETTINGS.trails }, (_, i) =>
      createLine(SETTINGS.springBase + (i / SETTINGS.trails) * 0.025)
    )

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas!.getBoundingClientRect()
      canvas!.width = rect.width * dpr
      canvas!.height = rect.height * dpr
      ctx!.scale(dpr, dpr)
    }

    const parent = canvas.parentElement ?? document.documentElement

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      if (!running) {
        running = true
        render()
      }
    }

    function onTouchMove(e: TouchEvent) {
      if (e.touches.length === 0) return
      const rect = canvas!.getBoundingClientRect()
      mouseX = e.touches[0].clientX - rect.left
      mouseY = e.touches[0].clientY - rect.top
      if (!running) {
        running = true
        render()
      }
    }

    function render() {
      const rect = canvas!.getBoundingClientRect()
      ctx!.clearRect(0, 0, rect.width, rect.height)
      ctx!.fillStyle = 'rgba(10,10,10,0.02)'
      ctx!.fillRect(0, 0, rect.width, rect.height)

      for (let i = 0; i < lines.length; i++) {
        const opacity = 0.1 + (i / lines.length) * 0.2
        const strokeWidth = 0.5 + (i / lines.length) * 0.5
        ctx!.strokeStyle = `rgba(197,216,45,${opacity})`
        ctx!.lineWidth = strokeWidth
        lines[i].update(mouseX, mouseY)
        lines[i].draw(ctx!)
      }

      rafId = requestAnimationFrame(render)
    }

    resize()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    parent.addEventListener('mousemove', onMouseMove as EventListener)
    parent.addEventListener('touchmove', onTouchMove as EventListener, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      parent.removeEventListener('mousemove', onMouseMove as EventListener)
      parent.removeEventListener('touchmove', onTouchMove as EventListener)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
