import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { SiteHeader } from "@/components/header/header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <SiteHeader />
        {children}
        <Toaster />
    </section>
  )
}