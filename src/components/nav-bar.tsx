"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS: { href: string; label: string; match: (p: string) => boolean }[] = [
  { href: "/", label: "Home", match: (p) => p === "/" },
  { href: "/deck", label: "기초", match: (p) => p === "/deck" },
  { href: "/agents-2026", label: "관점", match: (p) => p === "/agents-2026" },
  { href: "/design", label: "디자인", match: (p) => p === "/design" },
  { href: "/health-research", label: "리서치", match: (p) => p.startsWith("/health-research") },
  { href: "/homework/week1", label: "환경 셋팅", match: (p) => p.startsWith("/homework") },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center gap-1 py-3 px-4 backdrop-blur-md bg-background/80 border-b border-border">
      {LINKS.map(({ href, label, match }) => {
        const active = match(pathname);
        return (
          <Link
            key={href}
            href={href}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
