"use client";

import { Code2, Database, Layers, Wrench } from "lucide-react";
import { marqueeItems, skillGroups } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

const iconMap = {
  code: Code2,
  layers: Layers,
  database: Database,
  wrench: Wrench,
};

export default function Skills() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 / Toolkit"
          title="The stack behind the screens."
          description="A practical set of tools I use daily to take an app from first sketch to production — frontend, backend and everything in between."
        />
      </div>

      <div className="marquee border-y border-white/[0.07] bg-white/[0.015] py-5">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-8 px-4">
              <span className="font-display text-lg font-semibold tracking-tight text-white/35 transition-colors hover:text-white/70">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-violet-400/60" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap];
          return (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="glass card-lift h-full rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <Icon size={17} />
                  </span>
                  <h3 className="text-sm font-bold text-white">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-white/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
