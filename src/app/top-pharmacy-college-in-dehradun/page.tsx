import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/top-pharmacy-college-in-dehradun";

export const metadata: Metadata = {
  title: "Top Pharmacy College In Dehradun | Shivalik College of Engineering",
  description: "Sample overview for Top Pharmacy College In Dehradun at Shivalik College of Engineering.",
};

export default function TopPharmacyCollegeInDehradunPage() {
  return (
    <PageRenderer
      path={path}
      title="Top Pharmacy College In Dehradun"
      description="Sample content for Top Pharmacy College In Dehradun will be added soon."
    />
  );
}
