import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";
import { engineeringSidebar } from "@/data/pageContent";
import type { PageContent } from "@/data/pageContent";

const path = "/about-us";

export const metadata: Metadata = {
  title: "About Us | Shivalik College of Engineering",
  description:
    "Explore leadership messages, governing bodies, strategic plans, and IQAC documentation that define Shivalik College of Engineering.",
};

const content: PageContent = {
  hero: {
    eyebrow: "Institutional Overview",
    title: "About Shivalik College",
    subtitle: "Best Engineering College in Dehradun",
    description:
      "The Shivalik College of Engineering strives to be a vital community for academics, students, staff, alumni, and researchers, working together in a symbiotic spirit of cooperation, innovation, and enterprise for a better world.",
    media: {
      src: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/shivalik_inner_banner.png",
      alt: "Shivalik College campus banner",
    },
    actions: [
      {
        label: "Register Now 2025",
        href: "https://admissions.shivalikcollege.edu.in/?_gl=1*1ivfo5v*_gcl_au*MTUwODU4NjU2My4xNzM4ODIxMjc3",
      },
      {
        label: "Admission Enquiry",
        href: "/admissions/apply-online",
        variant: "secondary",
      },
    ],
    highlights: [
      { label: "NAAC Accreditation", value: "A+ Grade" },
      { label: "NBA Programme", value: "CSE" },
      { label: "IQAC Coverage", value: "SCE • Pharmacy • SIPS" },
      { label: "Campus", value: "Dehradun, Uttarakhand" },
    ],
  },
  quickFacts: [
    { label: "Admissions", value: "Register 2025" },
    { label: "Phone", value: "+91 9997155111" },
    { label: "Email", value: "info@shivalikcollege.edu.in" },
    { label: "ERP Login", value: "erp.shivalikcollege.edu.in" },
  ],
  sections: [
    {
      type: "richText",
      title: "Our institutional ethos",
      paragraphs: [
        "The About Us hub on shivalikcollege.edu.in consolidates leadership updates, governing-body information, strategic plans, IQAC documentation, and student-facing quick links so stakeholders can easily access policy documents, accreditation artefacts, and campus services.",
        "Use the curated sections below to jump directly to the Finance Committee, Strategic Plan dashboards, leadership messages, or quality frameworks highlighted on the live site.",
      ],
    },
    {
      type: "list",
      title: "What you'll find inside",
      intro: "Every tile below mirrors an information cluster from the live site so visitors can self-navigate with minimal friction.",
      columns: 2,
      items: [
        "Leadership insights that articulate the college's vision, mission, and admissions priorities",
        "Governing-body resolutions, meeting minutes, and statutory compliance artefacts",
        "IQAC documentation covering SCE, Pharmacy, and SIPS with transparent composition details",
        "Strategic-plan dashboards plus annual reports that align academic calendars with industry needs",
      ],
    },
    {
      type: "cards",
      title: "Leadership spotlights",
      cards: [
        {
          title: "Chairman's message",
          description: "Guidance focused on building a community of innovators with a culture of ethical leadership and lifelong learning.",
        },
        {
          title: "Vice Chairman & Principal",
          description: "Academic roadmaps that blend competency-based curricula with project-driven assessment across departments.",
        },
        {
          title: "Director of Admissions",
          description: "Admission pathways, scholarship outreach, and personalised counselling for 2025 intake and lateral entries.",
        },
        {
          title: "Administrative leaders",
          description: "Operational teams managing exams, ERP, student welfare, and campus services with transparent escalation points.",
        },
      ],
    },
    {
      type: "links",
      title: "Governing Bodies",
      links: [
        { label: "Finance Committee", href: "/about-us/governing-bodies/finance-committee" },
        { label: "Proctoral Board", href: "/about-us/governing-bodies/proctoral-board" },
      ],
      columns: 2,
    },
    {
      type: "links",
      title: "Strategic Plan & SIPS",
      links: [
        { label: "SCE Strategic Plan", href: "/about-us/strategic-plan/sce" },
        { label: "SIPS Plan", href: "/about-us/strategic-plan/sips" },
        { label: "SIPS Examinations", href: "/about-us/strategic-plan/sips/examinations" },
        { label: "SIPS Academic Calendar", href: "/about-us/strategic-plan/sips/academic-celander" },
      ],
      columns: 2,
    },
    {
      type: "links",
      title: "Shivalik College",
      links: [
        { label: "Why Shivalik College", href: "/about-us/shivalik-college/why-shivalik-college" },
        { label: "About Shivalik", href: "/about-us/shivalik-college/why-shivalik-college/about-shivalik" },
        { label: "Legacy", href: "/about-us/shivalik-college/why-shivalik-college/legacy" },
        { label: "Vision & Mission", href: "/college/shivalik-college-of-engineering/vision-mission" },
      ],
      columns: 2,
    },
    {
      type: "links",
      title: "Leadership",
      links: [
        { label: "Message by Chairman", href: "/leaders/message-by-chairman" },
        { label: "Message by Vice Chairman", href: "/leaders/message-by-vice-chairman" },
        { label: "Message by Principal", href: "/leaders/message-by-principal" },
        { label: "Director of Admission", href: "/leaders/director-admission" },
        { label: "Administrative Leaders", href: "/administrative-leader" },
      ],
      columns: 2,
    },
    {
      type: "links",
      title: "Institutional Resources",
      links: [
        { label: "Advisory Board", href: "/about-us/advisory-board" },
        { label: "Affiliation & Approvals", href: "/about-us/affiliation-approvals" },
        { label: "Collaborations", href: "/about-us/collaborations" },
        { label: "Award & Achievements", href: "/about-us/award-recognition" },
        { label: "Organogram", href: "/about-us/organogram-2" },
        { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
        {
          label: "Faculty/Student Feedback",
          href: "https://www.aicte-india.org/feedback/index.php?cmsid=127&tag=Feedback",
        },
        { label: "College Tour", href: "/college-tour" },
      ],
      columns: 2,
    },
    {
      type: "links",
      title: "Quality & IQAC",
      links: [
        {
          label: "IQAC – Shivalik College of Engineering",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/about-iqac-sce",
        },
        { label: "IQAC SCE Composition", href: "/quality-cell/iqac-shivalik-college-of-engineering/iqac-sce-composition" },
        { label: "NAAC A+", href: "/quality-cell/iqac-shivalik-college-of-engineering/naac-a-college" },
        { label: "NBA CSE", href: "/quality-cell/nba-shivalikcollege" },
        { label: "NIRF", href: "/nirf" },
        { label: "Meeting Minutes", href: "/quality-cell/iqac-shivalik-college-of-engineering/meeting-minutes" },
        {
          label: "Stake Holder Feedback – SCE",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/stake-holder-feedback-sce",
        },
        { label: "ICT Enabled Classroom", href: "/iqac-sce-2/ict-enabled-classroom" },
        { label: "Best Practices", href: "/quality-cell/iqac-shivalik-college-of-engineering/best-practices" },
        {
          label: "Institution Performance",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/institution-performance",
        },
        {
          label: "Code of Conduct (Staff)",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/code-of-conduct-staff",
        },
        {
          label: "Code of Conduct (Students)",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/code-of-conduct-students",
        },
        {
          label: "Disabled-Friendly Campus",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/disabled-friendly-barrier-free-campus",
        },
        {
          label: "Environmental Initiative",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/iqac-initiatives/environmental-initiative",
        },
      ],
      columns: 2,
    },
    {
      type: "links",
      title: "Committees & Compliance",
      links: [
        {
          label: "Anti Ragging Committee",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/committees/anti-ragging-committee",
        },
        { label: "SC/ST Committee", href: "/quality-cell/iqac-shivalik-college-of-engineering/committees/sc-st-committee" },
        {
          label: "Grievance Redressal Committee",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/committees/grievance-redressal-committee-grc",
        },
        {
          label: "Internal Complaints Committee",
          href: "/quality-cell/iqac-shivalik-college-of-engineering/committees/icc",
        },
        { label: "Academic Calendar (SCE)", href: "/academic-calendar" },
        { label: "Gender Sensitization Cell", href: "/gender-sensitization-cell" },
      ],
      columns: 2,
    },
    {
      type: "links",
      title: "IQAC – College of Pharmacy",
      links: [
        {
          label: "About IQAC, Pharmacy",
          href: "/quality-cell/iqac-college-of-pharmacy/about-iqac-pharmacy",
        },
        { label: "IQAC Pharmacy Composition", href: "/quality-cell/iqac-college-of-pharmacy/iqac-pharmacy-composition" },
        { label: "Value Added Courses", href: "/quality-cell/iqac-college-of-pharmacy/value-added-courses" },
        { label: "Meeting Minutes", href: "/quality-cell/iqac-college-of-pharmacy/meeting-minutes" },
        { label: "NIRF (Pharmacy)", href: "/quality-cell/iqac-college-of-pharmacy/nirf" },
        {
          label: "Stake Holder Feedback – Pharmacy",
          href: "/quality-cell/iqac-college-of-pharmacy/stake-holder-feedback-pharmacy",
        },
        {
          label: "Action Taken Reports – Pharmacy",
          href: "/quality-cell/iqac-college-of-pharmacy/action-taken-reports-pharmacy",
        },
        { label: "Annual Report – Pharmacy", href: "/quality-cell/iqac-college-of-pharmacy/annual-report-pharmacy" },
        { label: "Contact IQAC Pharmacy", href: "/icedet-2023/contact-us" },
      ],
      columns: 3,
    },
    {
      type: "links",
      title: "IQAC – SIPS",
      links: [
        {
          label: "About IQAC, SIPS",
          href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/about-iqac-sips",
        },
        {
          label: "Stake Holder Feedback – SIPS",
          href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/stake-holder-feedback-sips",
        },
        {
          label: "IQAC SIPS Composition",
          href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/iqac-sips-composition",
        },
        {
          label: "Action Taken Reports – SIPS",
          href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/action-taken-reports-sips",
        },
        {
          label: "Committees",
          href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/committees",
        },
        {
          label: "Value Added Courses",
          href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/value-added-courses",
        },
        { label: "NIRF (SIPS)", href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/nirf" },
        { label: "Best Practices", href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/best-practices" },
        { label: "Annual Report – SIPS", href: "/quality-cell/iqac-shivalik-institute-of-professional-studies/annual-report-sips" },
      ],
      columns: 3,
    },
    {
      type: "table",
      title: "Quality frameworks at a glance",
      headers: ["Framework", "Focus", "Key Artefacts"],
      rows: [
        [
          "IQAC",
          "Continuous quality benchmarks across SCE, Pharmacy, and SIPS",
          "Composition, minutes, stakeholder feedback, annual performance reports",
        ],
        [
          "NAAC & NBA",
          "External accreditation and programme outcomes",
          "NAAC A+ certificate, NBA Computer Science documentation",
        ],
        [
          "NIRF",
          "National ranking submissions",
          "Year-wise NIRF reports with metric justifications",
        ],
        [
          "Statutory Committees",
          "Compliance, student safety, and redressal",
          "Anti-ragging, SC/ST cell, Gender sensitisation, ICC mandates",
        ],
      ],
      footnote: "Use the links above to access downloadable PDFs, meeting records, and regulatory filings for each framework.",
    },
    {
      type: "faq",
      title: "Quick answers",
      items: [
        {
          question: "Where can I download governance documents?",
          answer: "The Governing Bodies and Committees sections host scanned PDFs, TOR documents, and policy circulars. Each link opens either an internal page or an authenticated ERP download as per the live site.",
        },
        {
          question: "How often is the Strategic Plan updated?",
          answer: "SCE and SIPS plans are reviewed annually with dashboards reflecting measurable KPIs; interim updates are added whenever IQAC publishes additional action-taken reports.",
        },
        {
          question: "Who should I contact for IQAC queries?",
          answer: "Each IQAC sub-site lists its coordinator and contact information, while the main IQAC section maintains a general inbox for cross-campus initiatives.",
        },
      ],
    },
  ],
  sidebar: engineeringSidebar,
};

export default function AboutUsPage() {
  return <PageRenderer path={path} content={content} />;
}
