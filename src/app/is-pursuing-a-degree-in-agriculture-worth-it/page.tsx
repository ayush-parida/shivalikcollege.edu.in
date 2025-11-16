import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/is-pursuing-a-degree-in-agriculture-worth-it";

export const metadata: Metadata = {
  title: "Is Pursuing A Degree In Agriculture Worth It | Shivalik College of Engineering",
  description: "Sample overview for Is Pursuing A Degree In Agriculture Worth It at Shivalik College of Engineering.",
};

export default function IsPursuingADegreeInAgricultureWorthItPage() {
  return (
    <PageRenderer
      path={path}
      title="Is Pursuing A Degree In Agriculture Worth It"
      description="Sample content for Is Pursuing A Degree In Agriculture Worth It will be added soon."
    />
  );
}
