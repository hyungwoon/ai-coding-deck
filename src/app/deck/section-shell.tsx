"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ShellProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

const SectionShell = forwardRef<HTMLElement, ShellProps>(({ index, children, className }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "min-h-screen snap-start flex items-center justify-center px-6 sm:px-12",
        index % 2 !== 0 && "bg-muted/20",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl py-16">{children}</div>
    </section>
  );
});

SectionShell.displayName = "SectionShell";
export default SectionShell;
