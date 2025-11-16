import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/disabledfriendlycampus";

export const metadata: Metadata = {
  title: "Disabledfriendlycampus | Shivalik College of Engineering",
  description: "Sample overview for Disabledfriendlycampus at Shivalik College of Engineering.",
};

export default function DisabledfriendlycampusPage() {
  return (
    <PageRenderer
      path={path}
      title="Disabledfriendlycampus"
      description="Sample content for Disabledfriendlycampus will be added soon."
    />
  );
}
