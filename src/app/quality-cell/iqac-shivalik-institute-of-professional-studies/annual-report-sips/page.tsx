import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-institute-of-professional-studies/annual-report-sips";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik Institute Of Professional Studies • Annual Report SIPS | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Annual Report SIPS at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikInstituteOfProfessionalStudiesAnnualReportSipsPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik Institute Of Professional Studies • Annual Report SIPS"
      description="Sample content for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Annual Report SIPS will be added soon."
    />
  );
}
