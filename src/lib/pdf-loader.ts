import pdfPagesData from '../../data/pdf-pages.json';

export interface PdfPage {
  id: string;
  title: string;
  slug: string;
  url: string;
  pdfFile: string;
  category: string;
  description: string;
  uploadDate: string;
  status: string;
}

export interface PdfMetadata {
  totalPdfs: number;
  categories: string[];
  baseUrl: string;
  pdfViewerPath: string;
  lastUpdated: string;
}

// Get all PDF pages
export function getAllPdfs(): PdfPage[] {
  return pdfPagesData.pdfPages;
}

// Get PDF by slug
export function getPdfBySlug(slug: string): PdfPage | undefined {
  return pdfPagesData.pdfPages.find(pdf => pdf.slug === slug);
}

// Get PDFs by category
export function getPdfsByCategory(category: string): PdfPage[] {
  return pdfPagesData.pdfPages.filter(pdf => pdf.category === category);
}

// Get all categories
export function getCategories(): string[] {
  return pdfPagesData.metadata.categories;
}

// Get metadata
export function getPdfMetadata(): PdfMetadata {
  return pdfPagesData.metadata;
}

// Get PDF count
export function getPdfCount(): number {
  return pdfPagesData.metadata.totalPdfs;
}

// Search PDFs
export function searchPdfs(query: string): PdfPage[] {
  const lowerQuery = query.toLowerCase();
  return pdfPagesData.pdfPages.filter(pdf =>
    pdf.title.toLowerCase().includes(lowerQuery) ||
    pdf.description.toLowerCase().includes(lowerQuery) ||
    pdf.slug.toLowerCase().includes(lowerQuery)
  );
}

// Get related PDFs by category
export function getRelatedPdfs(slug: string, limit: number = 5): PdfPage[] {
  const pdf = getPdfBySlug(slug);
  if (!pdf) return [];
  
  const related = getPdfsByCategory(pdf.category)
    .filter(p => p.slug !== slug)
    .slice(0, limit);
  
  return related;
}

// Get recent PDFs
export function getRecentPdfs(limit: number = 10): PdfPage[] {
  return [...pdfPagesData.pdfPages]
    .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
    .slice(0, limit);
}

// Get PDFs by status
export function getPdfsByStatus(status: string): PdfPage[] {
  return pdfPagesData.pdfPages.filter(pdf => pdf.status === status);
}
