import Image from "next/image";
import type { Metadata } from "next";
import { getLeadership } from "@/lib/content";
import type { LeadershipProfile } from "@/lib/types";

export const metadata: Metadata = {
  title: "Leadership | Shivalik College",
  description:
    "Meet the leadership team shaping holistic education, research excellence, and student wellbeing at Shivalik College of Engineering.",
};

export default async function LeadershipPage() {
  const leadership = await getLeadership();
  const { hero, guidingPrinciples, profiles } = leadership;

  return (
    <main className="space-y-16 pb-20 pt-10">
      <section className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-slate-900 text-white shadow-2xl">
        <Image
          src="/assets/leader-placeholder.svg"
          alt={hero.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
        <div className="relative z-10 grid gap-8 px-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-16">
          <div>
            <h1 className="text-4xl font-semibold text-white lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">{hero.description}</p>
          </div>
          {hero.highlights?.length ? (
            <div className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Highlights
              </p>
              <div className="space-y-4">
                {hero.highlights.map((item) => (
                  <div key={item.label}>
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                      {item.label}
                    </p>
                    {item.details ? (
                      <p className="mt-1 text-sm text-white/60">{item.details}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <section className="space-y-12">
        {profiles.map((leader, index) => (
          <LeadershipPanel
            key={leader.id}
            leader={leader}
            imageLeft={index % 2 === 0}
          />
        ))}
      </section>
    </main>
  );
}

function LeadershipPanel({
  leader,
  imageLeft,
}: {
  leader: LeadershipProfile;
  imageLeft: boolean;
}) {
  const initials = getInitials(leader.name);
  const profileItems = leader.profile ?? [];

  return (
    <article className="rounded-4xl border border-slate-100 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div
          className={`order-2 flex flex-col gap-6 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              {leader.title}
            </p>
            <h3 className="mt-2 text-3xl font-semibold text-slate-900">
              {leader.name}
            </h3>
            <p className="mt-1 text-base text-slate-500">{leader.affiliation}</p>
          </div>
          <div className="space-y-4 text-base text-slate-600">
            {leader.message.map((paragraph, idx) => (
              <p key={`${leader.id}-message-${idx}`}>{paragraph}</p>
            ))}
          </div>
          {profileItems.length ? (
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Profile
              </p>
              <div className="mt-3 max-h-52 space-y-2 overflow-y-auto pr-1 text-sm text-slate-600">
                {profileItems.map((item, idx) => (
                  <div
                    key={`${leader.id}-profile-${idx}`}
                    className="flex gap-2 border-b border-slate-100 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span
                      className="mt-1 h-2 w-2 rounded-full bg-brand-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {leader.profileDetails?.length ? (
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Profile
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {leader.profileDetails.map((detail, idx) => (
                  <li key={`${leader.id}-detail-${idx}`} className="flex gap-2">
                    <span
                      className="mt-1 h-2 w-2 rounded-full bg-brand-500"
                      aria-hidden="true"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              {leader.accolades?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {leader.accolades.map((accolade, idx) => (
                    <span
                      key={`${leader.id}-accolade-${idx}`}
                      className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                    >
                      {accolade}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className={`order-1 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative isolate min-h-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
            {leader.image ? (
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-900 text-white/70">
                <span className="text-lg font-semibold">{initials}</span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-950/50" />
          </div>
        </div>
      </div>
    </article>
  );
}

function getInitials(name: string) {
  return name
    .replace(/[().]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}
