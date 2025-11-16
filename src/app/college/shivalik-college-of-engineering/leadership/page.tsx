import type { Metadata } from "next";

import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/college/shivalik-college-of-engineering/leadership";

export const metadata: Metadata = {
    title: "Leadership | Shivalik College of Engineering",
    description:
        "Meet the leadership at Shivalik College of Engineering and explore the guiding philosophy that inspires faculty, staff, and students.",
};

export default function LeadershipPage() {
    return (
        <PageRenderer
            path={path}
            title="Leadership"
            description="Insights from the Principal on academic excellence, student success, and the future of engineering education."
        />
    );
}
