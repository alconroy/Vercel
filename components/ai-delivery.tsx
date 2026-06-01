import { Bot, Code2, Database, Workflow } from "lucide-react"

const pillars = [
  {
    icon: Code2,
    title: "Custom C# Code Optimization",
    description:
      "Using AI-assisted programming to write cleaner, error-free Acumatica DAC and graph extensions in half the time.",
  },
  {
    icon: Database,
    title: "Rapid Data Mapping & Migration",
    description:
      "Deploying automated scripts to map messy legacy database tables into clean Acumatica import scenarios.",
  },
  {
    icon: Workflow,
    title: "Automated Business Event Configurations",
    description:
      "Instantly draft custom workflow rules and automated notification templates.",
  },
]

export default function AIDelivery() {
  return (
    <section id="ai-delivery" className="py-24 px-4 bg-[#0a1a30]">
      <a id="ai-delivery" aria-hidden="true" />
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
            <Bot className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold tracking-[0.18em] text-amber-400 uppercase">
              AI-Assisted Delivery
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            Decades of Experience +{" "}
            <span className="text-amber-400">Modern Intelligence</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            We don&apos;t let AI write raw code blindly. Instead, we pair our 51+ combined years of ERP experience
            with proprietary, fine-tuned AI tools to eliminate manual repetitive tasks.
          </p>
        </div>

        {/* 3-Column Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col bg-[#0c1f3d] border border-slate-700/60 rounded-2xl p-7 hover:border-amber-400/50 hover:shadow-[0_0_40px_-8px_rgba(251,191,36,0.12)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-5 group-hover:bg-amber-400/20 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug text-balance">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>

                {/* Decorative accent */}
                <div className="absolute top-0 right-8 h-[3px] w-12 bg-amber-400 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
