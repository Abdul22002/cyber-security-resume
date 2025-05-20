import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  Github,
  Linkedin,
  FileText,
  Shield,
  Code,
  Database,
  Lock,
  Server,
  Globe,
  Mail,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import SkillsRadar from "@/components/skills-radar"
import DocumentCard from "@/components/document-card"
import HeroAnimation from "@/components/hero-animation"
import LabDocuments from "@/components/lab-documents"

// GitHub document URLs
const GITHUB_DOCS = {
  resume: "https://github.com/Abdul22002/cyber-security-resume/blob/main/Abdul_jobresume_CyberSecurity_NEW.pdf",
  proxmox: "https://github.com/Abdul22002/cyber-security-resume/blob/main/Configuration%20of%20proxmox%20Server%20.pdf",
  linuxHardening:
    "https://github.com/Abdul22002/cyber-security-resume/blob/main/LAB%2010%20-%20Linux%20System%20Hardening.pdf",
  malwareAnalysis:
    "https://github.com/Abdul22002/cyber-security-resume/blob/main/LAB%2010%20-%20Malware%20Analysis.pdf",
  windowsHardening:
    "https://github.com/Abdul22002/cyber-security-resume/blob/main/LAB%209%20Windows%20System%20Hardening.pdf",
  databaseHacking: "https://github.com/Abdul22002/cyber-security-resume/blob/main/Lab%208%20database%20hacking.pdf",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            Abdullrahman Alghanim
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
            Information Security | University of South Florida
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="https://github.com/dashboard" target="_blank">
              <Button variant="outline" className="gap-2 border-cyan-700 hover:bg-cyan-900/20">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/abdul-alghanim/" target="_blank">
              <Button variant="outline" className="gap-2 border-cyan-700 hover:bg-cyan-900/20">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
            <Link href={GITHUB_DOCS.resume} target="_blank">
              <Button variant="outline" className="gap-2 border-cyan-700 hover:bg-cyan-900/20">
                <ExternalLink className="h-5 w-5" />
                View Resume
              </Button>
            </Link>
          </div>
          <Link href="#about" className="animate-bounce inline-block">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">My Background</h3>
              <p className="mb-4">
                As a dedicated Information Security professional, I am passionate about protecting digital assets and
                infrastructure from evolving cyber threats. My journey in cybersecurity began at the University of South
                Florida, where I developed a strong foundation in security principles, risk management, and defensive
                techniques.
              </p>
              <p>
                I specialize in system hardening, vulnerability assessment, and security analysis. My approach combines
                technical expertise with a deep understanding of threat actor methodologies to build robust security
                postures for organizations.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">My Philosophy</h3>
              <p className="mb-4">
                I believe that effective cybersecurity requires a holistic approach that balances technical controls
                with human factors. Security is not just about implementing tools and technologies, but also about
                fostering a culture of awareness and responsibility.
              </p>
              <p>
                My goal is to bridge the gap between complex security concepts and practical implementation, making
                cybersecurity accessible and manageable for organizations of all sizes. I am committed to continuous
                learning and staying ahead of emerging threats in this rapidly evolving field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SkillsRadar />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-400">Security Operations</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className="bg-gray-800/50">
                    Incident Response
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Threat Hunting
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    SIEM Management
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Log Analysis
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-400">System Security</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className="bg-gray-800/50">
                    Windows Hardening
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Linux Hardening
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Vulnerability Assessment
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Patch Management
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-400">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className="bg-gray-800/50">
                    Python
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Bash Scripting
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    PowerShell
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Network Analysis
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-400">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className="bg-gray-800/50">
                    Technical Documentation
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Security Awareness Training
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Risk Communication
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800/50">
                    Team Collaboration
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Documents Section */}
      <section id="lab-documents" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Lab Documents & Reports</h2>
          <LabDocuments githubDocs={GITHUB_DOCS} />
        </div>
      </section>

      {/* Projects/Labs Section */}
      <section id="projects" className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Projects & Labs</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <DocumentCard
              title="Windows System Hardening"
              description="Implementation of security controls and hardening techniques for Windows environments."
              icon={<Server className="h-8 w-8 text-cyan-400" />}
              externalUrl={GITHUB_DOCS.windowsHardening}
            />
            <DocumentCard
              title="Linux System Hardening"
              description="Comprehensive approach to securing Linux systems against common vulnerabilities."
              icon={<Server className="h-8 w-8 text-emerald-400" />}
              externalUrl={GITHUB_DOCS.linuxHardening}
            />
            <DocumentCard
              title="Malware Analysis"
              description="Techniques for analyzing and understanding malicious software behavior."
              icon={<Database className="h-8 w-8 text-cyan-400" />}
              externalUrl={GITHUB_DOCS.malwareAnalysis}
            />
            <DocumentCard
              title="Proxmox Server Configuration"
              description="Setup and configuration of Proxmox virtualization environment for security testing."
              icon={<Server className="h-8 w-8 text-emerald-400" />}
              externalUrl={GITHUB_DOCS.proxmox}
            />
            <DocumentCard
              title="Database Hacking"
              description="Analysis of database vulnerabilities and SQL injection techniques."
              icon={<Database className="h-8 w-8 text-emerald-400" />}
              externalUrl={GITHUB_DOCS.databaseHacking}
            />
            <DocumentCard
              title="Cybersecurity Resume"
              description="My professional resume highlighting cybersecurity skills and experience."
              icon={<FileText className="h-8 w-8 text-cyan-400" />}
              externalUrl={GITHUB_DOCS.resume}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Get In Touch</h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Abdullrahman Alghanim</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://github.com/dashboard" target="_blank">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/abdul-alghanim/" target="_blank">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={GITHUB_DOCS.resume} target="_blank">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
                  <FileText className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
