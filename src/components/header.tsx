import { Link, useRouterState } from "@tanstack/react-router";
import { personalInfo, navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            A
          </span>
          <span className="hidden sm:inline">{personalInfo.name.split(" ")[0]}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle variant="ghost" />
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex"
            asChild
          >
            <a href={personalInfo.resumeUrl} download>
              Download CV
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-tight flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
              <a href={personalInfo.resumeUrl} download>
                Download CV
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
