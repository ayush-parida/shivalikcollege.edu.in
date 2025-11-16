import type { Metadata } from "next";

import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/course/academics/shivalik-college-of-pharmacy/d-pharm";

export const metadata: Metadata = {
    title: "D.Pharm at Shivalik College of Pharmacy",
    description: "Two-year Diploma in Pharmacy program details, curriculum, and career outlook.",
};

export default function DPharmPage() {
    return (
        <PageRenderer
            path={path}
            title="Diploma in Pharmacy (D.Pharm)"
            description="Comprehensive D.Pharm content will load here after migration."
        />
    );
}
