import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-institute-of-professional-studies/vision-mission";

export const metadata: Metadata = {
  title: "College • Shivalik Institute Of Professional Studies • Vision Mission | Shivalik College of Engineering",
  description: "Sample overview for College • Shivalik Institute Of Professional Studies • Vision Mission at Shivalik College of Engineering.",
};

export default function CollegeShivalikInstituteOfProfessionalStudiesVisionMissionPage() {
  return (
    <PageRenderer
      path={path}
      title="College • Shivalik Institute Of Professional Studies • Vision Mission"
      description="Sample content for College • Shivalik Institute Of Professional Studies • Vision Mission will be added soon."
    />
  );
}
