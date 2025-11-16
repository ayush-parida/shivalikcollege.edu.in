import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/world-environment-day";

export const metadata: Metadata = {
  title: "World Environment Day | Shivalik College of Engineering",
  description: "Sample overview for World Environment Day at Shivalik College of Engineering.",
};

export default function WorldEnvironmentDayPage() {
  return (
    <PageRenderer
      path={path}
      title="World Environment Day"
      description="Sample content for World Environment Day will be added soon."
    />
  );
}
