import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/how-to-choose-the-best-bba-college-for-your-career-goals";

export const metadata: Metadata = {
  title: "How To Choose The Best BBA College For Your Career Goals | Shivalik College of Engineering",
  description: "Sample overview for How To Choose The Best BBA College For Your Career Goals at Shivalik College of Engineering.",
};

export default function HowToChooseTheBestBbaCollegeForYourCareerGoalsPage() {
  return (
    <PageRenderer
      path={path}
      title="How To Choose The Best BBA College For Your Career Goals"
      description="Sample content for How To Choose The Best BBA College For Your Career Goals will be added soon."
    />
  );
}
