import type { Metadata } from "next"


import "./globals.css"

export const metadata: Metadata = {
  title: "JStack App",
  description: "Created using JStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 antialiased overflow-hidden h-screen">

          {children}


      </body>
    </html>
  )
}
