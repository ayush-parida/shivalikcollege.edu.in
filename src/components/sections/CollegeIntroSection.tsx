import Image from "next/image";
import { CollegeIntroData } from "@/lib/types";

export default function CollegeIntroSection({
  eyebrow,
  title,
  subtitle,
  body,
  backgroundImage,
}: CollegeIntroData) {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Shivalik College Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Transparent Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/80" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
            {eyebrow}
          </p>

          {/* Title */}
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mb-8 text-xl font-semibold text-blue-200 md:text-2xl">
            {subtitle}
          </p>

          {/* Body */}
          <div className="space-y-4 text-lg leading-relaxed text-slate-100">
            {body.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
