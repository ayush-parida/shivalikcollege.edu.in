import { ReactNode } from 'react';

export const metadata = {
  title: 'PDF Resources | Shivalik College',
  description: 'Browse and download all PDF documents and resources from Shivalik College.',
};

export default function PdfLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
