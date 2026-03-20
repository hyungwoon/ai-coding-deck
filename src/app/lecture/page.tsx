"use client";

import { Player } from "@remotion/player";
import { LectureDeck } from "../lecture-scenes/LectureDeck";
import manifest from "../../../public/audio/manifest.json";

const FPS = 30;

export default function LecturePage() {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        paddingTop: "72px",
      }}
    >
      <h1
        style={{
          color: "#fafafa",
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 16,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        AI 코딩 생태계 관계도 — 강의
      </h1>
      <p
        style={{
          color: "#a1a1aa",
          fontSize: 14,
          marginBottom: 24,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {Math.round(manifest.totalDurationFrames / FPS / 60)}분 · {manifest.slides.length}개 슬라이드 · 한국어 음성 + 자막
      </p>
      <Player
        component={LectureDeck as unknown as React.ComponentType<Record<string, unknown>>}
        inputProps={{ manifest } as unknown as Record<string, unknown>}
        durationInFrames={manifest.totalDurationFrames}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={FPS}
        style={{
          width: "100%",
          maxWidth: 1280,
          aspectRatio: "16/9",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        controls
        autoPlay={false}
        clickToPlay
        doubleClickToFullscreen
        showPosterWhenPaused
      />
      <p
        style={{
          color: "#52525b",
          fontSize: 12,
          marginTop: 16,
          fontFamily: "monospace",
        }}
      >
        Space: 재생/일시정지 · F: 전체화면 · ←→: 탐색
      </p>
    </div>
  );
}
