import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/guestlecture";

export const metadata: Metadata = {
  title: "Guestlecture | Shivalik College of Engineering",
  description: "Sample overview for Guestlecture at Shivalik College of Engineering.",
};

export default function GuestlecturePage() {
  return (
    <PageRenderer
      path={path}
      title="Guestlecture"
      description="Sample content for Guestlecture will be added soon."
    />
  );
}
