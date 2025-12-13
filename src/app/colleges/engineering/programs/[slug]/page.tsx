import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const programTitles: Record<string, string> = {
    'btech-cse': 'B.Tech Computer Science Engineering',
    'btech-aiml': 'B.Tech AI and Machine Learning',
    'btech-ece': 'B.Tech Electronics & Communication',
    'btech-civil': 'B.Tech Civil Engineering',
    'btech-me': 'B.Tech Mechanical Engineering',
    'btech-ds': 'B.Tech Data Science',
    'bca': 'Bachelor of Computer Applications',
    'mba': 'Master of Business Administration',
  };

  const title = programTitles[resolvedParams.slug];
  if (!title) return { title: 'Program Not Found' };

  return {
    title: `${title} | Shivalik College`,
    description: `Explore the ${title} program at Shivalik College with detailed curriculum, career paths, and faculty expertise.`,
  };
}

const programDetails: Record<
  string,
  {
    title: string;
    duration: string;
    eligibility: string;
    overview: string;
    highlights: string[];
    curriculum: Array<{
      year: string;
      courses: string[];
    }>;
    careerPaths: string[];
    facultyFocus: string;
    facilities: string[];
  }
> = {
  'btech-cse': {
    title: 'B.Tech Computer Science Engineering',
    duration: '4 Years',
    eligibility: '10+2 with minimum 65% in Physics, Mathematics, and Chemistry/CS',
    overview:
      'Master core computing principles, programming languages, and cutting-edge technologies including AI, cloud computing, and cybersecurity. The industry-aligned curriculum prepares you for careers in IT, software development, and technology innovation.',
    highlights: [
      'Core computing theoretical foundations',
      'Hands-on coding skills and projects',
      'Industry-aligned electives',
      'Internship programs with leading companies',
      'Access to modern computing labs',
      'Research opportunities',
    ],
    curriculum: [
      {
        year: 'Year 1',
        courses: [
          'Programming Fundamentals',
          'Data Structures',
          'Discrete Mathematics',
          'Web Development Basics',
          'Database Fundamentals',
        ],
      },
      {
        year: 'Year 2',
        courses: [
          'Object-Oriented Programming',
          'Operating Systems',
          'Computer Networks',
          'Database Management Systems',
          'Software Engineering',
        ],
      },
      {
        year: 'Year 3',
        courses: [
          'Web Technologies',
          'Cloud Computing',
          'Cybersecurity Fundamentals',
          'Machine Learning Basics',
          'Mobile App Development',
        ],
      },
      {
        year: 'Year 4',
        courses: [
          'Advanced Cybersecurity',
          'AI & Deep Learning',
          'Capstone Project',
          'Industry Electives',
          'Professional Development',
        ],
      },
    ],
    careerPaths: [
      'Software Developer',
      'Web Developer',
      'Cloud Engineer',
      'Data Scientist',
      'Machine Learning Engineer',
      'Cybersecurity Specialist',
      'Full Stack Developer',
      'DevOps Engineer',
      'Database Administrator',
      'IT Consultant',
    ],
    facultyFocus: 'Expert faculty with industry experience and research publications in computer science',
    facilities: [
      'Modern computing labs with latest hardware',
      'Cloud infrastructure access (AWS, Azure, GCP)',
      'IoT and embedded systems labs',
      'Cybersecurity testing environments',
      'Collaboration tools and spaces',
    ],
  },
  'btech-aiml': {
    title: 'B.Tech AI and Machine Learning',
    duration: '4 Years',
    eligibility: '10+2 with minimum 65% in Physics, Mathematics, and Chemistry/CS',
    overview:
      'Specialize in artificial intelligence and machine learning technologies. Develop expertise in neural networks, deep learning, natural language processing, and computer vision with hands-on projects and industry collaboration.',
    highlights: [
      'Deep Learning and Neural Networks',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Reinforcement Learning',
      'Real-world ML projects',
      'Industry partnerships',
    ],
    curriculum: [
      {
        year: 'Year 1',
        courses: [
          'Programming Fundamentals',
          'Linear Algebra & Calculus',
          'Python for Data Science',
          'Statistics & Probability',
          'Web Development Basics',
        ],
      },
      {
        year: 'Year 2',
        courses: [
          'Machine Learning Algorithms',
          'Data Preprocessing & Feature Engineering',
          'Database Management Systems',
          'Software Engineering',
          'Supervised Learning Techniques',
        ],
      },
      {
        year: 'Year 3',
        courses: [
          'Deep Learning Foundations',
          'Neural Networks Architecture',
          'Computer Vision',
          'NLP Fundamentals',
          'Cloud ML Platforms',
        ],
      },
      {
        year: 'Year 4',
        courses: [
          'Advanced Deep Learning',
          'Reinforcement Learning',
          'MLOps & Model Deployment',
          'Capstone Project',
          'AI Ethics & Responsible AI',
        ],
      },
    ],
    careerPaths: [
      'Machine Learning Engineer',
      'Data Scientist',
      'AI Research Scientist',
      'Computer Vision Specialist',
      'NLP Engineer',
      'ML Operations Engineer',
      'AI Consultant',
      'Deep Learning Researcher',
      'Robotics Engineer',
      'AI Product Manager',
    ],
    facultyFocus: 'AI and ML experts with research background and industry project experience',
    facilities: [
      'GPU computing labs for deep learning',
      'ML frameworks and libraries',
      'Large datasets for training',
      'Research collaboration spaces',
      'Industry AI tools access',
    ],
  },
  'btech-ece': {
    title: 'B.Tech Electronics & Communication Engineering',
    duration: '4 Years',
    eligibility: '10+2 with minimum 65% in Physics, Mathematics, and Chemistry/CS',
    overview:
      'Design and develop cutting-edge communication systems, semiconductor devices, and IoT solutions. Master signal processing, embedded systems, and semiconductor design with hands-on laboratory experience.',
    highlights: [
      'Semiconductor Design & Fabrication',
      'IoT Systems Development',
      'Signal Processing',
      'Communication Systems',
      'Embedded Systems',
      'Advanced Labs & Equipment',
    ],
    curriculum: [
      {
        year: 'Year 1',
        courses: [
          'Circuit Theory',
          'Digital Electronics',
          'Signal & Systems',
          'Electromagnetic Theory',
          'Programming in C/C++',
        ],
      },
      {
        year: 'Year 2',
        courses: [
          'Analog Electronics',
          'Microprocessors',
          'Communication Fundamentals',
          'Digital Signal Processing',
          'Microcontrollers',
        ],
      },
      {
        year: 'Year 3',
        courses: [
          'RF & Microwave Engineering',
          'Semiconductor Devices',
          'IoT Technologies',
          'VLSI Design',
          'Wireless Communications',
        ],
      },
      {
        year: 'Year 4',
        courses: [
          'Advanced Semiconductors',
          'Embedded IoT Systems',
          'Communication Networks',
          'Capstone Project',
          'Industry Applications',
        ],
      },
    ],
    careerPaths: [
      'Semiconductor Engineer',
      'IoT Developer',
      'Signal Processing Engineer',
      'Embedded Systems Engineer',
      'RF Engineer',
      'VLSI Designer',
      'Communication Systems Engineer',
      'Hardware Design Engineer',
      'Microelectronics Specialist',
      'Telecommunications Engineer',
    ],
    facultyFocus: 'ECE specialists with expertise in semiconductor design, IoT, and communication systems',
    facilities: [
      'Advanced semiconductor design labs',
      'IoT testing environments',
      'RF & microwave laboratories',
      'Signal processing workstations',
      'Industry-standard design tools',
    ],
  },
  'btech-civil': {
    title: 'B.Tech Civil Engineering',
    duration: '4 Years',
    eligibility: '10+2 with minimum 65% in Physics, Mathematics, and Chemistry/CS',
    overview:
      'Build sustainable and intelligent infrastructure using digital manufacturing, AI, and cyber-physical systems. Specialize in smart cities, BIM technology, and structural design with real-world project experience.',
    highlights: [
      'Smart City Design',
      'Digital Manufacturing & AI',
      'Building Information Modeling (BIM)',
      'Sustainable Infrastructure',
      'Cyber-Physical Systems',
      'Field Site Labs',
    ],
    curriculum: [
      {
        year: 'Year 1',
        courses: [
          'Structural Mechanics',
          'Surveying & Mapping',
          'Building Materials',
          'Engineering Graphics',
          'Environmental Science',
        ],
      },
      {
        year: 'Year 2',
        courses: [
          'Structural Analysis',
          'Construction Management',
          'Geotechnical Engineering',
          'Fluid Mechanics',
          'Transportation Engineering',
        ],
      },
      {
        year: 'Year 3',
        courses: [
          'Reinforced Concrete Design',
          'Steel Design',
          'BIM Technology',
          'Smart City Infrastructure',
          'Environmental Engineering',
        ],
      },
      {
        year: 'Year 4',
        courses: [
          'Advanced Structural Design',
          'Digital Manufacturing & CPS',
          'Project Management',
          'Capstone Project',
          'Sustainable Development',
        ],
      },
    ],
    careerPaths: [
      'Structural Engineer',
      'Civil Construction Manager',
      'Smart City Planner',
      'BIM Coordinator',
      'Site Engineer',
      'Transportation Planner',
      'Environmental Engineer',
      'Infrastructure Designer',
      'Geotechnical Engineer',
      'Project Manager',
    ],
    facultyFocus: 'Civil engineering experts with smart cities and digital manufacturing specialization',
    facilities: [
      'Structural testing labs',
      'Material testing equipment',
      'Survey instruments',
      'BIM software and workstations',
      'Site labs on campus',
    ],
  },
  'btech-me': {
    title: 'B.Tech Mechanical Engineering',
    duration: '4 Years',
    eligibility: '10+2 with minimum 65% in Physics, Mathematics, and Chemistry/CS',
    overview:
      'Design and build mechanical systems, automation solutions, and robotics. Develop expertise in CAD/CAM, digital manufacturing, and advanced automation technologies.',
    highlights: [
      'Robotics & Automation',
      'Digital Manufacturing',
      'CAD/CAM Design',
      'Advanced Materials',
      'Thermal Systems',
      'Industry Partnerships',
    ],
    curriculum: [
      {
        year: 'Year 1',
        courses: [
          'Mechanics of Solids',
          'Thermodynamics',
          'Engineering Graphics',
          'Basic CAD',
          'Material Science',
        ],
      },
      {
        year: 'Year 2',
        courses: [
          'Machine Design',
          'Fluid Mechanics',
          'Manufacturing Technology',
          'Heat Transfer',
          'Mechanics of Machines',
        ],
      },
      {
        year: 'Year 3',
        courses: [
          'Robotics & Automation',
          'CAD/CAM Technologies',
          'Control Systems',
          'Power Plant Engineering',
          'Digital Manufacturing',
        ],
      },
      {
        year: 'Year 4',
        courses: [
          'Advanced Robotics',
          'Automation Systems Design',
          'Project Management',
          'Capstone Project',
          'Industry Applications',
        ],
      },
    ],
    careerPaths: [
      'Robotics Engineer',
      'Mechanical Designer',
      'Manufacturing Engineer',
      'Automation Specialist',
      'CAD Engineer',
      'Production Manager',
      'Mechanical Systems Engineer',
      'Design Engineer',
      'Control Systems Engineer',
      'Project Manager',
    ],
    facultyFocus: 'Mechanical engineering experts specializing in robotics, CAD/CAM, and automation',
    facilities: [
      'Robotics and automation labs',
      'CAD/CAM workstations',
      'Manufacturing testing labs',
      'Mechanical testing equipment',
      'CNC machines',
    ],
  },
  'btech-ds': {
    title: 'B.Tech Data Science',
    duration: '4 Years',
    eligibility: '10+2 with minimum 65% in Physics, Mathematics, and Chemistry/CS',
    overview:
      'Transform raw data into actionable business intelligence. Master data analytics, visualization, and business decision-making with hands-on projects and industry case studies.',
    highlights: [
      'Data Analytics & Visualization',
      'Business Intelligence',
      'Predictive Modeling',
      'Big Data Technologies',
      'Real-world Business Cases',
      'Industry Internships',
    ],
    curriculum: [
      {
        year: 'Year 1',
        courses: [
          'Programming Fundamentals',
          'Statistics & Probability',
          'Database Fundamentals',
          'Linear Algebra',
          'Data Collection Methods',
        ],
      },
      {
        year: 'Year 2',
        courses: [
          'Data Analysis & Visualization',
          'Database Management Systems',
          'Business Intelligence Tools',
          'Statistical Analysis',
          'SQL & Data Querying',
        ],
      },
      {
        year: 'Year 3',
        courses: [
          'Machine Learning for Business',
          'Predictive Analytics',
          'Big Data Technologies',
          'Python for Data Science',
          'Advanced Visualization',
        ],
      },
      {
        year: 'Year 4',
        courses: [
          'Data Mining',
          'Advanced ML Models',
          'Business Analytics',
          'Capstone Project',
          'Industry Case Studies',
        ],
      },
    ],
    careerPaths: [
      'Data Scientist',
      'Business Analyst',
      'Data Analyst',
      'BI Developer',
      'Data Engineer',
      'Analytics Manager',
      'Predictive Modeler',
      'Database Administrator',
      'Data Visualization Specialist',
      'Business Intelligence Analyst',
    ],
    facultyFocus: 'Data science experts with business analytics and industry experience',
    facilities: [
      'Data analytics workstations',
      'BI tool licenses',
      'Large datasets access',
      'Cloud computing resources',
      'Visualization studios',
    ],
  },
  'bca': {
    title: 'Bachelor of Computer Applications (BCA)',
    duration: '3 Years',
    eligibility: '10+2 (any stream) with minimum 50%',
    overview:
      'Develop professional software development and IT skills in 3 years. Focus on practical programming, web technologies, and database management with industry-ready projects.',
    highlights: [
      'Software Development',
      'Web Technologies',
      'Database Management',
      'IT Infrastructure',
      'Practical Projects',
      'Career-focused curriculum',
    ],
    curriculum: [
      {
        year: 'Year 1',
        courses: [
          'Programming Fundamentals (C/C++)',
          'Database Fundamentals',
          'Web Development Basics',
          'Data Structures',
          'IT Fundamentals',
        ],
      },
      {
        year: 'Year 2',
        courses: [
          'Object-Oriented Programming',
          'Advanced Web Technologies',
          'Database Management Systems',
          'Software Engineering',
          'Network Basics',
        ],
      },
      {
        year: 'Year 3',
        courses: [
          'Full Stack Development',
          'Mobile App Development',
          'Cloud Technologies',
          'Project Management',
          'Capstone Project',
        ],
      },
    ],
    careerPaths: [
      'Software Developer',
      'Web Developer',
      'Full Stack Developer',
      'Mobile App Developer',
      'Database Administrator',
      'IT Support Specialist',
      'Junior Developer',
      'Web Designer',
      'Technical Support Engineer',
      'IT Administrator',
    ],
    facultyFocus: 'Experienced software professionals with industry and academia background',
    facilities: [
      'Development labs',
      'Web development environments',
      'Database servers',
      'Cloud platforms',
      'Collaboration tools',
    ],
  },
  'mba': {
    title: 'Master of Business Administration (MBA)',
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with minimum 50% from recognized university',
    overview:
      'Lead organizations with strategic management expertise. Develop business acumen, leadership skills, and decision-making abilities through case studies, simulations, and industry interactions.',
    highlights: [
      'Strategic Management',
      'Leadership Development',
      'Business Analytics',
      'Entrepreneurship',
      'Corporate Internships',
      'Industry Mentorship',
    ],
    curriculum: [
      {
        year: 'Year 1',
        courses: [
          'Business Management',
          'Financial Management',
          'Human Resource Management',
          'Marketing Strategy',
          'Operations Management',
        ],
      },
      {
        year: 'Year 2',
        courses: [
          'Strategic Management',
          'Business Analytics',
          'Entrepreneurship',
          'Corporate Governance',
          'Capstone Project',
        ],
      },
    ],
    careerPaths: [
      'Business Manager',
      'Project Manager',
      'Operations Manager',
      'Marketing Manager',
      'Business Consultant',
      'Entrepreneur',
      'HR Manager',
      'Product Manager',
      'Financial Analyst',
      'Strategy Consultant',
    ],
    facultyFocus: 'MBA faculty with corporate leadership and entrepreneurial experience',
    facilities: [
      'Executive classrooms',
      'Case study libraries',
      'Business simulation labs',
      'Collaboration spaces',
      'Industry networking platforms',
    ],
  },
};

export default async function ProgramDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const program = programDetails[resolvedParams.slug];

  if (!program) {
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
            <Link href="/colleges" className="text-blue-600 hover:text-blue-700">
              Colleges
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/colleges/engineering" className="text-blue-600 hover:text-blue-700">
              Engineering
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/colleges/engineering/programs" className="text-blue-600 hover:text-blue-700">
              Programs
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">{program.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{program.title}</h1>
          <div className="flex flex-wrap gap-4 text-blue-100">
            <span>Duration: {program.duration}</span>
            <span>•</span>
            <span>Eligibility: {program.eligibility}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{program.overview}</p>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {program.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <p className="text-gray-900 font-semibold">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {program.curriculum.map((period, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg text-blue-600 mb-4">{period.year}</h3>
                <ul className="space-y-3">
                  {period.courses.map((course, j) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Paths</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {program.careerPaths.map((path, i) => (
                <div key={i} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-semibold text-gray-900">{path}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty & Facilities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Faculty Expertise</h2>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <p className="text-gray-900 text-lg leading-relaxed">{program.facultyFocus}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">State-of-the-Art Facilities</h2>
            <div className="space-y-3">
              {program.facilities.map((facility, i) => (
                <div key={i} className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <span className="text-orange-600 font-bold">▸</span>
                  <p className="text-gray-900">{facility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Enroll?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Take the first step towards a rewarding career with {program.title}
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
