import Link from 'next/link';
import Image from 'next/image';
import btechCseData from '../../../../data/btech-cse.json';
import PageTabs from '@/components/sections/PageTabs';

export const metadata = {
  title: btechCseData.metadata.title,
  description: btechCseData.metadata.description,
  keywords: btechCseData.metadata.keywords,
};

export default function BtechCsePage() {
  const { hero, tabs } = btechCseData;

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
            <Link href="/courses" className="text-blue-600 hover:text-blue-700">
              Courses
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">B.Tech CSE</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('${hero.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
                {hero.eyebrow}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {hero.title}
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                {hero.intro}
              </p>
              {hero.highlights && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {hero.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 py-16">
        {/* Tabs Section */}
        {tabs && tabs.length > 0 && (
          <div className="mb-16">
            <PageTabs tabs={tabs} variant="tabs" />
          </div>
        )}
      </div>
    </div>
  );
}
