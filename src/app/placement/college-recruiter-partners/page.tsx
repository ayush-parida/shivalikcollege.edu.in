import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/placement/college-recruiter-partners";

export const metadata: Metadata = {
  title: "Placement • College Recruiter Partners | Shivalik College of Engineering",
  description: "Sample overview for Placement • College Recruiter Partners at Shivalik College of Engineering.",
};

export default function PlacementCollegeRecruiterPartnersPage() {
  return (
    <PageRenderer
      path={path}
      title="Placement • College Recruiter Partners"
      description="Sample content for Placement • College Recruiter Partners will be added soon."
    />
  );
}
