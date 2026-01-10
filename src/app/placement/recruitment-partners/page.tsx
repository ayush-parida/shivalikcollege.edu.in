import Image from "next/image";
import type { Metadata } from "next";
import { getRecruitmentPartners } from "@/lib/content";

const partnersPromise = getRecruitmentPartners();

export async function generateMetadata(): Promise<Metadata> {
  const data = await partnersPromise;
  return data.metadata;
}

export default async function RecruitmentPartnersPage() {
  const { hero, mission, companyCategories, cta } = await partnersPromise;

  return (
    <main className="space-y-16 pb-20 pt-10 px-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-slate-900 text-white shadow-2xl">
        {hero.image ? (
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/40" />
        <div className="relative z-10 px-8 py-16 text-center lg:px-12 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-2xl font-semibold text-white/90 lg:text-3xl">
            {hero.subtitle}
          </p>
          <p className="mt-4 text-lg text-white/80 lg:text-xl">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-5xl space-y-6 rounded-4xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-12">
        <p className="text-lg leading-relaxed text-slate-700 lg:text-xl">
          {mission.text}
        </p>
        <p className="text-lg leading-relaxed text-slate-700 lg:text-xl">
          {mission.description}
        </p>
      </section>

      {/* Company Categories */}
      {companyCategories.map((category) => (
        <section key={category.id} className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
              {category.title}
            </h2>
          </div>

          <div className="space-y-6">
            {category.images.map((image, index) => (
              <div
                key={`${category.id}-${index}`}
                className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[1024/359] w-full">
                  <Image
                    src={image}
                    alt={`${category.title} - Part ${index + 1}`}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-4xl border border-brand-200 bg-gradient-to-br from-brand-50 via-blue-50 to-white shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="relative z-10 px-8 py-12 text-center lg:px-12 lg:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2.5 text-brand-700">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm font-bold uppercase tracking-wider">
              Partner With Us
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
            {cta.title}
          </h2>

          {/* Contact Information */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Email Section */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Email Us
              </p>
              <div className="space-y-2">
                {cta.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-base font-medium text-brand-600 transition-colors hover:text-brand-700 lg:text-lg"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone Section */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Call Us
              </p>
              <div className="space-y-2">
                {cta.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block text-base font-medium text-emerald-600 transition-colors hover:text-emerald-700 lg:text-lg"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
