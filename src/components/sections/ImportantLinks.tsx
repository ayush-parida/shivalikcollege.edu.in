import Link from "next/link";
import { LifeData } from "@/lib/types";
import { getFeatureAccent } from "@/lib/theme";

interface ImportantLinksProps {
  links: LifeData["importantLinks"];
  heading: string;
  subtitle: string;
}

export default function ImportantLinks({
  links,
  heading,
  subtitle,
}: ImportantLinksProps) {
  return (
    <section className="section-band relative overflow-hidden bg-section-b">
      <div className="pointer-events-none absolute inset-x-16 top-0 h-24 rounded-[32px] bg-amber-300/20 blur-3xl" />
      <div className="section-inner relative z-10 space-y-8">
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Resources
          </p>
          <div className="section-heading mt-3">{heading}</div>
          <div className="section-subtitle text-slate-600">{subtitle}</div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link, index) => {
            const accent = getFeatureAccent(index);

            return (
              <Link
                key={link.label}
                href={link.href}
                className="group relative overflow-hidden rounded-[28px] px-5 py-6 text-base font-semibold text-white shadow-2xl transition hover:-translate-y-1"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-90 transition duration-500"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${accent.solid}`}
                  />
                  <span className="absolute inset-0 bg-slate-950/30" />
                </span>
                <span className="relative flex items-center justify-between gap-3">
                  {link.label}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white"
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
