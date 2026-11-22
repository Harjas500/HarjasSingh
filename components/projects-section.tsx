"use client"

import { ProjectCard } from "./project-card"
import { TerminalWindow } from "./terminal-window"

const projects = [
  {
    title: "NYC Taxi Revenue Forecasting",
    description: "Built an end-to-end data science pipeline using Python and PySpark to analyse 2024 NYC Yellow Taxi data, integrating holiday, special event and geospatial datasets. Performed exploratory analysis and feature engineering to uncover revenue patterns, then developed Linear Regression and Random Forest models. The Random Forest model achieved an R² of 0.933, outperforming the baseline model.",
    tags: ["Python", "PySpark", "ML","Pandas", "Scikit-learn", "Geospatial"],
    github: "https://github.com/Harjas500/nyc-taxi-revenue-forecasting",
    query: "nyc_taxi_forecast",
  },
  {
    title: "BNPL Merchant Ranking System",
    description: "Built an automated Python/PySpark ETL pipeline to ingest, clean, and validate large merchant, consumer, and transaction datasets. Engineered features using ABS geospatial data, demographic variables, spend behaviour, and fraud-delta signals. Developed a multi-factor ranking model to generate Top 100 merchants.",
    tags: ["Python", "PySpark", "ETL", "Feature Engineering"],
    github: "https://github.com/Harjas500/bnpl-merchant-ranking-system",
    query: "bnpl_ranking",
  },
  {
    title: "Conference Track-r Database System",
    description: "Designed and queried a relational MySQL database modelling academic conference submissions, peer review workflows, and researcher supervision hierarchies across 10+ interrelated tables. Implemented advanced SQL including recursive self-joins, self-joining conference pairs, and correlated subqueries.",
    tags: ["MySQL", "SQL", "Database Design", "Data Modelling"],
    github: "https://github.com",
    query: "conference_trackr",
  },
  {
    title: "Traffic Sign Classification",
    description: "Built a hybrid classifier combining HOG, color features, and CNN using an ensemble of Random Forest, Logistic Regression, and deep learning. Applied feature selection and achieved 95% accuracy on the German Traffic Sign dataset.",
    tags: ["Python", "CNN", "Scikit-learn", "Deep Learning"],
    github: "https://github.com",
    query: "traffic_classifier",
  },
  {
    title: "Freckers AI Agent",
    description: "Implemented Minimax + Alpha-Beta pruning agent in Python featuring 1-ply move ordering, BFS-based multi-jump generation, and custom evaluation heuristic. Validated through extensive debugging and opponent testing.",
    tags: ["Python", "AI", "Minimax", "Game Theory"],
    github: "https://github.com/Harjas500/freckers-ai-agent",
    query: "freckers_ai",
  },
  {
    title: "Chessformer AI Solver",
    description: "Developed a C-based AI solver for Chessformer using Dijkstra's algorithm, optimized with priority queues, state pruning, and memory optimization for efficient pathfinding.",
    tags: ["C", "Algorithms", "Data Structures", "Optimization"],
    github: "https://github.com",
    query: "chessformer_solver",
  },
  {
    title: "Book Recommendation & Analysis",
    description: "Applied machine learning models with Python, Pandas, and scikit-learn to generate book recommendations and insights from online reviews.",
    tags: ["Python", "ML", "Pandas", "Scikit-learn"],
    github: "https://github.com",
    query: "book_recommender",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <TerminalWindow title="fetch_projects.sql" className="max-w-2xl">
            <code className="text-foreground">
              <span className="text-primary">SELECT</span> title, description, tech_stack<br />
              <span className="text-primary">FROM</span> portfolio.projects<br />
              <span className="text-primary">WHERE</span> featured = <span className="text-chart-4">TRUE</span><br />
              <span className="text-primary">ORDER BY</span> impact_score <span className="text-primary">DESC</span><br />
              <span className="text-primary">LIMIT</span> <span className="text-chart-4">7</span>;
            </code>
          </TerminalWindow>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
