import { NextResponse } from "next/server"

export async function GET() {
  // In a production environment, you would serve the actual PDF file
  // For now, we'll simulate a file download with text content

  const content = `
Abdullrahman Alghanim
Information Security Professional

EDUCATION
University of South Florida
Bachelor of Science in Information Security
2020 - 2024

SKILLS
• System Hardening (Windows & Linux)
• Vulnerability Assessment
• Penetration Testing
• Network Security
• Security Monitoring
• Incident Response
• Risk Assessment
• Compliance Frameworks (NIST, ISO 27001)

PROJECTS
• Windows System Hardening
• Linux System Hardening
• Malware Analysis
• Windows Forensics & Logging
• Linux Forensics & Logging
• Database Security
• Social Engineering Defense

CONTACT
Email: trymeam@gmail.com
GitHub: github.com/Abdul22002
LinkedIn: linkedin.com/in/abdul-alghanim
  `

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Abdullrahman_Alghanim_Resume.pdf",
    },
  })
}
