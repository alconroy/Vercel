"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, BarChart3, AlertTriangle, CalendarDays, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    id: 1,
    question:
      "How many manual Excel spreadsheets does your finance or inventory team use daily to bypass your Acumatica reporting?",
    options: ["0–1", "2–5", "6+"],
  },
  {
    id: 2,
    question:
      "When a customer calls to ask where their order is, how many systems must your team check?",
    options: ["1", "2", "3+"],
  },
  {
    id: 3,
    question:
      "How confident are you that your Generic Inquiries (GIs) and automated dashboards represent real-time operations?",
    options: ["Highly confident", "Somewhat confident", "We don't trust the data"],
  },
  {
    id: 4,
    question:
      "Is your original partner too busy or expensive to solve your minor technical bottlenecks?",
    options: ["Yes", "No", "Sometimes"],
  },
]

type QuizState = "intro" | "quiz" | "results"

export default function DiagnosticPage() {
  const [state, setState] = useState<QuizState>("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [animating, setAnimating] = useState(false)

  const handleStart = () => {
    setState("quiz")
    setCurrentQuestion(0)
    setAnswers([])
    setSelected(null)
  }

  const handleSelect = (option: string) => {
    if (animating) return
    setSelected(option)
  }

  const handleNext = () => {
    if (!selected || animating) return
    setAnimating(true)

    const newAnswers = [...answers, selected]

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setAnswers(newAnswers)
        setCurrentQuestion((q) => q + 1)
        setSelected(null)
        setAnimating(false)
      } else {
        setAnswers(newAnswers)
        setState("results")
        setAnimating(false)
      }
    }, 300)
  }

  const progress = ((currentQuestion + (selected ? 1 : 0)) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/acugen-logo-transparent.png" alt="Acugen Consulting Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-foreground">Acugen Consulting</span>
          </div>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Intro Screen */}
        {state === "intro" && (
          <div className="w-full max-w-2xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
              Is Your ERP Working for You—or Are You Working for Your ERP?
            </h1>
            <p className="text-lg text-muted-foreground mb-10 text-pretty max-w-xl mx-auto leading-relaxed">
              Take this 2-minute diagnostic to quantify the hidden costs of staying stuck.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                4 quick questions
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No email required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Instant results
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 h-auto text-base gap-2"
              onClick={handleStart}
            >
              Start the Diagnostic
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Quiz Screen */}
        {state === "quiz" && (
          <div className={`w-full max-w-2xl transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-xs text-muted-foreground">{Math.round(progress)}% complete</span>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="bg-card border border-border rounded-xl shadow-sm p-8 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-balance leading-snug">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`w-full text-left px-5 py-4 rounded-lg border-2 transition-all duration-150 font-medium text-base
                      ${
                        selected === option
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-secondary/50"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all duration-150
                          ${selected === option ? "border-primary bg-primary" : "border-muted-foreground/40"}`}
                      >
                        {selected === option && (
                          <div className="w-full h-full rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                          </div>
                        )}
                      </div>
                      {option}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                {currentQuestion > 0 ? (
                  <button
                    onClick={() => {
                      setCurrentQuestion((q) => q - 1)
                      setSelected(answers[currentQuestion - 1] ?? null)
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}
                <Button
                  onClick={handleNext}
                  disabled={!selected}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-6"
                >
                  {currentQuestion < questions.length - 1 ? "Next Question" : "See My Results"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {state === "results" && (
          <div className="w-full max-w-2xl">
            {/* Alert badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-destructive rounded-full px-4 py-2 text-sm font-semibold">
                <AlertTriangle className="h-4 w-4" />
                Diagnostic Complete
              </div>
            </div>

            {/* Results card */}
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="bg-primary px-8 py-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-balance leading-tight">
                  Your system is experiencing ERP Adoption Leakage.
                </h2>
              </div>
              <div className="px-8 py-8">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Based on your answers, your team is losing efficiency in reporting and workflow automation. These hidden inefficiencies compound over time—costing your business in manual labor, delayed decisions, and missed operational visibility.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Manual Workarounds", icon: "📊", desc: "Spreadsheets masking reporting gaps" },
                    { label: "Multi-System Friction", icon: "🔄", desc: "Too many lookups to answer one question" },
                    { label: "Data Trust Deficit", icon: "📉", desc: "Dashboards not reflecting reality" },
                    { label: "Support Bottleneck", icon: "⏳", desc: "Minor fixes costing major delays" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border">
                      <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
              <CalendarDays className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3 text-balance">
                Let&apos;s map out a prioritized Quick-Win Roadmap.
              </h3>
              <p className="text-muted-foreground mb-6 text-pretty max-w-md mx-auto leading-relaxed">
                Book a brief 15-minute diagnostic call with a senior consultant. We&apos;ll identify your highest-impact fixes—no sales pitch, just a clear action plan.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 h-auto text-base gap-2 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://calendly.com/acugenconsulting/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarDays className="h-5 w-5" />
                  Book Your 15-Minute Roadmap Call
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Prefer email?{" "}
                <a href="mailto:hello@acugenconsulting.com" className="text-primary hover:underline font-medium">
                  hello@acugenconsulting.com
                </a>
              </p>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={handleStart}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Retake the diagnostic
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">© 2025 Acugen Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
