import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-institute-of-professional-studies/action-taken-reports-sips";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik Institute Of Professional Studies • Action Taken Reports SIPS | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Action Taken Reports SIPS at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikInstituteOfProfessionalStudiesActionTakenReportsSipsPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik Institute Of Professional Studies • Action Taken Reports SIPS"
      description="Sample content for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Action Taken Reports SIPS will be added soon."
    />
  );
}
