import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/contact-us";

export const metadata: Metadata = {
  title: "Contact Us | Shivalik College of Engineering",
  description: "Sample overview for Contact Us at Shivalik College of Engineering.",
};

export default function ContactUsPage() {
  return (
    <PageRenderer
      path={path}
      title="Contact Us"
      description="Sample content for Contact Us will be added soon."
    />
  );
}
