import Image from "next/image";
import type { Metadata } from "next";
import { getFundedResearch } from "@/lib/content";
import type { FundedProject } from "@/lib/types";

const dataPromise = getFundedResearch();

export async function generateMetadata(): Promise<Metadata> {
  const data = await dataPromise;
  return data.metadata;
}

function ProjectsTable({ projects }: { projects: FundedProject[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              S.No
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Faculty Name
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Year
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Funding Agency
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Amount (₹)
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {projects.map((project) => (
            <tr key={project.sno} className="transition hover:bg-slate-50">
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {project.sno}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                {project.facultyName}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                {project.year}
              </td>
              <td className="px-6 py-4 text-sm text-slate-700">
                {project.fundingAgency}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-brand-600">
                {project.amount} Lakhs
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "Ongoing"
                      ? "bg-green-100 text-green-800"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function FundedResearchPage() {
  const { hero, projects } = await dataPromise;

  const ongoingProjects = projects.filter((p) => p.status === "Ongoing");
  const completedProjects = projects.filter((p) => p.status === "Completed");

  const totalFunding = projects.reduce((sum, p) => sum + parseFloat(p.amount), 0);
  const uniqueAgencies = new Set(projects.map((p) => p.fundingAgency));

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

      <div className="grid gap-6 sm:grid-cols-4 lg:gap-8">
        <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-brand-700">{projects.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Total Projects
          </p>
        </div>
        <div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-green-700">{ongoingProjects.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Ongoing Projects
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">₹{totalFunding.toFixed(2)}L</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Total Funding
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">{uniqueAgencies.size}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Funding Agencies
          </p>
        </div>
      </div>

      {ongoingProjects.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Ongoing Research Projects
            </h2>
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              {ongoingProjects.length} active
            </span>
          </div>
          <ProjectsTable projects={ongoingProjects} />
        </section>
      )}

      {completedProjects.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Completed Research Projects
            </h2>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {completedProjects.length} projects
            </span>
          </div>
          <ProjectsTable projects={completedProjects} />
        </section>
      )}
    </main>
  );
}
