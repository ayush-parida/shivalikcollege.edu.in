import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/quality-cell/iqac-college-of-pharmacy/meeting-minutes";

export const metadata: Metadata = {
  title: "Quality Cell • IQAC College Of Pharmacy • Meeting Minutes | Shivalik College of Engineering",
  description: "Sample overview for Quality Cell • IQAC College Of Pharmacy • Meeting Minutes at Shivalik College of Engineering.",
};

export default function QualityCellIqacCollegeOfPharmacyMeetingMinutesPage() {
  return (
    <PageRenderer
      path={path}
      title="Quality Cell • IQAC College Of Pharmacy • Meeting Minutes"
      description="Sample content for Quality Cell • IQAC College Of Pharmacy • Meeting Minutes will be added soon."
    />
  );
}
