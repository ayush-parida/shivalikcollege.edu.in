"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ResearchStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

interface ResearchImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface ResearchExcellenceProps {
  heading: string;
  subtitle: string;
  stats: ResearchStat[];
  images: ResearchImage[];
  ctaText: string;
  ctaLink: string;
}

export default function ResearchExcellenceSection({
  heading,
  subtitle,
  stats,
  images,
  ctaText,
  ctaLink,
}: ResearchExcellenceProps) {
  const [selectedImage, setSelectedImage] = useState<ResearchImage | null>(null);

  return (
    <>
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-brand-500 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-400 blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
              <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Research & Innovation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{heading}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid md:grid-cols-[30%_1fr] gap-12 items-center">
            {/* Stats Grid */}
            <div className="flex flex-col gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="relative h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-sm font-semibold px-2 text-center">
                        {img.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href={ctaLink}
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-[80vh] animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <p className="text-white text-xl font-semibold text-center drop-shadow-lg">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
