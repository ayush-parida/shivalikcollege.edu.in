import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/why-should-you-choose-bba-after-the-12th";

export const metadata: Metadata = {
  title: "Why Should You Choose BBA After The 12th | Shivalik College of Engineering",
  description: "Sample overview for Why Should You Choose BBA After The 12th at Shivalik College of Engineering.",
};

export default function WhyShouldYouChooseBbaAfterThe12thPage() {
  return (
    <PageRenderer
      path={path}
      title="Why Should You Choose BBA After The 12th"
      description="Sample content for Why Should You Choose BBA After The 12th will be added soon."
    />
  );
}
