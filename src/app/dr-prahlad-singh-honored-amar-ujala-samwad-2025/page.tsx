import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/dr-prahlad-singh-honored-amar-ujala-samwad-2025";

export const metadata: Metadata = {
  title: "Dr Prahlad Singh Honored Amar Ujala Samwad 2025 | Shivalik College of Engineering",
  description: "Sample overview for Dr Prahlad Singh Honored Amar Ujala Samwad 2025 at Shivalik College of Engineering.",
};

export default function DrPrahladSinghHonoredAmarUjalaSamwad2025Page() {
  return (
    <PageRenderer
      path={path}
      title="Dr Prahlad Singh Honored Amar Ujala Samwad 2025"
      description="Sample content for Dr Prahlad Singh Honored Amar Ujala Samwad 2025 will be added soon."
    />
  );
}
