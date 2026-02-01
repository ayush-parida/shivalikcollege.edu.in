import Link from 'next/link';
import programsData from '../../../data/programs.json';

export const metadata = {
  title: 'Courses & Programs | Shivalik College',
  description: 'Explore our wide range of undergraduate, postgraduate, and specialized programs designed for modern learners.',
};

export default function CoursesPage() {
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
            <span className="text-gray-900 font-medium">Courses & Programs</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Courses & Programs
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Diverse learning pathways for every ambition
          </p>
          <p className="text-lg text-gray-500">
            From undergraduate programs to specialized tracks, find your perfect fit
          </p>
        </div>

        {/* {programsData.featureTiles && programsData.featureTiles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {programsData.featureTiles.map((tile, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                {tile.image && (
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="w-16 h-16 mx-auto mb-4 object-contain"
                  />
                )}
                <h3 className="font-bold text-gray-900 mb-2">{tile.title}</h3>
                <p className="text-sm text-gray-600">{tile.description}</p>
              </div>
            ))}
          </div>
        )} */}

        {/* {programsData.programTracks && programsData.programTracks.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Specialized Program Tracks
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {programsData.programTracks.map((track, i) => (
                <Link
                  key={i}
                  href={track.href || '#'}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  {track.image && (
                    <div
                      className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('${track.image}')`,
                      }}
                    />
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {track.name}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {track.summary}
                    </p>

                    <div className="flex gap-4 mb-4 text-sm">
                      {track.mode && (
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {track.mode}
                        </span>
                      )}
                      {track.duration && (
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                          {track.duration}
                        </span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )} */}

        <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Academic Programs
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
              Undergraduate Engineering
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'B.Tech Computer Science & Engineering', href: '/courses/btech-cse' },
                { label: 'B.Tech Data Science', href: '/courses/btech-data-science' },
                { label: 'B.Tech Mechanical Engineering', href: '/courses/btech-mechanical' },
                { label: 'B.Tech Civil Engineering', href: '/courses/btech-civil' },
                { label: 'B.Tech Electronics & Communication Engineering', href: '/courses/btech-ece' },
                { label: 'B.Tech Artificial Intelligence & Machine Learning', href: '/courses/btech-ai-ml' },
              ].map((program, i) => (
                <Link
                  key={i}
                  href={program.href}
                  className="group p-4 bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg mt-0.5">→</span>
                    <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                      {program.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">
              Undergraduate Programs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Bachelor of Computer Applications (BCA)', href: '/courses/bca' },
                { label: 'Bachelor of Business Administration (BBA)', href: '/courses/bba' },
                { label: 'B.Sc (Hons) Agriculture', href: '/courses/bsc-agriculture' },
                { label: 'Bachelor of Pharmacy (B.Pharma)', href: '/courses/b-pharma' },
              ].map((program, i) => (
                <Link
                  key={i}
                  href={program.href}
                  className="group p-4 bg-gradient-to-br from-purple-50 to-white border border-gray-200 rounded-lg hover:shadow-md hover:border-purple-300 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-0.5">→</span>
                    <span className="text-gray-900 font-medium group-hover:text-purple-600 transition-colors">
                      {program.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-l-4 border-emerald-600 pl-4">
              Postgraduate Programs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Master of Business Administration (MBA)', href: '/courses/mba' },
              ].map((program, i) => (
                <Link
                  key={i}
                  href={program.href}
                  className="group p-4 bg-gradient-to-br from-emerald-50 to-white border border-gray-200 rounded-lg hover:shadow-md hover:border-emerald-300 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-lg mt-0.5">→</span>
                    <span className="text-gray-900 font-medium group-hover:text-emerald-600 transition-colors">
                      {program.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our comprehensive programs and find the perfect path for your career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Explore Admissions
            </Link>
            <Link
              href="/colleges"
              className="inline-block px-8 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors border border-blue-500"
            >
              Learn About Colleges
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
