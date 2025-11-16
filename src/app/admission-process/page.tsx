import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/admission-process";

export const metadata: Metadata = {
  title: "Admission Process | Shivalik College of Engineering",
  description: "Sample overview for Admission Process at Shivalik College of Engineering.",
};

export default function AdmissionProcessPage() {
  return (
    <PageRenderer
      path={path}
      title="Admission Process"
      description="Sample content for Admission Process will be added soon."
    />
  );
}
