import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/b-sc-agriculture-future-scope-and-career-opportunities";

export const metadata: Metadata = {
  title: "B Sc Agriculture Future Scope And Career Opportunities | Shivalik College of Engineering",
  description: "Sample overview for B Sc Agriculture Future Scope And Career Opportunities at Shivalik College of Engineering.",
};

export default function BScAgricultureFutureScopeAndCareerOpportunitiesPage() {
  return (
    <PageRenderer
      path={path}
      title="B Sc Agriculture Future Scope And Career Opportunities"
      description="Sample content for B Sc Agriculture Future Scope And Career Opportunities will be added soon."
    />
  );
}
