"use client"

import { useState, useEffect } from "react"

interface SQLTypewriterProps {
  query: string
  speed?: number
  onComplete?: () => void
  className?: string
}

export function SQLTypewriter({ query, speed = 50, onComplete, className = "" }: SQLTypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < query.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + query[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, query, speed, onComplete, isComplete])

  const highlightSQL = (text: string) => {
    const keywords = ["SELECT", "FROM", "WHERE", "JOIN", "ON", "AND", "OR", "ORDER BY", "GROUP BY", "AS", "LIMIT", "INNER", "LEFT", "RIGHT", "OUTER", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "TABLE", "INDEX", "VIEW", "INTO", "VALUES", "SET", "DISTINCT", "COUNT", "SUM", "AVG", "MAX", "MIN", "HAVING", "UNION", "ALL", "EXISTS", "IN", "NOT", "NULL", "IS", "LIKE", "BETWEEN", "CASE", "WHEN", "THEN", "ELSE", "END", "ASC", "DESC", "FETCH", "FIRST", "NEXT", "ROWS", "ONLY", "WITH", "CTE", "RECURSIVE", "PARTITION", "OVER", "ROW_NUMBER", "RANK", "DENSE_RANK", "LEAD", "LAG"]
    
    let result = text
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi")
      result = result.replace(regex, `<span class="text-primary font-semibold">${keyword}</span>`)
    })
    
    // Highlight strings
    result = result.replace(/'([^']*)'/g, '<span class="text-accent">\'$1\'</span>')
    
    // Highlight comments
    result = result.replace(/--(.*)/g, '<span class="text-muted-foreground italic">--$1</span>')
    
    // Highlight numbers
    result = result.replace(/\b(\d+)\b/g, '<span class="text-chart-4">$1</span>')
    
    return result
  }

  return (
    <div className={`font-mono text-sm ${className}`}>
      <span dangerouslySetInnerHTML={{ __html: highlightSQL(displayedText) }} />
      {!isComplete && <span className="animate-pulse text-primary">|</span>}
    </div>
  )
}
