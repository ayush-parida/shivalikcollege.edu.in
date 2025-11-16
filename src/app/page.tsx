import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/hero/HeroCarousel";

const heroHighlights = [
  "NAAC A+ accredited | AICTE & PCI approved",
  "17 years of academic excellence in Dehradun",
  "Collaborations with IIT Roorkee, IIT Ropar, IIT Mandi & L&T EduTech",
];

const partnerHighlights = [
  {
    name: "IIT Ropar",
    description:
      "B.Tech specialization in AI & ML designed by IITians with opportunities for research, projects, and internships.",
    logo: "https://shivalikcollege.edu.in/wp-content/uploads/2025/03/3-150x150.png",
  },
  {
    name: "Larsen & Toubro Limited",
    description:
      "Future-focused programs with L&T EduTech covering Digital Manufacturing, Semiconductor Design, FinTech, and Business Analytics.",
    logo: "https://shivalikcollege.edu.in/wp-content/uploads/2025/03/1-150x150.png",
  },
  {
    name: "IIT Roorkee",
    description:
      "AI & Deep Learning specialization emphasizing experiential learning, IIT-led training, and research collaborations.",
    logo: "https://shivalikcollege.edu.in/wp-content/uploads/2025/06/Untitled-design-62-150x150.png",
  },
  {
    name: "IIT Mandi",
    description:
      "Joint initiatives around AI/ML, FinTech, and Digital Manufacturing with access to expert mentors and immersion programs.",
    logo: "https://shivalikcollege.edu.in/wp-content/uploads/2025/03/2-150x150.png",
  },
];

const rankingHighlights = [
  {
    rank: "1st",
    detail:
      "Among Top 50 Private Engineering Institutes on Placements by Times Engineering Survey 2020",
  },
  {
    rank: "3rd",
    detail: "Among India's Top 150 engineering Colleges for Academic Excellence by Outlook 2019",
  },
  {
    rank: "1st",
    detail: "Best industry interface award by CMAI, AICTE & UTU",
  },
  {
    rank: "1st",
    detail: "First college to dedicate a fully modern LRC to the former President of India",
  },
  {
    rank: "2nd",
    detail: "Among private engineering colleges in India by The Week – Hansa Research 2020",
  },
  {
    rank: "16th",
    detail: "Best private institute in North India – Times Engineering 2021",
  },
];

const labGallery = [
  {
    src: "https://shivalikcollege.edu.in/wp-content/uploads/2025/01/sce-02-1536x1153.jpg",
    alt: "Students inside a digitally-enabled engineering lab at Shivalik",
  },
  {
    src: "https://shivalikcollege.edu.in/wp-content/uploads/2025/01/pharma01-1536x1153.jpg",
    alt: "Pharmacy scholars exploring advanced instrumentation and formulations",
  },
  {
    src: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/slide_img.png",
    alt: "Static banner showcasing Times Engineering rankings for Shivalik",
  },
];

const reasonsToChoose = [
  {
    title: "NAAC A+ accreditation",
    description:
      "World-class teaching, research, and resources backed by rigorous quality benchmarks.",
  },
  {
    title: "Recognised affiliations",
    description:
      "Approved by AICTE and PCI, affiliated with UTU, SDSUU, UBTER, and recognised by MHRD.",
  },
  {
    title: "Industry-ready curriculum",
    description:
      "Collaborative learning, research opportunities, and skill-development programs aligned to emerging tech.",
  },
  {
    title: "Holistic development",
    description:
      "Faculty mentors, experiential learning, and co-curricular experiences that build confident leaders.",
  },
  {
    title: "Powerful alumni network",
    description:
      "3,500+ alumni worldwide and leading recruiters visiting campus each placement season.",
  },
  {
    title: "Student-first approach",
    description:
      "Personalised mentoring, supportive communities, and clear pathways to career breakthroughs.",
  },
];

const alumniVoices = [
  {
    name: "Vishal",
    role: "Software Development Engineer II, InMobi",
    batch: "B.Tech CSE 2013-17 | 30 LPA",
    quote:
      "Workshops run by the CSE department sparked my love for programming and the personality development classes transformed my confidence.",
    image: "https://shivalikcollege.edu.in/wp-content/uploads/2023/03/Vishal.jpeg",
  },
  {
    name: "Gaurav Srivastav",
    role: "Executive RE Civil, NTPC Renewable",
    batch: "Civil Engineering 2012-16",
    quote:
      "The faculty left no stone unturned to shape our future. I owe my professional growth to the exposure and mentoring at SCE.",
    image: "https://shivalikcollege.edu.in/wp-content/uploads/2023/03/IMG20211104202840_Bokeh__02-1.jpg",
  },
  {
    name: "Ankita Singh",
    role: "Marketplace Business Manager, Amazon",
    batch: "B.Tech 2015-19",
    quote:
      "Self-discipline, motivation, and confidence were instilled in us from day one. The experience nourished both my personal and professional journey.",
    image: "https://shivalikcollege.edu.in/wp-content/uploads/2023/03/Ankita.jpg",
  },
  {
    name: "Shubham Joshi",
    role: "SDET II, Fivetran",
    batch: "B.Tech ECE 2013-17",
    quote:
      "Supportive teachers and excellent lab resources helped me master Python and Java while growing holistically.",
    image: "https://shivalikcollege.edu.in/wp-content/uploads/2023/03/Shubham-Joshi.jpg",
  },
];

const newsItems = [
  {
    title: "Top Colleges in Dehradun – Shivalik College of Engineering",
    date: "October 7",
    link: "https://shivalikcollege.edu.in/top-colleges-in-dehradun-shivalik-college-of-engineering/",
    excerpt:
      "Every student's struggle when finding a good college is overcrowded classrooms and outdated facilities—here’s how Shivalik differs.",
    image:
      "https://shivalikcollege.edu.in/wp-content/uploads/2025/10/Red-Gold-Drive-by-College-Graduation-Banner-1512-x-1512-px.png",
  },
  {
    title: "Top 5 Preparation Tips for GATE Exam 2026",
    date: "September 16",
    link: "https://shivalikcollege.edu.in/top-5-preparation-tips-for-gate-exam-2026/",
    excerpt: "The GATE exam is one of the most competitive postgraduate entrances—here’s how to strategise.",
    image: "https://shivalikcollege.edu.in/wp-content/uploads/2025/09/Top-5-Preparation-Tips-for-GATE-Exam-2026.png",
  },
  {
    title: "Top CSE Specializations in 2025: Which One Should You Choose?",
    date: "September 15",
    link: "https://shivalikcollege.edu.in/top-cse-specializations-in-2025-which-one-should-you-choose/",
    excerpt:
      "From AI/ML to cybersecurity, discover the pathways shaping future-ready computer science graduates.",
    image: "https://shivalikcollege.edu.in/wp-content/uploads/2025/09/Yellow-Illustrated-Marketing-Is-Important-LinkedIn-Post.png",
  },
  {
    title: "Diploma vs Degree: Which One to Choose?",
    date: "September 11",
    link: "https://shivalikcollege.edu.in/diploma-vs-degree-which-one-to-choose/",
    excerpt:
      "Understand the difference between diploma and degree pathways to pick the right start for your ambitions.",
    image: "https://shivalikcollege.edu.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-11-at-12.55.25-PM.jpeg",
  },
];

const mediaLogos = [
  "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Mask-Group-8.png",
  "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Amar_Ujala_Logo.png",
  "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/download-2.png",
  "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/download.png",
];

const notices = [
  { title: "Shivaarambh", date: "03/10/2025" },
  { title: "Shivatech 2025", date: "10/10/2025" },
  { title: "Ideathon 2025", date: "08/10/2025" },
  { title: "National Hackathon 2025", date: "08/10/2025" },
  { title: "NCC Bharti 2025", date: "28/08/2025" },
  { title: "On Campus Placement – Chetu", date: "19/08/2025" },
  { title: "International Yoga Day 2025", date: "21/06/2025" },
  { title: "Shivalik College x IIT Roorkee", date: "09/06/2025" },
];

export default function Home() {
  return (
    <>
      <HeroCarousel highlights={heroHighlights} />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12">

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-primary)]">
                Strategic Collaborations
              </p>
              <h2 className="text-3xl font-bold text-slate-900">Learning with IITs & L&T experts.</h2>
            </div>
            <a
              href="https://shivalikcollege.edu.in/about-us/collaborations/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[var(--brand-primary)]"
            >
              View collaborations →
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {partnerHighlights.map((partner) => (
              <article key={partner.name} className="flex gap-4 rounded-2xl border border-slate-100 p-5">
                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[var(--surface)] p-2">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{partner.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{partner.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="rounded-3xl bg-[var(--brand-secondary)] p-8 text-white shadow-[0_20px_60px_rgba(1,22,64,0.35)]">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Shivalik College of Engineering
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Shivalik College of Engineering offers unlimited opportunities—grab yours now.
              </h2>
              <p className="mt-4 text-white/85">
                With collaborations alongside IIT Mandi, IIT Ropar, and L&T EduTech, Shivalik delivers
                high-impact programs in Engineering, Pharmacy, Management, and Agriculture.
              </p>
              <p className="mt-4 text-white/85">
                Our learner-first pedagogy blends research, innovation, and real-world immersion so
                students graduate with confidence, competence, and entrepreneurial zeal.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                Student services
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li>• Dedicated TAP (Training & Placement) desk</li>
                <li>• ERP access for fees, academics, and resources</li>
                <li>• Alumni portal for mentoring & events</li>
                <li>• 24/7 student support & medical facilities</li>
              </ul>
              <Link
                href="https://shivalikcollege.edu.in/college-tour/"
                target="_blank"
                className="mt-6 inline-flex text-sm font-semibold text-white"
              >
                Take a virtual tour →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-primary)]">
            Rankings & Recognition
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rankingHighlights.map((item) => (
              <article key={item.detail} className="flex gap-4 rounded-2xl bg-[var(--surface)] p-5">
                <div className="text-4xl font-black text-[var(--brand-primary)]">{item.rank}</div>
                <p className="text-sm text-slate-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-primary)]">
              Explore Dehradun labs
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Hands-on learning & practical excellence.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {labGallery.map((frame) => (
              <figure key={frame.src} className="overflow-hidden rounded-3xl">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-primary)]">
              Why Shivalik College?
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Built for excellence, designed for you.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reasonsToChoose.map((reason) => (
              <article key={reason.title} className="rounded-2xl bg-[var(--surface)] p-5">
                <h3 className="text-lg font-semibold text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-[var(--brand-primary)] p-8 text-white shadow-[0_25px_60px_rgba(152,1,46,0.3)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Alumni Voice
              </p>
              <h2 className="text-3xl font-bold">Stories from campuses to boardrooms.</h2>
            </div>
            <Link
              href="https://alumni.shivalikcollege.edu.in/"
              target="_blank"
              className="text-sm font-semibold text-white"
            >
              Visit alumni portal →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {alumniVoices.map((alumni) => (
              <article key={alumni.name} className="rounded-2xl bg-white/10 p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={alumni.image}
                    alt={alumni.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{alumni.name}</h3>
                    <p className="text-sm text-white/80">{alumni.role}</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">{alumni.batch}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/85">{alumni.quote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-primary)]">
                News & Events
              </p>
              <h2 className="text-3xl font-bold text-slate-900">Campus updates & highlights.</h2>
            </div>
            <a
              href="https://shivalikcollege.edu.in/blogs/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[var(--brand-primary)]"
            >
              View all news →
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {newsItems.map((news) => (
              <article key={news.title} className="overflow-hidden rounded-3xl border border-slate-100">
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                    {news.date}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900">{news.title}</h3>
                  <p className="text-sm text-slate-600">{news.excerpt}</p>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-[var(--brand-primary)]"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="notices" className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-primary)]">
              Media Coverage
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-4">
              {mediaLogos.map((logo) => (
                <div key={logo} className="rounded-2xl border border-slate-100 p-4">
                  <Image
                    src={logo}
                    alt="Media logo"
                    width={220}
                    height={80}
                    loading="lazy"
                    className="h-12 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-primary)]">
              Circular Notices
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {notices.map((notice) => (
                <li key={notice.title} className="border-b border-slate-100 pb-3">
                  <p className="font-semibold">{notice.title}</p>
                  <span className="text-xs text-slate-500">{notice.date}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://shivalikcollege.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-[var(--brand-primary)]"
            >
              View all notices →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
