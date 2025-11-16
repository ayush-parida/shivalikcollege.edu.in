import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/the-shivalik-college-dehradun";

export const metadata: Metadata = {
  title: "The Shivalik College Dehradun | Shivalik College of Engineering",
  description: "Sample overview for The Shivalik College Dehradun at Shivalik College of Engineering.",
};

export default function TheShivalikCollegeDehradunPage() {
  return (
    <PageRenderer
      path={path}
      title="The Shivalik College Dehradun"
      description="Sample content for The Shivalik College Dehradun will be added soon."
    />
  );
}
