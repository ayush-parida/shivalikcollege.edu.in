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
    { label: "About Us", href: "#about" },
    { label: "Blogs", href: "#blogs" },
    { label: "Students", href: "#students" },
    { label: "Alumni", href: "#alumni" },
    { label: "Contact Us", href: "#contact" },
];

export const mainNavItems: MainNavItem[] = [
    {
        id: "academics",
        label: "Academics",
        type: "dropdown",
        summary: "Schools, departments, and innovative curricula across the university.",
        children: [
            {
                label: "Schools & Faculties",
                children: [
                    {
                        label: "School of Engineering & Technology",
                        description: "Industry-aligned engineering programs.",
                        children: [
                            { label: "Computer Science & Engineering (B.Tech)", href: "#cse" },
                            { label: "Mechanical Engineering (B.Tech)", href: "#me" },
                            { label: "Civil Engineering (B.Tech)", href: "#ce" },
                        ],
                    },
                    {
                        label: "School of Health Sciences",
                        description: "Cutting-edge healthcare learning paths.",
                        children: [
                            { label: "Nursing (B.Sc)", href: "#nursing" },
                            { label: "Physiotherapy (BPT)", href: "#bpt" },
                            { label: "Medical Lab Technology (BMLT)", href: "#bmlt" },
                        ],
                    },
                    {
                        label: "School of Management & Commerce",
                        description: "Leadership training for new-age managers.",
                        children: [
                            { label: "Master of Business Administration", href: "#mba" },
                            { label: "BBA (Entrepreneurship)", href: "#bba" },
                            { label: "B.Com (Hons)", href: "#bcom" },
                        ],
                    },
                ],
            },
            {
                label: "Academic Support",
                children: [
                    {
                        label: "Dean Academics Desk",
                        href: "#dean",
                    },
                    {
                        label: "Outcome Based Education",
                        children: [
                            { label: "Curriculum Design Studio", href: "#curriculum-design" },
                            { label: "Pedagogical Innovation Lab", href: "#pedagogy" },
                        ],
                    },
                    {
                        label: "Academic Resources",
                        children: [
                            { label: "Digital Library", href: "#library" },
                            { label: "Mentoring Circles", href: "#mentoring" },
                        ],
                    },
                ],
            },
            {
                label: "Centers of Excellence",
                children: [
                    {
                        label: "AI & Robotics Center",
                        children: [
                            { label: "Collaborative Research Groups", href: "#ai-collab" },
                            { label: "Robotics Test Bed", href: "#robotics" },
                        ],
                    },
                    {
                        label: "Sustainable Infrastructure Lab",
                        children: [
                            { label: "Green Building Studio", href: "#green-building" },
                            { label: "Smart Mobility Lab", href: "#smart-mobility" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "admissions",
        label: "Admissions",
        type: "dropdown",
        summary: "Guidance for domestic and international applicants.",
        children: [
            {
                label: "Apply",
                children: [
                    { label: "Undergraduate", href: "#ug-admissions" },
                    { label: "Postgraduate", href: "#pg-admissions" },
                    { label: "International", href: "#intl-admissions" },
                ],
            },
            {
                label: "Plan Your Journey",
                children: [
                    { label: "Fee Structure", href: "#fees" },
                    { label: "Scholarships", href: "#scholarships" },
                    { label: "Financial Aid", href: "#financial-aid" },
                ],
            },
            {
                label: "Need Support?",
                children: [
                    { label: "Chat with Counselors", href: "#counselors" },
                    { label: "Download Prospectus", href: "#prospectus" },
                ],
            },
        ],
    },
    {
        id: "placement",
        label: "Placement",
        type: "dropdown",
        summary: "Career readiness initiatives and recruiter partnerships.",
        children: [
            {
                label: "Career Support",
                children: [
                    { label: "Placement Cell", href: "#placement-cell" },
                    { label: "Skill Accelerator", href: "#skill-accelerator" },
                    { label: "Internship Network", href: "#internships" },
                ],
            },
            {
                label: "Recruiters",
                children: [
                    { label: "Top Recruiters", href: "#top-recruiters" },
                    { label: "Schedule a Drive", href: "#schedule-drive" },
                ],
            },
        ],
    },
    {
        id: "campus",
        label: "Campus",
        type: "dropdown",
        summary: "Life at Shivalik across academics, sports, and community.",
        children: [
            {
                label: "Explore",
                children: [
                    { label: "Smart Classrooms", href: "#smart-classrooms" },
                    { label: "Innovation Studios", href: "#innovation-studio" },
                    { label: "Hostels & Residences", href: "#hostel" },
                ],
            },
            {
                label: "Engage",
                children: [
                    { label: "Student Clubs", href: "#clubs" },
                    { label: "Sports & Wellness", href: "#sports" },
                    { label: "Community Outreach", href: "#community" },
                ],
            },
        ],
    },
    {
        id: "research",
        label: "Research",
        type: "dropdown",
        summary: "Flagship labs, grants, and publications.",
        children: [
            {
                label: "Innovation",
                children: [
                    { label: "Grant Opportunities", href: "#grants" },
                    { label: "Incubation Support", href: "#incubation" },
                ],
            },
            {
                label: "Showcase",
                children: [
                    { label: "Publications", href: "#publications" },
                    { label: "Patents", href: "#patents" },
                    { label: "Faculty Highlights", href: "#faculty" },
                ],
            },
        ],
    },
    {
        id: "iqac",
        label: "IQAC",
        type: "dropdown",
        summary: "Quality assurance, policies, and periodic reviews.",
        children: [
            {
                label: "Quality Systems",
                children: [
                    { label: "Policies & Manuals", href: "#policies" },
                    { label: "NAAC Reports", href: "#naac" },
                ],
            },
            {
                label: "Engagement",
                children: [
                    { label: "Internal Audits", href: "#audits" },
                    { label: "Stakeholder Feedback", href: "#feedback" },
                ],
            },
        ],
    },
    {
        id: "cbii",
        label: "CBII/iHUB",
        type: "link",
        href: "#cbii",
        summary: "Innovation hub for incubation and entrepreneurship.",
    },
    {
        id: "apply",
        label: "Apply Now",
        type: "button",
        href: "#apply",
    },
];
