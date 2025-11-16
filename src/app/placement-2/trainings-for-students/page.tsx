import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/placement-2/trainings-for-students";

export const metadata: Metadata = {
  title: "Placement 2 • Trainings For Students | Shivalik College of Engineering",
  description: "Sample overview for Placement 2 • Trainings For Students at Shivalik College of Engineering.",
};

export default function Placement2TrainingsForStudentsPage() {
  return (
    <PageRenderer
      path={path}
      title="Placement 2 • Trainings For Students"
      description="Sample content for Placement 2 • Trainings For Students will be added soon."
    />
  );
}
