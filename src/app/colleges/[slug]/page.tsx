import Link from 'next/link';
import { notFound } from 'next/navigation';
import collegesData from '../../../../data/colleges.json';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const collegeMap: Record<string, string> = {
    engineering: 'College of Engineering',
    pharmacy: 'College of Pharmacy',
  };

  const collegeName = collegeMap[resolvedParams.slug];
  const college = collegesData.colleges.find((c) => c.name === collegeName);

  if (!college) {
    return {
      title: 'College Not Found',
    };
  }

  return {
    title: `${college.name} | Shivalik College`,
    description: college.description,
  };
}

const collegeContent: Record<
  string,
  {
    name: string;
    color: string;
    highlights: string[];
    features: Array<{
      title: string;
      desc: string;
    }>;
    programs: Array<{
      title: string;
      duration: string;
      highlights: string[];
    }>;
  }
> = {
  engineering: {
    name: 'College of Engineering',
    color: 'blue',
    highlights: [
      '10+ Interdisciplinary Labs',
      'Foundry & Maker Garage',
      'Collaborative AI Studios',
    ],
    features: [
      {
        title: 'Interdisciplinary Labs',
        desc: 'State-of-the-art facilities for AI, IoT, and embedded systems',
      },
      {
        title: 'Foundry & Maker Garage',
        desc: 'Open innovation space with 3D printers, CNC machines, and prototyping tools',
      },
      {
        title: 'AI Studios',
        desc: 'Dedicated labs for machine learning, computer vision, and artificial intelligence research',
      },
      {
        title: 'Industry Collaborations',
        desc: 'Direct partnerships with leading technology companies and startups',
      },
    ],
    programs: [
      {
        title: 'B.Tech Computer Science Engineering',
        duration: '4 Years',
        highlights: ['AI/ML', 'Data Science', 'Cloud Computing'],
      },
      {
        title: 'B.Tech AI and Machine Learning',
        duration: '4 Years',
        highlights: ['Machine Learning', 'Deep Learning', 'Neural Networks'],
      },
      {
        title: 'B.Tech Electronics & Communication',
        duration: '4 Years',
        highlights: ['Semiconductor Design', 'IoT', 'Communication Systems'],
      },
      {
        title: 'B.Tech Civil Engineering',
        duration: '4 Years',
        highlights: ['Digital Manufacturing', 'AI/CPS', 'Smart Cities'],
      },
      {
        title: 'B.Tech Mechanical Engineering',
        duration: '4 Years',
        highlights: ['Digital Manufacturing', 'CAD/CAM', 'Robotics'],
      },
      {
        title: 'B.Tech Data Science',
        duration: '4 Years',
        highlights: ['Data Analytics', 'Business Intelligence', 'Python'],
      },
      {
        title: 'Bachelor of Computer Applications (BCA)',
        duration: '3 Years',
        highlights: ['Software Development', 'Web Technologies', 'Databases'],
      },
      {
        title: 'Master of Business Administration (MBA)',
        duration: '2 Years',
        highlights: ['Management', 'Leadership', 'Strategy'],
      },
    ],
  },
  pharmacy: {
    name: 'College of Pharmacy',
    color: 'green',
    highlights: [
      'GMP-Grade Pilot Plant',
      'Clinical Simulation Suites',
      'Industry-Led Capstones',
    ],
    features: [
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
    ],
    programs: [
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
    ],
  },
};

const colorMap: Record<string, { bg: string; border: string; badge: string }> = {
  blue: {
    bg: 'from-blue-50 to-cyan-50',
    border: 'border-blue-200',
    badge: 'bg-blue-600',
  },
  green: {
    bg: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    badge: 'bg-green-600',
  },
};

export default async function CollegePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const content = collegeContent[slug];
  if (!content) {
    notFound();
  }

  const college = collegesData.colleges.find((c) => c.name === content.name);
  if (!college) {
    notFound();
  }

  const colors = colorMap[content.color];

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
            <span className="text-gray-900 font-medium">{content.name}</span>
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
          <h1 className="text-5xl font-bold mb-4">{content.name}</h1>
          <p className="text-xl text-gray-100 max-w-2xl">{college.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content.highlights.map((highlight, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${colors.bg} rounded-lg p-6 border ${colors.border}`}
            >
              <div className={`w-12 h-12 ${colors.badge} rounded-lg flex items-center justify-center text-white font-bold mb-4`}>
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
                {content.name} represents excellence in education, research, and innovation. Our facilities are designed to provide
                students with hands-on experience and bridge the gap between academic learning and industry practice.
              </p>
              <p>
                Our students engage in cutting-edge projects, research initiatives, and industry collaborations. With access to
                advanced laboratories and expert faculty, they are prepared for success in their chosen careers.
              </p>
              <p>
                The college fosters a culture of innovation, creativity, and continuous learning, ensuring graduates are equipped
                with the skills and knowledge to make a meaningful impact.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="space-y-4">
              {content.features.map((feature, i) => (
                <div
                  key={i}
                  className={`border-l-4 ${
                    content.color === 'blue' ? 'border-blue-600' : 'border-green-600'
                  } pl-4 py-2`}
                >
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs */}
        <div className={`bg-gradient-to-r ${colors.bg} rounded-lg p-8 mb-16 border ${colors.border}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.programs.map((program, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-3">Duration: {program.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((h, j) => (
                    <span
                      key={j}
                      className={`inline-block ${
                        content.color === 'blue'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      } text-xs px-2 py-1 rounded`}
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
            className={`inline-block px-8 py-4 ${colors.badge} text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-lg`}
          >
            Explore Admissions
          </Link>
        </div>
      </div>
    </div>
  );
}
