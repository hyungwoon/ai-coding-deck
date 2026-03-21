import { NextResponse } from "next/server";

const SLACK_TOKEN = process.env.SLACK_TOKEN!;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL!;
const MARKER = "[HOMEWORK-W1]";
const DEADLINE = new Date("2026-03-27T21:00:00+09:00");

const assignments = [
  "신지환", "김자현", "조윤진", "고지영",
  "모효빈", "유재형", "장윤주", "이용진",
];

export async function GET() {
  const now = new Date();
  if (now > DEADLINE) {
    return NextResponse.json({ message: "deadline passed, no reminder sent" });
  }

  const res = await fetch("https://slack.com/api/conversations.history", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SLACK_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ channel: SLACK_CHANNEL, limit: 100 }),
  });

  const data = await res.json();
  if (!data.ok) {
    return NextResponse.json({ error: data.error }, { status: 500 });
  }

  const submittedNames = new Set<string>();
  for (const msg of data.messages ?? []) {
    if (msg.text?.startsWith(MARKER)) {
      const match = msg.text.replace(MARKER, "").trim().match(/^(.+?)\s*[—-]/);
      if (match) submittedNames.add(match[1].trim());
    }
  }

  const notSubmitted = assignments.filter((name) => !submittedNames.has(name));

  if (notSubmitted.length === 0) {
    return NextResponse.json({ message: "all submitted" });
  }

  const diff = DEADLINE.getTime() - now.getTime();
  const daysLeft = Math.ceil(diff / 86400000);

  const urgency = daysLeft <= 1 ? "!!!" : daysLeft <= 3 ? "!" : "";
  const nameList = notSubmitted.map((n) => `• ${n}`).join("\n");

  const text = [
    `*[1주차 과제 리마인드]* ${urgency}`,
    "",
    `아직 제출하지 않은 분이 ${notSubmitted.length}명 있습니다:`,
    nameList,
    "",
    `*마감: 3월 27일 (금) 21:00* (${daysLeft}일 남음)`,
    "",
    `제출 페이지: https://ai-coding-deck-eight.vercel.app/homework/week1`,
  ].join("\n");

  await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SLACK_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: SLACK_CHANNEL,
      text,
      unfurl_links: false,
    }),
  });

  return NextResponse.json({ reminded: notSubmitted, daysLeft });
}
