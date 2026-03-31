"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [captcha, setCaptcha] = useState({ question: "", answer: 0 })
  const [captchaInput, setCaptchaInput] = useState("")

  // Generate new captcha question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptcha({
      question: `${num1} + ${num2} = ?`,
      answer: num1 + num2,
    })
    setCaptchaInput("")
  }

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    if (Number.parseInt(captchaInput) !== captcha.answer) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      generateCaptcha() // Generate new captcha on failed attempt
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaAnswer: captchaInput, // Send captcha for server-side verification
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })
        generateCaptcha() // Generate new captcha after successful submission
      } else {
        setSubmitStatus("error")
        generateCaptcha() // Generate new captcha on error
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      generateCaptcha() // Generate new captcha on error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800">
            {Number.parseInt(captchaInput) !== captcha.answer && captchaInput !== ""
              ? "Please solve the math problem correctly to verify you're human."
              : "Sorry, there was an error sending your message. Please try again."}
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your company name"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Tell us about your Acumatica needs..."
        />
      </div>

      <div>
        <label htmlFor="captcha" className="block text-sm font-medium text-foreground mb-2">
          Security Check: {captcha.question} *
        </label>
        <input
          type="number"
          id="captcha"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          required
          className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Enter the answer"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Please solve this simple math problem to verify you're human
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
