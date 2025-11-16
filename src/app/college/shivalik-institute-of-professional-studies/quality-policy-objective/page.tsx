import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-institute-of-professional-studies/quality-policy-objective";

export const metadata: Metadata = {
  title: "College • Shivalik Institute Of Professional Studies • Quality Policy Objective | Shivalik College of Engineering",
  description: "Sample overview for College • Shivalik Institute Of Professional Studies • Quality Policy Objective at Shivalik College of Engineering.",
};

export default function CollegeShivalikInstituteOfProfessionalStudiesQualityPolicyObjectivePage() {
  return (
    <PageRenderer
      path={path}
      title="College • Shivalik Institute Of Professional Studies • Quality Policy Objective"
      description="Sample content for College • Shivalik Institute Of Professional Studies • Quality Policy Objective will be added soon."
    />
  );
}
