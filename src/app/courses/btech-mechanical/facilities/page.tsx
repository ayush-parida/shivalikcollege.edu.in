import React from "react";
import BtechMechanicalLayout from "../BtechMechanicalLayout";
import FacilitiesTab from "@/components/sections/FacilitiesTab";
import facilitiesData from "../../../../../data/btech-mechanical-facilities.json";

export default function FacilitiesPage() {
  return (
    <BtechMechanicalLayout>
      <FacilitiesTab data={facilitiesData} />
    </BtechMechanicalLayout>
  );
}
