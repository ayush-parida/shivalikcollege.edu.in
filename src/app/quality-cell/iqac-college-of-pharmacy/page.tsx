import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy will be added soon."
    />
  );
}
