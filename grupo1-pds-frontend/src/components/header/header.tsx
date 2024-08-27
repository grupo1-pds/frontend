import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-gray-200">
      <div className="flex h-14 max-w-screen-2xl ml-4 items-center">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  )
}