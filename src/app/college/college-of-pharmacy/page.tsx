import type { Metadata } from "next";

import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/college-of-pharmacy";

export const metadata: Metadata = {
    title: "College of Pharmacy",
    description: "Official overview of Shivalik College of Pharmacy programs and facilities.",
};

export default function CollegeOfPharmacyPage() {
    return (
        <PageRenderer
            path={path}
            title="College Overview"
            description="Detailed College of Pharmacy content will be rendered here."
        />
    );
}
