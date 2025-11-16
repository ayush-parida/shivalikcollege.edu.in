import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/sciencechampionship";

export const metadata: Metadata = {
  title: "Sciencechampionship | Shivalik College of Engineering",
  description: "Sample overview for Sciencechampionship at Shivalik College of Engineering.",
};

export default function SciencechampionshipPage() {
  return (
    <PageRenderer
      path={path}
      title="Sciencechampionship"
      description="Sample content for Sciencechampionship will be added soon."
    />
  );
}
