import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import FacilitiesTab from "@/components/sections/FacilitiesTab";
import facilitiesData from "../../../../../data/btech-civil-facilities.json";

export default function FacilitiesPage() {
  return (
    <BtechCivilLayout>
      <FacilitiesTab data={facilitiesData} />
    </BtechCivilLayout>
  );
}
