import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/admissions/apply-online";

export const metadata: Metadata = {
  title: "Admissions • Apply Online | Shivalik College of Engineering",
  description: "Sample overview for Admissions • Apply Online at Shivalik College of Engineering.",
};

export default function AdmissionsApplyOnlinePage() {
  return (
    <PageRenderer
      path={path}
      title="Admissions • Apply Online"
      description="Sample content for Admissions • Apply Online will be added soon."
    />
  );
}
