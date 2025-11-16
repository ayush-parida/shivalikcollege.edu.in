import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/terms-of-use";

export const metadata: Metadata = {
    title: "Terms of Use | Shivalik College of Engineering",
    description: "Sample overview for usage guidelines, disclaimers, and acceptable use policies.",
};

export default function TermsOfUsePage() {
    return (
        <PageRenderer
            path={path}
            title="Terms of Use"
            description="Official usage guidelines, disclaimers, and user responsibilities will be detailed here."
        />
    );
}
