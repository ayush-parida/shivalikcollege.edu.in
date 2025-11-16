import type { Metadata } from "next";

import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/academics/shivalik-college-of-pharmacy/b-pharm";

export const metadata: Metadata = {
    title: "B.Pharm at Shivalik College of Pharmacy",
    description: "Four-year Bachelor of Pharmacy program structure, eligibility, and highlights.",
};

export default function BPharmPage() {
    return (
        <PageRenderer
            path={path}
            title="Bachelor of Pharmacy (B.Pharm)"
            description="Comprehensive B.Pharm content will load here after migration."
        />
    );
}
