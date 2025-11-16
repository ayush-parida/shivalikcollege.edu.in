import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/general-grievance-redressal-committee";

export const metadata: Metadata = {
  title: "General Grievance Redressal Committee | Shivalik College of Engineering",
  description: "Sample overview for General Grievance Redressal Committee at Shivalik College of Engineering.",
};

export default function GeneralGrievanceRedressalCommitteePage() {
  return (
    <PageRenderer
      path={path}
      title="General Grievance Redressal Committee"
      description="Sample content for General Grievance Redressal Committee will be added soon."
    />
  );
}
