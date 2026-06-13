import { Redis } from "@upstash/redis";

export interface Submission {
  ts: string;
  name: string;
  task: string;
  content: string;
  edited: boolean;
}

const KEY = "submissions:week1";

// Vercel Upstash 통합은 KV_REST_API_URL / KV_REST_API_TOKEN으로 주입한다.
// 요청 처리 시점에 생성해 빌드 타임(env 부재)에 실패하지 않도록 한다.
function getRedis(): Redis {
  return new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  });
}

export async function listSubmissions(): Promise<Submission[]> {
  const all = await getRedis().hgetall<Record<string, Submission>>(KEY);
  if (!all) return [];
  // 항목마다 독립 field(ts)라 동시 제출 시에도 유실이 없다. 표시는 ts 순.
  return Object.values(all).sort((a, b) => a.ts.localeCompare(b.ts));
}

export async function addSubmission(input: {
  name: string;
  task?: string;
  content: string;
}): Promise<Submission> {
  const ts = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
  const submission: Submission = {
    ts,
    name: input.name,
    task: input.task ?? "",
    content: input.content,
    edited: false,
  };
  await getRedis().hset(KEY, { [ts]: submission });
  return submission;
}

export async function updateSubmission(
  ts: string,
  input: { name: string; task?: string; content: string },
): Promise<Submission | null> {
  const existing = await getRedis().hget<Submission>(KEY, ts);
  if (!existing) return null;
  const updated: Submission = {
    ...existing,
    name: input.name,
    task: input.task ?? existing.task,
    content: input.content,
    edited: true,
  };
  await getRedis().hset(KEY, { [ts]: updated });
  return updated;
}
