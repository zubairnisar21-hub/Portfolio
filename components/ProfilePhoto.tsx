"use client";

import { useState } from "react";

export default function ProfilePhoto({ size = "md" }: { size?: "sm" | "md" }) {
  const [failed, setFailed] = useState(false);
  const dimensions = size === "md" ? "h-12 w-12 text-sm" : "h-9 w-9 text-xs";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-violet-400/40 ${dimensions}`}
    >
      {failed ? (
        <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500 to-fuchsia-600 font-bold text-white">
          MZ
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${basePath}/profile.jpg`}
          alt="Muhammad Zubair"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </span>
  );
}
