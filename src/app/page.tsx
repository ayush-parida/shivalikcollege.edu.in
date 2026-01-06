import type { Metadata } from "next";
import HeroSlider from "@/components/hero/HeroSlider";
import TopRankingBanner from "@/components/sections/TopRankingBanner";
import FeatureTiles from "@/components/sections/FeatureTiles";
import ProgramTiles from "@/components/sections/ProgramTiles";
import CollegesSection from "@/components/sections/CollegesSection";
import StoryOfExcellence from "@/components/sections/StoryOfExcellence";
import FacultyShowcase from "@/components/sections/FacultyShowcase";
import EventsSection from "@/components/sections/EventsSection";
import NewsSection from "@/components/sections/NewsSection";
import StudentSpotlightSection from "@/components/sections/StudentSpotlight";
import GalleryCarousel from "@/components/sections/GalleryCarousel";
import ImportantLinks from "@/components/sections/ImportantLinks";
import CallToAction from "@/components/sections/CallToAction";
import {
  getColleges,
  getEvents,
  getHero,
  getRanking,
  getLife,
  getNews,
  getPrograms,
  getStudents,
  getFaculty,
  getExcellence,
  getCta,
  getPageBySlug,
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
    programs,
    faculty,
    events,
    news,
    students,
    life,
    colleges,
    excellence,
    cta,
  ] = await Promise.all([
    getHero(),
    getRanking(),
    getPrograms(),
    getFaculty(),
    getEvents(),
    getNews(),
    getStudents(),
    getLife(),
    getColleges(),
    getExcellence(),
    getCta(),
  ]);

  return (
    <main className="flex w-full flex-col bg-transparent">
      <HeroSlider slides={hero.slides} />
      <TopRankingBanner {...ranking} />
      <FeatureTiles tiles={programs.featureTiles} />

      <CollegesSection data={colleges} />
      <StoryOfExcellence data={excellence} />
      <ProgramTiles
        programs={programs.programTracks}
        heading={programs.sectionHeading}
        subtitle={programs.sectionSubtitle}
        tracksHeading={programs.tracksHeading}
        tracksSubtitle={programs.tracksSubtitle}
        linkLabel={programs.trackLinkLabel}
      />
      <GalleryCarousel
        gallery={life.gallery}
        heading={life.galleryHeading}
        subtitle={life.gallerySubtitle}
        controls={life.galleryControls}
      />
      <FacultyShowcase faculty={faculty} />
      <EventsSection events={events} />
      <NewsSection news={news} />
      <StudentSpotlightSection students={students} />
      <CallToAction data={cta} />

      <ImportantLinks
        links={life.importantLinks}
        heading={life.linksHeading}
        subtitle={life.linksSubtitle}
      />
    </main>
  );
}
