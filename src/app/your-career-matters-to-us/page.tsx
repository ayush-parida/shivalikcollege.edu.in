import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/your-career-matters-to-us";

export const metadata: Metadata = {
  title: "Your Career Matters To Us | Shivalik College of Engineering",
  description: "Sample overview for Your Career Matters To Us at Shivalik College of Engineering.",
};

export default function YourCareerMattersToUsPage() {
  return (
    <PageRenderer
      path={path}
      title="Your Career Matters To Us"
      description="Sample content for Your Career Matters To Us will be added soon."
    />
  );
}
