import Image from "next/image";
import type { Metadata } from "next";
import { getResearchCommittee } from "@/lib/content";

const committeePromise = getResearchCommittee();

export async function generateMetadata(): Promise<Metadata> {
  const data = await committeePromise;
  return data.metadata;
}

export default async function ResearchCommitteePage() {
  const { hero, members } = await committeePromise;

  const chairman = members.find((m) => m.responsibility === "Chairman");
  const advisor = members.find((m) => m.responsibility === "Advisor");
  const regularMembers = members.filter(
    (m) => m.responsibility === "Member"
  );

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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />
        <div className="relative z-10 px-8 py-12 lg:px-12 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80">{hero.intro}</p>
        </div>
      </section>

      <section className="space-y-8">
        {chairman ? (
          <article className="rounded-4xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 shadow-lg">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
                  {chairman.responsibility} of the Committee
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {chairman.name}
                </h2>
                <p className="mt-1 text-base text-slate-600">
                  {chairman.designation}
                </p>
              </div>
            </div>
          </article>
        ) : null}

        <div className="rounded-4xl border border-slate-100 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-100 px-8 py-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Committee Members
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    S.No.
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Designation
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {regularMembers.map((member) => (
                  <tr
                    key={member.sno}
                    className="transition-colors hover:bg-slate-50"
                  >
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {member.sno}
                    </td>
                    <td className="px-6 py-4 text-base font-semibold text-slate-900">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {member.designation}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                        {member.responsibility}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {advisor ? (
          <article className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
                  {advisor.responsibility}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {advisor.name}
                </h2>
                <p className="mt-1 text-base text-slate-600">
                  {advisor.designation}
                </p>
              </div>
            </div>
          </article>
        ) : null}
      </section>
    </main>
  );
}
