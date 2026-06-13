import { NextRequest, NextResponse } from "next/server";
import { listSubmissions, addSubmission } from "@/lib/submissions-store";

export async function GET() {
  try {
    const submissions = await listSubmissions();
    return NextResponse.json({ submissions });
  } catch {
    // 저장소 미구성·일시 오류 시 빈 목록 반환 (클라이언트는 조용히 무시)
    return NextResponse.json({ submissions: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, task, content } = await req.json();

    if (!name || !content) {
      return NextResponse.json({ error: "name and content required" }, { status: 400 });
    }

    const submission = await addSubmission({ name, task, content });
    return NextResponse.json({ ts: submission.ts, success: true });
  } catch {
    return NextResponse.json({ error: "제출에 실패했습니다" }, { status: 500 });
  }
}
