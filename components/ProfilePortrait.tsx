"use client";

import { useState } from "react";
import { profileImageSrc } from "./ProfilePhoto";

export default function ProfilePortrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative shrink-0">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-500/20 to-cyan-400/25 blur-xl" />
      <div className="relative h-48 w-48 overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#13111f] shadow-2xl shadow-violet-950/50 sm:h-56 sm:w-56">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-500 to-fuchsia-600 text-4xl font-bold text-white">
            MZ
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profileImageSrc}
            alt="Muhammad Zubair — Mobile App Developer"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c0b14] to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-semibold text-white/90">Available for work</span>
        </div>
      </div>
    </div>
  );
}
