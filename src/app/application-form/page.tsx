import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/application-form";

export const metadata: Metadata = {
  title: "Application Form | Shivalik College of Engineering",
  description: "Sample overview for Application Form at Shivalik College of Engineering.",
};

export default function ApplicationFormPage() {
  return (
    <PageRenderer
      path={path}
      title="Application Form"
      description="Sample content for Application Form will be added soon."
    />
  );
}
