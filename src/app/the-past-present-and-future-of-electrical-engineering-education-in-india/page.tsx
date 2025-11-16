import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/the-past-present-and-future-of-electrical-engineering-education-in-india";

export const metadata: Metadata = {
  title: "The Past Present And Future Of Electrical Engineering Education In India | Shivalik College of Engineering",
  description: "Sample overview for The Past Present And Future Of Electrical Engineering Education In India at Shivalik College of Engineering.",
};

export default function ThePastPresentAndFutureOfElectricalEngineeringEducationInIndiaPage() {
  return (
    <PageRenderer
      path={path}
      title="The Past Present And Future Of Electrical Engineering Education In India"
      description="Sample content for The Past Present And Future Of Electrical Engineering Education In India will be added soon."
    />
  );
}
