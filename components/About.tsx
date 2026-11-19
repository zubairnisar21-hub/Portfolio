"use client";

import { CheckCircle2, Cpu, Layers3, Rocket } from "lucide-react";
import ProfilePhoto from "./ProfilePhoto";
import ProfilePortrait from "./ProfilePortrait";
import { Reveal, SectionHeading } from "./Reveal";

const principles = [
  {
    icon: Layers3,
    title: "End-to-end ownership",
    text: "I don't stop at screens. I wire the API, model the data, handle auth and take the build all the way to a Play Store release.",
  },
  {
    icon: Cpu,
    title: "Performance is a feature",
    text: "Smooth lists, instant transitions and offline-friendly paths — the small things that make an app feel premium on an ordinary phone.",
  },
  {
    icon: Rocket,
    title: "Ship, then sharpen",
    text: "A working build in hands beats a perfect plan in a doc. I iterate from real usage and keep polishing after launch.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 / About"
          title="I build for the moment someone actually opens the app."
          description="Three years into mobile development, I've learned that great apps aren't just good-looking — they solve a real problem, load fast and keep working when the network doesn't."
        />

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="sm:col-span-2">
              <div className="glass flex flex-col items-center gap-7 rounded-3xl p-7 sm:flex-row sm:p-8">
                <ProfilePortrait />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                    The developer
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Hey, I&apos;m Zubair.
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                    A mobile app developer who cares about the small stuff — smooth animations,
                    sensible data models and apps that still work when the internet doesn&apos;t.
                    Flutter and native Android are my everyday tools.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Flutter", "Native Android", "Firebase", "3 years experience"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="glass card-lift h-full rounded-2xl p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <item.icon size={19} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-transparent p-6">
                <span className="block text-4xl font-bold leading-none text-white/10">03</span>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  years of turning rough ideas into working apps — across campus systems, AI tools
                  and everyday utilities.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Flutter", "Android", "Firebase"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="glass h-full rounded-2xl p-6 sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <ProfilePhoto size="sm" />
                <div>
                  <p className="text-sm font-bold text-white">Muhammad Zubair</p>
                  <p className="text-[11px] text-muted">Flutter &amp; Android Developer</p>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Currently
              </p>
              <h3 className="mt-3 text-lg font-bold text-white">What I&apos;m focused on</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Shipping polished Flutter apps at Binary Solutions",
                  "Designing real Firebase & Supabase backends",
                  "Exploring practical AI features inside mobile apps",
                  "Improving animation quality and scroll performance",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-white/[0.07] pt-5">
                <p className="text-xs leading-6 text-muted">
                  Trained through <span className="font-semibold text-white">NAVTAC</span> and
                  constantly learning by building. Open to good problems and good teams.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
