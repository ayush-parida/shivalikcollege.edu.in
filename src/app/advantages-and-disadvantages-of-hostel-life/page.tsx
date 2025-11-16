import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/advantages-and-disadvantages-of-hostel-life";

export const metadata: Metadata = {
  title: "Advantages And Disadvantages Of Hostel Life | Shivalik College of Engineering",
  description: "Sample overview for Advantages And Disadvantages Of Hostel Life at Shivalik College of Engineering.",
};

export default function AdvantagesAndDisadvantagesOfHostelLifePage() {
  return (
    <PageRenderer
      path={path}
      title="Advantages And Disadvantages Of Hostel Life"
      description="Sample content for Advantages And Disadvantages Of Hostel Life will be added soon."
    />
  );
}
