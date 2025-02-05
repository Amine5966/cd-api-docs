import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Chrono Diali API Documentation",
  description: "API integration service documentation for Chrono Diali",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bricolage_Grotesque.className}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4">
              <div className="container mx-auto">{children}</div>
            </main>
            <footer className="bg-gray-100 py-2 px-2 text-center text-gray-600">
              © 2025 Chrono Diali. All rights reserved.
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}

