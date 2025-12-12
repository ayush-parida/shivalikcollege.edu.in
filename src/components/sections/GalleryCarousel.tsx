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
    <section className="section-band bg-section-a">
      <div className="section-inner space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Campus Life
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 text-base text-slate-600">{subtitle}</p>
        </div>

        <div className="relative overflow-hidden rounded-[48px] border border-white/50 bg-slate-950 text-white shadow-[0_35px_120px_rgba(15,23,42,0.35)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#fff_0%,transparent_45%),radial-gradient(circle_at_bottom,#38bdf8/20_0%,transparent_50%)] opacity-20" />

          <div className="flex flex-col gap-6 px-6 pt-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Immersive Gallery
              </p>
              <p className="mt-2 text-lg text-white/80">
                Use the controls or swipe to explore life on campus.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label={controls.previous}
                onClick={() => scroll("left")}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition hover:bg-white/20"
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition hover:bg-white/20"
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
                  <div className="relative h-80 w-full overflow-hidden rounded-[40px] border border-white/15 bg-slate-900/40 shadow-[0_25px_60px_rgba(15,23,42,0.45)] lg:h-[460px]">
                    <span
                      className="pointer-events-none absolute inset-0 opacity-80 transition group-hover:opacity-100"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3">
                      <span
                        className={`inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${accent.solid} px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white`}
                      >
                        Frame {frame}
                      </span>
                      <p className="text-2xl font-semibold tracking-tight text-white">
                        {item.caption}
                      </p>
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10"
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
            <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/50">
              <span className="h-px w-12 bg-white/20" />
              Swipe to explore
              <span className="h-px w-12 bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
