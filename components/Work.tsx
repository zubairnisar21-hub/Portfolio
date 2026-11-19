"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bus,
  Captions,
  ChevronDown,
  ExternalLink,
  Film,
  PackageSearch,
  Printer,
  Repeat2,
  Scissors,
  Share2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { projects, type Category, type Project } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  "lost-and-found": PackageSearch,
  "ai-video-cleaner": Sparkles,
  "student-bus-manager": Bus,
  "printer-app": Printer,
  "offline-video-gallery": Film,
  "auto-caption-ai": Captions,
  "social-sync": Share2,
  "skill-exchange": Repeat2,
  "video-editing": Scissors,
};

const filters: Array<"All" | Category> = ["All", "Campus", "AI", "Tools", "Community"];

function Details({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className="mt-5 border-t border-white/[0.08] pt-5">
        <p className="text-sm leading-7 text-muted">{project.description}</p>
        <ul className="mt-4 space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-[13px] leading-6 text-white/75">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-300">
            Outcome
          </p>
          <p className="mt-1.5 text-[13px] leading-6 text-white/75">{project.outcome}</p>
          <p className="mt-3 text-[11px] text-muted">
            <span className="font-semibold text-white/60">Role:</span> {project.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  open,
  onToggle,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = iconMap[project.id] ?? Sparkles;

  return (
    <motion.div
      layout
      className="glass card-lift group flex h-full w-full flex-col rounded-2xl p-6"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex flex-1 flex-col text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-cyan-400/10 text-violet-200 ring-1 ring-inset ring-white/10">
            <Icon size={20} />
          </span>
          <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/45">
            {project.category} · {project.year}
          </span>
        </div>

        <h3 className="mt-5 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-violet-200">
          {project.name}
        </h3>
        <p className="mt-2 text-[13px] leading-6 text-muted">{project.oneLiner}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/[0.045] px-2 py-1 text-[10px] font-medium text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <AnimatePresence initial={false}>
            {open && <Details project={project} />}
          </AnimatePresence>
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-violet-300">
            {open ? "Show less" : "View details"}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </span>
        </div>
      </button>

      {project.storeUrl && (
        <a
          href={project.storeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-2.5 text-[12px] font-semibold text-emerald-200 transition-colors hover:border-emerald-300/40 hover:bg-emerald-400/[0.12]"
        >
          <ExternalLink size={14} /> View on Play Store
        </a>
      )}
    </motion.div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured = filter === "All" ? visible.find((p) => p.featured) : undefined;
  const rest = featured ? visible.filter((p) => p.id !== featured.id) : visible;

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Nine apps. Real problems. Working code."
          description="Campus systems, AI utilities and everyday tools — a few things I've designed, built and shipped. Tap any card for the full breakdown."
        />

        <Reveal className="mb-9 flex flex-wrap gap-2">
          {filters.map((item) => {
            const count =
              item === "All" ? projects.length : projects.filter((p) => p.category === item).length;
            return (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setFilter(item);
                  setOpenId(null);
                }}
                className={`rounded-xl border px-4 py-2 text-[13px] font-semibold transition-all ${
                  filter === item
                    ? "border-violet-400/40 bg-violet-500/20 text-white shadow-lg shadow-violet-950/30"
                    : "border-white/[0.08] bg-white/[0.025] text-muted hover:border-white/20 hover:text-white"
                }`}
              >
                {item}
                <span className="ml-2 text-[10px] opacity-55">{String(count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </Reveal>

        <AnimatePresence mode="popLayout">
          <div key={filter} className="space-y-5">
            {featured && (
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-[#1a1033] via-[#12101f] to-[#0b0b12] p-6 sm:p-9">
                  <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
                  <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-200">
                          Featured project
                        </span>
                        <span className="text-[11px] text-white/40">{featured.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {featured.name}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">
                        {featured.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {featured.stack.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-[11px] font-medium text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenId((current) => (current === featured.id ? null : featured.id))
                        }
                        aria-expanded={openId === featured.id}
                        className="mt-7 flex items-center gap-2 text-[13px] font-semibold text-violet-200 hover:text-white"
                      >
                        {openId === featured.id ? "Hide details" : "Explore the build"}
                        <ChevronDown
                          size={15}
                          className={`transition-transform ${openId === featured.id ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openId === featured.id && <Details project={featured} />}
                      </AnimatePresence>
                    </div>

                    <div className="relative">
                      <div className="glass rounded-2xl p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                            System map
                          </span>
                          <span className="flex items-center gap-1.5 text-[10px] text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live sync
                          </span>
                        </div>
                        {[
                          { label: "Student app", sub: "Report · Browse · Chat", tone: "violet" },
                          { label: "Firestore", sub: "Real-time data & auth", tone: "cyan" },
                          { label: "Principal dashboard", sub: "Alerts · Notices · Fines", tone: "amber" },
                        ].map((row, i) => (
                          <div key={row.label}>
                            <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3.5">
                              <span
                                className={`h-8 w-8 rounded-lg ${
                                  i === 0
                                    ? "bg-violet-500/25"
                                    : i === 1
                                      ? "bg-cyan-400/20"
                                      : "bg-amber-400/20"
                                }`}
                              />
                              <div>
                                <p className="text-[12px] font-semibold text-white">{row.label}</p>
                                <p className="text-[10px] text-white/45">{row.sub}</p>
                              </div>
                            </div>
                            {i < 2 && (
                              <div className="ml-7 h-4 w-px bg-gradient-to-b from-white/20 to-transparent" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((project, i) => (
                <Reveal key={project.id} delay={(i % 3) * 0.06}>
                  <ProjectCard
                    project={project}
                    open={openId === project.id}
                    onToggle={() =>
                      setOpenId((current) => (current === project.id ? null : project.id))
                    }
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
