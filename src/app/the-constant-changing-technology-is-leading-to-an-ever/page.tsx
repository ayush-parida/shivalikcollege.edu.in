import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/the-constant-changing-technology-is-leading-to-an-ever";

export const metadata: Metadata = {
  title: "The Constant Changing Technology Is Leading To An Ever | Shivalik College of Engineering",
  description: "Sample overview for The Constant Changing Technology Is Leading To An Ever at Shivalik College of Engineering.",
};

export default function TheConstantChangingTechnologyIsLeadingToAnEverPage() {
  return (
    <PageRenderer
      path={path}
      title="The Constant Changing Technology Is Leading To An Ever"
      description="Sample content for The Constant Changing Technology Is Leading To An Ever will be added soon."
    />
  );
}
