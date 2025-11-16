import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/top-b-tech-specializations-how-to-choose-the-right-one";

export const metadata: Metadata = {
  title: "Top B Tech Specializations How To Choose The Right One | Shivalik College of Engineering",
  description: "Sample overview for Top B Tech Specializations How To Choose The Right One at Shivalik College of Engineering.",
};

export default function TopBTechSpecializationsHowToChooseTheRightOnePage() {
  return (
    <PageRenderer
      path={path}
      title="Top B Tech Specializations How To Choose The Right One"
      description="Sample content for Top B Tech Specializations How To Choose The Right One will be added soon."
    />
  );
}
