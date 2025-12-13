import Link from 'next/link';
import collegessData from '../../data/colleges.json';

export const metadata = {
  title: 'Our Colleges | Shivalik College',
  description: 'Explore our immersive learning ecosystems across Engineering, Pharmacy, and Professional Studies.',
};

export default function CollegesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Colleges</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {collegessData.sectionLabel}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {collegessData.sectionTitle}
          </p>
          <p className="text-lg text-gray-500">
            {collegessData.sectionSubtitle}
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {collegessData.colleges.map((college, index) => {
            const slugMap: Record<string, string> = {
              'College of Engineering': 'engineering',
              'College of Pharmacy': 'pharmacy',
            };
            const slug = slugMap[college.name] || college.name.toLowerCase().replace(/\s+/g, '-');
            
            return (
            <Link
              key={index}
              href={`/colleges/${slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Background Image */}
              {college.image && (
                <div
                  className="absolute inset-0 h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${college.image}')`,
                    opacity: 0.3,
                  }}
                />
              )}

              {/* Content */}
              <div className="relative p-8 sm:p-10">
                {/* Badge */}
                <div className="mb-4 inline-block">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-bold rounded-full">
                    {college.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {college.name}
                </h2>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {college.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {college.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Explore {college.name}
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">{collegessData.ctaText}</h3>
          <p className="text-blue-100 mb-6">
            Discover the immersive learning experience across our interconnected colleges and labs.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
