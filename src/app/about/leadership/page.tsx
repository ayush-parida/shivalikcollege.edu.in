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
  const { hero, profiles } = leadership;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Blended Background */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('${hero.backgroundImage || "/assets/hero/hero7.JPG"}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-300 mb-3">
                About Shivalik
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {hero.title}
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Cards */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {profiles.map((leader, index) => (
            <LeadershipPanel
              key={leader.id}
              leader={leader}
              imageLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
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
  const profileItems = leader.profile ?? [];

  return (
    <article className="relative overflow-hidden">
      <div className={`grid gap-0 ${imageLeft ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-[1fr_280px]"}`}>
        {/* Image Section - Centered with rounded corners */}
        <div className={`flex items-center justify-center p-6 lg:p-8 ${imageLeft ? "order-1" : "order-1 lg:order-2"}`}>
          <div className="relative w-full h-[220px] lg:w-[240px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg">
            {leader.image ? (
              <>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-center grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                  sizes="240px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"></div>
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <span className="text-4xl font-bold">{getInitials(leader.name)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className={`relative p-8 lg:p-10 flex flex-col justify-center ${imageLeft ? "order-2" : "order-2 lg:order-1"}`}>
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              {leader.title}
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">
              {leader.name}
            </h3>
            <p className="text-sm text-slate-500">{leader.affiliation}</p>
          </div>

          {/* Quote */}
          {leader.quote && (
            <blockquote className="mb-6 pl-5 border-l-4 border-blue-600 bg-blue-50/50 p-5 rounded-r-lg">
              <p className="text-sm italic text-slate-700 leading-relaxed">
                &ldquo;{leader.quote}&rdquo;
              </p>
            </blockquote>
          )}

          {/* Message - Scrollable if too long */}
          <div className="space-y-3 mb-6 text-sm text-slate-600 leading-relaxed max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
            {leader.message.map((paragraph, idx) => (
              <p key={`${leader.id}-message-${idx}`}>{paragraph}</p>
            ))}
          </div>

          {/* Profile Highlights */}
          {profileItems.length > 0 && (
            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-blue-600"></span>
                Profile Highlights
              </h4>
              <ul className="space-y-2.5">
                {profileItems.map((item, idx) => (
                  <li
                    key={`${leader.id}-profile-${idx}`}
                    className="flex gap-3 text-xs text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Accolades */}
          {leader.accolades && leader.accolades.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {leader.accolades.map((accolade, idx) => (
                <span
                  key={`${leader.id}-accolade-${idx}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-600/10 text-xs font-semibold text-blue-700 border border-blue-200"
                >
                  {accolade}
                </span>
              ))}
            </div>
          )}
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
