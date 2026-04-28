"use client"

import { TerminalWindow } from "./terminal-window"
import { Code, Database, BrainCircuit, LineChart, Cloud } from "lucide-react"

const skills = {
  languages: ["Python", "C", "R", "JavaScript"],
  dataScience: ["Pandas", "PySpark", "NumPy", "Scikit-learn", "Feature Engineering", "EDA", "Statistical Analysis", "Data Pipelines"],
  mlAlgorithms: ["Naive Bayes", "Decision Trees", "Random Forest", "SVM", "Logistic Regression", "Neural Networks", "CNNs", "Sequential Models", "Generative Models", "Ensemble Methods"],
  visualization: ["Tableau", "Power BI", "Excel (Advanced)"],
  databases: ["MySQL", "PostgreSQL", "SQL (Joins, Aggregations, Window Functions)"],
  cloud: ["AWS", "Git"],
}

const skillCategories = [
  { title: "Programming Languages", icon: Code, data: skills.languages, color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/30" },
  { title: "Data Science & Analysis", icon: BrainCircuit, data: skills.dataScience, color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/30" },
  { title: "ML & Algorithms", icon: BrainCircuit, data: skills.mlAlgorithms, color: "text-chart-4", bgColor: "bg-chart-4/10", borderColor: "border-chart-4/30" },
  { title: "BI & Visualisation", icon: LineChart, data: skills.visualization, color: "text-chart-5", bgColor: "bg-chart-5/10", borderColor: "border-chart-5/30" },
  { title: "Database Management", icon: Database, data: skills.databases, color: "text-chart-3", bgColor: "bg-chart-3/10", borderColor: "border-chart-3/30" },
  { title: "Cloud & DevOps", icon: Cloud, data: skills.cloud, color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/30" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <TerminalWindow title="query_skills.sql" className="max-w-2xl">
            <code className="text-foreground">
              <span className="text-primary">SELECT</span> category, ARRAY_AGG(skill_name) AS skills<br />
              <span className="text-primary">FROM</span> technical_skills<br />
              <span className="text-primary">WHERE</span> data_scientist_id = <span className="text-accent">&apos;harjas_singh&apos;</span><br />
              <span className="text-primary">GROUP BY</span> category;
            </code>
          </TerminalWindow>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-mono rounded-md border ${category.borderColor} ${category.bgColor} ${category.color} hover:opacity-80 transition-opacity`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
