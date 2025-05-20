"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Shield, Database, Lock, Server, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

interface LabDocumentsProps {
  githubDocs: {
    resume: string
    proxmox: string
    linuxHardening: string
    malwareAnalysis: string
    windowsHardening: string
    databaseHacking: string
  }
}

export default function LabDocuments({ githubDocs }: LabDocumentsProps) {
  const [activeTab, setActiveTab] = useState("all")

  // Define documents by category
  const documentsByCategory = {
    "system-hardening": [
      {
        id: "lab-9",
        title: "Windows System Hardening",
        date: "04/20/2025",
        description: "Implementation of security controls and hardening techniques for Windows environments.",
        icon: <Shield className="h-6 w-6 text-cyan-400" />,
        externalUrl: githubDocs.windowsHardening,
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
        externalUrl: githubDocs.linuxHardening,
        highlights: [
          "Configured automatic security updates",
          "Implemented host-based firewall rules",
          "Secured SSH configuration",
          "Applied filesystem permissions hardening",
        ],
      },
      {
        id: "proxmox",
        title: "Proxmox Server Configuration",
        date: "04/15/2025",
        description: "Setup and configuration of Proxmox virtualization environment for security testing.",
        icon: <Server className="h-6 w-6 text-cyan-400" />,
        externalUrl: githubDocs.proxmox,
        highlights: [
          "Virtualization environment setup",
          "Network configuration for security testing",
          "Resource allocation and management",
          "Security hardening of the virtualization platform",
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
        externalUrl: githubDocs.malwareAnalysis,
        highlights: [
          "Static analysis of malware samples",
          "Dynamic analysis in isolated environment",
          "Registry and file system impact assessment",
          "Behavioral analysis and IOC identification",
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
        externalUrl: githubDocs.databaseHacking,
        highlights: [
          "SQL injection vulnerability assessment",
          "Database security configuration",
          "Privilege escalation techniques",
          "Mitigation strategies implementation",
        ],
      },
    ],
    resume: [
      {
        id: "resume",
        title: "Cybersecurity Resume",
        date: "05/20/2025",
        description: "My professional resume highlighting cybersecurity skills and experience.",
        icon: <FileText className="h-6 w-6 text-emerald-400" />,
        externalUrl: githubDocs.resume,
        highlights: [
          "Information Security specialization",
          "System hardening expertise",
          "Vulnerability assessment skills",
          "Security analysis experience",
        ],
      },
    ],
  }

  // Create the "all" category by combining all documents
  const allDocuments = [
    ...documentsByCategory["system-hardening"],
    ...documentsByCategory["malware-analysis"],
    ...documentsByCategory["database-security"],
    ...documentsByCategory["resume"],
  ]

  // Final labDocuments object with "all" category
  const labDocuments = {
    all: allDocuments,
    ...documentsByCategory,
  }

  return (
    <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-center mb-8 overflow-x-auto pb-2">
        <TabsList className="bg-gray-800/50 p-1">
          <TabsTrigger value="all" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
            All
          </TabsTrigger>
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
            value="database-security"
            className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400"
          >
            Database Security
          </TabsTrigger>
          <TabsTrigger value="resume" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
            Resume
          </TabsTrigger>
        </TabsList>
      </div>

      {Object.keys(labDocuments).map((category) => (
        <TabsContent key={category} value={category} className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labDocuments[category].map((doc) => (
              <Card key={doc.id} className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <CardHeader className="pb-2 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {doc.icon}
                      <div>
                        <CardTitle className="text-lg text-cyan-400">{doc.title}</CardTitle>
                        <p className="text-xs text-gray-400">{doc.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gray-900/50 text-emerald-400 border-emerald-800/50 text-xs">
                      CIS 4204
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2 px-4 pt-0">
                  <p className="text-gray-300 text-sm mb-3">{doc.description}</p>

                  <div className="bg-gray-900/50 rounded-md p-3 border border-gray-700">
                    <h4 className="text-xs font-medium text-emerald-400 mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {doc.highlights.slice(0, 2).map((highlight, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center pt-2 pb-4">
                  <Link href={doc.externalUrl} target="_blank">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
