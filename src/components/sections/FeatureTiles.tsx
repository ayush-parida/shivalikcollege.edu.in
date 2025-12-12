import Image from "next/image";
import Link from "next/link";
import { FeatureTile } from "@/lib/types";

interface FeatureTilesProps {
  tiles: FeatureTile[];
}

const fallbackTileImage =
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80";

export default function FeatureTiles({ tiles }: FeatureTilesProps) {
  return (
    <section className="section-band bg-section-a">
      <div className="section-inner grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => {
          const imageSrc = tile.image || fallbackTileImage;

          return (
            <Link
              key={tile.title}
              href={tile.href}
              className="tile-gradient float-card group relative block min-h-[460px] overflow-hidden rounded-3xl"
            >
              <Image
                src={imageSrc}
                alt={tile.title}
                fill
                className="absolute inset-0 -z-20 object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw"
                priority={false}
              />
              <div
                className="absolute inset-0 -z-10 bg-slate-950/25"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex-[0_0_50%]" />
                <div className="relative flex flex-1 flex-col justify-between p-6 text-left text-white">
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-20"
                    aria-hidden="true"
                  >
                    <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/30 blur-3xl" />
                  </span>
                  <span
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${tile.color} opacity-80`}
                    aria-hidden="true"
                  />
                  <div className="relative space-y-3">
                    <p className="text-sm uppercase tracking-wide text-white/80">
                      {tile.title}
                    </p>
                    <p className="text-lg font-semibold leading-snug">
                      {tile.description}
                    </p>
                  </div>
                  <span className="relative mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white/80">
                    Discover more
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
