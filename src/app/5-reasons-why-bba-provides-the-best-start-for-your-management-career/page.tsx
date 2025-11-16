import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/5-reasons-why-bba-provides-the-best-start-for-your-management-career";

export const metadata: Metadata = {
  title: "5 Reasons Why BBA Provides The Best Start For Your Management Career | Shivalik College of Engineering",
  description: "Sample overview for 5 Reasons Why BBA Provides The Best Start For Your Management Career at Shivalik College of Engineering.",
};

export default function Route5ReasonsWhyBbaProvidesTheBestStartForYourManagementCareerPage() {
  return (
    <PageRenderer
      path={path}
      title="5 Reasons Why BBA Provides The Best Start For Your Management Career"
      description="Sample content for 5 Reasons Why BBA Provides The Best Start For Your Management Career will be added soon."
    />
  );
}
