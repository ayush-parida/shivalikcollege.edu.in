import Link from 'next/link';
import { notFound } from 'next/navigation';
import collegesData from '../../../../data/colleges.json';

export const metadata = {
  title: 'College of Pharmacy | Shivalik College',
  description: 'Advanced pharmaceutics, bioengineering benches, and translational research pods focused on next-gen therapeutics.',
};

export default function PharmacyCollegePage() {
  const college = collegesData.colleges.find((c) => c.name === 'College of Pharmacy');

  if (!college) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/colleges" className="text-blue-600 hover:text-blue-700">
              Colleges
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Pharmacy</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('${college.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{college.name}</h1>
          <p className="text-xl text-gray-100 max-w-2xl">{college.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {college.highlights.map((highlight, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">
                {i + 1}
              </div>
              <p className="text-gray-900 font-semibold">{highlight}</p>
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This College</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The College of Pharmacy represents excellence in pharmaceutical sciences, research, and innovation. Our facilities
                are designed to bridge the gap between academic learning and industry practice.
              </p>
              <p>
                Students engage in cutting-edge research on drug development, formulation science, and clinical research. Our
                GMP-grade pilot plant provides real-world manufacturing experience aligned with industry standards.
              </p>
              <p>
                With advanced bioengineering labs and clinical simulation suites, students are prepared for careers in
                pharmaceutical research, drug development, clinical practice, and healthcare innovation.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'GMP-Grade Pilot Plant',
                  desc: 'Industry-standard manufacturing facility for hands-on training',
                },
                {
                  title: 'Bioengineering Labs',
                  desc: 'Advanced equipment for pharmaceutical research and development',
                },
                {
                  title: 'Clinical Simulation',
                  desc: 'Realistic patient interaction and clinical practice environments',
                },
                {
                  title: 'Industry Partnerships',
                  desc: 'Collaborations with leading pharmaceutical companies',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="border-l-4 border-green-600 pl-4 py-2"
                >
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-16 border border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'B. Pharmacy',
                duration: '4 Years',
                highlights: ['Pharmaceutics', 'Pharmacology', 'Clinical Practice'],
              },
              {
                title: 'M. Pharmacy',
                duration: '2 Years',
                highlights: ['Research Focus', 'Industry Internships', 'Advanced Labs'],
              },
              {
                title: 'Diploma in Pharmacy',
                duration: '2 Years',
                highlights: ['Practical Skills', 'Hospital Practice', 'Career Ready'],
              },
              {
                title: 'Ph.D. Pharmacy',
                duration: '3-5 Years',
                highlights: ['Original Research', 'Innovation', 'Publication'],
              },
            ].map((program, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-3">Duration: {program.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/admissions"
            className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-lg"
          >
            Explore Admissions
          </Link>
        </div>
      </div>
    </div>
  );
}
