import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/aqar";

export const metadata: Metadata = {
  title: "Aqar | Shivalik College of Engineering",
  description: "Sample overview for Aqar at Shivalik College of Engineering.",
};

export default function AqarPage() {
  return (
    <PageRenderer
      path={path}
      title="Aqar"
      description="Sample content for Aqar will be added soon."
    />
  );
}
