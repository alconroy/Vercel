import { CheckCircle, ArrowRight, Download, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    label: "PARTNER CAPACITY",
    title: "White-Label Implementation Support",
    description:
      "Instantly scale your practice's delivery capacity and eliminate project bottlenecks without adding permanent headcount.",
    bullets: ["Overflow & Go-Live Support", "Backlog Resolution", "Rescue & Stabilization"],
    callout: {
      icon: "🔒",
      text: "The Partner Promise: We work strictly under your brand as a seamless extension of your team.",
    },
    accent: "primary",
  },
  {
    label: "SYSTEM MAXIMIZATION",
    title: "Post-Go-Live Optimization & Health Check",
    description:
      "Get the exact value, efficiency, and reporting accuracy you expected from the system you already own.",
    bullets: ["Comprehensive Health Check", "Actionable Roadmap", "Usability & Adoption Tuning"],
    callout: null,
    accent: "accent",
  },
  {
    label: "RAPID TECHNICAL EXECUTION",
    title: "Customization Backlog Sprints",
    description:
      "A highly focused technical sprint designed to clear lingering development backlogs.",
    bullets: ["Platform Customizations", "Automation & Integrations", "Advanced Reporting"],
    callout: null,
    accent: "primary",
  },
]

export default function AcumaticaServices() {
  return (
    <section id="services" className="py-24 px-4 bg-[#0c1f3d]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-4">
            Our Acumatica Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            Targeted Acumatica Services.{" "}
            <span className="text-amber-400">Elite Delivery.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            We combine decades of ERP Go-Live experience with our proprietary AI-assisted delivery
            system to execute projects faster, lower delivery risk, and unlock maximum performance
            from Acumatica.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col bg-[#112145] border border-slate-700/60 rounded-2xl p-7 hover:border-amber-400/50 hover:shadow-[0_0_40px_-8px_rgba(251,191,36,0.15)] transition-all duration-300"
            >
              {/* Label */}
              <span className="inline-block text-[10px] font-extrabold tracking-[0.18em] text-amber-400 uppercase mb-5 bg-amber-400/10 px-3 py-1 rounded-full w-fit">
                {service.label}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 leading-snug text-balance">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-6 flex-1">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Optional Callout */}
              {service.callout && (
                <div className="mt-auto border border-amber-400/30 bg-amber-400/5 rounded-xl px-4 py-3.5">
                  <p className="text-xs text-amber-200 leading-relaxed">
                    <span className="mr-1.5">{service.callout.icon}</span>
                    <strong className="text-amber-300">
                      {service.callout.text.split(":")[0]}:
                    </strong>{" "}
                    {service.callout.text.split(":").slice(1).join(":").trim()}
                  </p>
                </div>
              )}

              {/* Decorative top-right accent line */}
              <div className="absolute top-0 right-8 h-[3px] w-12 bg-amber-400 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-amber-400 hover:bg-amber-300 text-[#0c1f3d] font-bold px-8 rounded-xl shadow-lg shadow-amber-400/20 transition-all duration-200"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Capability Statement
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-500 text-slate-200 hover:bg-slate-700/50 hover:border-slate-400 hover:text-white font-semibold px-8 rounded-xl transition-all duration-200 bg-transparent"
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            Book a Technical Scoping Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
