"use client"

import { useEffect, useState, useRef } from "react"

interface SkillBarProps {
  skill: string
  level: number
  color?: string
}

export function SkillBar({ skill, level, color = "bg-primary" }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setWidth(level), 100)
      return () => clearTimeout(timeout)
    }
  }, [isVisible, level])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center text-sm font-mono">
        <span className="text-foreground">{skill}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
