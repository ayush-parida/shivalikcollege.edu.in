import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/cyber-security-2-0";

export const metadata: Metadata = {
  title: "Cyber Security 2 0 | Shivalik College of Engineering",
  description: "Sample overview for Cyber Security 2 0 at Shivalik College of Engineering.",
};

export default function CyberSecurity20Page() {
  return (
    <PageRenderer
      path={path}
      title="Cyber Security 2 0"
      description="Sample content for Cyber Security 2 0 will be added soon."
    />
  );
}
