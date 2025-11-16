import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/nukkad-natak";

export const metadata: Metadata = {
  title: "Nukkad Natak | Shivalik College of Engineering",
  description: "Sample overview for Nukkad Natak at Shivalik College of Engineering.",
};

export default function NukkadNatakPage() {
  return (
    <PageRenderer
      path={path}
      title="Nukkad Natak"
      description="Sample content for Nukkad Natak will be added soon."
    />
  );
}
