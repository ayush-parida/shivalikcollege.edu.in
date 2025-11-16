export type ContentSection =
    | {
        type: "richText";
        title?: string;
        eyebrow?: string;
        paragraphs: string[];
    }
    | {
        type: "list";
        title: string;
        intro?: string;
        items: string[];
        columns?: 1 | 2 | 3;
    }
    | {
        type: "cards";
        title: string;
        cards: { title: string; description: string }[];
    }
    | {
        type: "table";
        title: string;
        headers: string[];
        rows: string[][];
        footnote?: string;
    }
    | {
        type: "faq";
        title: string;
        items: { question: string; answer: string }[];
    }
    | {
        type: "links";
        title: string;
        links: { label: string; href: string }[];
        columns?: 1 | 2 | 3;
    }
    | {
        type: "media";
        title?: string;
        images: { src: string; alt: string; caption?: string }[];
    };

export type HeroContent = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    description: string;
    highlights?: { label: string; value: string; subtext?: string }[];
    actions?: { label: string; href: string; variant?: "primary" | "secondary" }[];
    media?: { src: string; alt: string };
};

export type QuickFact = {
    label: string;
    value: string;
};

export type PageContent = {
    hero: HeroContent;
    quickFacts?: QuickFact[];
    sections: ContentSection[];
    sidebar?: { title: string; links: { label: string; href: string }[] }[];
};

export const engineeringQuickLinks: { label: string; href: string }[] = [
    { label: "Apply Online", href: "/admissions/apply-online" },
    { label: "Campus Virtual Tour", href: "/visit-us" },
    {
        label: "Grievance Redressal Committee",
        href: "/quality-cell/iqac-shivalik-college-of-engineering/committees/grievance-redressal-committee-grc",
    },
    { label: "Committee Member", href: "/committee-member" },
    { label: "Mechanism of GRC", href: "/mechanism-of-grc" },
    { label: "Student Satisfaction Survey", href: "https://forms.gle/w2S629Tj4iRmTYKH8" },
    { label: "Guest Lecture", href: "/guestlecture" },
    { label: "Fee Structure 2025", href: "/fee-structure" },
    { label: "RTI", href: "https://shivalikcollege.edu.in/wp-content/uploads/2025/08/RTI.pdf" },
    { label: "Ideathon Registration", href: "/ideathon" },
];

export const engineeringOtherQuickLinks: { label: string; href: string }[] = [
    { label: "Affiliation & Approvals", href: "/about-us/affiliation-approvals" },
    { label: "Admission Process", href: "/admission-process" },
    { label: "Student Clubs", href: "/student-resources/student-clubs" },
    { label: "Career Form", href: "/careers-form" },
    { label: "General Grievance Redressal Committee", href: "/general-grievance-redressal-committee" },
    { label: "Alumni Association", href: "https://alumni.shivalikcollege.edu.in/" },
    { label: "NIRF (SCE)", href: "/quality-cell/iqac-shivalik-college-of-engineering/nirf" },
    { label: "NAAC A+", href: "/quality-cell/iqac-shivalik-college-of-engineering/naac-a-college" },
    { label: "Academic Calendar", href: "/academic-calendar" },
];

export const engineeringCourseLinks: { label: string; href: string }[] = [
    {
        label: "B.Tech Civil Engineering",
        href: "/course/shivalik-college-of-engineering/civil-engineering/b-tech-civil-engineering",
    },
    {
        label: "B.Tech Computer Science & Engineering",
        href: "/course/academics/shivalik-college-of-engineering/computer-science-engineering/b-tech-computer-science-engineering",
    },
    { label: "B.Tech CSE (AI & ML)", href: "/course/shivalik-college-of-engineering/b-tech-aiml" },
    { label: "B.Tech ++", href: "/course/shivalik-college-of-engineering/engineering-college" },
    { label: "B.Tech Data Science", href: "/course/shivalik-college-of-engineering/b-tech-data-science" },
    {
        label: "B.Tech Mechanical Engineering",
        href: "/course/shivalik-college-of-engineering/mechanical-engineering/b-tech-mechanical-engineering",
    },
    {
        label: "B.Tech Electronics & Communication",
        href: "/course/shivalik-college-of-engineering/electronics-and-communication-engineering/b-tech-electronics-and-communication-engineering",
    },
    { label: "MBA", href: "/course/shivalik-college-of-engineering/mba" },
    { label: "BCA", href: "/course/shivalik-college-of-engineering/bca/bca-college-in-dehradun" },
    { label: "B.Pharm", href: "/course/academics/shivalik-college-of-pharmacy/b-pharm" },
    { label: "B.Sc (Hons) Agriculture", href: "/course/shivalik-college-of-engineering/b-sc-agriculture" },
    { label: "D.Pharm", href: "/course/academics/shivalik-college-of-pharmacy/d-pharm" },
    { label: "BBA", href: "/course/shivalik-college-of-engineering/bba/bachelor-of-business-administration" },
];

export const engineeringContactLinks: { label: string; href: string }[] = [
    {
        label: "Campus Address: Shimla Bypass Rd, Shiniwala, Sherpur, Dehradun 248197",
        href: "/contact-us",
    },
    { label: "+91 9997155111", href: "tel:+919997155111" },
    { label: "info@shivalikcollege.edu.in", href: "mailto:info@shivalikcollege.edu.in" },
    { label: "Facebook", href: "https://www.facebook.com/shivalikcollegeofficial/" },
    { label: "Instagram", href: "https://www.instagram.com/shivalikcollegeofficial/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/school/shivalikcollegeofficial/" },
    { label: "YouTube", href: "https://www.youtube.com/c/ShivalikCollegeOfficial" },
];

export const engineeringSidebar: { title: string; links: { label: string; href: string }[] }[] = [
    { title: "Quick Links", links: engineeringQuickLinks },
    { title: "Other Quick Links", links: engineeringOtherQuickLinks },
    { title: "Courses Offered", links: engineeringCourseLinks },
    { title: "Contact", links: engineeringContactLinks },
];

export const pageContentRegistry: Record<string, PageContent> = {
    "/college/shivalik-college-of-engineering/quality-policy-objective": {
        hero: {
            eyebrow: "Quality Assurance",
            title: "Quality Policy & Objectives",
            subtitle: "Shivalik College of Engineering",
            description:
                "Shivalik College of Engineering (SCE) is dedicated to coalescing modern learning with innovative teaching platforms, finest online resources, value added courses and world-class campus facilities.",
            media: {
                src: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/shivalik_inner_banner.png",
                alt: "Shivalik College of Engineering quality policy banner",
            },
            actions: [
                { label: "Apply Online", href: "/admissions/apply-online" },
                {
                    label: "Visit IQAC Portal",
                    href: "/quality-cell/iqac-shivalik-college-of-engineering/about-iqac-sce",
                    variant: "secondary",
                },
            ],
            highlights: [
                { label: "NAAC Status", value: "A+ Accredited" },
                { label: "NBA Program", value: "CSE" },
                { label: "Approach", value: "Total Quality Management" },
                { label: "Stakeholder Focus", value: "Students & Community" },
            ],
        },
        sections: [
            {
                type: "richText",
                title: "Quality Policy",
                paragraphs: [
                    "Shivalik College of Engineering (SCE) is dedicated to coalescing modern learning with innovative teaching platforms, finest online resources, value added courses and world-class campus facilities.",
                    "Our modern approach to study and globally recognised degrees focuses on immersive learning, entrepreneurship acumen and quality teaching from practising professionals.",
                ],
            },
            {
                type: "list",
                title: "Quality Objectives",
                intro:
                    "SCE is committed to achieve stakeholder satisfaction by providing technical education across different streams, inculcating leadership qualities, and consistently using modern teaching processes with contemporary learning aids.",
                items: [
                    "O1 — To become dynamic, vibrant, demand driven, quality conscious, efficient, forward looking and responsive to rapid economic and technological development occurring at the national and international level so as to offer instructions in Science and Engineering comparable to the best anywhere in the world.",
                    "O2 — To strive for Total Quality Management in order to have quality faculty producing quality students with unmatchable prowess in their technical or managerial domains and strong cultural values.",
                    "O3 — To prepare students for lifelong learning abilities with sustained growth in leadership.",
                ],
            },
            {
                type: "richText",
                title: "Continuous Improvement",
                paragraphs: [
                    "Our goal is to exceed stakeholder expectations by implementing a robust Quality Management System that delivers the best value for students’ time and investment.",
                    "Shivalik College of Engineering strives for continual improvement in meeting statutory and regulatory requirements on time while nurturing a culture of innovation, cooperation, and accountability.",
                ],
            },
        ],
        sidebar: engineeringSidebar,
    },
    "/college/shivalik-college-of-engineering/leadership": {
        hero: {
            eyebrow: "Academic Leadership",
            title: "Leadership",
            subtitle: "Guiding every engineering journey",
            description:
                "Performance-driven, versatile leadership with over 25 years of experience across Mechanical Engineering, Machine Design, Industrial Tribology, and CAD/CAM, honoured with the 2021 Golden AIM Best Principal Award.",
            media: {
                src: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/Director.jpg",
                alt: "Leadership portrait at Shivalik College of Engineering",
            },
            actions: [
                { label: "Message from the Principal", href: "/leaders/message-by-principal" },
                {
                    label: "Explore Programmes",
                    href: "/college/shivalik-college-of-engineering/programmes",
                    variant: "secondary",
                },
            ],
            highlights: [
                { label: "Experience", value: "25+ Years" },
                { label: "Recognition", value: "Best Principal 2021" },
                { label: "Expertise", value: "Machine Design & Tribology" },
                { label: "Alma Mater", value: "IIT BHU & IIT Delhi" },
            ],
        },
        quickFacts: [
            { label: "Teaching Tenure", value: "25+ years" },
            { label: "Core Discipline", value: "Mechanical Engineering" },
            { label: "Professional Bodies", value: "IEI & LMISTE" },
            { label: "Award", value: "Golden AIM Best Principal" },
        ],
        sections: [
            {
                type: "richText",
                title: "Leadership Profile",
                paragraphs: [
                    "Performance-driven, versatile leadership with expertise spanning Mechanical Engineering, Machine Design, Industrial Tribology, and computer-aided design and drafting has shaped the academic direction of SCE.",
                    "The Principal has served as Dean and Head across universities and engineering colleges, earned an M.Tech in Machine Design from IIT BHU and a Ph.D from IIT Delhi, received the Golden AIM Best Principal Award in 2021, and is a life member of The Institution of Engineers (India) and the Society of Technical Education (LMISTE).",
                ],
            },
            {
                type: "richText",
                title: "Our Leadership Philosophy",
                paragraphs: [
                    "At Shivalik College, we believe that there’s an enormous obligation on our shoulders as educators of the modern world. Guiding students toward a successful career deepens our understanding of the true meaning of education.",
                    "We focus on honing the insight of our students so they can accomplish their life objectives, instilling a positive value system that shapes their outlook and helps them tackle life’s challenges.",
                    "Quality education provides the opportunity to live meaningfully, contribute to loved ones, and bring prosperity to society. Beyond core subjects, we offer courses on character development and interpersonal abilities delivered by experienced mentors.",
                    "Within our state-of-the-art campus, well-planned infrastructure, workshops, and research facilities empower future leaders to make a difference. We continually explore new frontiers for our students to ensure an enriching experience.",
                ],
            },
            {
                type: "links",
                title: "Leadership Resources",
                columns: 2,
                links: [
                    { label: "Message from the Chairman", href: "/leaders/message-by-chairman" },
                    { label: "Message from the Vice Chairman", href: "/leaders/message-by-vice-chairman" },
                    { label: "Message from the Principal", href: "/leaders/message-by-principal" },
                    { label: "Director of Admission", href: "/leaders/director-admission" },
                    { label: "Administrative Leaders", href: "/administrative-leader" },
                    { label: "Advisory Board", href: "/about-us/advisory-board" },
                ],
            },
        ],
        sidebar: engineeringSidebar,
    },
};
