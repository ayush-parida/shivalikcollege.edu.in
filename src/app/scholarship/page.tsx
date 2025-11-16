import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/scholarship";

export const metadata: Metadata = {
    title: "Scholarship Support | Shivalik College of Engineering",
    description: "Sample overview for scholarship schemes, eligibility, and timelines.",
};

export default function ScholarshipPage() {
    return (
        <PageRenderer
            path={path}
            title="Scholarship Support"
            description="Details about institutional, state, and central scholarship schemes will be published here shortly."
        />
    );
}
