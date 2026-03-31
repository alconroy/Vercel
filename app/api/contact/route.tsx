import { type NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message, captchaAnswer } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    if (!captchaAnswer || isNaN(Number.parseInt(captchaAnswer))) {
      return NextResponse.json({ error: "Please complete the security check" }, { status: 400 })
    }

    const msg = {
      to: "webquestions@acugenconsulting.com", // Replace with your actual email
      from: "noreply@acugenconsulting.com", // Replace with your verified sender email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "Not provided"}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("SendGrid error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
