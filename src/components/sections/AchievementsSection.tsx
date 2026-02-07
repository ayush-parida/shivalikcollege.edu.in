import Image from "next/image";
import { AchievementsData } from "@/lib/types";

function positionBadgeClass(position: string) {
  const normalized = position.trim().toLowerCase();
  if (normalized === "1st") return "from-amber-400 to-amber-500";
  if (normalized === "2nd") return "from-slate-300 to-slate-400";
  if (normalized === "3rd") return "from-amber-600 to-amber-700";
  return "from-emerald-500 to-emerald-600";
}

function TrophyIcon({ position }: { position: string }) {
  const normalized = position.trim().toLowerCase();
  const isTop3 = normalized === "1st" || normalized === "2nd" || normalized === "3rd";
  
  return (
    <svg
      className={`h-6 w-6 ${isTop3 ? "text-amber-300" : "text-white"}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12L12 4M7 13.5V17.5C7 19.43 9.24 21 12 21S17 19.43 17 17.5V13.5L12 15.5L7 13.5M12 8.5C12.8 8.5 13.5 9.2 13.5 10S12.8 11.5 12 11.5 10.5 10.8 10.5 10 11.2 8.5 12 8.5Z" />
    </svg>
  );
}

export default function AchievementsSection({
  items,
}: AchievementsData) {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Student Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Celebrating Excellence</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`${item.position}-${index}`}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-amber-50/0 transition-all duration-300 group-hover:from-brand-50/30 group-hover:to-amber-50/30" />
              
              <div className="relative flex items-start gap-4">
                {/* Badge with position and logo */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg ${positionBadgeClass(
                      item.position
                    )}`}
                  >
                    {item.logo ? (
                      <div className="relative h-10 w-10">
                        <Image
                          src={item.logo}
                          alt={`Achievement ${item.position}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <TrophyIcon position={item.position} />
                    )}
                  </div>
                  {/* Position badge overlay */}
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900 shadow-md ring-2 ring-white">
                    {item.position}
                  </div>
                </div>

                <p className="flex-1 pt-1 text-sm leading-relaxed text-slate-700 md:text-base">
                  {item.text}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-amber-200/20 to-brand-200/20 blur-2xl transition-transform duration-300 group-hover:translate-x-8 group-hover:-translate-y-8" />
            </article>
          ))}
        </div>
      </div>
      
      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </section>
  );
}
