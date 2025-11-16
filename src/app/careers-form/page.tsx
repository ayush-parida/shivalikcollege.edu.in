import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/careers-form";

export const metadata: Metadata = {
  title: "Careers Form | Shivalik College of Engineering",
  description: "Sample overview for Careers Form at Shivalik College of Engineering.",
};

export default function CareersFormPage() {
  return (
    <PageRenderer
      path={path}
      title="Careers Form"
      description="Sample content for Careers Form will be added soon."
    />
  );
}
