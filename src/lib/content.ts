import {
  AdmissionsData,
  AffiliationsPageData,
  AwardsPageData,
  BoardPageData,
  CallToActionData,
  CollegesData,
  ExcellenceData,
  EventsData,
  FacultyData,
  FooterData,
  GoverningBodiesPageData,
  OrganogramPageData,
  HeroData,
  LeadershipData,
  LifeData,
  NavigationData,
  NewsData,
  PageContent,
  PagesData,
  ProgramsData,
  ResearchData,
  ResearchLeadershipData,
  ResearchCommitteeData,
  ResearchPapersData,
  ResearchPageData,
  StudentsData,
  StrategicPlansPageData,
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
export const getBoardPage = () => getJsonData<BoardPageData>("board.json");
export const getAffiliations = () =>
  getJsonData<AffiliationsPageData>("affiliations.json");
export const getAwardsPage = () =>
  getJsonData<AwardsPageData>("awards.json");
export const getCollaborationsPage = () =>
  getJsonData<PageContent>("collaborations.json");
export const getGoverningBodiesPage = () =>
  getJsonData<GoverningBodiesPageData>("governing-bodies.json");
export const getStrategicPlansPage = () =>
  getJsonData<StrategicPlansPageData>("strategic-plans.json");
export const getOrganogramPage = () =>
  getJsonData<OrganogramPageData>("organogram.json");
export const getResearchPage = () =>
  getJsonData<ResearchPageData>("research.json");
export const getResearchLeadership = () =>
  getJsonData<ResearchLeadershipData>("research-leadership.json");
export const getResearchCommittee = () =>
  getJsonData<ResearchCommitteeData>("research-committee.json");
export const getResearchPapers = () =>
  getJsonData<ResearchPapersData>("research-papers.json");

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
