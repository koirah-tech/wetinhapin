'use client'

import Link from "next/link"
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "@workspace/ui/components/button"
import ThemeToggle from "@workspace/ui/components/common/themeToggle";
import Carousel from "@/components/login/Carousel";
import LoginForm from "@/components/login/LoginForm";

export default function Page() {

  const { theme } = useTheme();


  return (
    <div className="grid gap-8 justify-center px-8">
      <div className="flex flex-col items-center justify-center gap-30">
        <div>
          {/* Logo */}
          <Image 
            src={theme === "dark"  ?'/logos/logo-black-background.png' : '/logos/Logo-white-bg.png'}
            alt="WetinHapin Logo"
            width={195}
            height={41}
          />
        </div>

        <div className="grid gap-2">
          <h1 className='h1-bold'>
              Welcome Back {" "}  
              <span className='inline-block'> 👋</span>
          </h1>
          <p className="w-sm body-regular">
            Sign in to manage support tickets, collaborate with your team, and help customers faster. 
          </p>
        </div>
      </div>

      <LoginForm />
    </div>
  )
}
