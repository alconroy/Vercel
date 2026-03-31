import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Globe, ArrowRight, Linkedin } from "lucide-react"

export default function AboutPage() {
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
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="/about" className="text-foreground font-medium">
              About Us
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            About Acugen Consulting
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Trusted Acumatica
            <span className="text-primary"> Service Partner</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Delivering expert Acumatica ERP solutions across North America, UK & Ireland with a proven track record of
            successful implementations and optimizations.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading Acugen Consulting's mission to transform businesses through
              Acumatica ERP solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sjpic-fcKP799VojGCSCdNUNl9YNqv2e1CBl.jpeg"
                    alt="Sue Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">Sue Johnson</CardTitle>
                <CardDescription>Co-Founder & Managing Director</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Sue brings extensive experience in ERP consulting and business transformation. With a deep
                  understanding of enterprise systems and a passion for helping businesses optimize their operations,
                  Sue leads our strategic initiatives and client relationships.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/sueljohnson1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acpic-ktR6VYTT7NsChl1GdfFQVbd1p2ERts.jpeg"
                    alt="Alan Conroy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">Alan Conroy</CardTitle>
                <CardDescription>Co-Founder & Technical Director</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Alan is a seasoned ERP consultant with expertise in Acumatica implementation and optimization. His
                  technical leadership and commitment to excellence ensure our clients receive world-class solutions
                  tailored to their unique business needs.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/alanconroy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Acugen Consulting
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deliver exceptional results through meticulous attention to detail and unwavering commitment to
                  quality in every project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build lasting relationships with our clients, working as trusted partners to achieve their business
                  objectives and long-term success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With operations across North America, UK & Ireland, we bring international expertise and local
                  understanding to every engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Why Choose Acugen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Proven Expertise, Trusted Results</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our team combines deep technical knowledge with extensive business experience to deliver Acumatica
                solutions that drive real business value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Certified Acumatica Consultants with proven expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Track record of successful implementations throughout North America, UK & Ireland</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>End-to-end support from planning to post-implementation optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Industry-leading best practices and methodologies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Commitment to long-term client success and partnership</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="/#contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/western-european-business-professionals-meeting.jpg"
                alt="Acugen Consulting team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how Acugen Consulting can help you achieve your Acumatica ERP goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="/#contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/#services">View Our Services</a>
            </Button>
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
                Your trusted partner for Acumatica ERP implementation and optimization.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/#services" className="hover:text-foreground transition-colors">
                    Implementation
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-foreground transition-colors">
                    Optimization
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-foreground transition-colors">
                    Training
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
                  <a href="/#testimonials" className="hover:text-foreground transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-foreground transition-colors">
                    Contact
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
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">© 2024 Acugen Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
