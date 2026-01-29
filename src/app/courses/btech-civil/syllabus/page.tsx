import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import SyllabusTab from "@/components/courses/tabs/SyllabusTab";
import syllabusData from "@/data/btech-civil-syllabus.json";

export default function SyllabusPage() {
  return (
    <BtechCivilLayout>
      <SyllabusTab data={syllabusData} />
    </BtechCivilLayout>
  );
}
