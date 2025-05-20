"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Terminal, Shield, Database, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LabDocuments() {
  const [activeTab, setActiveTab] = useState("system-hardening")

  const labDocuments = {
    "system-hardening": [
      {
        id: "lab-9",
        title: "Windows System Hardening",
        date: "04/20/2025",
        description: "Implementation of security controls and hardening techniques for Windows environments.",
        icon: <Shield className="h-6 w-6 text-cyan-400" />,
        filename: "LAB-9-Windows-System-Hardening.pdf",
        images: [
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "Windows Registry Editor showing security settings",
            caption: "Windows Registry Editor showing security settings",
          },
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "PowerShell output showing SMB configuration",
            caption: "PowerShell output showing SMB configuration",
          },
        ],
        highlights: [
          "Implemented Windows security baselines",
          "Configured Windows Defender advanced settings",
          "Disabled unnecessary services and protocols",
          "Applied principle of least privilege",
        ],
      },
      {
        id: "lab-10-linux",
        title: "Linux System Hardening",
        date: "04/18/2025",
        description: "Comprehensive approach to securing Linux systems against common vulnerabilities.",
        icon: <Terminal className="h-6 w-6 text-emerald-400" />,
        filename: "LAB-10-Linux-System-Hardening.pdf",
        images: [
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "Terminal showing unattended-upgrades configuration",
            caption: "Terminal showing unattended-upgrades configuration",
          },
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "Terminal output showing bash script execution",
            caption: "Terminal output showing bash script execution",
          },
        ],
        highlights: [
          "Configured automatic security updates",
          "Implemented host-based firewall rules",
          "Secured SSH configuration",
          "Applied filesystem permissions hardening",
        ],
      },
    ],
    "malware-analysis": [
      {
        id: "lab-10-malware",
        title: "Malware Analysis",
        date: "04/18/2025",
        description: "Techniques for analyzing and understanding malicious software behavior.",
        icon: <Lock className="h-6 w-6 text-cyan-400" />,
        filename: "LAB-10-Malware-Analysis.pdf",
        images: [
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "SCT folder contents showing toolkit files",
            caption: "SCT folder contents showing toolkit files",
          },
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "Regedit screen showing registry keys",
            caption: "Regedit screen showing registry keys",
          },
        ],
        highlights: [
          "Static analysis of malware samples",
          "Dynamic analysis in isolated environment",
          "Registry and file system impact assessment",
          "Behavioral analysis and IOC identification",
        ],
      },
    ],
    forensics: [
      {
        id: "lab-11",
        title: "Windows Forensics & Logging",
        date: "04/15/2025",
        description: "Methods for investigating security incidents and configuring effective logging in Windows.",
        icon: <Shield className="h-6 w-6 text-emerald-400" />,
        filename: "LAB-11-Windows-Forensics-Logging.pdf",
        images: [
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "Windows Event Viewer showing security logs",
            caption: "Windows Event Viewer showing security logs",
          },
        ],
        highlights: [
          "Windows Event Log configuration",
          "Artifact collection and analysis",
          "Timeline reconstruction",
          "Evidence preservation techniques",
        ],
      },
      {
        id: "lab-12",
        title: "Linux Forensics & Logging",
        date: "04/10/2025",
        description: "Forensic investigation techniques and logging configuration for Linux systems.",
        icon: <Terminal className="h-6 w-6 text-cyan-400" />,
        filename: "LAB-12-Linux-Forensics-Logging.pdf",
        images: [
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "Terminal showing syslog configuration",
            caption: "Terminal showing syslog configuration",
          },
        ],
        highlights: [
          "Syslog configuration and analysis",
          "Filesystem timeline analysis",
          "Memory forensics techniques",
          "Network traffic analysis",
        ],
      },
    ],
    "database-security": [
      {
        id: "lab-8",
        title: "Database Hacking",
        date: "03/15/2025",
        description: "Analysis of database vulnerabilities and SQL injection techniques.",
        icon: <Database className="h-6 w-6 text-emerald-400" />,
        filename: "LAB-8-Database-Hacking.pdf",
        images: [
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "SQL injection attack demonstration",
            caption: "SQL injection attack demonstration",
          },
        ],
        highlights: [
          "SQL injection vulnerability assessment",
          "Database security configuration",
          "Privilege escalation techniques",
          "Mitigation strategies implementation",
        ],
      },
    ],
    "social-engineering": [
      {
        id: "lab-12-social",
        title: "Social Engineering",
        date: "04/05/2025",
        description: "Analysis of social engineering tactics and development of defensive strategies.",
        icon: <Lock className="h-6 w-6 text-emerald-400" />,
        filename: "LAB-12-Social-Engineering.pdf",
        images: [
          {
            src: "/placeholder.svg?height=200&width=400",
            alt: "Phishing email analysis",
            caption: "Phishing email analysis",
          },
        ],
        highlights: [
          "Phishing campaign analysis",
          "Social engineering attack vectors",
          "User awareness training techniques",
          "Defensive countermeasures",
        ],
      },
    ],
  }

  return (
    <Tabs defaultValue="system-hardening" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-center mb-8 overflow-x-auto pb-2">
        <TabsList className="bg-gray-800/50 p-1">
          <TabsTrigger
            value="system-hardening"
            className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400"
          >
            System Hardening
          </TabsTrigger>
          <TabsTrigger
            value="malware-analysis"
            className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400"
          >
            Malware Analysis
          </TabsTrigger>
          <TabsTrigger
            value="forensics"
            className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400"
          >
            Forensics
          </TabsTrigger>
          <TabsTrigger
            value="database-security"
            className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400"
          >
            Database Security
          </TabsTrigger>
          <TabsTrigger
            value="social-engineering"
            className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400"
          >
            Social Engineering
          </TabsTrigger>
        </TabsList>
      </div>

      {Object.keys(labDocuments).map((category) => (
        <TabsContent key={category} value={category} className="mt-0">
          <div className="grid gap-8">
            {labDocuments[category].map((doc) => (
              <Card key={doc.id} className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {doc.icon}
                      <div>
                        <CardTitle className="text-xl text-cyan-400">{doc.title}</CardTitle>
                        <p className="text-sm text-gray-400">{doc.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gray-900/50 text-emerald-400 border-emerald-800/50">
                      CIS 4204
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-300 mb-4">{doc.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {doc.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="overflow-hidden rounded-md border border-gray-700 bg-gray-900/50">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={400}
                            height={200}
                            className="object-cover w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1 text-center">{image.caption}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-900/50 rounded-md p-4 border border-gray-700">
                    <h4 className="text-sm font-medium text-emerald-400 mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {doc.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-4">
                  <Link href={`/view/${doc.filename}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-gray-700 hover:bg-gray-700/50 hover:text-cyan-400"
                    >
                      <Eye className="h-4 w-4" />
                      View Document
                    </Button>
                  </Link>
                  <a href={`/${doc.filename}`} download={doc.filename}>
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
