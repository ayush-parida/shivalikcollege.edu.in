import Link from 'next/link';
import { notFound } from 'next/navigation';
import programsData from '../../../../data/programs.json';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;

  const track = programsData.programTracks?.find(
    (t) => t.name?.toLowerCase().replace(/\s+/g, '-') === resolvedParams.slug
  );

  if (!track) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${track.name} | Shivalik College`,
    description: track.summary,
  };
}

const courseDetails: Record<
  string,
  {
    title: string;
    overview: string;
    keyHighlights: string[];
    curriculum: Array<{
      semester: string;
      courses: string[];
    }>;
    career_paths: string[];
    faculty_expertise: string[];
    industry_partners: string[];
  }
> = {
  'ai-ml': {
    title: 'AI/ML Specialization',
    overview:
      'Master the principles and applications of Artificial Intelligence and Machine Learning through hands-on projects and industry collaboration.',
    keyHighlights: [
      'Deep Learning & Neural Networks',
      'NLP & Computer Vision',
      'Reinforcement Learning',
      'MLOps & Production Deployment',
      'Real-world Industry Projects',
      'Expert Faculty Guidance',
    ],
    curriculum: [
      {
        semester: 'Semester 1',
        courses: [
          'Introduction to ML',
          'Python for Data Science',
          'Linear Algebra & Probability',
          'Data Preprocessing',
        ],
      },
      {
        semester: 'Semester 2',
        courses: [
          'Supervised Learning Algorithms',
          'Unsupervised Learning',
          'Feature Engineering',
          'Model Evaluation',
        ],
      },
      {
        semester: 'Semester 3',
        courses: [
          'Deep Learning Foundations',
          'Neural Networks',
          'Computer Vision',
          'NLP Basics',
        ],
      },
      {
        semester: 'Semester 4',
        courses: [
          'Advanced Deep Learning',
          'Reinforcement Learning',
          'MLOps & Deployment',
          'Capstone Project',
        ],
      },
    ],
    career_paths: [
      'Machine Learning Engineer',
      'Data Scientist',
      'AI Research Scientist',
      'Computer Vision Specialist',
      'NLP Researcher',
      'ML Operations Engineer',
    ],
    faculty_expertise: [
      'Dr. Amit Sharma - Deep Learning & Computer Vision',
      'Prof. Priya Gupta - NLP & Language Models',
      'Dr. Rajesh Kumar - Reinforcement Learning',
      'Prof. Sneha Patel - Applied ML & MLOps',
    ],
    industry_partners: [
      'Google Cloud',
      'AWS',
      'Microsoft Azure',
      'IBM',
      'DataStax',
      'Various AI startups',
    ],
  },
  robotics: {
    title: 'Robotics & Automation',
    overview:
      'Design, build, and deploy intelligent robotic systems with cutting-edge hardware and software technologies.',
    keyHighlights: [
      'Robotic Kinematics & Dynamics',
      'Autonomous Systems',
      'Sensor Integration & Control',
      'Computer Vision for Robotics',
      'Hands-on Lab Experience',
      'Competition Opportunities',
    ],
    curriculum: [
      {
        semester: 'Semester 1',
        courses: [
          'Introduction to Robotics',
          'Mechanical Design Basics',
          'Electronics Fundamentals',
          'C++ Programming',
        ],
      },
      {
        semester: 'Semester 2',
        courses: [
          'Robot Kinematics',
          'Control Systems',
          'Sensor Technology',
          'Microcontroller Programming',
        ],
      },
      {
        semester: 'Semester 3',
        courses: [
          'Dynamics & Motion Planning',
          'Computer Vision',
          'ROS (Robot Operating System)',
          'Autonomous Navigation',
        ],
      },
      {
        semester: 'Semester 4',
        courses: [
          'Advanced Robotics',
          'Machine Learning for Robotics',
          'Robotic Applications',
          'Capstone Project',
        ],
      },
    ],
    career_paths: [
      'Robotics Engineer',
      'Autonomous Systems Developer',
      'Control Systems Engineer',
      'Robotics Research Scientist',
      'Hardware Design Engineer',
      'Industrial Automation Specialist',
    ],
    faculty_expertise: [
      'Prof. Dr. Vikram Singh - Robotic Kinematics',
      'Dr. Anita Desai - Computer Vision for Robotics',
      'Prof. Ashok Kumar - Control Systems',
      'Dr. Neha Verma - Autonomous Systems',
    ],
    industry_partners: [
      'FANUC',
      'ABB Robotics',
      'Boston Dynamics',
      'Tesla Automation',
      'Various manufacturing firms',
      'Tech startups',
    ],
  },
  'climate-tech': {
    title: 'Climate Tech & Sustainability',
    overview:
      'Develop innovative solutions for climate change mitigation and sustainable development using technology.',
    keyHighlights: [
      'Climate Data Analytics',
      'Renewable Energy Systems',
      'Sustainable Agriculture Tech',
      'Carbon Tracking & Analysis',
      'Green IoT Solutions',
      'Impact-focused Projects',
    ],
    curriculum: [
      {
        semester: 'Semester 1',
        courses: [
          'Climate Science Basics',
          'Environmental Data Analysis',
          'Sustainability Principles',
          'IoT Fundamentals',
        ],
      },
      {
        semester: 'Semester 2',
        courses: [
          'Climate Modeling',
          'Renewable Energy Systems',
          'Smart Grid Technology',
          'Data Visualization',
        ],
      },
      {
        semester: 'Semester 3',
        courses: [
          'Carbon Analytics',
          'Sustainable Supply Chain',
          'Green Technology Development',
          'Monitoring Systems',
        ],
      },
      {
        semester: 'Semester 4',
        courses: [
          'Climate Impact Assessment',
          'Policy & Regulation',
          'Tech Entrepreneurship',
          'Capstone Project',
        ],
      },
    ],
    career_paths: [
      'Climate Tech Developer',
      'Sustainability Consultant',
      'Green Data Analyst',
      'Renewable Energy Specialist',
      'Carbon Accounting Specialist',
      'Climate Policy Analyst',
    ],
    faculty_expertise: [
      'Prof. Dr. Sameer Verma - Climate Modeling',
      'Dr. Pooja Sharma - Renewable Energy',
      'Prof. Arun Kumar - Sustainable Development',
      'Dr. Sushma Roy - Environmental Analytics',
    ],
    industry_partners: [
      'Google Sustainability',
      'Tesla Energy',
      'Microsoft Carbon',
      'Climate Tech VC firms',
      'Environmental NGOs',
      'Government agencies',
    ],
  },
};

export default async function CoursePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const details = courseDetails[slug];
  if (!details) {
    notFound();
  }

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
            <Link href="/courses" className="text-blue-600 hover:text-blue-700">
              Courses
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{details.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{details.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{details.overview}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.keyHighlights.map((highlight, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {details.curriculum.map((sem, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-4 text-blue-600">{sem.semester}</h3>
                <ul className="space-y-3">
                  {sem.courses.map((course, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Paths</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {details.career_paths.map((path, i) => (
                <div key={i} className="bg-white rounded-lg p-4 text-center">
                  <p className="font-semibold text-gray-900">{path}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Faculty Expertise</h2>
          <div className="space-y-4">
            {details.faculty_expertise.map((faculty, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <p className="text-gray-900 font-semibold">{faculty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.industry_partners.map((partner, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200 text-center"
              >
                <p className="font-semibold text-gray-900">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Enroll?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Start your journey in {details.title} and shape the future with cutting-edge skills.
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
