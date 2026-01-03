"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroSlide } from "@/lib/types";
import { useEffect, useState } from "react";

interface HeroSliderProps {
  slides: HeroSlide[];
}

const intervalMs = 8000;

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tick = 80;
    const increment = (tick / intervalMs) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          setActiveIndex((current) => (current + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, tick);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handleTimelineJump = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const timelinePercent = Math.min(
    100,
    ((activeIndex + progress / 100) / Math.max(slides.length, 1)) * 100
  );

  return (
    <section className="w-full min-h-[calc(100svh-4.5rem)] bg-slate-950 text-white md:min-h-[calc(100vh-8rem)]">
      <div className="relative w-full px-0">
        <div className="relative h-full min-h-[calc(100svh-4.5rem)] w-full overflow-hidden border-y border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 shadow-2xl md:min-h-[calc(100vh-8rem)]">
          <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
          {slides.map((slide, index) => (
            <article
              key={slide.id}
              className={`absolute inset-0 h-full w-full overflow-hidden transition-all duration-700 ${
                index === activeIndex
                  ? "pointer-events-auto opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 translate-y-8"
              } min-h-[calc(100svh-4.5rem)] md:min-h-[calc(100vh-8rem)]`}
              aria-hidden={index !== activeIndex}
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className=""
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative z-10 flex h-full items-start px-6 pb-28 pt-12 md:px-16 md:pb-32 md:pt-16">
                <div className="max-w-3xl space-y-5 rounded-3xl bg-slate-950/40 p-6 shadow-2xl backdrop-blur">
                  <p className="text-sm font-semibold tracking-[0.3em] text-amber-300">
                    {slide.eyebrow}
                  </p>
                  <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-slate-100">{slide.body}</p>
                  <Link
                    href={slide.cta.href}
                    className="inline-flex items-center rounded-full bg-white/95 px-6 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <button
            type="button"
            aria-label="Previous slide"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-3 text-white transition hover:bg-white/30"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M13 6l-6 6 6 6"
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
            aria-label="Next slide"
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-3 text-white transition hover:bg-white/30"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M11 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 z-20 flex w-11/12 max-w-3xl -translate-x-1/2 flex-col gap-1.5 md:bottom-10">
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-[width]"
                style={{ width: `${timelinePercent}%` }}
              />
              <div className="absolute inset-0 flex">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={slide.title}
                    onClick={() => handleTimelineJump(index)}
                    className="flex-1"
                  >
                    <span className="sr-only">{slide.title}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/70">
              <span>{slides[activeIndex]?.eyebrow}</span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
