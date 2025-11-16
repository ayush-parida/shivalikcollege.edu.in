import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/mechatronics-robotics-drone-technology-is-the-future-of-mechanical-engineering";

export const metadata: Metadata = {
  title: "Mechatronics Robotics Drone Technology Is The Future Of Mechanical Engineering | Shivalik College of Engineering",
  description: "Sample overview for Mechatronics Robotics Drone Technology Is The Future Of Mechanical Engineering at Shivalik College of Engineering.",
};

export default function MechatronicsRoboticsDroneTechnologyIsTheFutureOfMechanicalEngineeringPage() {
  return (
    <PageRenderer
      path={path}
      title="Mechatronics Robotics Drone Technology Is The Future Of Mechanical Engineering"
      description="Sample content for Mechatronics Robotics Drone Technology Is The Future Of Mechanical Engineering will be added soon."
    />
  );
}
