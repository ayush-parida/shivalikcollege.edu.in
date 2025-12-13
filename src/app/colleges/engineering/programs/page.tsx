import Link from 'next/link';

export const metadata = {
  title: 'Engineering Programs | Shivalik College',
  description: 'Explore all B.Tech, BCA, MBA and other engineering programs offered at Shivalik College of Engineering.',
};

export default function EngineeringProgramsPage() {
  const programs = [
    {
      title: 'B.Tech Computer Science Engineering',
      duration: '4 Years',
      slug: 'btech-cse',
      description: 'Master core computing principles, coding, and cutting-edge technologies',
      highlights: ['AI/ML', 'Cloud Computing', 'Cybersecurity'],
    },
    {
      title: 'B.Tech AI and Machine Learning',
      duration: '4 Years',
      slug: 'btech-aiml',
      description: 'Specialize in artificial intelligence and machine learning technologies',
      highlights: ['Deep Learning', 'NLP', 'Computer Vision'],
    },
    {
      title: 'B.Tech Electronics & Communication',
      duration: '4 Years',
      slug: 'btech-ece',
      description: 'Design and develop communication and electronic systems',
      highlights: ['Semiconductor Design', 'IoT', 'Signal Processing'],
    },
    {
      title: 'B.Tech Civil Engineering',
      duration: '4 Years',
      slug: 'btech-civil',
      description: 'Build sustainable infrastructure with digital manufacturing',
      highlights: ['Smart Cities', 'Digital Manufacturing', 'AI/CPS'],
    },
    {
      title: 'B.Tech Mechanical Engineering',
      duration: '4 Years',
      slug: 'btech-me',
      description: 'Design and build mechanical systems and automation solutions',
      highlights: ['Robotics', 'CAD/CAM', 'Manufacturing'],
    },
    {
      title: 'B.Tech Data Science',
      duration: '4 Years',
      slug: 'btech-ds',
      description: 'Transform data into actionable business intelligence',
      highlights: ['Data Analytics', 'Business Intelligence', 'Python'],
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      duration: '3 Years',
      slug: 'bca',
      description: 'Develop professional software development and IT skills',
      highlights: ['Software Development', 'Web Technologies', 'Databases'],
    },
    {
      title: 'Master of Business Administration (MBA)',
      duration: '2 Years',
      slug: 'mba',
      description: 'Lead organizations with strategic management expertise',
      highlights: ['Management', 'Leadership', 'Business Strategy'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/colleges" className="text-blue-600 hover:text-blue-700">
              Colleges
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/colleges/engineering" className="text-blue-600 hover:text-blue-700">
              Engineering
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Programs</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Engineering Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore 8 diverse engineering and IT programs designed for modern learners
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <Link
              key={i}
              href={`/colleges/engineering/programs/${program.slug}`}
              className="group bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h2>

                {/* Duration */}
                <p className="text-sm text-gray-600 mb-3">Duration: {program.duration}</p>

                {/* Description */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  View Details
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Choose Your Path?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore detailed program information and begin your journey with Shivalik College
          </p>
          <Link
            href="/admissions"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
