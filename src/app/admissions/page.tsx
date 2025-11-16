import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/admissions";

export const metadata: Metadata = {
  title: "Admissions | Shivalik College of Engineering",
  description: "Sample overview for Admissions at Shivalik College of Engineering.",
};

export default function AdmissionsPage() {
  return (
    <PageRenderer
      path={path}
      title="Admissions"
      description="Sample content for Admissions will be added soon."
    />
  );
}
