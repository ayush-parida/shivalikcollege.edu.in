import Image from "next/image";
import type { Metadata } from "next";
import { getSeminarConferenceWorkshops } from "@/lib/content";
import type { SeminarEvent } from "@/lib/types";

const dataPromise = getSeminarConferenceWorkshops();

export async function generateMetadata(): Promise<Metadata> {
  const data = await dataPromise;
  return data.metadata;
}

function EventsTable({ events }: { events: SeminarEvent[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              S.No
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Department
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Event Name
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
              Convenor
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {events.map((event) => (
            <tr key={event.sno} className="transition hover:bg-slate-50">
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {event.sno}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                {event.department}
              </td>
              <td className="px-6 py-4 text-sm text-slate-700">
                {event.eventName}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                {event.convenor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function SeminarConferenceWorkshopsPage() {
  const { hero, events } = await dataPromise;

  const uniqueDepartments = new Set(events.map((e) => e.department));
  const uniqueConvenors = new Set(events.map((e) => e.convenor));

  const eventsByDepartment = events.reduce((acc, event) => {
    if (!acc[event.department]) {
      acc[event.department] = [];
    }
    acc[event.department].push(event);
    return acc;
  }, {} as Record<string, SeminarEvent[]>);

  const departmentNames = Object.keys(eventsByDepartment).sort();

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

      <div className="grid gap-6 sm:grid-cols-3 lg:gap-8">
        <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-brand-700">{events.length}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Total Events
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">{uniqueDepartments.size}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Departments
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg">
          <p className="text-4xl font-bold text-slate-900">{uniqueConvenors.size}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Convenors
          </p>
        </div>
      </div>

      {departmentNames.map((dept) => {
        const deptEvents = eventsByDepartment[dept];
        return (
          <section key={dept} className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-900">{dept}</h2>
              <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                {deptEvents.length} {deptEvents.length === 1 ? "event" : "events"}
              </span>
            </div>
            <EventsTable events={deptEvents} />
          </section>
        );
      })}
    </main>
  );
}
