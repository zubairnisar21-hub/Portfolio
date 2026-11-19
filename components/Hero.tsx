"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Github, Mail, MapPin, Sparkles, Zap } from "lucide-react";
import { profile, stats } from "@/lib/data";
import ProfilePhoto, { profileImageSrc } from "./ProfilePhoto";

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

        {/* Modern portrait composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[460px] w-full max-w-[400px]"
        >
          <div className="absolute -inset-12 -z-10 rounded-full bg-violet-600/20 blur-[90px]" />
          <div className="absolute left-0 top-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1 w-[258px] -translate-x-1/2 -rotate-[3deg] sm:w-[290px]"
          >
            <div className="relative rounded-[2.2rem] border border-white/15 bg-gradient-to-br from-violet-500/35 via-transparent to-cyan-400/25 p-[2px] shadow-[0_45px_100px_-30px_rgba(76,29,149,0.95)]">
              <div className="relative overflow-hidden rounded-[2.05rem] bg-[#100e1a]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profileImageSrc}
                  alt="Muhammad Zubair — Mobile App Developer"
                  className="h-[350px] w-full object-cover object-top sm:h-[380px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09080f] via-[#09080f]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                    Open to work
                  </div>
                  <p className="mt-2 font-display text-xl font-bold text-white">{profile.name}</p>
                  <p className="mt-0.5 text-[11px] text-white/60">
                    {profile.role} · {profile.focus}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-2 top-16 flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-semibold shadow-xl sm:-left-6"
          >
            <Sparkles size={13} className="text-violet-300" /> Flutter
          </motion.div>

          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass absolute -right-2 top-28 flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-semibold shadow-xl sm:-right-6"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" /> Firebase
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="glass absolute bottom-14 -left-2 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-left-8"
          >
            <span className="font-display text-2xl font-bold gradient-text">09</span>
            <span className="text-[10px] leading-4 text-white/60">
              apps
              <br />
              shipped
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
            className="glass absolute bottom-8 -right-2 flex items-center gap-2 rounded-xl px-3 py-2.5 shadow-xl sm:-right-6"
          >
            <Code2 size={14} className="text-cyan-300" />
            <span className="text-[11px] font-semibold text-white/80">Dart · Kotlin</span>
            <Zap size={12} className="text-amber-300" />
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
