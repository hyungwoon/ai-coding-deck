import type { Metadata } from "next";
import { ContactModal } from "./contact-modal";

export const metadata: Metadata = {
  title: "형운 — 연락처",
  description: "이메일·전화번호 복사, 연락처 저장.",
};

export default function ContactPage() {
  return <ContactModal />;
}
