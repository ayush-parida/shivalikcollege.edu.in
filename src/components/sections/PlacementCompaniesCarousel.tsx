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
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        {sectionLabel && (
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 text-center mb-2">
            {sectionLabel}
          </p>
        )}
        {sectionTitle && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
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
