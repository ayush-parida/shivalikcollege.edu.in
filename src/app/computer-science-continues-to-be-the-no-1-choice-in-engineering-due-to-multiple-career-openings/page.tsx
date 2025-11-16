import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/computer-science-continues-to-be-the-no-1-choice-in-engineering-due-to-multiple-career-openings";

export const metadata: Metadata = {
  title: "Computer Science Continues To Be The No 1 Choice In Engineering Due To Multiple Career Openings | Shivalik College of Engineering",
  description: "Sample overview for Computer Science Continues To Be The No 1 Choice In Engineering Due To Multiple Career Openings at Shivalik College of Engineering.",
};

export default function ComputerScienceContinuesToBeTheNo1ChoiceInEngineeringDueToMultipleCareerOpeningsPage() {
  return (
    <PageRenderer
      path={path}
      title="Computer Science Continues To Be The No 1 Choice In Engineering Due To Multiple Career Openings"
      description="Sample content for Computer Science Continues To Be The No 1 Choice In Engineering Due To Multiple Career Openings will be added soon."
    />
  );
}
