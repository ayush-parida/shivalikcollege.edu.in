"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Company {
  name: string;
  logo: string;
}

interface PlacementCompaniesCarouselProps {
  sectionLabel?: string;
  sectionTitle?: string;
  companies: Company[];
}

export default function PlacementCompaniesCarousel({
  sectionLabel = "OUR RECRUITERS",
  sectionTitle = "Top Companies Recruiting Our Graduates",
  companies,
}: PlacementCompaniesCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate the items for infinite scroll
    const scrollerInner = scroller.querySelector(".scroller-inner");
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);
    
    // Clone items twice for seamless infinite loop with all logos
    for (let i = 0; i < 2; i++) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, [companies]);

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute left-10 top-20 h-48 w-48 rounded-full bg-green-600 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-400 blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 mb-12">
        {sectionLabel && (
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <p className="text-sm font-semibold uppercase tracking-wider text-white">
                {sectionLabel}
              </p>
            </div>
          </div>
        )}
        {sectionTitle && (
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">
            {sectionTitle}
          </h2>
        )}
      </div>

      <div ref={scrollerRef} className="scroller relative overflow-hidden">
        <div className="scroller-inner flex gap-8 md:gap-12 animate-scroll">
          {companies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 w-40 md:w-48 h-24 md:h-28 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-4 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent z-20" />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 50s linear infinite;
        }

        .scroller:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
