import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/job-profiles-for-computer-science-engineers";

export const metadata: Metadata = {
  title: "Job Profiles For Computer Science Engineers | Shivalik College of Engineering",
  description: "Sample overview for Job Profiles For Computer Science Engineers at Shivalik College of Engineering.",
};

export default function JobProfilesForComputerScienceEngineersPage() {
  return (
    <PageRenderer
      path={path}
      title="Job Profiles For Computer Science Engineers"
      description="Sample content for Job Profiles For Computer Science Engineers will be added soon."
    />
  );
}
