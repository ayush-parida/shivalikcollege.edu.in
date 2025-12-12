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

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className={imageLeft ? "lg:order-2" : undefined}>
        {tab.eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            {tab.eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          {tab.heading}
        </h2>
        <p className="mt-3 text-base text-slate-600">{tab.description}</p>
        {tab.highlights?.length ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {tab.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-sm text-slate-700"
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {tab.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-inner"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
      {tab.image ? (
        <div
          className={`relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-100 ${
            imageLeft ? "lg:order-1" : ""
          }`}
        >
          <Image
            src={tab.image}
            alt={tab.heading}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 420px, 100vw"
            priority
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
            <div className="rounded-full bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
              {tab.label}
            </div>
            <TabContent tab={tab} />
          </article>
        ))}
      </div>
    );
  }

  const activeTab = tabs[activeIndex];

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
      {tabs.length > 1 ? (
        <div className="flex flex-wrap gap-3 border-b border-slate-100 pb-4">
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={tab.id}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      ) : null}
      <TabContent tab={activeTab} />
    </div>
  );
}
