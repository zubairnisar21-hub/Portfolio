"use client";

import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

const icons = [BriefcaseBusiness, GraduationCap];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="04 / Journey"
          title="Where I've done the work."
          description="Three years of building, shipping and learning — in a product team and through structured training."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <div className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-violet-400/60 via-white/10 to-transparent" />
            <div className="space-y-5">
              {experience.map((item, i) => {
                const Icon = icons[i] ?? BriefcaseBusiness;
                return (
                  <Reveal key={item.company} delay={i * 0.1}>
                    <div className="relative pl-14">
                      <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/25 bg-[#12101e] text-violet-200">
                        <Icon size={18} />
                      </span>
                      <div className="glass rounded-2xl p-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-base font-bold text-white">{item.role}</h3>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-300">
                            {item.period}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-white/55">{item.company}</p>
                        <p className="mt-4 text-[13px] leading-7 text-muted">{item.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-white/[0.045] px-2.5 py-1 text-[10px] font-medium text-white/55"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="glass h-full rounded-2xl p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                The short version
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-snug text-white">
                I take an app from “idea” to “it&apos;s on the Play Store.”
              </h3>
              <p className="mt-5 text-sm leading-7 text-muted">
                That means understanding the problem, designing the flows, writing the Flutter and
                native Android code, modelling the Firebase or Supabase backend, testing on real
                devices and handling the release. I&apos;ve done that loop repeatedly across campus,
                AI and utility products.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ["UI & animation", "Polished, responsive screens"],
                  ["Backend", "Auth, data, APIs, storage"],
                  ["Release", "Builds, signing, Play Store"],
                  ["Iteration", "Fixes based on real usage"],
                ].map(([title, sub]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                  >
                    <p className="text-[13px] font-bold text-white">{title}</p>
                    <p className="mt-1 text-[11px] leading-5 text-muted">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
