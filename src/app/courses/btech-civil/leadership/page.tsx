import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import CseLeadershipTab from "@/components/sections/CseLeadershipTab";
import leadershipData from "../../../../../data/btech-civil-leadership.json";

export default function LeadershipPage() {
  return (
    <BtechCivilLayout>
      <CseLeadershipTab data={leadershipData} />
    </BtechCivilLayout>
  );
}
