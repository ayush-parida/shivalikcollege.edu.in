import React from "react";
import BtechMechanicalLayout from "../BtechMechanicalLayout";
import CseVisionMissionTab from "@/components/sections/CseVisionMissionTab";
import visionMissionData from "../../../../../data/btech-mechanical-vision-mission.json";

export default function VisionMissionPage() {
  return (
    <BtechMechanicalLayout>
      <CseVisionMissionTab data={visionMissionData} />
    </BtechMechanicalLayout>
  );
}
