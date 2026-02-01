import React from "react";
import BtechEceLayout from "../BtechEceLayout";
import FacilitiesTab from "@/components/sections/FacilitiesTab";
import facilitiesData from "../../../../../data/btech-ece-facilities.json";

export default function FacilitiesPage() {
  return (
    <BtechEceLayout>
      <FacilitiesTab data={facilitiesData} />
    </BtechEceLayout>
  );
}
