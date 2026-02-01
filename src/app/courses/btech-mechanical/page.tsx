import React from "react";
import BtechMechanicalLayout from "./BtechMechanicalLayout";
import CseHomeTab from "@/components/sections/CseHomeTab";
import mechanicalHomeData from "../../../../data/btech-mechanical-home.json";

export default function BtechMechanicalPage() {
  return (
    <BtechMechanicalLayout>
      <CseHomeTab data={mechanicalHomeData} />
    </BtechMechanicalLayout>
  );
}
