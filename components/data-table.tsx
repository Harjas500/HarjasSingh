"use client"

import { useEffect, useState } from "react"

interface Column {
  key: string
  label: string
}

interface DataTableProps {
  columns: Column[]
  data: Record<string, string | number>[]
  className?: string
  animateRows?: boolean
}

export function DataTable({ columns, data, className = "", animateRows = true }: DataTableProps) {
  const [visibleRows, setVisibleRows] = useState(animateRows ? 0 : data.length)

  useEffect(() => {
    if (animateRows && visibleRows < data.length) {
      const timeout = setTimeout(() => {
        setVisibleRows((prev) => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [visibleRows, data.length, animateRows])

  return (
    <div className={`overflow-hidden rounded-lg border border-border ${className}`}>
      <table className="w-full text-sm font-mono">
        <thead>
          <tr className="bg-secondary/50 border-b border-border">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left text-primary font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visibleRows).map((row, i) => (
            <tr
              key={i}
              className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors animate-in fade-in slide-in-from-left-2 duration-300"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-foreground">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {animateRows && visibleRows < data.length && (
        <div className="px-4 py-2 text-muted-foreground text-xs">
          Fetching rows... ({visibleRows}/{data.length})
        </div>
      )}
      {visibleRows === data.length && (
        <div className="px-4 py-2 text-primary text-xs bg-secondary/30">
          {data.length} rows returned
        </div>
      )}
    </div>
  )
}
