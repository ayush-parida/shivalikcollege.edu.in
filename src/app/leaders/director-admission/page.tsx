import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/leaders/director-admission";

export const metadata: Metadata = {
  title: "Leaders • Director Admission | Shivalik College of Engineering",
  description: "Sample overview for Leaders • Director Admission at Shivalik College of Engineering.",
};

export default function LeadersDirectorAdmissionPage() {
  return (
    <PageRenderer
      path={path}
      title="Leaders • Director Admission"
      description="Sample content for Leaders • Director Admission will be added soon."
    />
  );
}
