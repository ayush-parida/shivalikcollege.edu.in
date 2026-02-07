import Image from "next/image";
import { RankingData } from "@/lib/types";

export default function TopRankingBanner({ logo, title, subtitle, stats }: RankingData) {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-center">
          {/* Left Section - Ranking Badge */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:flex-shrink-0">
            <div className="relative h-40 w-40 md:h-48 md:w-48">
              <Image
                src={logo}
                alt="Top 3 Engineering Institute"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
              <p className="mt-2 text-sm text-blue-100 md:text-base">
                {subtitle.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < subtitle.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Right Section - Stats Grid */}
          <div className="grid w-full grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4 lg:flex-1">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/20 hover:scale-105"
              >
                <div className="text-3xl font-bold text-amber-400 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-center text-sm text-white md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
