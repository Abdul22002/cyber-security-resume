"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export async function sendMessage(formData: ContactFormData) {
  // Validate form data
  const result = contactSchema.safeParse(formData)

  if (!result.success) {
    throw new Error("Invalid form data")
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "trymeam@gmail.com", // The email that will receive the messages
      pass: process.env.EMAIL_PASSWORD, // This should be set in your environment variables
    },
  })

  // Email content
  const mailOptions = {
    from: formData.email,
    to: "trymeam@gmail.com",
    subject: `Portfolio Contact: ${formData.subject}`,
    text: `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0891b2;">New message from your portfolio website</h2>
  <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
  <p><strong>Subject:</strong> ${formData.subject}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #0891b2;">
    <p>${formData.message.replace(/\n/g, "<br>")}</p>
  </div>
</div>
    `,
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
