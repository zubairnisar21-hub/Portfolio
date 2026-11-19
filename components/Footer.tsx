import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <div>
          <p className="text-sm font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-[11px] text-muted">
            Mobile App Developer · Flutter & Native Android
          </p>
        </div>
        <p className="text-[11px] text-muted">
          Built with Next.js, Tailwind & a lot of chai. © {new Date().getFullYear()}
        </p>
        <a
          href="#top"
          className="flex items-center gap-2 text-[11px] font-semibold text-violet-300 hover:text-white"
        >
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
