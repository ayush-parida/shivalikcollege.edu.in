import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/the-aim-of-the-management";

export const metadata: Metadata = {
  title: "The Aim Of The Management | Shivalik College of Engineering",
  description: "Sample overview for The Aim Of The Management at Shivalik College of Engineering.",
};

export default function TheAimOfTheManagementPage() {
  return (
    <PageRenderer
      path={path}
      title="The Aim Of The Management"
      description="Sample content for The Aim Of The Management will be added soon."
    />
  );
}
