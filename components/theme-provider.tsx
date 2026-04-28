"use client"

import { useEffect, useState } from "react"

function getMelbourneTime(): Date {
  // Melbourne is UTC+10 (AEST) or UTC+11 (AEDT during daylight saving)
  const now = new Date()
  const melbourneOffset = getMelbourneOffset(now)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  return new Date(utc + melbourneOffset * 3600000)
}

function getMelbourneOffset(date: Date): number {
  // Daylight saving in Melbourne: first Sunday of October to first Sunday of April
  const year = date.getUTCFullYear()
  const month = date.getUTCMonth()
  
  // Find first Sunday of October
  const octFirst = new Date(Date.UTC(year, 9, 1))
  const octFirstSunday = new Date(Date.UTC(year, 9, 1 + (7 - octFirst.getUTCDay()) % 7))
  
  // Find first Sunday of April
  const aprFirst = new Date(Date.UTC(year, 3, 1))
  const aprFirstSunday = new Date(Date.UTC(year, 3, 1 + (7 - aprFirst.getUTCDay()) % 7))
  
  // Check if we're in daylight saving time
  const isDST = (month >= 9 && date >= octFirstSunday) || (month < 3) || (month === 3 && date < aprFirstSunday)
  
  return isDST ? 11 : 10
}

function isDaytime(date: Date): boolean {
  const hours = date.getHours()
  // Day is between 6 AM and 6 PM
  return hours >= 6 && hours < 18
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setMounted(true)
    
    const updateTheme = () => {
      const melbourneTime = getMelbourneTime()
      const shouldBeDark = !isDaytime(melbourneTime)
      setIsDark(shouldBeDark)
      
      if (shouldBeDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    updateTheme()
    
    // Update every minute
    const interval = setInterval(updateTheme, 60000)
    
    return () => clearInterval(interval)
  }, [])

  // Prevent flash - default to dark until mounted
  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
