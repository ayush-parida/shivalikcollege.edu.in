import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import CurriculumTab from "@/components/courses/tabs/CurriculumTab";
import curriculumData from "@/data/btech-civil-curriculum.json";

export default function CurriculumPage() {
  return (
    <BtechCivilLayout>
      <CurriculumTab data={curriculumData} />
    </BtechCivilLayout>
  );
}
