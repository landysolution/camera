"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function ScrollTicks() {
  const [progress, setProgress] = React.useState(0);
  const rafRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const value = docHeight > 0 ? scrollTop / docHeight : 0;
        setProgress(value);

        rafRef.current = null;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const ticks = 42;
  const activeIndex = Math.round(progress * (ticks - 1));

  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <div className="flex h-[520px] flex-col items-end justify-between">
        {Array.from({ length: ticks }).map((_, index) => {
          const isActive = index === activeIndex;
          const isPassed = index < activeIndex;

          return (
            <span
              key={index}
              className={cn(
                "h-px w-5 rounded-full bg-slate-400/40 transition-colors duration-150 dark:bg-white/30",
                isPassed && "bg-slate-500/60 dark:bg-white/45",
                isActive &&
                  "h-[2px] bg-slate-950 dark:bg-white dark:shadow-[0_0_10px_rgba(255,255,255,0.75)]"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}