import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college";

export const metadata: Metadata = {
  title: "College | Shivalik College of Engineering",
  description: "Sample overview for College at Shivalik College of Engineering.",
};

export default function CollegePage() {
  return (
    <PageRenderer
      path={path}
      title="College"
      description="Sample content for College will be added soon."
    />
  );
}
