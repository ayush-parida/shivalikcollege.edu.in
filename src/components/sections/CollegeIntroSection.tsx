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
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-20 top-20 h-64 w-64 rounded-full bg-brand-600 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Full Width Header */}
        <div className="text-center mb-12 max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              {eyebrow}
            </p>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        {/* Two Column Layout - Image and Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Campus Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-900/10">
            <Image
              src={backgroundImage}
              alt="Shivalik College Campus"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full ring-2 ring-white" />
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full ring-2 ring-white" />
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full ring-2 ring-white" />
                </div>
                <p className="text-sm font-semibold text-white">17+ Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content Box */}
          <div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 p-8 lg:p-10 shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
              
              {/* Content */}
              <div className="relative space-y-6">
                {/* Subtitle Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-sm font-semibold text-white">
                    {subtitle}
                  </p>
                </div>

                {/* Body Content */}
                <div className="space-y-5 text-base leading-relaxed text-slate-200">
                  {body.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-white/90">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-amber-400">IIT</p>
                    <p className="text-xs text-slate-300">Collaborations</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-amber-400">4+</p>
                    <p className="text-xs text-slate-300">Programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </section>
  );
}
