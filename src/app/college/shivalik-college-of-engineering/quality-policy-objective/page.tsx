import type { Metadata } from "next";

import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-college-of-engineering/quality-policy-objective";

export const metadata: Metadata = {
    title: "Quality Policy & Objectives | Shivalik College of Engineering",
    description:
        "Learn how Shivalik College of Engineering embeds NAAC A+ standards, NBA benchmarks, and Total Quality Management practices across every academic experience.",
};

export default function QualityPolicyObjectivePage() {
    return (
        <PageRenderer
            path={path}
            title="Quality Policy & Objectives"
            description="Discover how SCE’s continuous improvement framework safeguards outcomes for every stakeholder."
        />
    );
}
