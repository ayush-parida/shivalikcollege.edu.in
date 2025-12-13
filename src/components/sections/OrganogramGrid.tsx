"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { OrganogramDiagram } from "@/lib/types";

interface OrganogramGridProps {
  diagrams: OrganogramDiagram[];
}

export function OrganogramGrid({ diagrams }: OrganogramGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const activeDiagram = diagrams.find((diagram) => diagram.id === expandedId) ?? null;

  useEffect(() => {
    if (!activeDiagram) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDiagram]);

  return (
    <>
      <section className="grid gap-8 lg:grid-cols-2">
        {diagrams.map((diagram, index) => (
          <article
            key={diagram.id}
            className="flex h-full flex-col gap-6 rounded-4xl border border-slate-100 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-8"
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Diagram {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">{diagram.title}</h2>
              <p className="text-base text-slate-600">{diagram.description}</p>
              {diagram.link ? (
            <a
              href={diagram.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
            >
              {diagram.link.label}
              <span aria-hidden>→</span>
            </a>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => setExpandedId(diagram.id)}
              className="group relative min-h-[360px] flex-1 overflow-hidden rounded-3xl border border-slate-100 bg-slate-50"
              aria-label={`Expand ${diagram.title}`}
            >
              <Image
            src={diagram.image}
            alt={diagram.title}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-contain p-6 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900">
              Click image to view
            </span>
              </div>
            </button>
          </article>
        ))}
      </section>

      {activeDiagram ? (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setExpandedId(null)}
              className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/20"
            >
              Close
            </button>
          </div>
          <div className="relative mt-4 h-[calc(100%-4rem)] w-full">
            <Image
              src={activeDiagram.image}
              alt={activeDiagram.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
