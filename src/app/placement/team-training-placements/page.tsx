import type { Metadata } from "next";
import { getPlacementTeam } from "@/lib/content";
import { Mail, Phone, User } from "lucide-react";
import Image from "next/image";

const teamPromise = getPlacementTeam();

export async function generateMetadata(): Promise<Metadata> {
  const data = await teamPromise;
  return data.metadata;
}

export default async function TeamTrainingPlacementsPage() {
  const data = await teamPromise;
  const { hero, careerAdvancementCell, professionalEnhancementCell, administrativeCell } = data;

  return (
    <main className="space-y-16 pb-20 pt-10 px-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-4xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-brand-900 to-brand-800 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 px-8 py-12 lg:px-12 lg:py-16 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg text-white/80 lg:text-xl">
            {hero.intro}
          </p>
        </div>
      </section>

      {/* Career Advancement Cell */}
      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            {careerAdvancementCell.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            {careerAdvancementCell.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerAdvancementCell.team.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-brand-300"
            >
              {member.image ? (
                <div className="relative mb-4 h-32 w-32 mx-auto rounded-full overflow-hidden border-4 border-brand-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mb-4 h-32 w-32 mx-auto rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                  <User className="h-16 w-16 text-white" />
                </div>
              )}

              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-brand-600">
                  {member.title}
                </p>

                {member.email && (
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <Mail className="h-4 w-4 text-brand-500" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                )}

                {member.contact && (
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4 text-brand-500" />
                    <a
                      href={`tel:${member.contact}`}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {member.contact}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Enhancement Cell */}
      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            {professionalEnhancementCell.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            {professionalEnhancementCell.description}
          </p>
        </div>

        {/* Table with categories as headers */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-xl bg-white">
            <thead>
              <tr className="bg-slate-100">
                {professionalEnhancementCell.categories.map((category, idx) => (
                  <th key={idx} className="px-4 py-2 text-center text-xs font-semibold text-slate-700">
                    {category.category}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Find the max number of trainers in any category */}
              {(() => {
                const maxRows = Math.max(...professionalEnhancementCell.categories.map(cat => cat.trainers.length));
                return Array.from({ length: maxRows }).map((_, rowIdx) => (
                  <tr key={rowIdx} className="border-t border-slate-200">
                    {professionalEnhancementCell.categories.map((category, colIdx) => {
                      const trainer = category.trainers[rowIdx];
                      return (
                        <td key={colIdx} className="align-top px-4 py-3 min-w-[220px]">
                          {trainer ? (
                            <div className="flex flex-col items-center gap-2">
                              {trainer.image ? (
                                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-brand-100">
                                  <Image
                                    src={trainer.image}
                                    alt={trainer.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                                  <User className="h-8 w-8 text-white" />
                                </div>
                              )}
                              <div className="text-center space-y-1">
                                <h4 className="font-semibold text-slate-900 text-sm">{trainer.name}</h4>
                                <p className="text-xs text-brand-600">{trainer.title}</p>
                                {trainer.email ? (
                                  <a
                                    href={`mailto:${trainer.email}`}
                                    className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-brand-600 transition-colors"
                                  >
                                    <Mail className="h-3 w-3" />
                                    <span className="truncate">{trainer.email}</span>
                                  </a>
                                ) : (
                                  <span className="text-xs text-slate-400">—</span>
                                )}
                                {trainer.contact ? (
                                  <div>
                                    <a
                                      href={`tel:${trainer.contact}`}
                                      className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-brand-600 transition-colors"
                                    >
                                      <Phone className="h-3 w-3" />
                                      <span>{trainer.contact}</span>
                                    </a>
                                  </div>
                                ) : (
                                  <span className="text-xs text-slate-400 block">—</span>
                                )}
                              </div>
                            </div>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
      </section>

      {/* Administrative Cell */}
      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
            {administrativeCell.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            {administrativeCell.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {administrativeCell.team.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-brand-300"
            >
              {member.image ? (
                <div className="relative mb-4 h-32 w-32 mx-auto rounded-full overflow-hidden border-4 border-brand-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mb-4 h-32 w-32 mx-auto rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center">
                  <User className="h-16 w-16 text-white" />
                </div>
              )}

              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-brand-600">
                  {member.title}
                </p>

                {member.email && (
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <Mail className="h-4 w-4 text-brand-500" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                )}

                {member.contact && (
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4 text-brand-500" />
                    <a
                      href={`tel:${member.contact}`}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {member.contact}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
