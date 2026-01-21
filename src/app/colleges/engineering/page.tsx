import Link from 'next/link';
import { notFound } from 'next/navigation';
import collegesData from '../../../../data/colleges.json';

export const metadata = {
  title: 'College of Engineering | Shivalik College',
  description: 'Studios, makerspaces, and living labs where learners prototype climate tech, robotics, and autonomous systems.',
};

export default function EngineeringCollegePage() {
  const college = collegesData.colleges.find((c) => c.name === 'Shivalik College of Engineering');

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
            <span className="text-gray-900 font-medium">Engineering</span>
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
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">
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
                The College of Engineering represents the forefront of technical innovation and interdisciplinary learning.
                Our purpose-built studios and makerspaces provide students with hands-on experience in emerging technologies.
              </p>
              <p>
                From prototyping climate tech solutions to building autonomous systems, students collaborate across disciplines
                to solve real-world problems. The college emphasizes both theoretical knowledge and practical application.
              </p>
              <p>
                With access to 10+ interdisciplinary labs, a state-of-the-art foundry, and collaborative AI studios, our learners
                gain exposure to cutting-edge technologies and methodologies.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Interdisciplinary Labs',
                  desc: '10+ labs spanning robotics, AI, IoT, and sustainable engineering',
                },
                {
                  title: 'Maker Garage',
                  desc: 'Full-service fabrication facility with 3D printers, CNC machines, and more',
                },
                {
                  title: 'Living Labs',
                  desc: 'Real-world problem-solving spaces on and off campus',
                },
                {
                  title: 'Industry Collaborations',
                  desc: 'Direct partnerships with leading technology companies',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="border-l-4 border-blue-600 pl-4 py-2"
                >
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16 border border-blue-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Featured Programs</h2>
            <Link
              href="/colleges/engineering/programs"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All Programs →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'B.Tech Computer Science Engineering',
                duration: '4 Years',
                slug: 'btech-cse',
                highlights: ['AI/ML', 'Data Science', 'Cloud Computing'],
              },
              {
                title: 'B.Tech AI and Machine Learning',
                duration: '4 Years',
                slug: 'btech-aiml',
                highlights: ['Machine Learning', 'Deep Learning', 'Neural Networks'],
              },
              {
                title: 'B.Tech Electronics & Communication',
                duration: '4 Years',
                slug: 'btech-ece',
                highlights: ['Semiconductor Design', 'IoT', 'Communication Systems'],
              },
              {
                title: 'B.Tech Civil Engineering',
                duration: '4 Years',
                slug: 'btech-civil',
                highlights: ['Digital Manufacturing', 'AI/CPS', 'Smart Cities'],
              },
              {
                title: 'B.Tech Mechanical Engineering',
                duration: '4 Years',
                slug: 'btech-me',
                highlights: ['Digital Manufacturing', 'CAD/CAM', 'Robotics'],
              },
              {
                title: 'B.Tech Data Science',
                duration: '4 Years',
                slug: 'btech-ds',
                highlights: ['Data Analytics', 'Business Intelligence', 'Python'],
              },
              {
                title: 'Bachelor of Computer Applications (BCA)',
                duration: '3 Years',
                slug: 'bca',
                highlights: ['Software Development', 'Web Technologies', 'Databases'],
              },
              {
                title: 'Master of Business Administration (MBA)',
                duration: '2 Years',
                slug: 'mba',
                highlights: ['Management', 'Leadership', 'Strategy'],
              },
            ].map((program, i) => (
              <Link
                key={i}
                href={`/courses/${program.slug}`}
                className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-3">Duration: {program.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/admissions"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Explore Admissions
          </Link>
        </div>
      </div>
    </div>
  );
}
