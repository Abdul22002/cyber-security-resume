import { NextResponse } from "next/server"

export async function GET() {
  // In a production environment, you would serve the actual PDF file
  // For now, we'll simulate a file download with text content

  const content = `
Abdullrahman Alghanim
04/20/2025

LAB 9 - Windows System Hardening
CIS 4204

This lab document contains information about Windows System Hardening techniques,
including registry modifications, security policy configurations, and PowerShell
commands for securing Windows environments.

Key findings:
- PowerShell output showing SMB1 is FALSE and SMB2 is TRUE
- Windows Registry Editor showing security settings
- PowerShell ISE showing DSC script execution

This is a placeholder for the actual lab document content.
  `

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=LAB-9-Windows-System-Hardening.pdf",
    },
  })
}
