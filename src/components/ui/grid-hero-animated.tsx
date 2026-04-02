"use client"

import { useEffect, useRef } from "react"

interface LightParticle {
  x: number
  y: number
  targetX: number
  targetY: number
  speed: number
  brightness: number
  gridLine: "horizontal" | "vertical"
  progress: number
}

export function GridHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const lights: LightParticle[] = []
    let lastTime = 0

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const createLight = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio
      const gridSize = 40

      const isHorizontal = Math.random() > 0.5

      if (isHorizontal) {
        const y = Math.floor(Math.random() * (height / gridSize)) * gridSize
        return {
          x: 0,
          y,
          targetX: width,
          targetY: y,
          speed: 0.5 + Math.random() * 1.5,
          brightness: 0.8 + Math.random() * 0.2,
          gridLine: "horizontal" as const,
          progress: 0,
        }
      } else {
        const x = Math.floor(Math.random() * (width / gridSize)) * gridSize
        return {
          x,
          y: 0,
          targetX: x,
          targetY: height,
          speed: 0.5 + Math.random() * 1.5,
          brightness: 0.8 + Math.random() * 0.2,
          gridLine: "vertical" as const,
          progress: 0,
        }
      }
    }

    const drawGrid = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 1

      const gridSize = 40
      const centerX = width / 2
      const centerY = height / 2

      for (let x = -gridSize; x < width + gridSize; x += gridSize) {
        const edgeDistX = Math.min(x, width - x) / (width * 0.3)
        const alphaX = Math.min(1, Math.max(0.05, edgeDistX))
        ctx.strokeStyle = `rgba(26, 26, 26, ${alphaX})`
        ctx.beginPath()
        for (let y = 0; y <= height; y += 2) {
          const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
          const wave = Math.sin(distanceFromCenter * 0.02) * 20
          const perspective = 1 - distanceFromCenter / (width * 0.8)
          const adjustedX = x + wave * Math.max(0, perspective)

          if (y === 0) {
            ctx.moveTo(adjustedX, y)
          } else {
            ctx.lineTo(adjustedX, y)
          }
        }
        ctx.stroke()
      }

      for (let y = -gridSize; y < height + gridSize; y += gridSize) {
        const edgeDistY = Math.min(y, height - y) / (height * 0.3)
        const alphaY = Math.min(1, Math.max(0.05, edgeDistY))
        ctx.strokeStyle = `rgba(26, 26, 26, ${alphaY})`
        ctx.beginPath()
        for (let x = 0; x <= width; x += 2) {
          const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
          const wave = Math.sin(distanceFromCenter * 0.02) * 20
          const perspective = 1 - distanceFromCenter / (height * 0.8)
          const adjustedY = y + wave * Math.max(0, perspective)
          if (x === 0) {
            ctx.moveTo(x, adjustedY)
          } else {
            ctx.lineTo(x, adjustedY)
          }
        }
        ctx.stroke()
      }
    }

    const drawLights = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio
      const centerX = width / 2
      const centerY = height / 2

      lights.forEach((light) => {
        const distanceFromCenter = Math.sqrt(Math.pow(light.x - centerX, 2) + Math.pow(light.y - centerY, 2))
        const wave = Math.sin(distanceFromCenter * 0.02) * 20

        let adjustedX = light.x
        let adjustedY = light.y

        if (light.gridLine === "vertical") {
          const perspective = 1 - distanceFromCenter / (width * 0.8)
          adjustedX = light.x + wave * Math.max(0, perspective)
        } else {
          const perspective = 1 - distanceFromCenter / (height * 0.8)
          adjustedY = light.y + wave * Math.max(0, perspective)
        }

        // Fade particles near edges
        const edgeFade = Math.min(
          light.x / (width * 0.15),
          (width - light.x) / (width * 0.15),
          light.y / (height * 0.15),
          (height - light.y) / (height * 0.15),
          1
        )
        const fadedBrightness = light.brightness * Math.max(0, Math.min(1, edgeFade))

        const gradient = ctx.createRadialGradient(adjustedX, adjustedY, 0, adjustedX, adjustedY, 15)
        gradient.addColorStop(0, `rgba(197, 216, 45, ${fadedBrightness})`)
        gradient.addColorStop(0.5, `rgba(197, 216, 45, ${fadedBrightness * 0.5})`)
        gradient.addColorStop(1, "rgba(197, 216, 45, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(adjustedX, adjustedY, 15, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(255, 255, 255, ${fadedBrightness})`
        ctx.beginPath()
        ctx.arc(adjustedX, adjustedY, 2, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animateFrame = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      lights.forEach((light, index) => {
        light.progress += light.speed * deltaTime * 0.001

        if (light.gridLine === "horizontal") {
          light.x = light.progress * light.targetX
        } else {
          light.y = light.progress * light.targetY
        }

        if (light.progress >= 1) {
          lights.splice(index, 1)
        }
      })

      if (Math.random() < 0.035) {
        lights.push(createLight())
      }

      if (lights.length > 12) {
        lights.shift()
      }

      drawGrid()
      drawLights()

      animationRef.current = requestAnimationFrame(animateFrame)
    }

    resizeCanvas()
    animationRef.current = requestAnimationFrame(animateFrame)
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
