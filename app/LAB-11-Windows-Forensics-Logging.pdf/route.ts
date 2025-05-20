import { NextResponse } from "next/server"

export async function GET() {
  // In a production environment, you would serve the actual PDF file
  // For now, we'll simulate a file download with text content

  const content = `
Abdullrahman Alghanim
04/15/2025

LAB 11 - Windows Forensics & Logging
CIS 4204

This lab document contains information about Windows Forensics and Logging techniques,
including event log configuration, artifact collection, and timeline reconstruction.

Key findings:
- Windows Event Viewer showing security logs
- PowerShell output showing logging configuration
- Evidence preservation techniques

This is a placeholder for the actual lab document content.
  `

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=LAB-11-Windows-Forensics-Logging.pdf",
    },
  })
}
