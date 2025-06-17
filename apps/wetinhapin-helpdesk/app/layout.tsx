import localFont from "next/font/local";

import "@workspace/ui/globals.css"
import { Theme } from "@/components/Theme"

const inter = localFont({
    src: "./fonts/InterVF.ttf",
    variable: "--font-inter",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

const montserrat = localFont({
    src: "./fonts/Montserrat.ttf",
    variable: "--font-montserrat",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased `}
      >
        <main
          className="min-h-screen my-25 items-center"
        >
          <Theme>{children}</Theme>
        </main>
        
      </body>
    </html>
  )
}
