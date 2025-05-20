import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { filename: string } }) {
  const filename = params.filename

  // In a production environment with Netlify, you would:
  // 1. Store your actual PDF files in the /public directory
  // 2. Or use Netlify's large media feature for larger files
  // 3. Return the file with proper headers

  // For now, we'll return a text representation
  const content = `This is the content of ${filename}. 
In a production environment, this would be the actual file content.

Abdullrahman Alghanim
CIS 4204
University of South Florida

This document is part of the cybersecurity lab work portfolio.
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=${filename}`,
    },
  })
}
