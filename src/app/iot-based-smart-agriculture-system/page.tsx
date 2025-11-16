import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/iot-based-smart-agriculture-system";

export const metadata: Metadata = {
  title: "Iot Based Smart Agriculture System | Shivalik College of Engineering",
  description: "Sample overview for Iot Based Smart Agriculture System at Shivalik College of Engineering.",
};

export default function IotBasedSmartAgricultureSystemPage() {
  return (
    <PageRenderer
      path={path}
      title="Iot Based Smart Agriculture System"
      description="Sample content for Iot Based Smart Agriculture System will be added soon."
    />
  );
}
