import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/cse-it-after-2022";

export const metadata: Metadata = {
  title: "Cse It After 2022 | Shivalik College of Engineering",
  description: "Sample overview for Cse It After 2022 at Shivalik College of Engineering.",
};

export default function CseItAfter2022Page() {
  return (
    <PageRenderer
      path={path}
      title="Cse It After 2022"
      description="Sample content for Cse It After 2022 will be added soon."
    />
  );
}
