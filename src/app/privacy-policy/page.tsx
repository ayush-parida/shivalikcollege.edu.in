import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/privacy-policy";

export const metadata: Metadata = {
    title: "Privacy Policy | Shivalik College of Engineering",
    description: "Sample overview for the institution's privacy practices and data handling.",
};

export default function PrivacyPolicyPage() {
    return (
        <PageRenderer
            path={path}
            title="Privacy Policy"
            description="The comprehensive privacy statement covering data collection, storage, and usage will appear here."
        />
    );
}
