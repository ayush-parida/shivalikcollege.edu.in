import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/admissions/fee-calculator";

export const metadata: Metadata = {
  title: "Admissions • Fee Calculator | Shivalik College of Engineering",
  description: "Sample overview for Admissions • Fee Calculator at Shivalik College of Engineering.",
};

export default function AdmissionsFeeCalculatorPage() {
  return (
    <PageRenderer
      path={path}
      title="Admissions • Fee Calculator"
      description="Sample content for Admissions • Fee Calculator will be added soon."
    />
  );
}
