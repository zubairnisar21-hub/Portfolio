"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryFull,
  Bell,
  Github,
  LayoutGrid,
  Mail,
  MapPin,
  PackageSearch,
  Search,
  ShieldCheck,
  Signal,
  Sparkles,
  UserRound,
  Wifi,
} from "lucide-react";
import { profile, stats } from "@/lib/data";
import ProfilePhoto from "./ProfilePhoto";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6 }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <ProfilePhoto size="lg" />
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-[2.65rem] font-bold leading-[1.08] tracking-[-0.035em] sm:text-6xl lg:text-[4.1rem]"
          >
            Mobile apps people <span className="gradient-text">actually keep.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-[17px]"
          >
            I&apos;m <span className="font-semibold text-white">{profile.name}</span> — a Flutter
            and native Android developer with 3 years turning ideas into fast, polished apps.
            From UI and animations to Firebase/Supabase backends and Play Store releases, I build
            the whole thing.
          </motion.p>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white"
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-violet-400/40 hover:bg-white/[0.06]"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-12 grid max-w-lg grid-cols-4 gap-3 border-t border-white/[0.07] pt-7"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-white sm:text-[1.7rem]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] leading-4 text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]"
        >
          <div className="absolute -inset-12 -z-10 rounded-full bg-violet-600/15 blur-[80px]" />

          <div className="floaty relative rotate-[3deg] rounded-[2.6rem] border border-white/15 bg-[#0c0c14] p-2.5 shadow-[0_40px_90px_-30px_rgba(76,29,149,0.8)]">
            <div className="overflow-hidden rounded-[2.05rem] border border-white/10 bg-gradient-to-b from-[#171428] via-[#0f0e19] to-[#0a0a11]">
              {/* status bar */}
              <div className="flex items-center justify-between px-5 pt-4 text-[10px] font-semibold text-white/70">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <Signal size={11} />
                  <Wifi size={11} />
                  <BatteryFull size={13} />
                </div>
              </div>

              {/* app header */}
              <div className="px-5 pt-7 pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-violet-300">
                      Campus network
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">Alerts</h3>
                  </div>
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
                    <Bell size={16} />
                    <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-400" />
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.04] px-3 py-2.5 text-white/40">
                  <Search size={13} />
                  <span className="text-[11px]">Search alerts or items...</span>
                </div>
              </div>

              {/* alert cards */}
              <div className="space-y-2.5 px-5 pb-4">
                <div className="rounded-2xl border border-rose-400/20 bg-rose-500/[0.09] p-3.5">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-rose-300">
                    <ShieldCheck size={12} /> Principal office
                  </div>
                  <p className="mt-2 text-[12px] font-semibold leading-5 text-white">
                    Campus-wide notice: library closes at 6 PM today.
                  </p>
                  <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-rose-400 to-orange-300" />
                  </div>
                </div>

                <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.09] p-3.5">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                    <PackageSearch size={12} /> Found item
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/80 to-orange-500/80 text-sm">
                      🎒
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-white">Blue backpack</p>
                      <p className="text-[10px] text-white/50">Block C · 2 hours ago</p>
                    </div>
                    <ArrowRight size={13} className="ml-auto text-violet-300" />
                  </div>
                </div>
              </div>

              {/* bottom nav */}
              <div className="mx-4 mb-4 flex items-center justify-around rounded-2xl border border-white/[0.07] bg-white/[0.04] px-2 py-2.5">
                {[LayoutGrid, Search, Bell, UserRound].map((Icon, i) => (
                  <span
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      i === 0 ? "bg-violet-500/25 text-violet-200" : "text-white/35"
                    }`}
                  >
                    <Icon size={15} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* profile card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="glass absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl px-3.5 py-3 shadow-2xl sm:-right-8"
          >
            <ProfilePhoto />
            <div>
              <p className="text-[12px] font-bold text-white">{profile.name}</p>
              <p className="text-[10px] text-white/50">{profile.role}</p>
            </div>
            <span className="ml-1 h-2 w-2 rounded-full bg-emerald-400" />
          </motion.div>

          {/* floating chips */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-5 top-16 flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-semibold shadow-xl sm:-left-10"
          >
            <Sparkles size={13} className="text-violet-300" /> Flutter
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="glass absolute -right-3 top-1/3 flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-semibold shadow-xl sm:-right-8"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300" /> Firebase
          </motion.div>
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            className="glass absolute -left-8 bottom-12 flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-semibold shadow-xl sm:-left-14"
          >
            <ShieldCheck size={13} className="text-emerald-300" /> Play Store ready
          </motion.div>
        </motion.div>
      </div>

      {/* quick contact strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mx-auto mt-20 flex max-w-6xl flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.07] px-5 pt-7 text-xs text-muted sm:px-8"
      >
        <span className="flex items-center gap-2">
          <MapPin size={13} className="text-violet-300" /> {profile.location}
        </span>
        <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white">
          <Mail size={13} className="text-violet-300" /> {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
          <Github size={13} className="text-violet-300" /> github.com/zubairnisar21-hub
        </a>
      </motion.div>
    </section>
  );
}
