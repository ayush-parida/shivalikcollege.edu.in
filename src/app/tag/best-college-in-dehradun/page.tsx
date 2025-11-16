import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/tag/best-college-in-dehradun";

export const metadata: Metadata = {
  title: "Tag • Best College In Dehradun | Shivalik College of Engineering",
  description: "Sample overview for Tag • Best College In Dehradun at Shivalik College of Engineering.",
};

export default function TagBestCollegeInDehradunPage() {
  return (
    <PageRenderer
      path={path}
      title="Tag • Best College In Dehradun"
      description="Sample content for Tag • Best College In Dehradun will be added soon."
    />
  );
}
