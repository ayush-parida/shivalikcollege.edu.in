import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/nirf";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • Nirf | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • Nirf at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyNirfPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • Nirf"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • Nirf will be added soon."
    />
  );
}
