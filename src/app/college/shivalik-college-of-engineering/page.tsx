import type { Metadata } from "next";

import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-college-of-engineering";

export const metadata: Metadata = {
    title: "Shivalik College of Engineering",
    description: "Discover programs, leadership, and quality initiatives at Shivalik College of Engineering.",
};

export default function ShivalikCollegeOfEngineeringPage() {
    return (
        <PageRenderer
            path={path}
            title="College Overview"
            description="Custom content for Shivalik College of Engineering will appear here."
        />
    );
}
