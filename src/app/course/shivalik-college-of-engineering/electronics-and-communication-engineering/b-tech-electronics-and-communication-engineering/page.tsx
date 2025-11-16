import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/shivalik-college-of-engineering/electronics-and-communication-engineering/b-tech-electronics-and-communication-engineering";

export const metadata: Metadata = {
  title: "Course • Shivalik College Of Engineering • Electronics And Communication Engineering • B Tech Electronics And Communication Engineering | Shivalik College of Engineering",
  description: "Sample overview for Course • Shivalik College Of Engineering • Electronics And Communication Engineering • B Tech Electronics And Communication Engineering at Shivalik College of Engineering.",
};

export default function CourseShivalikCollegeOfEngineeringElectronicsAndCommunicationEngineeringBTechElectronicsAndCommunicationEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Course • Shivalik College Of Engineering • Electronics And Communication Engineering • B Tech Electronics And Communication Engineering"
      description="Sample content for Course • Shivalik College Of Engineering • Electronics And Communication Engineering • B Tech Electronics And Communication Engineering will be added soon."
    />
  );
}
