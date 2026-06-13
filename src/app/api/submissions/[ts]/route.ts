import { NextRequest, NextResponse } from "next/server";
import { updateSubmission } from "@/lib/submissions-store";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ ts: string }> },
) {
  try {
    const { ts } = await params;
    const { name, task, content } = await req.json();

    if (!name || !content) {
      return NextResponse.json({ error: "name and content required" }, { status: 400 });
    }

    const updated = await updateSubmission(ts, { name, task, content });
    if (!updated) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "수정에 실패했습니다" }, { status: 500 });
  }
}
