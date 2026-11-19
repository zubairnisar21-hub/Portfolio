"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) return;
      element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      element.style.opacity = "1";
    };
    const hide = () => {
      if (ref.current) ref.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
