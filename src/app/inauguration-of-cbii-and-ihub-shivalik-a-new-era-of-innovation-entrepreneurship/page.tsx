import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/inauguration-of-cbii-and-ihub-shivalik-a-new-era-of-innovation-entrepreneurship";

export const metadata: Metadata = {
  title: "Inauguration Of CBII And iHUB Shivalik A New Era Of Innovation Entrepreneurship | Shivalik College of Engineering",
  description: "Sample overview for Inauguration Of CBII And iHUB Shivalik A New Era Of Innovation Entrepreneurship at Shivalik College of Engineering.",
};

export default function InaugurationOfCbiiAndIhubShivalikANewEraOfInnovationEntrepreneurshipPage() {
  return (
    <PageRenderer
      path={path}
      title="Inauguration Of CBII And iHUB Shivalik A New Era Of Innovation Entrepreneurship"
      description="Sample content for Inauguration Of CBII And iHUB Shivalik A New Era Of Innovation Entrepreneurship will be added soon."
    />
  );
}
