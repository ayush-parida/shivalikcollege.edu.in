'use client';

import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, RotateCw } from 'lucide-react';

interface PdfViewerProps {
  pdfUrl: string;
  title?: string;
  fileName?: string;
}

export default function PdfViewer({ pdfUrl, title, fileName }: PdfViewerProps) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.2, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  }, []);

  const handleResetZoom = useCallback(() => {
    setScale(1);
  }, []);

  const handleRotate = useCallback(() => {
    setRotation(prev => (prev + 90) % 360);
  }, []);

  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download failed:', err);
      setError('Failed to download PDF');
    }
  }, [pdfUrl, fileName]);

  const handleLoadSuccess = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleLoadError = () => {
    setIsLoading(false);
    setError('Failed to load PDF. Please try downloading instead.');
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            {title && <h1 className="text-lg font-semibold text-gray-900 truncate">{title}</h1>}
            {fileName && <p className="text-sm text-gray-500 truncate">{fileName}</p>}
          </div>
          
          {/* Toolbar */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 0.5}
              className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut size={20} className="text-gray-700" />
            </button>
            
            <span className="text-sm font-medium text-gray-700 min-w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            
            <button
              onClick={handleZoomIn}
              disabled={scale >= 3}
              className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn size={20} className="text-gray-700" />
            </button>

            <div className="w-px h-6 bg-gray-300"></div>

            <button
              onClick={handleResetZoom}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <RotateCw size={20} className="text-gray-700" />
            </button>

            <button
              onClick={handleRotate}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Rotate"
              aria-label="Rotate"
            >
              <RotateCw size={20} className="text-gray-700" />
            </button>

            <div className="w-px h-6 bg-gray-300"></div>

            <button
              onClick={handleDownload}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Download PDF"
              aria-label="Download PDF"
            >
              <Download size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Viewer Container */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4">
        {error ? (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
            <p className="text-red-600 font-semibold mb-4">{error}</p>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download PDF
            </button>
          </div>
        ) : (
          <div
            className="relative bg-white shadow-xl rounded-lg overflow-hidden"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              transformOrigin: 'center',
              transition: 'transform 0.2s ease-out',
            }}
          >
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              className="w-full h-full"
              style={{ minWidth: '800px', minHeight: '600px' }}
              onLoad={handleLoadSuccess}
              onError={handleLoadError}
              title={title || 'PDF Viewer'}
            />
            {isLoading && (
              <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-600 text-center">
          Use the controls above to zoom, rotate, or download the document
        </div>
      </div>
    </div>
  );
}
