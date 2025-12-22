'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllPdfs, getCategories } from '@/lib/pdf-loader';
import { FileText, Folder } from 'lucide-react';

interface PdfListPageProps {
  searchParams: {
    category?: string;
  };
}

export default function PdfListPage({ searchParams }: PdfListPageProps) {
  const allPdfs = getAllPdfs();
  const categories = getCategories();
  const selectedCategory = searchParams.category;

  const filteredPdfs = selectedCategory
    ? allPdfs.filter(pdf => pdf.category === selectedCategory)
    : allPdfs;

  // Group PDFs by category
  const pdfsByCategory = categories.map(cat => ({
    category: cat,
    pdfs: allPdfs.filter(pdf => pdf.category === cat),
  })).filter(group => group.pdfs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Resources</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">PDF Resources</h1>
          <p className="text-lg text-gray-600">
            Browse and download documents from Shivalik College
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/pdf"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Documents ({allPdfs.length})
            </Link>
            {categories.map(category => {
              const count = allPdfs.filter(pdf => pdf.category === category).length;
              return (
                <Link
                  key={category}
                  href={`/pdf?category=${encodeURIComponent(category)}`}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category} ({count})
                </Link>
              );
            })}
          </div>
        </div>

        {/* PDF Grid */}
        {selectedCategory ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{selectedCategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPdfs.map(pdf => (
                <Link
                  key={pdf.id}
                  href={pdf.url}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 flex items-center justify-center h-32">
                    <FileText size={48} className="text-white opacity-80" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 line-clamp-2 mb-2">
                      {pdf.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {pdf.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {pdf.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {pdf.uploadDate ? new Date(pdf.uploadDate + '-01').getFullYear() : ''}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {pdfsByCategory.map(group => (
              <div key={group.category}>
                <div className="flex items-center gap-2 mb-6">
                  <Folder size={24} className="text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{group.category}</h2>
                  <span className="text-gray-600 font-medium">({group.pdfs.length})</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {group.pdfs.slice(0, 6).map(pdf => (
                    <Link
                      key={pdf.id}
                      href={pdf.url}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 flex items-center justify-center h-32">
                        <FileText size={48} className="text-white opacity-80" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 line-clamp-2 mb-2">
                          {pdf.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {pdf.description}
                        </p>
                        <div className="text-xs text-gray-500">
                          {pdf.uploadDate ? new Date(pdf.uploadDate + '-01').getFullYear() : ''}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {group.pdfs.length > 6 && (
                  <Link
                    href={`/pdf?category=${encodeURIComponent(group.category)}`}
                    className="inline-block px-6 py-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View all {group.pdfs.length} documents →
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
