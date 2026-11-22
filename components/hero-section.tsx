"use client"

import { useState } from "react"
import { SQLTypewriter } from "./sql-typewriter"
import { TerminalWindow } from "./terminal-window"
import { DataTable } from "./data-table"
import { Github, Linkedin, Mail, Database, BarChart3 } from "lucide-react"

const heroQuery = `SELECT 
    name,
    title,
    passion,
    location
FROM data_scientists
WHERE seeking_opportunities = TRUE
ORDER BY skills DESC
LIMIT 1;`

const profileData = [
  { field: "name", value: "Harjas Singh" },
  { field: "title", value: "Data Scientist" },
  { field: "passion", value: "Data-driven problem solving" },
  { field: "location", value: "Melbourne, Australia" },
]

export function HeroSection() {
  const [showResults, setShowResults] = useState(false)

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-sm">
                <Database className="w-4 h-4" />
                <span>connection established</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-primary drop-shadow-sm">Harjas Singh</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Data Scientist/Analyst
              </p>
              <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
                Recent <strong className="text-foreground">Data Science</strong> graduate from <strong className="text-foreground">The University of Melbourne</strong> with a strong foundation in <strong className="text-foreground">programming</strong>, <strong className="text-foreground">algorithms</strong>, <strong className="text-foreground">data analysis</strong>, <strong className="text-foreground">machine learning</strong>, and <strong className="text-foreground">cloud-based solutions</strong>. Skilled in <strong className="text-foreground">predictive modelling</strong>, <strong className="text-foreground">data visualisation</strong>, and <strong className="text-foreground">large-scale data processing</strong>.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Harjas500" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/harjas-singh-087675354/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:harjassingh500@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <TerminalWindow title="get_profile.sql">
              <SQLTypewriter
                query={heroQuery}
                speed={30}
                onComplete={() => setShowResults(true)}
              />
            </TerminalWindow>

            {showResults && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-2 mb-3 text-muted-foreground text-xs font-mono">
                  <BarChart3 className="w-3 h-3" />
                  <span>Query executed in 0.042s</span>
                </div>
                <DataTable
                  columns={[
                    { key: "field", label: "field" },
                    { key: "value", label: "value" },
                  ]}
                  data={profileData}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}