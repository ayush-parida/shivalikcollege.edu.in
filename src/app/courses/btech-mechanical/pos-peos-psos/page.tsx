import React from "react";
import BtechMechanicalLayout from "../BtechMechanicalLayout";
import PosPeosPsosTab from "@/components/sections/PosPeosPsosTab";
import posPeosPsosData from "../../../../../data/btech-mechanical-pos-peos-psos.json";

export default function PosPeosPsosPage() {
  return (
    <BtechMechanicalLayout>
      <PosPeosPsosTab data={posPeosPsosData} />
    </BtechMechanicalLayout>
  );
}
