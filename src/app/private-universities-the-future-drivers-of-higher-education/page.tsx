import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/private-universities-the-future-drivers-of-higher-education";

export const metadata: Metadata = {
  title: "Private Universities The Future Drivers Of Higher Education | Shivalik College of Engineering",
  description: "Sample overview for Private Universities The Future Drivers Of Higher Education at Shivalik College of Engineering.",
};

export default function PrivateUniversitiesTheFutureDriversOfHigherEducationPage() {
  return (
    <PageRenderer
      path={path}
      title="Private Universities The Future Drivers Of Higher Education"
      description="Sample content for Private Universities The Future Drivers Of Higher Education will be added soon."
    />
  );
}
