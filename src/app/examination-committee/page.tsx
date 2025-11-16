import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/examination-committee";

export const metadata: Metadata = {
  title: "Examination Committee | Shivalik College of Engineering",
  description: "Sample overview for Examination Committee at Shivalik College of Engineering.",
};

export default function ExaminationCommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="Examination Committee"
      description="Sample content for Examination Committee will be added soon."
    />
  );
}
