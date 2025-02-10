import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import type React from "react"
import { ClientLayout } from "./client-layout"
import { metadata as pageMetadata } from "./layout-metadata"

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
})

export const metadata: Metadata = pageMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bricolage_Grotesque.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

