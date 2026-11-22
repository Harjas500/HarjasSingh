"use client"

import { TerminalWindow } from "./terminal-window"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experience = [
  {
    type: "work",
    title: "Developer",
    organization: "Inspectsy",
    period: "Oct 2025 – Jan 2026",
    description: "Built and maintained data pipelines to process and structure property inspection data for AI-powered automated report generation. Developed backend APIs for data ingestion, image metadata extraction, and structured storage to support inspection reporting workflows.",
    highlights: ["Data Pipelines", "Backend APIs", "AI"],
  },
  {
    type: "work",
    title: "Director of Technology",
    organization: "AWS Club - UniMelb",
    period: "Oct 2025 – Dec 2025",
    description: "Helping establish the new AWS Cloud Club's technical direction and core learning resources. Assisting with planning the club's first AWS-focused workshop and onboarding early members. Supporting students with basic AWS fundamentals and initial certification preparation.",
    highlights: ["AWS", "Cloud", "Leadership"],
  },
  {
    type: "work",
    title: "Co-Founder & Events Director",
    organization: "Punjabi Students Association UniMelb",
    period: "Jun 2026 – Present",
    description: "Co-founded the club and oversee planning and coordination of events, promotions, and collaborations. Growing the club's community through outreach, partnerships, and consistent member engagement.",
    highlights: ["Leadership", "Events", "Community"],
  },
  {
    type: "work",
    title: "Front-End Team Member",
    organization: "Woolworths",
    period: "Sept 2025 – Present",
    description: "Handled high-volume POS transactions efficiently, ensuring accurate checkout and strong customer service. Resolved customer queries and complaints, maintained front-end operations, and supported team-based store performance.",
    highlights: ["Customer Service", "Teamwork", "Operations"],
  },
]

const education = [
  {
    type: "education",
    title: "Bachelor of Science (Data Science)",
    organization: "The University of Melbourne",
    period: "2023 - 2025",
    description: "WAM: 80. Key courses: Foundations of Computing (Python), Foundations of Algorithms (C), Elements of Data Processing (Pandas, JSON, XML), Machine Learning, AI, Database Systems (SQL), Calculus 2, Linear Algebra (MATLAB), Probability, Applied Statistics (R).",
    highlights: ["Python", "ML", "Algorithms", "Statistics", "SQL"],
  },
  {
    type: "education",
    title: "12th CBSE (Science with Economics)",
    organization: "Sri Venkateshwar International School, Delhi",
    period: "2022",
    description: "Percentage: 95%",
    highlights: ["Science", "Mathematics", "Economics"],
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <TerminalWindow title="get_experience.sql" className="max-w-2xl">
            <code className="text-foreground">
              <span className="text-primary">SELECT</span> role, organization, highlights<br />
              <span className="text-primary">FROM</span> career_history<br />
              <span className="text-primary">UNION ALL</span><br />
              <span className="text-primary">SELECT</span> degree, institution, achievements<br />
              <span className="text-primary">FROM</span> education<br />
              <span className="text-primary">ORDER BY</span> end_date <span className="text-primary">DESC</span>;
            </code>
          </TerminalWindow>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-border pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="text-xs text-muted-foreground font-mono mb-1">{item.period}</div>
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <div className="text-primary text-sm mb-2">{item.organization}</div>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-border pb-6 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="text-xs text-muted-foreground font-mono mb-1">{item.period}</div>
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <div className="text-accent text-sm mb-2">{item.organization}</div>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
