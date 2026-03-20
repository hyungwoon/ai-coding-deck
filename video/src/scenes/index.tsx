import React from "react";
import { SlideShell } from "../components/SlideShell";
import { BG, FG, CARD_BG, MUTED, BORDER, PRIMARY } from "../constants";
import { S00Title } from "./S00Title";
import { S01LlmDef } from "./S01LlmDef";
import { S02Vector } from "./S02Vector";
import { S03Reasoning } from "./S03Reasoning";
import { S04LlmVsAgent } from "./S04LlmVsAgent";
import { S05Github } from "./S05Github";
import { S06Ecosystem } from "./S06Ecosystem";
import { S07Evolution } from "./S07Evolution";
import { S08EvolutionAdv } from "./S08EvolutionAdv";
import { S09ClaudeConcepts } from "./S09ClaudeConcepts";
import { S10VibeLoop } from "./S10VibeLoop";
import { S11AntiPatterns } from "./S11AntiPatterns";
import { S12Harness } from "./S12Harness";
import { S13HarnessMaturity } from "./S13HarnessMaturity";
import { S14EditorVsAgent } from "./S14EditorVsAgent";
import { S15Cost } from "./S15Cost";
import { S16Multimodal } from "./S16Multimodal";
import { S17OntologyDef } from "./S17OntologyDef";
import { S18OntologyElements } from "./S18OntologyElements";
import { S19Rag } from "./S19Rag";
import { S20Obsidian } from "./S20Obsidian";
import { S21OntologyPractice } from "./S21OntologyPractice";
import { S22RlhfRlvr } from "./S22RlhfRlvr";
import { S23ContextMoat } from "./S23ContextMoat";

// Generic slide renderer — reads title from manifest and shows centered text
// Individual scene components can be added later for richer visuals

const GenericSlide: React.FC<{ title?: string; dark?: boolean }> = ({ title, dark }) => (
  <SlideShell dark={dark}>
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: FG,
          letterSpacing: -1,
          lineHeight: 1.2,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {title}
      </h1>
    </div>
  </SlideShell>
);

// Map slideId to component. Starts with generic, replace with custom scenes later.
const sceneMap: Record<string, React.FC> = {};

// Register all 32 slides as generic scenes
const slideIds = [
  "s00", "s01", "s02", "s03", "s04", "s05", "s06", "s07",
  "s08", "s09", "s10", "s11", "s12", "s13", "s14", "s15",
  "s16", "s17", "s18", "s19", "s20", "s21", "s22", "s23",
  "s24", "s25", "s26", "s27", "s28", "s29", "s30", "s31",
];

const slideTitles: Record<string, string> = {
  s00: "AI는 어떻게 작동하고\n어떻게 쓰는가",
  s01: "LLM이란 무엇인가",
  s02: "의미의 좌표와 AI의 책장",
  s03: "추론과 출력",
  s04: "LLM과 AI 에이전트의 차이",
  s05: "GitHub 기초",
  s06: "AI 코딩 생태계 전체 관계도",
  s07: "AI 툴 진화 경로",
  s08: "AI 툴 진화 경로 (심화)",
  s09: "Claude Code 핵심 개념",
  s10: "바이브 코딩 루프",
  s11: "바이브 코딩 안티패턴",
  s12: "하네스",
  s13: "하네스 성숙도",
  s14: "에디터 vs 에이전트",
  s15: "비용 현실",
  s16: "멀티모달",
  s17: "온톨로지",
  s18: "온톨로지 4요소",
  s19: "RAG",
  s20: "Obsidian",
  s21: "온톨로지 실전",
  s22: "RLHF → RLVR",
  s23: "컨텍스트 축적",
  s24: "해자",
  s25: "전문가 시각",
  s26: "도구의 철학",
  s27: "격차",
  s28: "시작 가이드",
  s29: "설치",
  s30: "Ultrawork",
  s31: "Contact",
};

// Register rich scene components
sceneMap["s00"] = S00Title;
sceneMap["s01"] = S01LlmDef;
sceneMap["s02"] = S02Vector;
sceneMap["s03"] = S03Reasoning;
sceneMap["s04"] = S04LlmVsAgent;
sceneMap["s05"] = S05Github;
sceneMap["s06"] = S06Ecosystem;
sceneMap["s07"] = S07Evolution;
sceneMap["s08"] = S08EvolutionAdv;
sceneMap["s09"] = S09ClaudeConcepts;
sceneMap["s10"] = S10VibeLoop;
sceneMap["s11"] = S11AntiPatterns;
sceneMap["s12"] = S12Harness;
sceneMap["s13"] = S13HarnessMaturity;
sceneMap["s14"] = S14EditorVsAgent;
sceneMap["s15"] = S15Cost;
sceneMap["s16"] = S16Multimodal;
sceneMap["s17"] = S17OntologyDef;
sceneMap["s18"] = S18OntologyElements;
sceneMap["s19"] = S19Rag;
sceneMap["s20"] = S20Obsidian;
sceneMap["s21"] = S21OntologyPractice;
sceneMap["s22"] = S22RlhfRlvr;
sceneMap["s23"] = S23ContextMoat;

for (const id of slideIds) {
  if (sceneMap[id]) continue; // already registered
  const title = slideTitles[id] ?? id;
  const dark = slideIds.indexOf(id) % 2 !== 0;
  sceneMap[id] = () => <GenericSlide title={title} dark={dark} />;
}

export function getSceneComponent(slideId: string): React.FC {
  return sceneMap[slideId] ?? (() => <GenericSlide title={slideId} />);
}
