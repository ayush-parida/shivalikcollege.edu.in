import Image from "next/image";
import { PartnershipsData } from "@/lib/types";

export default function PartnershipsSection({ sectionLabel, sectionTitle, partners }: PartnershipsData) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute left-10 top-20 h-48 w-48 rounded-full bg-brand-600 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-indigo-400 blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-400 from-brand-600 to-indigo-600 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <p className="text-sm font-semibold uppercase text-white">
              {sectionLabel}
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            {sectionTitle}
          </h2>
        </div>

        {/* Partners Grid - 2x2 */}
        <div className="grid gap-8 md:grid-cols-2">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl min-h-[500px]"
            >
              {/* Background Image */}
              {partner.background_image && (
                <>
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={partner.background_image}
                      alt={`${partner.name} background`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
                </>
              )}
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Logo at top corner */}
                <div className="pt-6 px-6">
                  <div className="relative h-20 w-40 bg-white rounded-lg p-2 shadow-sm">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-2"
                      sizes="200px"
                    />
                  </div>
                </div>
                
                {/* Spacer to push content to bottom */}
                <div className="flex-1" />
                
                {/* Content Container */}
                <div className="p-8 pt-0">
                {/* Partner Name */}
                <h3 className="mb-3 text-center text-2xl font-bold text-white">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="mb-4 text-center text-white/90 font-medium">
                  {partner.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 flex-1">
                  {partner.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
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
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </section>
  );
}
