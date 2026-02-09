"use client";

import Link from "next/link";
import { EventsData } from "@/lib/types";
import { useRef } from "react";

interface EventsSectionProps {
  events: EventsData;
}

export default function EventsSection({ events }: EventsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -340,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 text-slate-900">
      <div className="section-inner relative z-10 space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Upcoming
            </p>
            <div className="section-heading mt-2 text-slate-900">
              {events.sectionHeading}
            </div>
            <div className="section-subtitle text-slate-600">
              {events.sectionSubtitle}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
              {events.items.length.toString().padStart(2, "0")}
              <span className="text-slate-900">{events.countLabel}</span>
            </span>
            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Previous events"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                aria-label="Next events"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="relative -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-12 lg:px-12">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {events.items.map((event) => {
              return (
                <Link
                  key={event.name}
                  href={event.href}
                  className="group relative flex min-w-[280px] max-w-[320px] flex-shrink-0 snap-start flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-md md:min-w-[320px]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-slate-900 transition-all group-hover:h-1.5" />
                  <div className="mt-2 flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {event.date}
                    </p>
                    <p className="text-lg font-semibold leading-tight text-slate-900 transition-colors group-hover:text-slate-700">
                      {event.name}
                    </p>
                    <p className="text-xs text-slate-600">{event.location}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-slate-700">
                    {events.ctaLabel}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14m0 0-5-5m5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* Scroll Hint */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
    </section>
  );
}
