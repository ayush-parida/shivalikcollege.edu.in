"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import bPharmaData from '../../../../data/b-pharma.json';

interface BPharmaLayoutProps {
  children: React.ReactNode;
}

export default function BPharmaLayout({ children }: BPharmaLayoutProps) {
  const pathname = usePathname();
  const { hero, tabs } = bPharmaData;

  // Determine current tab from pathname
  const getCurrentTab = () => {
    if (pathname === '/courses/b-pharma') return 'home';
    const lastSegment = pathname.split('/').pop();
    return lastSegment || 'home';
  };

  const currentTab = getCurrentTab();

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
            <span className="text-gray-900 font-medium">B.Pharma</span>
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-200 mb-3">
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
                  {hero.highlights.map((highlight: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full"></div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        {tabs && tabs.length > 0 && (
          <div className="mb-8">
            <div className="border-b border-slate-200">
              <nav className="flex flex-wrap gap-2 -mb-px">
                {tabs.map((tab: { id: string; label: string }) => {
                  const isActive = tab.id === currentTab;
                  const href = tab.id === 'home' ? '/courses/b-pharma' : `/courses/b-pharma/${tab.id}`;
                  
                  return (
                    <Link
                      key={tab.id}
                      href={href}
                      scroll={false}
                      className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                        isActive
                          ? 'border-green-600 text-green-600'
                          : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}

        {/* Tab Content */}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
