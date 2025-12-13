"use client";

import Image from "next/image";
import { useState } from "react";
import { PageTab } from "@/lib/types";

type PageTabsVariant = "tabs" | "stacked";

interface PageTabsProps {
  tabs: PageTab[];
  variant?: PageTabsVariant;
}

function TabContent({ tab }: { tab: PageTab }) {
  const imageLeft = tab.imagePosition === "left";
  const hasDescription = Boolean(tab.description?.trim());
  const highlights = (tab.highlights ?? []).filter((item) => item.trim() !== "");
  const cards = (tab.cards ?? []).filter(
    (card) => card.title?.trim() && card.body?.trim()
  );
  const colleges = tab.colleges ?? [];

  return (
    <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div
        className={`${imageLeft ? "lg:order-2" : ""} space-y-6 text-slate-700`}
      >
        {tab.eyebrow && (
          <p className="inline-flex items-center rounded-full border border-brand-100/70 bg-brand-50/70 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-700">
            {tab.eyebrow}
          </p>
        )}
        <div className="space-y-3">
          <h2 className="text-4xl font-semibold leading-tight text-slate-900">
            {tab.heading}
          </h2>
          {hasDescription ? (
            <p className="text-base leading-relaxed text-slate-600">
              {tab.description}
            </p>
          ) : null}
        </div>
        {colleges.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {colleges.map((college, index) => (
              <article
                key={`${college.name}-${index}`}
                className="rounded-2xl border border-slate-100/80 bg-white/80 p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-100/70"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {college.name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {college.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600/10 text-[0.65rem] font-semibold text-brand-600">
                        &bull;
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
        {highlights.length > 0 ? (
          <ul className="grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="group flex items-center gap-3 rounded-2xl border border-slate-100/80 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-lg"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-600/10 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-700">
                  *
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {cards.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="rounded-2xl border border-transparent bg-gradient-to-br from-white via-brand-50/40 to-white p-5 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.4)] ring-1 ring-slate-100/60"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
      {tab.image ? (
        <div
          className={`group relative isolate min-h-[360px] overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-brand-50/60 shadow-2xl shadow-slate-900/10 ${
            imageLeft ? "lg:order-1" : ""
          }`}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_60%)]"
            aria-hidden="true"
          />
          <Image
            src={tab.image}
            alt={tab.heading}
            fill
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 420px, 100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      ) : null}
    </div>
  );
}

export default function PageTabs({ tabs, variant = "tabs" }: PageTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (variant === "stacked") {
    return (
      <div className="space-y-6">
        {tabs.map((tab) => (
          <article
            key={tab.id}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card"
          >
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-gradient-to-r from-white via-brand-50 to-white px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
                <span>{tab.label}</span>
                <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
              </div>
            </div>
            <TabContent tab={tab} />
          </article>
        ))}
      </div>
    );
  }

  const activeTab = tabs[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-brand-50/30 p-6 shadow-[0_25px_70px_-45px_rgba(15,23,42,1)]">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -bottom-16 left-6 h-32 w-32 rounded-full bg-slate-300/40 blur-3xl" />
      </div>
      {tabs.length > 1 ? (
        <div className="flex flex-wrap gap-3 border-b border-slate-200/70 pb-5">
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={tab.id}
                type="button"
                className={`group relative overflow-hidden rounded-2xl px-5 py-2.5 text-sm font-semibold transition duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/30"
                    : "bg-white/80 text-slate-600 ring-1 ring-slate-200 hover:text-slate-900"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {tab.label}
                  {!isActive && (
                    <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
                  )}
                </span>
                {isActive && (
                  <span
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-500/90 via-brand-600 to-brand-700"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      ) : null}
      <TabContent tab={activeTab} />
    </div>
  );
}
