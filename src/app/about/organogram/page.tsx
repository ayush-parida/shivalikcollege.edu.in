import Image from "next/image";
import type { Metadata } from "next";
import { getOrganogramPage } from "@/lib/content";
import { OrganogramGrid } from "@/components/sections/OrganogramGrid";

const organogramPromise = getOrganogramPage();

export async function generateMetadata(): Promise<Metadata> {
  const data = await organogramPromise;
  return data.metadata;
}

export default async function OrganogramPage() {
  const { hero, diagrams } = await organogramPromise;

  return (
    <main className="space-y-16 pb-20 pt-10 px-6">
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
        <div className="relative z-10 px-8 py-12 lg:px-12 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{hero.intro}</p>
        </div>
      </section>

      {diagrams.length ? <OrganogramGrid diagrams={diagrams} /> : null}
    </main>
  );
}
