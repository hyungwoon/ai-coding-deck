"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  const isDeck = pathname === "/" || pathname === "/deck";
  const isLecture = pathname === "/lecture";
  const isHomework = pathname.startsWith("/homework");

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center gap-1 py-3 px-4 backdrop-blur-md bg-background/80 border-b border-border">
      <Link
        href="/"
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
          isDeck
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Deck
      </Link>
      <Link
        href="/lecture"
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
          isLecture
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Lecture
      </Link>
      <Link
        href="/homework/week1"
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
          isHomework
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        1주차 과제
      </Link>
    </nav>
  );
}
