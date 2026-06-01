import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Quote, ShieldCheck } from "lucide-react"
import ContactForm from "@/components/contact-form"
import AcumaticaServices from "@/components/acumatica-services"
import AIDelivery from "@/components/ai-delivery"

export default function HomePage() {
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
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a
              href="/var-portal"
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <ShieldCheck className="h-4 w-4" />
              VAR Partners
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 uppercase tracking-widest text-xs font-semibold">
            Acumatica Implementation &amp; System Health Specialists
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Elite Acumatica Capacity.
            <span className="text-primary"> On Demand</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Get certified, senior-led capacity exactly when you need it. We specialize in two things: seamless
            white-label implementations to help VARs scale, and deep post-go-live system optimizations to ensure
            your ERP performs at its peak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#testimonials">View Case Studies</a>
            </Button>
          </div>

          {/* VAR Partner Banner */}
          <div className="mt-12 border border-primary/30 bg-primary/5 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <p className="font-semibold text-foreground text-sm">Are you an Acumatica VAR?</p>
                <p className="text-muted-foreground text-sm mt-0.5">
                  Learn about our Zero-Competition Safe Harbor and white-label delivery model.
                </p>
              </div>
              <a
                href="/var-portal"
                className="flex-shrink-0 flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                VAR Alliance Charter
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AcumaticaServices />

      {/* AI-Assisted Delivery Section */}
      <AIDelivery />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proven Partnerships. Optimized Systems.</h2>
            <p className="text-xl text-muted-foreground">See how Acumatica VARs scale their professional services capacity and live enterprises maximize their ERP investment with our senior-led delivery team.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "We&apos;d been struggling with our previous ERP for years. The Acugen team had us live on Acumatica ahead of schedule, with minimal disruption to operations."
                </p>
                <div>
                  <p className="font-semibold text-foreground">CEO</p>
                  <p className="text-sm text-muted-foreground">National Distribution Company</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The custom reporting and workflow automation they built for us has saved our finance team hours every week. The ROI was clear within the first quarter."
                </p>
                <div>
                  <p className="font-semibold text-foreground">CFO</p>
                  <p className="text-sm text-muted-foreground">Mid-Market Manufacturing Firm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "What sets Acugen apart is that they actually understand the business, not just the software. Their ongoing support feels like having an internal ERP expert on call."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Operations Director</p>
                  <p className="text-sm text-muted-foreground">Field Services Business</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                About Acugen Consulting
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Elite Acumatica Consultants.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We don&apos;t hand your project off to junior consultants learning on your time. Headquartered in Dublin and serving US and Canadian clients, we combine over 51 years of ERP expertise with our proprietary AI-assisted delivery system to execute projects faster, lower implementation risks, and build system configurations that stick.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>51+ Combined ERP Years: Senior only team holding 18 collective Acumatica certification badges.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>15+ Implementations Delivered: Deep technical expertise in Distribution, Field Service, and customization frameworks (C#).</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Seamless Remote Collaboration: Operating dynamically across North American timezones under strict partner confidentiality.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/western-european-business-professionals-meeting.jpg"
                alt="Acugen Consulting team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Need Elite Acumatica Delivery or System Optimization?</h2>
            <p className="text-xl text-muted-foreground">Whether you are a VAR needing immediate white-label capacity to clear a bottleneck, or a live business looking to optimize workflows and custom reporting—our senior-led team is ready to step in. Let&apos;s discuss your project.</p>
          </div>
          <Card className="border-border">
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">Certifications & Partnerships</p>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_6039480340901990321_x-J1f4o2CZRJhxUg8NWwLvcLxEHqIEB0.jpg"
              alt="Acumatica Services Partner Logo"
              className="w-32 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/acugen-logo-transparent.png" alt="Acugen Consulting Logo" className="w-8 h-8" />
                <span className="text-lg font-bold text-foreground">Acugen Consulting</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Elite Acumatica delivery capacity for VAR partners and post-go-live optimization for growing businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    White-Label VAR Delivery
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    Post-Go-Live Optimization
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    Customization Sprints
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#ai-delivery" className="hover:text-foreground transition-colors">
                    Technical Stack
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Mutual NDA (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">© 2025 Acugen Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
