import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-shivalik-institute-of-professional-studies/nirf";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC Shivalik Institute Of Professional Studies • Nirf | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Nirf at Shivalik College of Engineering.",
};

export default function QualityCellIqacShivalikInstituteOfProfessionalStudiesNirfPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC Shivalik Institute Of Professional Studies • Nirf"
      description="Sample content for Quality Cell • IQAC Shivalik Institute Of Professional Studies • Nirf will be added soon."
    />
  );
}
