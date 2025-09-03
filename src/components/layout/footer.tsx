import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-blue-600">
              <span className="text-xs font-bold text-white">SC</span>
            </div>
            <span className="font-bold">Soccer Central</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with passion for football fans worldwide.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4 text-sm">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}