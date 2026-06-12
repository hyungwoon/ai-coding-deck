import type { Metadata } from "next";
import { ClassCards } from "./_hub/class-cards";

export const metadata: Metadata = {
  title: "강의 클래스 — AI 코딩 & AI Native Design",
  description: "AI가 어떻게 작동하고, 어떻게 만들고, 어떻게 디자인하는가 — 강의 클래스 모음.",
};

export default function HubPage() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Lecture Classes
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">무엇을 배울 것인가</h1>
          <p className="mt-4 text-muted-foreground">
            AI가 어떻게 작동하고, 어떻게 만들고, 어떻게 디자인하는가.
          </p>
        </header>
        <ClassCards />
      </div>
    </main>
  );
}
