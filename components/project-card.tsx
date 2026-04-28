"use client"

import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  query: string
}

export function ProjectCard({ title, description, tags, github, demo, query }: ProjectCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden">
      <div className="p-4 bg-secondary/30 border-b border-border">
        <code className="text-xs text-muted-foreground font-mono">
          <span className="text-primary">SELECT</span> * <span className="text-primary">FROM</span> projects <span className="text-primary">WHERE</span> name = <span className="text-accent">&apos;{query}&apos;</span>
        </code>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
