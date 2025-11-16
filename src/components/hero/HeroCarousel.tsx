"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
    {
        image: "https://shivalikcollege.edu.in/wp-content/uploads/2025/11/Hero-01.jpg",
        label: "Admissions 2025",
        headline: "Future-ready campus with IIT-grade mentorship",
        description:
            "Experience the energy of a NAAC A+ campus that pairs academic depth with global collaborations and next-gen research hubs.",
        statLabel: "Scholarships awarded",
        statValue: "₹5 Cr+",
    },
    {
        image: "https://shivalikcollege.edu.in/wp-content/uploads/2025/04/best-placement-in-dehradun-2-scaled.jpg",
        label: "Placements 2025",
        headline: "4000+ alumni, 500+ recruiters, 42 LPA success stories",
        description:
            "Leverage industry tie-ups and IIT-integrated programmes that translate into dream roles across tech, consulting, and product companies.",
        statLabel: "Highest package",
        statValue: "₹42 LPA",
    },
    {
        image: "https://shivalikcollege.edu.in/wp-content/uploads/2023/01/Landmark-1.png",
        label: "Campus life",
        headline: "70-acre smart campus in the foothills of Mussoorie",
        description:
            "Explore landmark infrastructure, digitally-enabled classrooms, incubation labs, and residences that fuel creativity every day.",
        statLabel: "Labs & studios",
        statValue: "65+",
    },
    {
        image: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Hiroen-Slider02.jpg",
        label: "Admissions helpdesk",
        headline: "Personalised counselling, campus tours & financial guidance",
        description:
            "Our admissions team supports every applicant with curated roadmaps, scholarship briefs, and on-campus immersion plans.",
        statLabel: "Visit slots daily",
        statValue: "9am – 5pm",
    },
    {
        image: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/cbii-banner-1-scaled.jpg",
        label: "Innovation at CBII/iHUB",
        headline: "Incubate, prototype, and launch with CBII and iHUB alliances",
        description:
            "Build ventures with mentorship from IIT experts, deep-tech labs, and interdisciplinary cohorts focused on impact.",
        statLabel: "Incubated startups",
        statValue: "30+",
    },
];

interface HeroCarouselProps {
    highlights: string[];
}

export function HeroCarousel({ highlights }: HeroCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSlides.length);
        }, 7000);

        return () => clearInterval(timer);
    }, []);

    const previousSlide = () => {
        setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    };

    const currentSlide = heroSlides[activeIndex];

    return (
        <section className="relative z-0 w-full overflow-hidden bg-slate-900 text-white">
            <div className="relative h-[520px] w-full sm:h-[620px]">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.image}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.headline}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    </div>
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            </div>

            <div className="absolute inset-0 flex items-center">
                <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[3fr_1.6fr] lg:px-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
                            {currentSlide.label}
                        </p>
                        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                            {currentSlide.headline}
                        </h1>
                        <p className="mt-4 text-base text-white/85 sm:text-lg">{currentSlide.description}</p>
                        <ul className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="https://admissions.shivalikcollege.edu.in/"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="https://shivalikcollege.edu.in/college-tour/"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Book a Campus Tour
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Admissions help desk</p>
                        <h2 className="mt-3 text-2xl font-semibold">Talk to an advisor</h2>
                        <p className="mt-3 text-sm text-white/80">
                            Call <span className="font-semibold">+91 9997155111</span> or email {""}
                            <a href="mailto:info@shivalikcollege.edu.in" className="underline">
                                info@shivalikcollege.edu.in
                            </a>{" "}
                            to schedule personalised counselling, scholarship discussions, and virtual tours.
                        </p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Visit slots</p>
                                <p className="text-xl font-bold text-white">Daily 9am – 5pm</p>
                            </div>
                            <div className="rounded-2xl bg-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Financial aid</p>
                                <p className="text-xl font-bold text-white">Merit & need-based</p>
                            </div>
                        </div>
                        <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm">
                            <p className="text-white/70">Current highlight</p>
                            <p className="text-3xl font-bold text-white">{currentSlide.statValue}</p>
                            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{currentSlide.statLabel}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center gap-3">
                <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={previousSlide}
                    className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur transition hover:bg-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className="flex items-center gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => setActiveIndex(index)}
                            className={`pointer-events-auto h-2.5 rounded-full transition ${index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/40"
                                }`}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    aria-label="Next slide"
                    onClick={nextSlide}
                    className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur transition hover:bg-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
