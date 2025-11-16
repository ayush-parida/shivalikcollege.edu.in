import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/about-iqac-pharmacy";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • About IQAC Pharmacy | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • About IQAC Pharmacy at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyAboutIqacPharmacyPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • About IQAC Pharmacy"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • About IQAC Pharmacy will be added soon."
    />
  );
}
