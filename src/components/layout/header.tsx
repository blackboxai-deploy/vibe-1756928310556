"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "./theme-toggle"

interface NavigationItem {
  title: string
  href: string
  badge?: string
}

const navigation: NavigationItem[] = [
  { title: "Home", href: "/" },
  { title: "Matches", href: "/matches" },
  { title: "Tickets", href: "/tickets" },
  { title: "Events", href: "/events" },
  { title: "News", href: "/news" },
  { title: "Leagues", href: "/leagues" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-600">
              <span className="text-sm font-bold text-white">SC</span>
            </div>
            <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Soccer Central
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.title}
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <div className="flex flex-col gap-1">
                <div className="h-0.5 w-5 bg-current"></div>
                <div className="h-0.5 w-5 bg-current"></div>
                <div className="h-0.5 w-5 bg-current"></div>
              </div>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-600">
                <span className="text-sm font-bold text-white">SC</span>
              </div>
              <span className="font-bold">Soccer Central</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {item.title}
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="mr-6 flex items-center space-x-2 md:hidden" href="/">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-600">
                <span className="text-sm font-bold text-white">SC</span>
              </div>
              <span className="font-bold">Soccer Central</span>
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Get Tickets
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}