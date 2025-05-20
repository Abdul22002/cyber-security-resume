import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DocumentViewerPage({ params }: { params: { filename: string } }) {
  const filename = params.filename
  const title = filename.replace(/-/g, " ").replace(".pdf", "")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <Link href="/#lab-documents" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lab Documents
          </Link>

          <div className="flex gap-3">
            <a href={`/${filename}`} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm" className="gap-2 border-cyan-700 hover:bg-cyan-900/20">
                <ExternalLink className="h-4 w-4" />
                Open in New Tab
              </Button>
            </a>
            <a href={`/${filename}`} download={filename}>
              <Button
                size="sm"
                className="gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </a>
          </div>
        </div>

        <Card className="bg-gray-800/50 border-gray-700 p-4 mb-6">
          <h1 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h1>
          <p className="text-gray-300">Viewing document: {filename}</p>
        </Card>

        <div className="bg-white rounded-md overflow-hidden shadow-xl min-h-[800px] flex items-center justify-center">
          <iframe src={`/${filename}`} className="w-full h-[800px]" title={title}>
            <p className="text-gray-800 p-8 text-center">
              Your browser does not support iframes. Please use the download button above to view the document.
            </p>
          </iframe>
        </div>
      </div>
    </div>
  )
}
