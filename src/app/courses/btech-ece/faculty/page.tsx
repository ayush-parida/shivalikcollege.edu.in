import React from "react";
import BtechEceLayout from "../BtechEceLayout";
import FacultyTab from "@/components/sections/FacultyTab";
import facultyData from "../../../../../data/btech-ece-faculty.json";

export default function FacultyPage() {
  return (
    <BtechEceLayout>
      <FacultyTab data={facultyData} />
    </BtechEceLayout>
  );
}
