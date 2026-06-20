"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy, Download, Mail, Phone } from "lucide-react";

const NAME = "형운";
const ROLE = "Product Manager · Designer";
const EMAIL = "hyungwoon.kr@gmail.com";
const PHONE_DISPLAY = "010-4810-9142";
const PHONE_TEL = "+821048109142";

function vcard(): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:;${NAME};;;`,
    `FN:${NAME}`,
    `TEL;TYPE=CELL:${PHONE_TEL}`,
    `EMAIL;TYPE=INTERNET:${EMAIL}`,
    "END:VCARD",
  ].join("\r\n");
}

export function ContactModal() {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  async function copy(field: "email" | "phone", value: string) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // 클립보드 권한이 없으면 임시 input으로 폴백
      const el = document.createElement("textarea");
      el.value = value;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(field);
    window.setTimeout(() => setCopied((c) => (c === field ? null : c)), 1600);
  }

  function saveContact() {
    const blob = new Blob([vcard()], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${NAME}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <main className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-background px-5 py-10">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-card/80 p-7 shadow-2xl backdrop-blur-md">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> 강의 덱
        </Link>

        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-foreground text-xl font-bold text-background">
            {NAME.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{NAME}</h1>
            <p className="text-sm text-muted-foreground">{ROLE}</p>
          </div>
        </div>

        <div className="space-y-3">
          <ContactRow
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value={EMAIL}
            copied={copied === "email"}
            onCopy={() => copy("email", EMAIL)}
            actionHref={`mailto:${EMAIL}`}
            actionLabel="메일 보내기"
          />
          <ContactRow
            icon={<Phone className="h-4 w-4" />}
            label="Phone"
            value={PHONE_DISPLAY}
            copied={copied === "phone"}
            onCopy={() => copy("phone", PHONE_DISPLAY)}
            actionHref={`tel:${PHONE_TEL}`}
            actionLabel="전화 걸기"
          />
        </div>

        <button
          onClick={saveContact}
          className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-foreground text-sm font-semibold text-background transition-opacity active:opacity-80"
        >
          <Download className="h-4 w-4" /> 연락처 저장 (vCard)
        </button>
      </div>
    </main>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
  actionHref: string;
  actionLabel: string;
}

function ContactRow({ icon, label, value, copied, onCopy, actionHref, actionLabel }: RowProps) {
  return (
    <div className="rounded-2xl border border-border bg-background/40 p-4">
      <div className="mb-3 flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="font-mono text-[11px] uppercase tracking-widest">{label}</span>
      </div>
      <p className="mb-3 break-all text-base font-medium">{value}</p>
      <div className="flex gap-2">
        <button
          onClick={onCopy}
          className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card text-sm font-medium transition-colors active:bg-secondary"
        >
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
          {copied ? "복사됨" : "복사"}
        </button>
        <a
          href={actionHref}
          className="flex h-11 flex-1 items-center justify-center rounded-xl bg-foreground text-sm font-medium text-background transition-opacity active:opacity-80"
        >
          {actionLabel}
        </a>
      </div>
    </div>
  );
}
