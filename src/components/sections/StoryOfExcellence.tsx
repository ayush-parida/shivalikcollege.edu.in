"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ExcellenceData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface StoryOfExcellenceProps {
  data: ExcellenceData;
}

const intervalMs = 7000;

export default function StoryOfExcellence({ data }: StoryOfExcellenceProps) {
  const { sectionLabel, sectionTitle, sectionSubtitle, stories } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (!listRef.current) return;
    const node = listRef.current;
    const target = node.children[index] as HTMLElement | undefined;
    if (!target) return;
    node.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (stories.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % stories.length;
        scrollToIndex(next);
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [scrollToIndex, stories.length]);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;

    const handleScroll = () => {
      const children = Array.from(node.children) as HTMLElement[];
      if (!children.length) return;
      let closest = 0;
      let smallestDiff = Number.POSITIVE_INFINITY;

      children.forEach((child, index) => {
        const diff = Math.abs(child.offsetLeft - node.scrollLeft);
        if (diff < smallestDiff) {
          smallestDiff = diff;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    return () => node.removeEventListener("scroll", handleScroll);
  }, [stories.length]);

  if (stories.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const next = (prev - 1 + stories.length) % stories.length;
      scrollToIndex(next);
      return next;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % stories.length;
      scrollToIndex(next);
      return next;
    });
  };

  return (
    <section className="section-band bg-section-a">
      <div className="section-inner space-y-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-500">
            {sectionLabel}
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                {sectionTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-base text-slate-600">
                {sectionSubtitle}
              </p>
            </div>
            <div className="flex gap-3 self-center md:self-end">
              <button
                type="button"
                aria-label="Previous story"
                onClick={handlePrev}
                className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:bg-slate-100"
              >
                <span aria-hidden="true">&larr;</span>
              </button>
              <button
                type="button"
                aria-label="Next story"
                onClick={handleNext}
                className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 transition hover:bg-slate-100"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--section-bg-a)] via-[var(--section-bg-a)]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--section-bg-a)] via-[var(--section-bg-a)]/80 to-transparent" />
          <div
            ref={listRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto"
          >
            {stories.map((story, index) => {
              const accent = getFeatureAccent(index);

              return (
                <article
                  key={story.name}
                  className="group relative min-w-[260px] flex-1 snap-start overflow-hidden rounded-[30px] bg-slate-950/70 sm:min-w-[320px] lg:min-w-[360px]"
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-70 transition duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <span
                      className={`absolute inset-0 bg-gradient-to-br ${accent.solid}`}
                    />
                    <span className="absolute inset-0 bg-black/40" />
                    <span
                      className={`absolute inset-0 bg-gradient-to-br blur-2xl ${accent.soft}`}
                    />
                  </span>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 40vw, 80vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70" />
                    <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                      <span>{story.course}</span>
                      <span className="rounded-full bg-white/20 px-4 py-1 text-white">
                        {story.package}
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 space-y-3 px-6 py-6 text-white">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                        {story.company}
                      </p>
                      <h3 className="text-2xl font-semibold">{story.name}</h3>
                    </div>
                    <p className="text-sm text-white/70">
                      {story.course} • {story.company}
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80">
                      Placement offer • {story.package}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {stories.map((story, index) => (
            <button
              key={story.name}
              type="button"
              aria-label={`View story for ${story.name}`}
              onClick={() => {
                scrollToIndex(index);
                setActiveIndex(index);
              }}
              className={`h-2 w-10 rounded-full transition ${
                index === activeIndex ? "bg-slate-900" : "bg-slate-400/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
