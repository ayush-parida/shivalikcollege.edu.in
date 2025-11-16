import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/unique-food-habits-of-uttarakhand";

export const metadata: Metadata = {
  title: "Unique Food Habits Of Uttarakhand | Shivalik College of Engineering",
  description: "Sample overview for Unique Food Habits Of Uttarakhand at Shivalik College of Engineering.",
};

export default function UniqueFoodHabitsOfUttarakhandPage() {
  return (
    <PageRenderer
      path={path}
      title="Unique Food Habits Of Uttarakhand"
      description="Sample content for Unique Food Habits Of Uttarakhand will be added soon."
    />
  );
}
