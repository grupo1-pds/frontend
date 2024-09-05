"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Shield } from 'lucide-react';
import { ThemeToggle } from "./theme-toggle";

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex justify-center items-center">
      <Link href="/" className="flex items-center space-x-2 lg:mr-6">
        <Shield className="h-6 w-6" />
        <span className="hidden lg:inline-block text-lg">
          SafeElder
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/login"
          className={cn( 
            "transition-colors hover:text-foreground/80",
            pathname === "/login" && 'hidden' || pathname === "/dashboard" && "hidden"
          )}
        >
          Login
        </Link>
        <ThemeToggle />
      </nav>
    </div>
  )
}
