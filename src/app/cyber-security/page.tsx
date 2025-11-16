import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/cyber-security";

export const metadata: Metadata = {
  title: "Cyber Security | Shivalik College of Engineering",
  description: "Sample overview for Cyber Security at Shivalik College of Engineering.",
};

export default function CyberSecurityPage() {
  return (
    <PageRenderer
      path={path}
      title="Cyber Security"
      description="Sample content for Cyber Security will be added soon."
    />
  );
}
