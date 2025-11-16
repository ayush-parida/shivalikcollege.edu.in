import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-institute-of-professional-studies/best-practices";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik Institute Of Professional Studies • Best Practices | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Best Practices at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikInstituteOfProfessionalStudiesBestPracticesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik Institute Of Professional Studies • Best Practices"
      description="Sample content for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Best Practices will be added soon."
    />
  );
}
