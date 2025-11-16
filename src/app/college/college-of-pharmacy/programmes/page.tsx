import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/college-of-pharmacy/programmes";

export const metadata: Metadata = {
  title: "College • College Of Pharmacy • Programmes | Shivalik College of Engineering",
  description: "Sample overview for College • College Of Pharmacy • Programmes at Shivalik College of Engineering.",
};

export default function CollegeCollegeOfPharmacyProgrammesPage() {
  return (
    <PageRenderer
      path={path}
      title="College • College Of Pharmacy • Programmes"
      description="Sample content for College • College Of Pharmacy • Programmes will be added soon."
    />
  );
}
