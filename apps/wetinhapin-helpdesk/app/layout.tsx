"use client";

import localFont from "next/font/local";

import "@workspace/ui/globals.css"
import { Theme } from "@/components/Theme"
import { useTheme } from "next-themes";
import Image from "next/image";

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
  const { theme } = useTheme();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased `}
      >
        <main
          className="my-25 items-center flex flex-col  justify-center gap-30 px-8"
        >
          
            <div>
              {/* Logo */}
              <Image 
                src={theme === "dark" ? '/logos/logo-black-background.png' : '/logos/Logo-white-bg.png'}
                alt="WetinHapin Logo"
                width={195}
                height={41}
              />
            </div>
            <Theme>{children}</Theme>
    
        </main>
        
      </body>
    </html>
  )
}
