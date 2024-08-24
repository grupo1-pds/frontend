"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Shield } from 'lucide-react';

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Shield className="h-6 w-6" />
        <span className="hidden lg:inline-block">
          SafeElder
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/login"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/login" && "hidden"
          )}
        >
          Login
        </Link>
      </nav>
    </div>
  )
}
