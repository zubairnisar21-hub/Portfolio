"use client";

import { ArrowUpRight, Github, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { Reveal, SectionHeading } from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\nEmail: ${email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "zubairnisar21-hub",
      href: profile.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-96 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(124,92,252,0.13),transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth opening every day."
          description="Have an app idea, a role to fill or just want to talk Flutter and Android? Drop a message — I usually reply within a day."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass h-full rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-white">Direct lines</h3>
              <div className="mt-6 space-y-3">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const content = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/12 text-violet-200">
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/40">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block break-all text-[13px] font-medium text-white/85">
                          {channel.value}
                        </span>
                      </span>
                      {channel.href && (
                        <ArrowUpRight size={14} className="ml-auto mt-2 shrink-0 text-white/30" />
                      )}
                    </>
                  );
                  return channel.href ? (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5 transition-colors hover:border-violet-400/35 hover:bg-white/[0.05]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={channel.label}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
              <div className="mt-7 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] p-4">
                <p className="flex items-center gap-2 text-[12px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to work
                </p>
                <p className="mt-1.5 text-[12px] leading-6 text-white/55">
                  Freelance projects, full-time roles or interesting collaborations — all welcome.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[12px] font-semibold text-white/70">Your name</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ali Khan"
                    className="mt-2 w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-violet-400/50 focus:bg-white/[0.05]"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-semibold text-white/70">Your email</span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-violet-400/50 focus:bg-white/[0.05]"
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="text-[12px] font-semibold text-white/70">What are we building?</span>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the app, the problem and your timeline..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-violet-400/50 focus:bg-white/[0.05]"
                />
              </label>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[11px] leading-5 text-muted">
                  This opens your email app with the message ready to send.
                </p>
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white"
                >
                  Send message <Send size={15} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
