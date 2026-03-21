import { NextRequest, NextResponse } from "next/server";

const SLACK_TOKEN = process.env.SLACK_TOKEN!;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL!;
const MARKER = "[HOMEWORK-W1]";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ ts: string }> },
) {
  const { ts } = await params;
  const { name, task, content } = await req.json();

  if (!name || !content) {
    return NextResponse.json({ error: "name and content required" }, { status: 400 });
  }

  const text = `${MARKER} ${name} — ${task}\n${content}`;

  const updateRes = await fetch("https://slack.com/api/chat.update", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SLACK_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ channel: SLACK_CHANNEL, ts, text }),
  });

  const updateData = await updateRes.json();
  if (!updateData.ok) {
    return NextResponse.json({ error: updateData.error }, { status: 500 });
  }

  const notifyText = `[수정] ${name}님이 1주차 과제를 수정했습니다 — ${task}`;
  await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SLACK_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: SLACK_CHANNEL,
      text: notifyText,
      unfurl_links: false,
    }),
  });

  return NextResponse.json({ success: true });
}
