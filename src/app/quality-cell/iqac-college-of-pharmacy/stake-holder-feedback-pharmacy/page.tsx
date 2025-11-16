import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/stake-holder-feedback-pharmacy";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • Stake Holder Feedback Pharmacy | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • Stake Holder Feedback Pharmacy at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyStakeHolderFeedbackPharmacyPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • Stake Holder Feedback Pharmacy"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • Stake Holder Feedback Pharmacy will be added soon."
    />
  );
}
