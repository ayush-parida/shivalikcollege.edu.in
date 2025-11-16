import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/collegecommittee";

export const metadata: Metadata = {
  title: "Collegecommittee | Shivalik College of Engineering",
  description: "Sample overview for Collegecommittee at Shivalik College of Engineering.",
};

export default function CollegecommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="Collegecommittee"
      description="Sample content for Collegecommittee will be added soon."
    />
  );
}
