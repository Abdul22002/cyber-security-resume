import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface DocumentCardProps {
  title: string
  description: string
  icon: ReactNode
  externalUrl: string
}

export default function DocumentCard({ title, description, icon, externalUrl }: DocumentCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:border-cyan-700/50">
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 p-2 bg-gray-900 rounded-full">{icon}</div>
          <h3 className="text-base font-semibold mb-1 text-cyan-400">{title}</h3>
          <p className="text-gray-400 text-xs mb-3">{description}</p>
          <Link href={externalUrl} target="_blank" className="w-full">
            <Button
              variant="default"
              size="sm"
              className="gap-2 w-full bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700"
            >
              <ExternalLink className="h-3 w-3" />
              View
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
