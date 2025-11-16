import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/tag/top-colleges-in-dehradun";

export const metadata: Metadata = {
  title: "Tag • Top Colleges In Dehradun | Shivalik College of Engineering",
  description: "Sample overview for Tag • Top Colleges In Dehradun at Shivalik College of Engineering.",
};

export default function TagTopCollegesInDehradunPage() {
  return (
    <PageRenderer
      path={path}
      title="Tag • Top Colleges In Dehradun"
      description="Sample content for Tag • Top Colleges In Dehradun will be added soon."
    />
  );
}
