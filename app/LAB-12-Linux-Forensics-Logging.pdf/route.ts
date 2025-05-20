import { NextResponse } from "next/server"

export async function GET() {
  // In a production environment, you would serve the actual PDF file
  // For now, we'll simulate a file download with text content

  const content = `
Abdullrahman Alghanim
04/10/2025

LAB 12 - Linux Forensics & Logging
CIS 4204

This lab document contains information about Linux Forensics and Logging techniques,
including syslog configuration, filesystem timeline analysis, and memory forensics.

Key findings:
- Terminal showing syslog configuration
- Filesystem timeline analysis results
- Memory dump analysis

This is a placeholder for the actual lab document content.
  `

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=LAB-12-Linux-Forensics-Logging.pdf",
    },
  })
}
