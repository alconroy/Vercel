"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ShieldCheck, Lock, FileText, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function VarPortalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/acugen-logo-transparent.png" alt="Acugen Consulting Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-foreground">Acugen Consulting</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 uppercase tracking-widest text-xs font-semibold">
            Zero-Competition Safe Harbor
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            The Acugen VAR Alliance Charter
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 mb-8 text-pretty max-w-2xl mx-auto">
            We are your silent delivery partners, not your competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <div className="flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-5 py-2.5 text-sm font-medium">
              <ShieldCheck className="h-4 w-4" />
              100% White-Label
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-5 py-2.5 text-sm font-medium">
              <Lock className="h-4 w-4" />
              License Neutral
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-5 py-2.5 text-sm font-medium">
              <FileText className="h-4 w-4" />
              NDA-Ready
            </div>
          </div>
        </div>
      </section>

      {/* Charter Letter */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Official document container */}
          <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            {/* Document header bar */}
            <div className="bg-primary px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/acugen-logo-transparent.png" alt="Acugen Consulting" className="w-8 h-8 brightness-0 invert" />
                <span className="text-primary-foreground font-bold tracking-wide text-sm uppercase">Acugen Consulting — Official Statement</span>
              </div>
              <FileText className="h-5 w-5 text-primary-foreground/70" />
            </div>

            {/* Document body */}
            <div className="px-8 md:px-14 py-12">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
                  VAR Alliance Charter &amp; Partnership Statement
                </h2>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">A Commitment to Our VAR Partners</p>
              </div>

              <Separator className="mb-10" />

              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-base text-muted-foreground">
                  To Our Valued Value-Added Reseller Partners,
                </p>
                <p>
                  Acugen Consulting was founded on a singular principle: the best partnerships are built on absolute trust. We exist to extend your capacity, protect your client relationships, and deliver exceptional Acumatica work—entirely on your behalf.
                </p>
                <p>
                  This Charter formalizes the commitments we make to every VAR partner who works with us. These are not policies we intend to follow. They are boundaries we have hardcoded into how we operate.
                </p>

                <Separator />

                {/* Principle 1 */}
                <div className="rounded-lg border border-border bg-secondary/50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      01
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Strict White-Label Boundaries</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We operate strictly under your brand, email addresses, and Slack channels. Your clients will never know Acugen Consulting exists unless you choose to tell them. Every deliverable, every communication, and every touchpoint is executed under your identity. We do not seek credit; we deliver results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Principle 2 */}
                <div className="rounded-lg border border-border bg-secondary/50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      02
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">100% License Neutrality</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We do not sell Acumatica software licenses. We are a pure service delivery team. We will never pitch, compete for, or interfere with your license agreements. Your recurring license revenue is yours—protected and untouched. Our business model is built entirely on professional services, ensuring our incentives are always perfectly aligned with yours.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <p>
                  These principles are non-negotiable and apply to every engagement, every project, and every interaction with your clients. We invite you to verify our commitment through our pre-signed Mutual NDA, which is available for immediate download below.
                </p>

                <p>
                  We look forward to being the most trusted capacity extension your firm has ever worked with.
                </p>

                {/* Signature block */}
                <div className="pt-6">
                  <p className="mb-6 text-foreground font-medium">With unwavering commitment,</p>
                  <div className="flex flex-col">
                    <span className="font-bold text-2xl text-primary" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                      Susan Johnson
                    </span>
                    <span className="text-sm text-muted-foreground mt-1 font-medium">Susan Johnson</span>
                    <span className="text-sm text-muted-foreground">Managing Partner, Acugen Consulting</span>
                    <span className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">Dublin · Serving US &amp; Canadian Markets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document footer */}
            <div className="border-t border-border px-8 py-4 bg-muted/30 flex items-center justify-between">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Acugen Consulting — VAR Alliance Charter</span>
              <span className="text-xs text-muted-foreground">Effective 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* NDA CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <Lock className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            Ready to Secure Technical Capacity?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-xl mx-auto">
            Download our pre-signed Mutual NDA instantly. No negotiations needed—we&apos;ve already signed it. Begin scoping your first white-label project today.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 h-auto gap-3 shadow-md"
            asChild
          >
            <a href="/acugen-mutual-nda.pdf" download>
              <Download className="h-5 w-5" />
              Download Pre-signed Mutual NDA (PDF)
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Questions? Contact us at{" "}
            <a href="mailto:partners@acugenconsulting.com" className="text-primary hover:underline font-medium">
              partners@acugenconsulting.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <img src="/acugen-logo-transparent.png" alt="Acugen Consulting Logo" className="w-7 h-7" />
            <span className="text-base font-bold text-foreground">Acugen Consulting</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2025 Acugen Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
