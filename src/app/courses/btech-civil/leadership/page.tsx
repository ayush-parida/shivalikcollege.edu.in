import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import LeadershipTab from "@/components/courses/tabs/LeadershipTab";
import leadershipData from "@/data/btech-civil-leadership.json";

export default function LeadershipPage() {
  return (
    <BtechCivilLayout>
      <LeadershipTab data={leadershipData} />
    </BtechCivilLayout>
  );
}
