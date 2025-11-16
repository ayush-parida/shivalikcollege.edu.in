import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/best-practices";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • Best Practices | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • Best Practices at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyBestPracticesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • Best Practices"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • Best Practices will be added soon."
    />
  );
}
