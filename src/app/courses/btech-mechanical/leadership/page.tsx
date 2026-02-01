import React from "react";
import BtechMechanicalLayout from "../BtechMechanicalLayout";
import CseLeadershipTab from "@/components/sections/CseLeadershipTab";
import leadershipData from "../../../../../data/btech-mechanical-leadership.json";

export default function LeadershipPage() {
  return (
    <BtechMechanicalLayout>
      <CseLeadershipTab data={leadershipData} />
    </BtechMechanicalLayout>
  );
}
