import type { Metadata } from "next";
import HeroSlider from "@/components/hero/HeroSlider";
import TopRankingBanner from "@/components/sections/TopRankingBanner";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CollegeIntroSection from "@/components/sections/CollegeIntroSection";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import CollegesSection from "@/components/sections/CollegesSection";
import EventsSection from "@/components/sections/EventsSection";
import NewsSection from "@/components/sections/NewsSection";
import GalleryCarousel from "@/components/sections/GalleryCarousel";
import WhyShivalikSection from "@/components/sections/WhyShivalikSection";
import ResearchExcellenceSection from "@/components/sections/ResearchExcellenceSection";
import PlacementCompaniesCarousel from "@/components/sections/PlacementCompaniesCarousel";
import {
  getColleges,
  getEvents,
  getHero,
  getRanking,
  getPartnerships,
  getCollegeIntro,
  getWhyShivalik,
  getAchievements,
  getLife,
  getNews,
  getPrograms,
  getStudents,
  getFaculty,
  getExcellence,
  getCta,
  getPageBySlug,
  getResearchExcellence,
  getPlacementCompanies,
} from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home");
  if (!page) {
    return {
      title: "Shivalik College Template",
      description: "JSON-driven Shivalik website template",
    };
  }

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
  };
}

export default async function Home() {
  const [
    hero,
    ranking,
    partnerships,
    collegeIntro,
    whyShivalik,
    achievements,
    researchExcellence,
    programs,
    faculty,
    events,
    news,
    students,
    life,
    colleges,
    excellence,
    cta,
    placementCompanies,
  ] = await Promise.all([
    getHero(),
    getRanking(),
    getPartnerships(),
    getCollegeIntro(),
    getWhyShivalik(),
    getAchievements(),
    getResearchExcellence(),
    getPrograms(),
    getFaculty(),
    getEvents(),
    getNews(),
    getStudents(),
    getLife(),
    getColleges(),
    getExcellence(),
    getCta(),
    getPlacementCompanies(),
  ]);

  return (
    <main className="flex w-full flex-col bg-transparent">
      <HeroSlider slides={hero.slides} />
      <TopRankingBanner {...ranking} />
      <CollegesSection data={colleges} />
      <PartnershipsSection {...partnerships} />
      {/* <FeatureTiles tiles={programs.featureTiles} /> */}
      {/* <ProgramTiles
        programs={programs.programTracks}
        heading={programs.sectionHeading}
        subtitle={programs.sectionSubtitle}
        tracksHeading={programs.tracksHeading}
        tracksSubtitle={programs.tracksSubtitle}
        linkLabel={programs.trackLinkLabel}
      /> */}
      <GalleryCarousel
        gallery={life.gallery}
        heading={life.galleryHeading}
        subtitle={life.gallerySubtitle}
        controls={life.galleryControls}
      />

      <CollegeIntroSection {...collegeIntro} />
      <WhyShivalikSection data={whyShivalik} />
      <AchievementsSection {...achievements} />
      <ResearchExcellenceSection {...researchExcellence} />
      <PlacementCompaniesCarousel {...placementCompanies} />

      {/* <FacultyShowcase faculty={faculty} /> */}
      <EventsSection events={events} />
      <NewsSection news={news} />
      {/* <StudentSpotlightSection students={students} /> */}
      {/* <CallToAction data={cta} /> */}

      {/* <ImportantLinks
        links={life.importantLinks}
        heading={life.linksHeading}
        subtitle={life.linksSubtitle}
      /> */}
      {/* <StoryOfExcellence data={excellence} /> */}
    </main>
  );
}
