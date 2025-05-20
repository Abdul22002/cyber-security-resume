import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface DocumentCardProps {
  title: string
  filename: string
  description: string
  icon: ReactNode
}

export default function DocumentCard({ title, filename, description, icon }: DocumentCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 hover:border-cyan-700/50">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-gray-900 rounded-full">{icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-cyan-400">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-center gap-3">
        <Link href={`/view/${filename}`}>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-gray-700 hover:bg-gray-700/50 hover:text-cyan-400"
          >
            <Eye className="h-4 w-4" />
            View
          </Button>
        </Link>
        <a href={`/${filename}`} download={filename}>
          <Button
            size="sm"
            className="gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
