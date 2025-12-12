import Link from "next/link";
import { EventsData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface EventsSectionProps {
  events: EventsData;
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className="section-band relative overflow-hidden bg-section-a text-slate-900">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-300/30 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 rounded-full bg-sky-300/20 blur-[160px]" />
      <div className="section-inner relative z-10 space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Upcoming
            </p>
            <div className="section-heading mt-2 text-slate-900">
              {events.sectionHeading}
            </div>
            <div className="section-subtitle text-slate-600">
              {events.sectionSubtitle}
            </div>
          </div>
          <span className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm">
            {events.items.length.toString().padStart(2, "0")}
            <span className="text-slate-900">{events.countLabel}</span>
          </span>
        </div>

        <div className="space-y-4">
          {events.items.map((event, index) => {
            const accent = getFeatureAccent(index);

            return (
              <Link
                key={event.name}
                href={event.href}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-[32px] p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-center md:justify-between"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-60 transition duration-500 group-hover:opacity-90"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br blur-2xl ${accent.soft}`}
                  />
                </span>
                <div
                  className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${accent.solid}`}
                />
                <div className="flex flex-col gap-2 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                    {event.date}
                  </p>
                  <p className="text-2xl font-semibold text-slate-900">
                    {event.name}
                  </p>
                  <p className="text-sm text-slate-600">{event.location}</p>
                </div>
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow md:self-auto">
                  {events.ctaLabel}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
