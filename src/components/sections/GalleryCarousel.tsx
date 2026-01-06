"use client";

import Image from "next/image";
import { GalleryItem } from "@/lib/types";
import { useRef } from "react";
import { getFeatureAccent } from "@/lib/theme";

interface GalleryCarouselProps {
  gallery: GalleryItem[];
  heading: string;
  subtitle: string;
  controls: {
    previous: string;
    next: string;
  };
}

export default function GalleryCarousel({
  gallery,
  heading,
  subtitle,
  controls,
}: GalleryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;
    const offset = direction === "left" ? -380 : 380;
    node.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-20">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-brand-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto space-y-12 px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
            State-of-the-Art Infrastructure
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl ring-1 ring-white/10">
          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.15),transparent_50%)]" />

          <div className="relative flex flex-col gap-6 px-6 pt-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Top-Tier Labs for Practical Learning
              </p>
              <p className="mt-2 text-lg text-blue-100">
                Hands-On Learning and Practical Excellence
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label={controls.previous}
                onClick={() => scroll("left")}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition hover:scale-105 hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M14 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label={controls.next}
                onClick={() => scroll("right")}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition hover:scale-105 hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M10 6l6 6-6 6"
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

          <div
            ref={scrollRef}
            className="relative mt-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-12 pt-4 [scrollbar-width:none] lg:px-10"
            style={{ scrollbarWidth: "none" }}
          >
            {gallery.map((item, index) => {
              const accent = getFeatureAccent(index);
              const frame = String(index + 1).padStart(2, "0");

              return (
                <figure
                  key={`${item.caption}-${index}`}
                  className="group relative min-w-[280px] flex-[0_0_auto] snap-center sm:min-w-[360px] lg:min-w-[480px]"
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-800/40 shadow-2xl backdrop-blur transition-all duration-500 group-hover:border-amber-400/50 group-hover:shadow-amber-400/20 lg:h-[460px]">
                    <span
                      className="pointer-events-none absolute inset-0 opacity-60 transition duration-500 group-hover:opacity-80"
                      aria-hidden="true"
                    >
                      <span
                        className={`absolute inset-0 bg-gradient-to-br blur-3xl ${accent.soft}`}
                      />
                    </span>
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 480px, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3">
                      <span
                        className={`inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${accent.solid} px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg`}
                      >
                        Lab {frame}
                      </span>
                      {/* <p className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">
                        {item.caption}
                      </p> */}
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-4 px-6 pb-8 lg:px-10">
            <div className="flex gap-3 sm:hidden">
              <button
                type="button"
                aria-label={controls.previous}
                onClick={() => scroll("left")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M14 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label={controls.next}
                onClick={() => scroll("right")}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M10 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
              Swipe to explore
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
