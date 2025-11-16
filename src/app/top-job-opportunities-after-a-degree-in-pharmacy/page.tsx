import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/top-job-opportunities-after-a-degree-in-pharmacy";

export const metadata: Metadata = {
  title: "Top Job Opportunities After A Degree In Pharmacy | Shivalik College of Engineering",
  description: "Sample overview for Top Job Opportunities After A Degree In Pharmacy at Shivalik College of Engineering.",
};

export default function TopJobOpportunitiesAfterADegreeInPharmacyPage() {
  return (
    <PageRenderer
      path={path}
      title="Top Job Opportunities After A Degree In Pharmacy"
      description="Sample content for Top Job Opportunities After A Degree In Pharmacy will be added soon."
    />
  );
}
