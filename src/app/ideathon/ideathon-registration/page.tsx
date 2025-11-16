import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/ideathon/ideathon-registration";

export const metadata: Metadata = {
  title: "Ideathon • Ideathon Registration | Shivalik College of Engineering",
  description: "Sample overview for Ideathon • Ideathon Registration at Shivalik College of Engineering.",
};

export default function IdeathonIdeathonRegistrationPage() {
  return (
    <PageRenderer
      path={path}
      title="Ideathon • Ideathon Registration"
      description="Sample content for Ideathon • Ideathon Registration will be added soon."
    />
  );
}
