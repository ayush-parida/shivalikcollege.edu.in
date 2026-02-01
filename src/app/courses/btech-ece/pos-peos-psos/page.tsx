import React from "react";
import BtechEceLayout from "../BtechEceLayout";
import PosPeosPsosTab from "@/components/sections/PosPeosPsosTab";
import posPeosPsosData from "../../../../../data/btech-ece-pos-peos-psos.json";

export default function PosPeosPsosPage() {
  return (
    <BtechEceLayout>
      <PosPeosPsosTab data={posPeosPsosData} />
    </BtechEceLayout>
  );
}
