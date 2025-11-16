import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/5-reasons-to-choose-pharmacy-as-a-career";

export const metadata: Metadata = {
  title: "5 Reasons To Choose Pharmacy As A Career | Shivalik College of Engineering",
  description: "Sample overview for 5 Reasons To Choose Pharmacy As A Career at Shivalik College of Engineering.",
};

export default function Route5ReasonsToChoosePharmacyAsACareerPage() {
  return (
    <PageRenderer
      path={path}
      title="5 Reasons To Choose Pharmacy As A Career"
      description="Sample content for 5 Reasons To Choose Pharmacy As A Career will be added soon."
    />
  );
}
