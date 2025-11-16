import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/alumni";

export const metadata: Metadata = {
  title: "Alumni | Shivalik College of Engineering",
  description: "Sample overview for Alumni at Shivalik College of Engineering.",
};

export default function AlumniPage() {
  return (
    <PageRenderer
      path={path}
      title="Alumni"
      description="Sample content for Alumni will be added soon."
    />
  );
}
