"use client"

import { useState } from "react"
import { Inter } from "next/font/google"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <html lang="en">
      <body className={bricolage_Grotesque.className}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-semibold">Chrono Diali API</h1>
            </header>
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

