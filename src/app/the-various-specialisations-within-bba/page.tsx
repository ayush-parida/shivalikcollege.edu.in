import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/the-various-specialisations-within-bba";

export const metadata: Metadata = {
  title: "The Various Specialisations Within BBA | Shivalik College of Engineering",
  description: "Sample overview for The Various Specialisations Within BBA at Shivalik College of Engineering.",
};

export default function TheVariousSpecialisationsWithinBbaPage() {
  return (
    <PageRenderer
      path={path}
      title="The Various Specialisations Within BBA"
      description="Sample content for The Various Specialisations Within BBA will be added soon."
    />
  );
}
