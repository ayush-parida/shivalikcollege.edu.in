import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-institute-of-professional-studies/committees";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik Institute Of Professional Studies • Committees | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Committees at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikInstituteOfProfessionalStudiesCommitteesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik Institute Of Professional Studies • Committees"
      description="Sample content for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Committees will be added soon."
    />
  );
}
