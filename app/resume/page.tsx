import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const githubResumeUrl =
    "https://github.com/Abdul22002/cyber-security-resume/blob/main/Abdul_jobresume_CyberSecurity_NEW.pdf"

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <Card className="bg-gray-800/50 border-gray-700 p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-gray-900 p-4 rounded-full mb-6">
              <FileText className="h-16 w-16 text-cyan-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-cyan-400">Resume</h1>
            <p className="text-gray-300 max-w-2xl mb-6">
              My resume highlights my experience in information security, including system hardening, vulnerability
              assessment, and security analysis.
            </p>
            <div className="flex gap-4">
              <Link href={githubResumeUrl} target="_blank">
                <Button className="gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700">
                  <ExternalLink className="h-4 w-4" />
                  View
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="gap-2 border-cyan-700 hover:bg-cyan-900/20">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-emerald-400">Education</h2>
              <div className="mb-4">
                <h3 className="font-medium text-gray-200">University of South Florida</h3>
                <p className="text-gray-400">Bachelor of Science in Information Security</p>
                <p className="text-gray-500 text-sm">2020 - 2024</p>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-emerald-400">Skills Summary</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>System hardening (Windows & Linux)</li>
                <li>Vulnerability assessment and penetration testing</li>
                <li>Security monitoring and incident response</li>
                <li>Network security and firewall configuration</li>
                <li>Security awareness training</li>
                <li>Risk assessment and management</li>
                <li>Compliance frameworks (NIST, ISO 27001)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-emerald-400">Projects</h2>
              <p className="text-gray-300 mb-4">
                Please visit the Projects section on my website to view my detailed lab work and projects in:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Windows and Linux System Hardening</li>
                <li>Malware Analysis</li>
                <li>Digital Forensics</li>
                <li>Social Engineering Defense</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href={githubResumeUrl} target="_blank">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700"
              >
                <ExternalLink className="h-5 w-5" />
                View Complete Resume
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
