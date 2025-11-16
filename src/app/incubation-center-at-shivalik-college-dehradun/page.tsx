import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/incubation-center-at-shivalik-college-dehradun";

export const metadata: Metadata = {
  title: "Incubation Center At Shivalik College Dehradun | Shivalik College of Engineering",
  description: "Sample overview for Incubation Center At Shivalik College Dehradun at Shivalik College of Engineering.",
};

export default function IncubationCenterAtShivalikCollegeDehradunPage() {
  return (
    <PageRenderer
      path={path}
      title="Incubation Center At Shivalik College Dehradun"
      description="Sample content for Incubation Center At Shivalik College Dehradun will be added soon."
    />
  );
}
