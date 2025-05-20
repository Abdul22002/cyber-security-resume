import { NextResponse } from "next/server"

export async function GET() {
  // In a production environment, you would serve the actual PDF file
  // For now, we'll simulate a file download with text content

  const content = `
Abdullrahman Alghanim
04/05/2025

LAB 12 - Social Engineering
CIS 4204

This lab document contains information about Social Engineering techniques,
including phishing campaign analysis, attack vectors, and defensive countermeasures.

Key findings:
- Phishing email analysis
- Social engineering attack vectors
- User awareness training techniques
- Defensive countermeasures

This is a placeholder for the actual lab document content.
  `

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=LAB-12-Social-Engineering.pdf",
    },
  })
}
