import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/committees";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • Committees | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • Committees at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyCommitteesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • Committees"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • Committees will be added soon."
    />
  );
}
