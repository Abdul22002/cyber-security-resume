import { NextResponse } from "next/server"

export async function GET() {
  // In a production environment, you would serve the actual PDF file
  // For now, we'll simulate a file download with text content

  const content = `
Abdullrahman Alghanim
04/18/2025

LAB 10 - Linux System Hardening
CIS 4204

This lab document contains information about Linux System Hardening techniques,
including unattended-upgrades configuration, bash script execution, and
terminal commands for securing Linux environments.

Key findings:
- Ubuntu 24 LTS command line with a completed update
- The 50unattended-upgrades file showing the Allowed-Origins section
- Terminal output showing the bash script execution and verification
- Terminal showing complete Ansible Playbook run output

This is a placeholder for the actual lab document content.
  `

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=LAB-10-Linux-System-Hardening.pdf",
    },
  })
}
