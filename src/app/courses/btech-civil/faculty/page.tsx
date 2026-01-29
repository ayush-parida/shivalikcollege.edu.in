import React from "react";
import BtechCivilLayout from "../BtechCivilLayout";
import FacultyTab from "@/components/courses/tabs/FacultyTab";
import facultyData from "@/data/btech-civil-faculty.json";

export default function FacultyPage() {
  return (
    <BtechCivilLayout>
      <FacultyTab data={facultyData} />
    </BtechCivilLayout>
  );
}
