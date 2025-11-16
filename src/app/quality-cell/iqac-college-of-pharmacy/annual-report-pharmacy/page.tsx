import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/annual-report-pharmacy";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • Annual Report Pharmacy | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • Annual Report Pharmacy at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyAnnualReportPharmacyPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • Annual Report Pharmacy"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • Annual Report Pharmacy will be added soon."
    />
  );
}
