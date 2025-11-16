import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/iqac-pharmacy-composition";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • IQAC Pharmacy Composition | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • IQAC Pharmacy Composition at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyIqacPharmacyCompositionPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • IQAC Pharmacy Composition"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • IQAC Pharmacy Composition will be added soon."
    />
  );
}
