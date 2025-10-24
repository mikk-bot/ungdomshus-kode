import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ungdomshuset - Et sted der alle tilhører",
  description: "Ungdomshuset i Hyllestad Kommune - Et inkluderende møtested for aktiviteter, opplevelser og fellesskap",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <body className="antialiased">{children}</body>
    </html>
  )
}
