"use client"

import { Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-balance">Let&apos;s Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I&apos;m currently open to new opportunities in data science and analytics.
            Whether you have a question or just want to say hi, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:harjassingh500@gmail.com"
            className="group flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-1">Email</div>
              <span className="text-foreground font-medium">harjassingh500@gmail.com</span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <div className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
            <div className="p-3 rounded-lg bg-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-1">Location</div>
              <span className="text-foreground font-medium">Melbourne, Australia</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/harjas-singh-087675354/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  )
}
