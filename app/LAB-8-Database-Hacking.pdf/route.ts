import { NextResponse } from "next/server"

export async function GET() {
  // In a production environment, you would serve the actual PDF file
  // For now, we'll simulate a file download with text content

  const content = `
Abdullrahman Alghanim
03/15/2025

LAB 8 - Database Hacking
CIS 4204

This lab document contains information about Database Hacking techniques,
including SQL injection vulnerability assessment, database security configuration,
and mitigation strategies.

Key findings:
- The ports that are configured show a significant difference between the two photos
- Analysis of 'OR '1'='1 SQL injection technique
- Explanation of how SQL injection manipulates database queries
- Mitigation strategies based on OWASP and MITRE recommendations

This is a placeholder for the actual lab document content.
  `

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=LAB-8-Database-Hacking.pdf",
    },
  })
}
