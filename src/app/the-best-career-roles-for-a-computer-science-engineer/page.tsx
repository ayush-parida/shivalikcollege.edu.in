import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/the-best-career-roles-for-a-computer-science-engineer";

export const metadata: Metadata = {
  title: "The Best Career Roles For A Computer Science Engineer | Shivalik College of Engineering",
  description: "Sample overview for The Best Career Roles For A Computer Science Engineer at Shivalik College of Engineering.",
};

export default function TheBestCareerRolesForAComputerScienceEngineerPage() {
  return (
    <PageRenderer
      path={path}
      title="The Best Career Roles For A Computer Science Engineer"
      description="Sample content for The Best Career Roles For A Computer Science Engineer will be added soon."
    />
  );
}
