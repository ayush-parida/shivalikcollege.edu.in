import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/technologies-that-may-impact-two-wheelers";

export const metadata: Metadata = {
  title: "Technologies That May Impact Two Wheelers | Shivalik College of Engineering",
  description: "Sample overview for Technologies That May Impact Two Wheelers at Shivalik College of Engineering.",
};

export default function TechnologiesThatMayImpactTwoWheelersPage() {
  return (
    <PageRenderer
      path={path}
      title="Technologies That May Impact Two Wheelers"
      description="Sample content for Technologies That May Impact Two Wheelers will be added soon."
    />
  );
}
