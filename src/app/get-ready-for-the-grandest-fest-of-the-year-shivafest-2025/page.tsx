import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/get-ready-for-the-grandest-fest-of-the-year-shivafest-2025";

export const metadata: Metadata = {
  title: "Get Ready For The Grandest Fest Of The Year Shivafest 2025 | Shivalik College of Engineering",
  description: "Sample overview for Get Ready For The Grandest Fest Of The Year Shivafest 2025 at Shivalik College of Engineering.",
};

export default function GetReadyForTheGrandestFestOfTheYearShivafest2025Page() {
  return (
    <PageRenderer
      path={path}
      title="Get Ready For The Grandest Fest Of The Year Shivafest 2025"
      description="Sample content for Get Ready For The Grandest Fest Of The Year Shivafest 2025 will be added soon."
    />
  );
}
