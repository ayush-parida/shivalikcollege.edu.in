import Image from "next/image";
import type { Metadata } from "next";
import { getPlacementOverview } from "@/lib/content";
import type { TopPlacement } from "@/lib/types";

const placementPromise = getPlacementOverview();

export async function generateMetadata(): Promise<Metadata> {
  const data = await placementPromise;
  return data.metadata;
}

export default async function PlacementOverviewPage() {
  const { hero, topPlacements, stats, highlights } = await placementPromise;

  return (
    <main className="space-y-16 pb-20 pt-10 px-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-slate-900 text-white shadow-2xl">
        {hero.image ? (
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            sizes="100vw"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/40" />
        <div className="relative z-10 grid gap-8 px-8 py-12 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg text-white/80 lg:text-xl">{hero.intro}</p>
          </div>
          {stats?.length ? (
            <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur lg:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                    {stat.label}
                  </p>
                  {stat.details ? (
                    <p className="mt-0.5 text-xs text-white/60">{stat.details}</p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Top Placements Grid */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            Our Top Achievers
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Celebrating excellence with industry-leading placements
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topPlacements.map((placement) => (
            <PlacementCard key={placement.id} placement={placement} />
          ))}
        </div>
      </section>
    </main>
  );
}

function PlacementCard({ placement }: { placement: TopPlacement }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-4xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)] hover:-translate-y-1">
      {/* Image Section with Overlay */}
      <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
        <Image
          src={placement.image}
          alt={placement.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
        
        {/* Package Badge - Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <div className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 shadow-2xl">
            <p className="text-base font-bold text-white">{placement.package}</p>
          </div>
        </div>

        {/* Company Logo - Top Left */}
        <div className="absolute top-4 left-4 z-10">
          <div className="rounded-2xl bg-white p-3 shadow-2xl">
            <div className="relative h-10 w-20">
              <Image
                src={placement.companyLogo}
                alt={placement.company}
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
          </div>
        </div>

        {/* Student Info Overlay - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <h3 className="text-2xl font-bold text-white">
            {placement.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-white/90">
            {placement.degree}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        {/* Company Info */}
        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-brand-50 to-blue-50 p-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md">
            <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Placed at
            </p>
            <p className="text-lg font-bold text-brand-700">
              {placement.company}
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex-1">
          <div className="relative">
            <svg className="absolute -top-2 -left-1 h-8 w-8 text-brand-100" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative pl-8 text-sm leading-relaxed text-slate-600 italic">
              {placement.comment}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
