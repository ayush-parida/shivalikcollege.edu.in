import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/ideathon/school-ideathon-registration";

export const metadata: Metadata = {
  title: "Ideathon • School Ideathon Registration | Shivalik College of Engineering",
  description: "Sample overview for Ideathon • School Ideathon Registration at Shivalik College of Engineering.",
};

export default function IdeathonSchoolIdeathonRegistrationPage() {
  return (
    <PageRenderer
      path={path}
      title="Ideathon • School Ideathon Registration"
      description="Sample content for Ideathon • School Ideathon Registration will be added soon."
    />
  );
}
