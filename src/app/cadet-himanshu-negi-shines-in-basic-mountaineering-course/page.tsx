import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/cadet-himanshu-negi-shines-in-basic-mountaineering-course";

export const metadata: Metadata = {
  title: "Cadet Himanshu Negi Shines In Basic Mountaineering Course | Shivalik College of Engineering",
  description: "Sample overview for Cadet Himanshu Negi Shines In Basic Mountaineering Course at Shivalik College of Engineering.",
};

export default function CadetHimanshuNegiShinesInBasicMountaineeringCoursePage() {
  return (
    <PageRenderer
      path={path}
      title="Cadet Himanshu Negi Shines In Basic Mountaineering Course"
      description="Sample content for Cadet Himanshu Negi Shines In Basic Mountaineering Course will be added soon."
    />
  );
}
