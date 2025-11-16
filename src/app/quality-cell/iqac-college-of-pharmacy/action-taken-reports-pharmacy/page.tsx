import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/action-taken-reports-pharmacy";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • Action Taken Reports Pharmacy | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • Action Taken Reports Pharmacy at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyActionTakenReportsPharmacyPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • Action Taken Reports Pharmacy"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • Action Taken Reports Pharmacy will be added soon."
    />
  );
}
