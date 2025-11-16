import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/iqac";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • IQAC | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • IQAC at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyIqacPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • IQAC"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • IQAC will be added soon."
    />
  );
}
