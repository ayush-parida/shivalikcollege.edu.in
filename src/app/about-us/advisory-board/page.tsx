import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";
import { engineeringSidebar } from "@/data/pageContent";
import type { PageContent } from "@/data/pageContent";

const path = "/about-us/advisory-board";

export const metadata: Metadata = {
  title: "About Us • Advisory Board | Shivalik College of Engineering",
  description: "The Board of Governors reviews academic, extension and financial plans to strengthen Shivalik College of Engineering.",
};

const content: PageContent = {
  hero: {
    eyebrow: "Governance",
    title: "Advisory Board",
    subtitle: "Board of Governors",
    description: "The BOG reviews the academic, extension and financial budget activities and also issued direction for further strengthening.",
    media: {
      src: "https://shivalikcollege.edu.in/wp-content/uploads/2022/11/shivalik_inner_banner.png",
      alt: "Shivalik College advisory board banner",
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
  },
  sections: [
    {
      type: "richText",
      title: "About the Board of Governors",
      paragraphs: [
        "The BOG reviews the academic, extension and financial budget activities and also issued direction for further strengthening.",
        "By engaging experienced academicians, vice chancellors and industry voices, the board ensures that Shivalik College’s policies stay aligned with national benchmarks and the needs of its community.",
      ],
    },
    {
      type: "list",
      title: "BOG Composition",
      intro: "BOG COMPOSITION IS AS FOLLOWS:",
      items: [
        "Pro. (Dr.) Akshay Dwivedi, Professor, Dept.of ME, IIT Roorkee (UK)",
        "Mr. Ajay Kumar, Secretary-Rijan Educational Society and Vice Chairman SCE",
        "Prof. (Dr.) Manoj Mishra, Professor, Dept of CSE, IIT Roorkee (UK)",
        "Mr. Sunil rai, Vice Chancellor-UPES",
        "Pro. (Dr.) Ramkaran Singh, Vice Chancellor-ICFAI University",
        "Pro. (Dr.) Raj Agnihotri, Dean’s Fellow in Marketing and Director of Professional Sales Forum (Lowa State University)",
        "Pro. (Ret.) Satya Prakash Shrivastava, Professor, (Retd.) Dept of EE, IIT Roorkee(UK)",
        "Pro. (Dr.) Millie Pant, Professor,IIT Roorkee, Saharnpur campus",
        "Pro. (Dr.) Raksha Sharma, Assistant Professor, Dept of CSE, IIT Roorkee (UK)",
        "Dr. Vishal Ramola, Professor, Dept of ECE, Uttarakhand TechnicalUniversity(UK)",
        "Pro. (Dr.) U.C. Gupta, Professor, Shivalik College of Engineering",
      ],
    },
  ],
  sidebar: engineeringSidebar,
};

export default function AboutUsAdvisoryBoardPage() {
  return <PageRenderer path={path} content={content} />;
}
