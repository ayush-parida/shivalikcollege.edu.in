import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/management-vibes-nov-2024";

export const metadata: Metadata = {
  title: "Management Vibes Nov 2024 | Shivalik College of Engineering",
  description: "Sample overview for Management Vibes Nov 2024 at Shivalik College of Engineering.",
};

export default function ManagementVibesNov2024Page() {
  return (
    <PageRenderer
      path={path}
      title="Management Vibes Nov 2024"
      description="Sample content for Management Vibes Nov 2024 will be added soon."
    />
  );
}
