import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/ideathon";

export const metadata: Metadata = {
  title: "Ideathon | Shivalik College of Engineering",
  description: "Sample overview for Ideathon at Shivalik College of Engineering.",
};

export default function IdeathonPage() {
  return (
    <PageRenderer
      path={path}
      title="Ideathon"
      description="Sample content for Ideathon will be added soon."
    />
  );
}
