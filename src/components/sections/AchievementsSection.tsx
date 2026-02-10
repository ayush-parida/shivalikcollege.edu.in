import { AchievementsData } from "@/lib/types";

const positionAccent = (position: string) => {
  const n = position.trim().toLowerCase();
  if (n === "1st")
    return {
      pill: "bg-amber-500 text-white",
      iconBg: "bg-amber-500",
      glow: "from-amber-400/10 to-transparent",
    };
  if (n === "2nd")
    return {
      pill: "bg-slate-600 text-white",
      iconBg: "bg-slate-600",
      glow: "from-slate-400/10 to-transparent",
    };
  if (n === "3rd")
    return {
      pill: "bg-orange-500 text-white",
      iconBg: "bg-orange-500",
      glow: "from-orange-400/10 to-transparent",
    };
  return {
    pill: "bg-indigo-500 text-white",
    iconBg: "bg-indigo-500",
    glow: "from-indigo-400/10 to-transparent",
  };
};

export default function AchievementsSection({ items }: AchievementsData) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-purple-300/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-cyan-300/10 blur-[120px]" />
        <div className="absolute left-1/2 top-0 h-40 w-[600px] -translate-x-1/2 rounded-full bg-indigo-300/8 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-1.5 shadow-md mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">
              Achievements
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-500 bg-clip-text text-transparent">
              Celebrating
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="mt-4 text-sm text-slate-500 max-w-md mx-auto">
            Ranked among India&apos;s finest — here&apos;s what sets us apart.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const accent = positionAccent(item.position);
            return (
              <article
                key={`${item.position}-${index}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200/80 transition-all duration-300 hover:shadow-lg hover:ring-slate-300/80 hover:-translate-y-0.5"
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${accent.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon + Position */}
                  <div className="flex flex-col items-center gap-2.5 flex-shrink-0">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md ${accent.iconBg}`}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 16L3 5l5.5 5L12 2l3.5 8L21 5l-2 11H5zm14 3c0 .6-4 2-7 2s-7-1.4-7-2 4-2 7-2 7 1.4 7 2z" />
                      </svg>
                    </div>
                    <span
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[0.65rem] font-extrabold tracking-wide shadow-sm ${accent.pill}`}
                    >
                      {item.position}
                    </span>
                  </div>

                  {/* Text */}
                  <p className="flex-1 pt-1 text-[0.9rem] font-medium leading-relaxed text-slate-700">
                    {item.text}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
