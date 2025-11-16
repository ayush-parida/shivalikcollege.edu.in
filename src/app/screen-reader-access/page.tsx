import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/screen-reader-access";

export const metadata: Metadata = {
  title: "Screen Reader Access | Shivalik College of Engineering",
  description: "Sample overview for Screen Reader Access at Shivalik College of Engineering.",
};

export default function ScreenReaderAccessPage() {
  return (
    <PageRenderer
      path={path}
      title="Screen Reader Access"
      description="Sample content for Screen Reader Access will be added soon."
    />
  );
}
