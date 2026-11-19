export const profile = {
  name: "Muhammad Zubair",
  firstName: "Zubair",
  role: "Mobile App Developer",
  focus: "Flutter & Native Android",
  location: "Pakistan · Remote friendly",
  availability: "Available for freelance & full-time roles",
  email: "zubairnisaar21@gmail.com",
  phone: "+92 344 7422203",
  phoneHref: "+923447422203",
  github: "https://github.com/zubairnisar21-hub",
};

export const stats = [
  { value: "3+", label: "Years building" },
  { value: "09", label: "Apps shipped" },
  { value: "02", label: "Platforms" },
  { value: "100%", label: "End-to-end" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: ["Dart", "Kotlin", "Java", "Python", "XML"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    items: ["Flutter", "Native Android", "SwiftUI basics", "React Native basics"],
  },
  {
    title: "Backend & Data",
    icon: "database",
    items: ["Firebase", "Supabase", "Firestore", "REST APIs", "SQLite"],
  },
  {
    title: "Tools & Craft",
    icon: "wrench",
    items: [
      "Android Studio",
      "UI implementation",
      "Animations",
      "Play Store release",
      "Git & Figma handoff",
    ],
  },
];

export const marqueeItems = [
  "Flutter",
  "Dart",
  "Kotlin",
  "Java",
  "Native Android",
  "Firebase",
  "Supabase",
  "REST APIs",
  "Animations",
  "UI Design",
  "Play Store",
  "Python",
];

export type Category = "Campus" | "AI" | "Tools" | "Community";

export type Project = {
  id: string;
  name: string;
  oneLiner: string;
  description: string;
  category: Category;
  role: string;
  stack: string[];
  features: string[];
  outcome: string;
  year: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "lost-and-found",
    name: "Lost & Found Campus",
    oneLiner: "A university recovery network with principal-level alerting.",
    description:
      "A campus-wide platform where students report lost belongings, browse found items and get matched through photo-based listings. A dedicated principal office dashboard can push campus alerts, send notices and manage fines — all synchronized in real time.",
    category: "Campus",
    role: "End-to-end: frontend, backend & admin panel",
    stack: ["Flutter", "Firebase Auth", "Firestore", "Cloud Messaging", "Native Android"],
    features: [
      "Lost/found feeds with image upload and search filters",
      "Role-based principal dashboard for alerts, notices and fines",
      "Real-time chat plus push notifications for new matches",
    ],
    outcome: "Delivered as a working university pilot with live admin controls.",
    year: "2025",
    featured: true,
  },
  {
    id: "ai-video-cleaner",
    name: "AI Video Cleaner",
    oneLiner: "Clean, compress and polish clips before you share them.",
    description:
      "A utility app that takes raw phone videos and runs them through an AI-assisted cleanup pipeline — reducing noise, trimming dead frames and producing share-ready exports without a desktop editor.",
    category: "AI",
    role: "Solo build: app, processing pipeline, UI",
    stack: ["Flutter", "Python", "Firebase", "Native Android"],
    features: [
      "Batch cleanup queue with per-clip progress",
      "Smart compression presets for social platforms",
      "Offline-friendly export with retry handling",
    ],
    outcome: "Personal project exploring on-device + cloud media processing.",
    year: "2025",
  },
  {
    id: "student-bus-manager",
    name: "Student Bus Manager",
    oneLiner: "Routes, ridership and driver coordination in one app.",
    description:
      "A transport companion for university life: students see bus routes and arrival updates, while drivers and admins manage trips, ridership records and student notifications from a single system.",
    category: "Campus",
    role: "Mobile app & backend integration",
    stack: ["Flutter", "Firebase", "Maps API", "Cloud Messaging"],
    features: [
      "Live route view and stop-based arrival information",
      "Ride history and attendance-style ridership records",
      "Driver panel with trip status and broadcast notices",
    ],
    outcome: "Built as a complete campus transport prototype.",
    year: "2024",
  },
  {
    id: "printer-app",
    name: "Printer App",
    oneLiner: "Send documents to nearby printers straight from your phone.",
    description:
      "A straightforward print companion that discovers printers on the local network, previews documents and manages a clean print queue with job status and paper settings.",
    category: "Tools",
    role: "App development & native bridge",
    stack: ["Flutter", "Native Android", "Wi-Fi discovery", "SQLite"],
    features: [
      "Nearby printer discovery and connection flow",
      "Document preview with copies and paper-size controls",
      "Persisted print queue with success/failure states",
    ],
    outcome: "Utility build focused on reliable local-network printing.",
    year: "2024",
  },
  {
    id: "offline-video-gallery",
    name: "Offline Video Gallery",
    oneLiner: "A buttery gallery that never needs the internet.",
    description:
      "An offline-first media browser that indexes local videos, groups them into folders and delivers a smooth scrolling experience even on large storage libraries.",
    category: "Tools",
    role: "App architecture & UI",
    stack: ["Flutter", "SQLite", "Native Android storage"],
    features: [
      "Fast local media indexing and folder grouping",
      "Smooth scroll performance for large libraries",
      "Favourites, recent list and lightweight caching",
    ],
    outcome: "Performance-focused build for zero-connectivity use.",
    year: "2024",
  },
  {
    id: "auto-caption-ai",
    name: "Auto Caption AI",
    oneLiner: "Captions for photos and videos, generated in seconds.",
    description:
      "An AI helper that turns speech and visual context into editable captions, giving creators a quick way to produce captions, subtitles and social copy inside one simple editor.",
    category: "AI",
    role: "App, API integration & editing UI",
    stack: ["Flutter", "Python", "Supabase", "REST APIs"],
    features: [
      "Speech-to-text with editable transcript timeline",
      "Caption style presets and export formats",
      "Cloud sync for drafts across devices",
    ],
    outcome: "Exploration of practical AI tooling for mobile creators.",
    year: "2025",
  },
  {
    id: "social-sync",
    name: "Social Sync",
    oneLiner: "One compose flow for all your social accounts.",
    description:
      "A scheduling companion that lets you write once, preview per platform and keep a tidy queue of upcoming posts with a quick snapshot of how each one performed.",
    category: "Tools",
    role: "Mobile app & API layer",
    stack: ["Flutter", "Supabase", "REST APIs"],
    features: [
      "Unified composer with platform-specific previews",
      "Scheduling queue with draft auto-save",
      "Basic analytics snapshot per connected account",
    ],
    outcome: "Productivity build around a repeated creator workflow.",
    year: "2025",
  },
  {
    id: "skill-exchange",
    name: "Skill Exchange",
    oneLiner: "Trade skills with people, not money.",
    description:
      "A community marketplace where people list what they can teach and what they want to learn, then connect through matched suggestions and in-app chat.",
    category: "Community",
    role: "Full app & backend",
    stack: ["Flutter", "Supabase", "Firebase Auth"],
    features: [
      "Skill profiles with teach/learn matching",
      "Suggestion feed and in-app messaging",
      "Ratings and trust signals after sessions",
    ],
    outcome: "Community product built around peer-to-peer learning.",
    year: "2024",
  },
  {
    id: "video-editing",
    name: "Video Editing Suite",
    oneLiner: "A timeline editor made for mobile screens.",
    description:
      "A compact mobile editor with timeline trimming, layered text and filters, built to take a rough clip to a finished, shareable export without leaving the phone.",
    category: "Tools",
    role: "App development & native media work",
    stack: ["Flutter", "Native Android", "FFmpeg"],
    features: [
      "Multi-track timeline with trim and split",
      "Text overlays, filters and transitions",
      "1080p export with progress and cancel support",
    ],
    outcome: "Media tooling build focused on touch-first editing.",
    year: "2025",
  },
];

export const experience = [
  {
    role: "Mobile App Developer",
    company: "Binary Solutions",
    period: "2023 — Present",
    description:
      "Building Flutter and native Android apps end-to-end — from UI implementation and animations to Firebase/Supabase backends, testing and Play Store releases. Working across campus, AI and productivity products.",
    tags: ["Flutter", "Native Android", "Firebase", "Supabase", "Play Store"],
  },
  {
    role: "Mobile App Development Training",
    company: "NAVTAC",
    period: "Certified course",
    description:
      "Structured training in Android and Flutter development, UI patterns, backend integration and shipping complete applications as practical projects.",
    tags: ["Android", "Flutter", "Certification"],
  },
];
