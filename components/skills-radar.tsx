"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export default function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      const { width } = container.getBoundingClientRect()
      const size = Math.min(width, 500)

      canvas.width = size
      canvas.height = size

      drawRadarChart()
    }

    // Draw the radar chart
    const drawRadarChart = () => {
      if (!ctx || !canvas) return

      const width = canvas.width
      const height = canvas.height
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(centerX, centerY) * 0.8

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Skills data (name and proficiency from 0 to 1)
      const skills = [
        { name: "Network Security", value: 0.9 },
        { name: "System Hardening", value: 0.95 },
        { name: "Incident Response", value: 0.85 },
        { name: "Threat Intelligence", value: 0.8 },
        { name: "Penetration Testing", value: 0.75 },
        { name: "Security Architecture", value: 0.85 },
        { name: "Risk Assessment", value: 0.9 },
        { name: "Compliance", value: 0.8 },
      ]

      const numSkills = skills.length
      const angleStep = (Math.PI * 2) / numSkills

      // Draw background circles
      const numCircles = 5
      for (let i = 1; i <= numCircles; i++) {
        const circleRadius = (radius * i) / numCircles

        ctx.beginPath()
        ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(107, 114, 128, 0.3)"
        ctx.stroke()
      }

      // Draw axis lines
      for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.strokeStyle = "rgba(107, 114, 128, 0.5)"
        ctx.stroke()

        // Draw skill labels
        const labelRadius = radius * 1.1
        const labelX = centerX + labelRadius * Math.cos(angle)
        const labelY = centerY + labelRadius * Math.sin(angle)

        ctx.font = "12px Inter"
        ctx.fillStyle = "#9ca3af"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(skills[i].name, labelX, labelY)
      }

      // Draw data points and connect them
      ctx.beginPath()
      for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2
        const value = skills[i].value
        const pointRadius = radius * value
        const x = centerX + pointRadius * Math.cos(angle)
        const y = centerY + pointRadius * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.fillStyle = "rgba(52, 211, 153, 0.2)"
      ctx.fill()
      ctx.strokeStyle = "rgba(52, 211, 153, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw data points
      for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2
        const value = skills[i].value
        const pointRadius = radius * value
        const x = centerX + pointRadius * Math.cos(angle)
        const y = centerY + pointRadius * Math.sin(angle)

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "#34d399"
        ctx.fill()
      }
    }

    // Initial draw
    setCanvasDimensions()

    // Redraw on window resize
    window.addEventListener("resize", setCanvasDimensions)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <Card className="bg-gray-800/50 border-gray-700 p-6">
      <div className="flex justify-center items-center">
        <canvas ref={canvasRef} className="max-w-full"></canvas>
      </div>
    </Card>
  )
}
