import { NextRequest, NextResponse } from "next/server";

const SLACK_TOKEN = process.env.SLACK_TOKEN!;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL!;
const MARKER = "[HOMEWORK-W1]";

interface SlackMessage {
  ts: string;
  text: string;
  edited?: { ts: string };
}

function parseSubmission(msg: SlackMessage) {
  const text = msg.text;
  if (!text.startsWith(MARKER)) return null;

  const lines = text.split("\n");
  const headerLine = lines[0].replace(MARKER, "").trim();
  const nameMatch = headerLine.match(/^(.+?)\s*[—-]\s*(.+)$/);
  if (!nameMatch) return null;

  return {
    ts: msg.ts,
    name: nameMatch[1].trim(),
    task: nameMatch[2].trim(),
    content: lines.slice(1).join("\n").trim(),
    edited: !!msg.edited,
  };
}

export async function GET() {
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

  const submissions = (data.messages as SlackMessage[])
    .map(parseSubmission)
    .filter(Boolean);

  return NextResponse.json({ submissions });
}

export async function POST(req: NextRequest) {
  const { name, task, content } = await req.json();

  if (!name || !content) {
    return NextResponse.json({ error: "name and content required" }, { status: 400 });
  }

  const text = `${MARKER} ${name} — ${task}\n${content}`;

  const res = await fetch("https://slack.com/api/chat.postMessage", {
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

  const data = await res.json();
  if (!data.ok) {
    return NextResponse.json({ error: data.error }, { status: 500 });
  }

  return NextResponse.json({ ts: data.ts, success: true });
}
