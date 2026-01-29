import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import CseVisionMissionTab from "@/components/courses/tabs/CseVisionMissionTab";
import visionMissionData from "@/data/btech-civil-vision-mission.json";

export default function VisionMissionPage() {
  return (
    <BtechCivilLayout>
      <CseVisionMissionTab data={visionMissionData} />
    </BtechCivilLayout>
  );
}
