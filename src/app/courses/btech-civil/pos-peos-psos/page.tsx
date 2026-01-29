import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import PosPeosPsosTab from "@/components/sections/PosPeosPsosTab";
import posPeosPsosData from "../../../../../data/btech-civil-pos-peos-psos.json";

export default function PosPeosPsosPage() {
  return (
    <BtechCivilLayout>
      <PosPeosPsosTab data={posPeosPsosData} />
    </BtechCivilLayout>
  );
}
