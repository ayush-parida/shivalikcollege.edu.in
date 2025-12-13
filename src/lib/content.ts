import {
  AdmissionsData,
  CallToActionData,
  CollegesData,
  ExcellenceData,
  EventsData,
  FacultyData,
  FooterData,
  HeroData,
  LeadershipData,
  LifeData,
  NavigationData,
  NewsData,
  PageContent,
  PagesData,
  ProgramsData,
  ResearchData,
  StudentsData,
} from "@/lib/types";
import { getJsonData } from "@/lib/data-loader";

export const getNavigation = () =>
  getJsonData<NavigationData>("navigation.json");
export const getHero = () => getJsonData<HeroData>("hero.json");
export const getPrograms = () => getJsonData<ProgramsData>("programs.json");
export const getColleges = () => getJsonData<CollegesData>("colleges.json");
export const getExcellence = () =>
  getJsonData<ExcellenceData>("excellence.json");
export const getAdmissions = () =>
  getJsonData<AdmissionsData>("admissions.json");
export const getFaculty = () => getJsonData<FacultyData>("faculty.json");
export const getResearch = () => getJsonData<ResearchData>("research.json");
export const getLife = () => getJsonData<LifeData>("life.json");
export const getNews = () => getJsonData<NewsData>("news.json");
export const getEvents = () => getJsonData<EventsData>("events.json");
export const getStudents = () => getJsonData<StudentsData>("students.json");
export const getLeadership = () => getJsonData<LeadershipData>("leadership.json");
export const getFooter = () => getJsonData<FooterData>("footer.json");
export const getPages = () => getJsonData<PagesData>("pages.json");
export const getCta = () => getJsonData<CallToActionData>("cta.json");

export async function getPageBySlug(
  slug: string
): Promise<PageContent | undefined> {
  const { pages } = await getPages();
  return pages.find((page) => page.slug === slug);
}

export async function getAllSlugs(): Promise<string[]> {
  const { pages } = await getPages();
  return pages.map((page) => page.slug);
}
