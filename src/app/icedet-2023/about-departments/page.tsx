import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023/about-departments";

export const metadata: Metadata = {
  title: "Icedet 2023 • About Departments | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 • About Departments at Shivalik College of Engineering.",
};

export default function Icedet2023AboutDepartmentsPage() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023 • About Departments"
      description="Sample content for Icedet 2023 • About Departments will be added soon."
    />
  );
}
