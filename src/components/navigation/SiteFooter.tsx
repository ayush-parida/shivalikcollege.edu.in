import Link from "next/link";

const footerLinkGroups = [
    {
        title: "Academics",
        links: [
            {
                label: "Shivalik College of Engineering",
                href: "/college/shivalik-college-of-engineering",
            },
            {
                label: "College of Pharmacy",
                href: "/college/college-of-pharmacy",
            },
            {
                label: "B.Sc (Hons) Agriculture",
                href: "/course/shivalik-college-of-engineering/b-sc-agriculture",
            },
            {
                label: "Management & Commerce",
                href: "/course/academics/shivalik-institute-of-professional-studies/management",
            },
        ],
    },
    {
        title: "Admissions & Careers",
        links: [
            { label: "Apply Online", href: "/admissions/apply-online" },
            { label: "Download Prospectus", href: "/prospectus" },
            { label: "Fee Structure", href: "/fee-structure" },
            { label: "Scholarships", href: "/scholarship" },
            { label: "Career Development Cell", href: "/placement/about-dotp-overview" },
        ],
    },
    {
        title: "Quality & Compliance",
        links: [
            { label: "IQAC", href: "/quality-cell" },
            { label: "NAAC A+", href: "/quality-cell/iqac-shivalik-college-of-engineering/naac-a-college" },
            { label: "NIRF", href: "/nirf" },
            { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
        ],
    },
];

const footerOtherLinks = [
    { label: "T.A.P Portal", href: "https://tap.shivalikcollege.edu.in/" },
    { label: "Pay Fees", href: "https://erp.shivalikcollege.edu.in/" },
    { label: "Examinations @ SCE", href: "/examinations" },
    { label: "ERP Login", href: "https://erp.shivalikcollege.edu.in/" },
    { label: "Alumni Network", href: "https://alumni.shivalikcollege.edu.in/" },
    { label: "College Tour", href: "/college-tour" },
];

const complianceLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
];

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 bg-[var(--brand-secondary)] text-white">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-6">
                    <div className="space-y-4 lg:col-span-2">
                        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                            Shivalik College of Engineering
                        </p>
                        <p className="text-lg font-bold leading-snug">
                            NAAC A+ | AICTE & PCI Approved | 17+ Years of Future-ready Education in Dehradun
                        </p>
                        <p className="text-sm text-white/80">
                            NH-72, Shimla Bypass Road, Dehradun, Uttarakhand – 248197
                        </p>
                        <div className="text-sm text-white/80">
                            <p>Admissions Helpdesk: +91 9997155111</p>
                            <p>info@shivalikcollege.edu.in</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="https://admissions.shivalikcollege.edu.in/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[var(--brand-secondary)] shadow-md"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="https://shivalikcollege.edu.in/contact-us/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-white/50 px-5 py-2 text-sm font-semibold text-white"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    {footerLinkGroups.map((group) => (
                        <div key={group.title} className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                {group.title}
                            </p>
                            <ul className="space-y-2 text-sm text-white/80">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                            Other Links
                        </p>
                        <ul className="space-y-2 text-sm text-white/80">
                            {footerOtherLinks.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith("http") ? (
                                        <Link
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <Link href={link.href} className="transition-colors hover:text-white">
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/70">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p>© {currentYear} Shivalik College of Engineering. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4">
                            {complianceLinks.map((link) => (
                                <Link key={link.label} href={link.href} className="hover:text-white">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
