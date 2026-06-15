import React from "react";
import law from "@/lib/law";

const LawCard = ({ item }) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 flex flex-col justify-between gap-4 transition hover:shadow-md hover:-translate-y-0.5">

      {/* Top content */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition">
            {item.title}
          </h3>

          <span className="shrink-0 text-[10px] px-2 py-1 rounded-full border border-border text-muted-foreground">
            {item.type === "law"
              ? "Хууль"
              : item.type === "regulation"
              ? "Журам"
              : "Стандарт"}
          </span>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2">
          {item.category}
        </p>
      </div>

      {/* Bottom action */}
      <div className="flex items-center justify-between">
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-medium text-primary hover:underline"
        >
          Дэлгэрэнгүй үзэх →
        </a>

       
      </div>
    </div>
  );
};

export default function Laws() {
  return (
    <main className="w-full bg-background py-14">
      <div className="mx-auto max-w-5xl px-4">

        <h1 className="text-2xl font-semibold text-foreground mb-6">
          Хууль, журам, стандарт
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {law.map((item) => (
            <LawCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </main>
  );
}