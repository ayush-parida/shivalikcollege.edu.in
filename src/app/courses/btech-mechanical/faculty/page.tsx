import React from "react";
import BtechMechanicalLayout from "../BtechMechanicalLayout";
import FacultyTab from "@/components/sections/FacultyTab";
import facultyData from "../../../../../data/btech-mechanical-faculty.json";

export default function FacultyPage() {
  return (
    <BtechMechanicalLayout>
      <FacultyTab data={facultyData} />
    </BtechMechanicalLayout>
  );
}
