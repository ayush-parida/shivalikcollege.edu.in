import React from "react";
import BtechMechanicalLayout from "../BtechMechanicalLayout";
import CurriculumTab from "@/components/sections/CurriculumTab";
import curriculumData from "../../../../../data/btech-mechanical-curriculum.json";

export default function CurriculumPage() {
  return (
    <BtechMechanicalLayout>
      <CurriculumTab data={curriculumData} />
    </BtechMechanicalLayout>
  );
}
