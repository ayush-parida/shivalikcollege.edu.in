import Image from "next/image";
import { PartnershipsData } from "@/lib/types";

export default function PartnershipsSection({ sectionLabel, sectionTitle, partners }: PartnershipsData) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
            {sectionLabel}
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {sectionTitle}
          </h2>
        </div>

        {/* Partners Grid - 2x2 */}
        <div className="grid gap-8 md:grid-cols-2">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Logo */}
              <div className="mb-6 flex justify-center">
                <div className="relative h-24 w-48">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Partner Name */}
              <h3 className="mb-3 text-center text-2xl font-bold text-slate-900">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="mb-4 text-center text-slate-600">
                {partner.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {partner.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
