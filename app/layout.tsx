import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abdullrahman Alghanim | Cybersecurity Professional",
  description:
    "Information Security professional specializing in system hardening, vulnerability assessment, and security analysis.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}

          {/* Fixed Contact Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <Link href="/#contact">
              <Button
                size="icon"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 shadow-lg"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Contact Me</span>
              </Button>
            </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
