import React from "react";
import BtechEceLayout from "../BtechEceLayout";
import CseLeadershipTab from "@/components/sections/CseLeadershipTab";
import leadershipData from "../../../../../data/btech-ece-leadership.json";

export default function LeadershipPage() {
  return (
    <BtechEceLayout>
      <CseLeadershipTab data={leadershipData} />
    </BtechEceLayout>
  );
}
