import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/administrative-leader";

export const metadata: Metadata = {
  title: "Administrative Leader | Shivalik College of Engineering",
  description: "Sample overview for Administrative Leader at Shivalik College of Engineering.",
};

export default function AdministrativeLeaderPage() {
  return (
    <PageRenderer
      path={path}
      title="Administrative Leader"
      description="Sample content for Administrative Leader will be added soon."
    />
  );
}
