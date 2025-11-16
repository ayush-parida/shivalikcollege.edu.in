import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023/important-dates";

export const metadata: Metadata = {
  title: "Icedet 2023 • Important Dates | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 • Important Dates at Shivalik College of Engineering.",
};

export default function Icedet2023ImportantDatesPage() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023 • Important Dates"
      description="Sample content for Icedet 2023 • Important Dates will be added soon."
    />
  );
}
