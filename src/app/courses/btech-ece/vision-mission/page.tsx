import React from "react";
import BtechEceLayout from "../BtechEceLayout";
import CseVisionMissionTab from "@/components/sections/CseVisionMissionTab";
import visionMissionData from "../../../../../data/btech-ece-vision-mission.json";

export default function VisionMissionPage() {
  return (
    <BtechEceLayout>
      <CseVisionMissionTab data={visionMissionData} />
    </BtechEceLayout>
  );
}
