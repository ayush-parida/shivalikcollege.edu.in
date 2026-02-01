import React from "react";
import BtechEceLayout from "./BtechEceLayout";
import CseHomeTab from "@/components/sections/CseHomeTab";
import eceHomeData from "../../../../data/btech-ece-home.json";

export default function BtechEcePage() {
  return (
    <BtechEceLayout>
      <CseHomeTab data={eceHomeData} />
    </BtechEceLayout>
  );
}
