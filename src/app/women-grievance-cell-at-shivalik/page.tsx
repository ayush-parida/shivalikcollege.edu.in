import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/women-grievance-cell-at-shivalik";

export const metadata: Metadata = {
  title: "Women Grievance Cell At Shivalik | Shivalik College of Engineering",
  description: "Sample overview for Women Grievance Cell At Shivalik at Shivalik College of Engineering.",
};

export default function WomenGrievanceCellAtShivalikPage() {
  return (
    <PageRenderer
      path={path}
      title="Women Grievance Cell At Shivalik"
      description="Sample content for Women Grievance Cell At Shivalik will be added soon."
    />
  );
}
