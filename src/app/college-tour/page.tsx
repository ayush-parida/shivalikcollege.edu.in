import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college-tour";

export const metadata: Metadata = {
  title: "College Tour | Shivalik College of Engineering",
  description: "Sample overview for College Tour at Shivalik College of Engineering.",
};

export default function CollegeTourPage() {
  return (
    <PageRenderer
      path={path}
      title="College Tour"
      description="Sample content for College Tour will be added soon."
    />
  );
}
