import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/shivalik-a-game-changer";

export const metadata: Metadata = {
  title: "Shivalik A Game Changer | Shivalik College of Engineering",
  description: "Sample overview for Shivalik A Game Changer at Shivalik College of Engineering.",
};

export default function ShivalikAGameChangerPage() {
  return (
    <PageRenderer
      path={path}
      title="Shivalik A Game Changer"
      description="Sample content for Shivalik A Game Changer will be added soon."
    />
  );
}
