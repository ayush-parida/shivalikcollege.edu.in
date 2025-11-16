import type { Metadata } from "next";

import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-institute-of-professional-studies";

export const metadata: Metadata = {
    title: "Shivalik Institute of Professional Studies",
    description: "Programs, quality policy, and leadership at SIPS.",
};

export default function ShivalikInstituteOfProfessionalStudiesPage() {
    return (
        <PageRenderer
            path={path}
            title="College Overview"
            description="Detailed content for Shivalik Institute of Professional Studies will be available soon."
        />
    );
}
