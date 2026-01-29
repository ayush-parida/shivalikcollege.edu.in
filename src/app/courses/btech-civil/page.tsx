import React from "react";
import BtechCivilLayout from "./BtechCivilLayout";
import CseHomeTab from "@/components/sections/CseHomeTab";
import civilHomeData from "../../../../data/btech-civil-home.json";

export default function BtechCivilPage() {
  return (
    <BtechCivilLayout>
      <CseHomeTab data={civilHomeData} />
    </BtechCivilLayout>
  );
}
