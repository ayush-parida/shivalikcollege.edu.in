import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/icedet-2023/registration";

export const metadata: Metadata = {
  title: "Icedet 2023 • Registration | Shivalik College of Engineering",
  description: "Sample overview for Icedet 2023 • Registration at Shivalik College of Engineering.",
};

export default function Icedet2023RegistrationPage() {
  return (
    <PageRenderer
      path={path}
      title="Icedet 2023 • Registration"
      description="Sample content for Icedet 2023 • Registration will be added soon."
    />
  );
}
