import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iqac-sce-2/ict-enabled-classroom";

export const metadata: Metadata = {
  title: "IQAC SCE 2 • Ict Enabled Classroom | Shivalik College of Engineering",
  description: "Sample overview for IQAC SCE 2 • Ict Enabled Classroom at Shivalik College of Engineering.",
};

export default function IqacSce2IctEnabledClassroomPage() {
  return (
    <PageRenderer
      path={path}
      title="IQAC SCE 2 • Ict Enabled Classroom"
      description="Sample content for IQAC SCE 2 • Ict Enabled Classroom will be added soon."
    />
  );
}
