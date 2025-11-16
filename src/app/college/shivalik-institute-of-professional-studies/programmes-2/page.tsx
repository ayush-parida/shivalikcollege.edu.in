import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-institute-of-professional-studies/programmes-2";

export const metadata: Metadata = {
  title: "College • Shivalik Institute Of Professional Studies • Programmes 2 | Shivalik College of Engineering",
  description: "Sample overview for College • Shivalik Institute Of Professional Studies • Programmes 2 at Shivalik College of Engineering.",
};

export default function CollegeShivalikInstituteOfProfessionalStudiesProgrammes2Page() {
  return (
    <PageRenderer
      path={path}
      title="College • Shivalik Institute Of Professional Studies • Programmes 2"
      description="Sample content for College • Shivalik Institute Of Professional Studies • Programmes 2 will be added soon."
    />
  );
}
