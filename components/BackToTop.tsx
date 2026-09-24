"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 300);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-18 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-moss-500/60 bg-ink-900 text-moss-300 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.9)] transition-all hover:-translate-y-1 hover:border-moss-300 hover:bg-moss-950 hover:text-linen-100 sm:bottom-24 sm:right-8"
      aria-label="Voltar ao topo"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 14 6-6 6 6" />
      </svg>
    </button>
  );
}
