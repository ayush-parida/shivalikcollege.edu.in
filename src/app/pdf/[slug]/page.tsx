import React from 'react';
import { notFound } from 'next/navigation';
import PdfViewer from '@/components/PdfViewer';
import { getPdfBySlug, getRelatedPdfs } from '@/lib/pdf-loader';
import Link from 'next/link';

interface PdfPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PdfPageProps) {
  const resolvedParams = await params;
  const pdf = getPdfBySlug(resolvedParams.slug);
  
  if (!pdf) {
    return {
      title: 'PDF Not Found',
      description: 'The requested PDF could not be found.',
    };
  }

  return {
    title: `${pdf.title} | Shivalik College`,
    description: pdf.description,
    openGraph: {
      title: pdf.title,
      description: pdf.description,
      url: `https://shivalikcollege.edu.in${pdf.url}`,
    },
  };
}

export default async function PdfPage({ params }: PdfPageProps) {
  const resolvedParams = await params;
  const pdf = getPdfBySlug(resolvedParams.slug);

  if (!pdf) {
    notFound();
  }

  const relatedPdfs = getRelatedPdfs(resolvedParams.slug, 4);

  // Build the full PDF URL
  const pdfUrl = `https://shivalikcollege.edu.in${pdf.pdfFile}`;
  const fileName = pdf.pdfFile.split('/').pop() || 'document.pdf';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="#" className="text-blue-600 hover:text-blue-700">
              Resources
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{pdf.category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">{pdf.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* PDF Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{pdf.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {pdf.category}
                </span>
                {pdf.uploadDate && (
                  <span>Uploaded: {new Date(pdf.uploadDate + '-01').toLocaleDateString()}</span>
                )}
                <span className="capitalize">{pdf.status}</span>
              </div>
              {pdf.description && (
                <p className="text-gray-700">{pdf.description}</p>
              )}
            </div>

            {/* PDF Viewer */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden" style={{ height: '800px' }}>
              <PdfViewer 
                pdfUrl={pdfUrl}
                title={pdf.title}
                fileName={fileName}
              />
            </div>

            {/* Download Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Download</h2>
              <a
                href={pdfUrl}
                download={fileName}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Download PDF
              </a>
              <p className="text-sm text-gray-600 mt-2">
                File: {fileName}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Document Info</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-gray-700">Category</dt>
                  <dd className="text-gray-600 capitalize">{pdf.category}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Upload Date</dt>
                  <dd className="text-gray-600">
                    {pdf.uploadDate ? new Date(pdf.uploadDate + '-01').toLocaleDateString() : 'N/A'}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">Status</dt>
                  <dd className="capitalize">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                      {pdf.status}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Related PDFs */}
            {relatedPdfs.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Documents</h3>
                <div className="space-y-3">
                  {relatedPdfs.map(relatedPdf => (
                    <Link
                      key={relatedPdf.id}
                      href={relatedPdf.url}
                      className="block p-3 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors group"
                    >
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                        {relatedPdf.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{relatedPdf.category}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
