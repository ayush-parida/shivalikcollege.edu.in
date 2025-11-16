export type NavLink = {
    label: string;
    href?: string;
    description?: string;
    children?: NavLink[];
    badge?: string;
};

export type MainNavItem = {
    id: string;
    label: string;
    type: "dropdown" | "link" | "button";
    href?: string;
    summary?: string;
    badge?: string;
    children?: NavLink[];
};

export const secondaryLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Blogs", href: "/blogs" },
    { label: "Students", href: "/student-resources" },
    { label: "Alumni", href: "/alumni" },
    { label: "Contact Us", href: "/contact-us" },
];

export const mainNavItems: MainNavItem[] = [
    {
        id: "academics",
        label: "Academics",
        type: "dropdown",
        summary: "Explore colleges, academic resources, and specialized centers across the university.",
        children: [
            {
                label: "Colleges & Schools",
                children: [
                    {
                        label: "Shivalik College of Engineering",
                        description: "NAAC A+ accredited flagship engineering programs.",
                        children: [
                            { label: "Overview", href: "/college/shivalik-college-of-engineering" },
                            { label: "Leadership", href: "/college/shivalik-college-of-engineering/leadership" },
                            { label: "Quality Policy", href: "/college/shivalik-college-of-engineering/quality-policy-objective" },
                        ],
                    },
                    {
                        label: "College of Pharmacy",
                        description: "PCI-approved labs, pharmaceutics, and research pathways.",
                        children: [
                            { label: "Overview", href: "/college/college-of-pharmacy" },
                            { label: "Programs", href: "/college/college-of-pharmacy/programmes" },
                            { label: "Quality Policy", href: "/college/college-of-pharmacy/quality-policy-objective" },
                        ],
                    },
                    {
                        label: "Institute of Professional Studies",
                        description: "Management, commerce, and professional programs.",
                        children: [
                            { label: "Overview", href: "/college/shivalik-institute-of-professional-studies" },
                            { label: "Programs", href: "/college/shivalik-institute-of-professional-studies/programmes-2" },
                            { label: "Vision & Mission", href: "/college/shivalik-institute-of-professional-studies/vision-mission" },
                        ],
                    },
                ],
            },
            {
                label: "Academic Support",
                children: [
                    { label: "Academic Calendar", href: "/academic-calendar" },
                    { label: "Library & LRC", href: "/library" },
                    { label: "Examinations", href: "/examinations" },
                    { label: "Visit Campus", href: "/visit-us" },
                ],
            },
            {
                label: "Centers of Excellence",
                children: [
                    { label: "CBII / iHUB", href: "/ihub-cbii" },
                    { label: "Industry Collaborations", href: "/about-us/collaborations" },
                    { label: "Innovation & Incubation", href: "/incubation-center-at-shivalik-college-dehradun" },
                ],
            },
        ],
    },
    {
        id: "admissions",
        label: "Admissions",
        type: "dropdown",
        summary: "Guidance for prospective students across undergraduate and postgraduate programs.",
        children: [
            {
                label: "Apply",
                children: [
                    { label: "Admission Process", href: "/admission-process" },
                    { label: "Apply Online", href: "/admissions/apply-online" },
                    { label: "Application Form", href: "/application-form" },
                ],
            },
            {
                label: "Plan Your Journey",
                children: [
                    { label: "Fee Structure", href: "/fee-structure" },
                    { label: "Prospectus", href: "/prospectus" },
                    { label: "Visit Campus", href: "/college-tour" },
                ],
            },
            {
                label: "Need Support?",
                children: [
                    { label: "Counsellor Desk", href: "/administrative-leader" },
                    { label: "Contact Admissions", href: "/contact-us" },
                ],
            },
        ],
    },
    {
        id: "placement",
        label: "Placement",
        type: "dropdown",
        summary: "Career readiness initiatives, recruiter partnerships, and TAP support.",
        children: [
            {
                label: "Career Support",
                children: [
                    { label: "Placement Cell", href: "/placement" },
                    { label: "Career Development Cell", href: "/placement/about-dotp-overview" },
                    { label: "Industry Tie-ups", href: "/placement/industrytieups" },
                ],
            },
            {
                label: "Recruiters",
                children: [
                    { label: "Top Recruiters", href: "/placement/college-recruiter-partners" },
                    { label: "Placement Team", href: "/placement-2/placement-team" },
                ],
            },
        ],
    },
    {
        id: "campus",
        label: "Campus",
        type: "dropdown",
        summary: "Life at Shivalik across academics, wellness, and community engagement.",
        children: [
            {
                label: "Explore",
                children: [
                    { label: "Campus Tour", href: "/college-tour" },
                    { label: "Smart Classrooms", href: "/student-resources/student-centric-method" },
                    { label: "Hostels & Residences", href: "/student-resources/hostel" },
                ],
            },
            {
                label: "Engage",
                children: [
                    { label: "Student Clubs", href: "/student-resources/student-clubs" },
                    { label: "Sports & Wellness", href: "/student-resources/sports" },
                    { label: "NCC & NSS", href: "/student-resources/n-s-s" },
                ],
            },
        ],
    },
    {
        id: "research",
        label: "Research",
        type: "dropdown",
        summary: "Flagship labs, grants, publications, and policy guidance.",
        children: [
            {
                label: "Innovation",
                children: [
                    { label: "Funded Research", href: "/research/funded-sponsored-research" },
                    { label: "Incubation Support", href: "/incubation-center-at-shivalik-college-dehradun" },
                ],
            },
            {
                label: "Showcase",
                children: [
                    { label: "Publications", href: "/research/books-book-chapters" },
                    { label: "Patents", href: "/research/ipr-patents" },
                    { label: "Research Committee", href: "/research/research-committee" },
                ],
            },
        ],
    },
    {
        id: "iqac",
        label: "IQAC",
        type: "dropdown",
        summary: "Quality assurance systems, NAAC artefacts, and statutory disclosures.",
        children: [
            {
                label: "Quality Systems",
                children: [
                    { label: "Policies & Manuals", href: "/quality-cell/iqac-shivalik-college-of-engineering/policy" },
                    { label: "NAAC Reports", href: "/quality-cell/iqac-shivalik-college-of-engineering/naac-a-college" },
                    { label: "NIRF", href: "/nirf" },
                ],
            },
            {
                label: "Engagement",
                children: [
                    { label: "Meeting Minutes", href: "/quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes" },
                    { label: "Stakeholder Feedback", href: "/quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce" },
                    { label: "Committees & Cells", href: "/quality-cell/iqac-shivalik-college-of-engineering/committees/anti-ragging-committee" },
                ],
            },
        ],
    },
    {
        id: "cbii",
        label: "CBII/iHUB",
        type: "link",
        href: "/ihub-cbii",
        summary: "Innovation hub for incubation and entrepreneurship.",
    },
    {
        id: "apply",
        label: "Apply Now",
        type: "button",
        href: "/apply-online",
    },
];
