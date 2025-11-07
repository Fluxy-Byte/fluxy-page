import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fluxy Technologies - Soluções em Tecnologia",
  description: "Transformando ideias em realidade digital com IA, automação e desenvolvimento de sistemas",
  generator: "Gabriel Lopes"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} font-sans antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
