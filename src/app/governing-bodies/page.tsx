import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/governing-bodies";

export const metadata: Metadata = {
  title: "Governing Bodies | Shivalik College of Engineering",
  description: "Sample overview for Governing Bodies at Shivalik College of Engineering.",
};

export default function GoverningBodiesPage() {
  return (
    <PageRenderer
      path={path}
      title="Governing Bodies"
      description="Sample content for Governing Bodies will be added soon."
    />
  );
}
