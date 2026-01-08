import Image from "next/image";
import type { Metadata } from "next";
import { getPlacementOverview, getPlacementCompanies, getPlacementLeadership } from "@/lib/content";
import type { TopPlacement } from "@/lib/types";
import PlacementCompaniesCarousel from "@/components/sections/PlacementCompaniesCarousel";

const placementPromise = getPlacementOverview();
const companiesPromise = getPlacementCompanies();
const leadershipPromise = getPlacementLeadership();

export async function generateMetadata(): Promise<Metadata> {
  const data = await placementPromise;
  return data.metadata;
}

export default async function PlacementOverviewPage() {
  const { hero, topPlacements, stats, affiliations } = await placementPromise;
  const companiesData = await companiesPromise;
  const leadershipData = await leadershipPromise;

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

      {/* Company Carousel Section */}
      <PlacementCompaniesCarousel
        sectionLabel={companiesData.sectionLabel}
        sectionTitle={companiesData.sectionTitle}
        companies={companiesData.companies}
      />

      {/* Placement Dean Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            Training & Placement Cell
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Empowering Future Leaders
          </p>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[500px] w-full overflow-hidden lg:h-auto">
              <Image
                src={leadershipData.profile.image}
                alt={leadershipData.profile.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-brand-50 px-4 py-2">
                <svg className="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                  Message from Dean
                </span>
              </div>
              
              <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                {leadershipData.profile.name}
              </h2>
              <p className="mt-3 text-lg font-semibold text-brand-600">
                {leadershipData.profile.title}
              </p>
              <p className="mt-1 text-base text-slate-500">
                {leadershipData.profile.affiliation}
              </p>

              <div className="mt-6 space-y-4 border-l-4 border-brand-200 pl-6">
                {leadershipData.profile.message.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contact Information */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a 
                  href={`mailto:${leadershipData.profile.email}`} 
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 transition-all hover:border-brand-300 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
                    <p className="truncate text-sm font-medium text-slate-700 group-hover:text-brand-600">
                      {leadershipData.profile.email}
                    </p>
                  </div>
                </a>

                <a 
                  href={`tel:${leadershipData.profile.contact}`} 
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 transition-all hover:border-brand-300 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</p>
                    <p className="truncate text-sm font-medium text-slate-700 group-hover:text-brand-600">
                      {leadershipData.profile.contact}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            Student Testimonials
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Hear from our successful alumni
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {leadershipData.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col rounded-4xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
            >
              <div className="relative flex-1">
                <svg className="absolute -top-2 -left-2 h-10 w-10 text-brand-100" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative pl-8 text-base leading-relaxed text-slate-700 italic">
                  {testimonial.text}
                </p>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="mt-1 text-sm text-brand-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

            {/* Affiliation and Approval Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            {affiliations.title}
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-slate-600">
            {affiliations.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
          {affiliations.logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)] hover:-translate-y-1"
            >
              <div className="relative h-20 w-full">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 14vw"
                />
              </div>
            </div>
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
