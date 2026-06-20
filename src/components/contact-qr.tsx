"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface Props {
  /** QR이 가리킬 경로 (기본 /contact). 배포 도메인에 종속되지 않도록 런타임 origin과 합성한다. */
  path?: string;
  size?: number;
}

export function ContactQR({ path = "/contact", size = 116 }: Props) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    setUrl(`${window.location.origin}${path}`);
  }, [path]);

  return (
    <div
      className="flex items-center justify-center rounded-xl bg-white p-2.5"
      style={{ width: size + 20, height: size + 20 }}
      aria-label="연락처 QR 코드"
    >
      {url ? (
        <QRCodeSVG value={url} size={size} bgColor="#ffffff" fgColor="#000000" level="M" marginSize={0} />
      ) : (
        <div style={{ width: size, height: size }} className="animate-pulse rounded bg-black/10" />
      )}
    </div>
  );
}
