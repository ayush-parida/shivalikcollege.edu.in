export interface LabeledLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  title: string;
  links: LabeledLink[];
}

export interface NavItem extends LabeledLink {
  description?: string;
  columns?: NavColumn[];
}

export interface NavigationData {
  brand: {
    name: string;
    tagline: string;
    logo?: string;
  };
  controls: {
    menuLabel: string;
    closeLabel: string;
  };
  topBar: {
    message: string;
    links: LabeledLink[];
  };
  utilityLinks: LabeledLink[];
  mainNav: NavItem[];
  applyCta: LabeledLink;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: LabeledLink;
  image: string;
}

export interface HeroData {
  slides: HeroSlide[];
}

export interface RankingStat {
  label: string;
  value: string;
}

export interface RankingData {
  logo: string;
  title: string;
  subtitle: string;
  stats: RankingStat[];
}

export interface Partner {
  name: string;
  logo: string;
  description: string;
  highlights: string[];
}

export interface PartnershipsData {
  sectionLabel: string;
  sectionTitle: string;
  partners: Partner[];
}

export interface CollegeIntroData {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  backgroundImage: string;
}

export interface WhyShivalikData {
  sectionLabel: string;
  sectionTitle: string;
  bullets: string[];
}

export interface AchievementItem {
  position: string;
  text: string;
  logo?: string;
}

export interface AchievementsData {
  sectionLabel: string;
  sectionTitle: string;
  items: AchievementItem[];
}

export interface ResearchExcellenceStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface ResearchExcellenceImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface ResearchExcellenceData {
  heading: string;
  subtitle: string;
  stats: ResearchExcellenceStat[];
  images: ResearchExcellenceImage[];
  ctaText: string;
  ctaLink: string;
}

export interface FeatureTile {
  title: string;
  description: string;
  href: string;
  color: string;
  image: string;
}

export interface CollegeCard {
  name: string;
  description: string;
  highlights: string[];
  href: string;
  image: string;
  badge?: string;
  color?: string;
}

export interface CollegesData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  ctaText: string;
  colleges: CollegeCard[];
}

export interface ExcellenceStory {
  name: string;
  course: string;
  company: string;
  package: string;
  image: string;
}

export interface ExcellenceData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  stories: ExcellenceStory[];
}

export interface ProgramTrack {
  name: string;
  summary: string;
  mode: string;
  duration: string;
  href: string;
  image: string;
}

export interface ProgramsData {
  featureTiles: FeatureTile[];
  programTracks: ProgramTrack[];
  sectionHeading: string;
  sectionSubtitle: string;
  tracksHeading: string;
  tracksSubtitle: string;
  trackLinkLabel: string;
}

export interface HighlightItem {
  label: string;
  value: string;
  details?: string;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  quote: string;
  message: string[];
  profile?: string[];
  profileDetails?: string[];
  accolades?: string[];
  image?: string;
}

export interface LeadershipData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: HighlightItem[];
  };
  guidingPrinciples: {
    title: string;
    body: string;
  }[];
  profiles: LeadershipProfile[];
}

export interface ResearchLeadershipData {
  hero: {
    title: string;
    description: string;
    highlights: HighlightItem[];
  };
  guidingPrinciples: {
    title: string;
    body: string;
  }[];
  profiles: LeadershipProfile[];
}

export interface ResearchCommitteeMember {
  sno: number;
  name: string;
  designation: string;
  responsibility: string;
}

export interface ResearchCommitteeData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  members: ResearchCommitteeMember[];
  metadata: PageMetadata;
}

export interface ResearchPaper {
  sno: number;
  faculty: string;
  journal: string;
  year: number;
  indexed: string;
  link: string;
}

export interface ResearchPapersData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  papers: ResearchPaper[];
  metadata: PageMetadata;
}

export interface BookPublication {
  sno: number;
  facultyName: string;
  year: number;
  publisher: string;
  isbnIssn: string;
}

export interface BooksChaptersData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  publications: BookPublication[];
  metadata: PageMetadata;
}

export interface FundedProject {
  sno: number;
  facultyName: string;
  year: string;
  fundingAgency: string;
  amount: string;
  status: string;
}

export interface FundedResearchData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  projects: FundedProject[];
  metadata: PageMetadata;
}

export interface SeminarEvent {
  sno: number;
  department: string;
  eventName: string;
  convenor: string;
}

export interface SeminarConferenceWorkshopsData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  events: SeminarEvent[];
  metadata: PageMetadata;
}

export interface Patent {
  sno: number;
  title: string;
  applicationNo: string;
  country: string;
  year: number;
}

export interface IPRPatentsData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  patents: Patent[];
  metadata: PageMetadata;
}

export interface PolicyDocument {
  id: string;
  title: string;
  description: string;
  documentUrl: string;
  category: string;
}

export interface ResearchPolicyData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  policies: PolicyDocument[];
  metadata: PageMetadata;
}

export interface CodeOfEthicsData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  preamble: {
    title: string;
    content: string;
  };
  principles: Array<{
    id: string;
    title: string;
    description: string;
    guidelines?: string[];
    note?: string;
  }>;
  misconduct: {
    title: string;
    description: string;
    includes: string[];
    note: string;
  };
  misconductTypes: {
    title: string;
    description: string;
    types: Array<{
      name: string;
      definition: string;
    }>;
    note: string;
  };
  metadata: PageMetadata;
}

export interface AdmissionsData {
  sectionLabel: string;
  sectionHeading: string;
  sectionSubtitle: string;
  stepsHeading: string;
  highlights: HighlightItem[];
  processSteps: string[];
  cta: LabeledLink;
}

export interface FacultyLeader {
  name: string;
  title: string;
  expertise: string;
  image: string;
}

export interface FacultyData {
  sectionHeading: string;
  sectionSubtitle: string;
  pillarsTitle: string;
  leaders: FacultyLeader[];
  pillars: string[];
}

export interface ResearchArea {
  name: string;
  description: string;
  pillars: string[];
  href: string;
}

export interface ResearchMetric {
  label: string;
  value: string;
}

export interface ResearchData {
  sectionHeading: string;
  sectionSubtitle: string;
  metricsHeading: string;
  focusAreas: ResearchArea[];
  metrics: ResearchMetric[];
}

export interface GalleryItem {
  caption: string;
  image: string;
}

export interface LifeData {
  galleryHeading: string;
  gallerySubtitle: string;
  galleryControls: {
    previous: string;
    next: string;
  };
  linksHeading: string;
  linksSubtitle: string;
  gallery: GalleryItem[];
  importantLinks: LabeledLink[];
}

export interface NewsArticle {
  title: string;
  summary: string;
  date: string;
  href: string;
}

export interface NewsData {
  sectionHeading: string;
  sectionSubtitle: string;
  articleCta: string;
  articles: NewsArticle[];
}

export interface EventItem {
  name: string;
  date: string;
  location: string;
  href: string;
}

export interface EventsData {
  sectionHeading: string;
  sectionSubtitle: string;
  ctaLabel: string;
  countLabel: string;
  items: EventItem[];
}

export interface CtaHighlight {
  label: string;
  value: string;
  description?: string;
}

export interface CallToActionData {
  label: string;
  heading: string;
  body: string;
  highlights: CtaHighlight[];
  primaryCta: LabeledLink;
  secondaryCta: LabeledLink;
}

export interface StudentSpotlight {
  name: string;
  program: string;
  quote: string;
  image: string;
}

export interface StudentsData {
  sectionHeading: string;
  sectionSubtitle: string;
  spotlights: StudentSpotlight[];
}

export interface FooterData {
  address: {
    headline: string;
    lines: string[];
    contact: {
      phone: string;
      email: string;
    };
  };
  columns: { title: string; links: LabeledLink[] }[];
  social: LabeledLink[];
  legal: LabeledLink[];
  logo: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

export interface PageTabCard {
  title: string;
  body: string;
  href?: string;
  ctaLabel?: string;
}

export interface College {
  name: string;
  details: string[];
}

export interface PageTab {
  id: string;
  label: string;
  heading: string;
  description: string;
  image?: string;
  eyebrow?: string;
  cards: PageTabCard[];
  highlights?: string[];
  imagePosition?: "left" | "right";
  colleges?: College[];
}

export interface PageContent {
  slug: string;
  title: string;
  intro: string;
  heroEyebrow?: string;
  heroImage?: string;
  sections: { heading: string; body: string }[];
  highlights: string[];
  highlightsLabel: string;
  tabs?: PageTab[];
  tabsVariant?: "tabs" | "stacked";
  metadata: PageMetadata;
}

export interface BoardPageData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  sections: { heading: string; body: string }[];
  members: string[];
  highlightLabel: string;
  metadata: PageMetadata;
}

export interface AffiliationRecord {
  title: string;
  description: string;
  image: string;
  badge?: string;
  subtitle?: string;
}

export interface AffiliationsPageData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  approvals: AffiliationRecord[];
  metadata: PageMetadata;
}

export interface ResearchPageData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  sections: {
    title: string;
    description: string;
    image?: string;
  }[];
  vision: {
    title: string;
    statement: string;
  };
  mission: {
    title: string;
    statements: {
      id: string;
      text: string;
    }[];
  };
  metadata: PageMetadata;
}

export interface AwardRecognition {
  title: string;
  description: string;
  image: string;
  badge?: string;
  subtitle?: string;
  year?: string;
  link?: string;
}

export interface AwardsPageData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  awards: AwardRecognition[];
  metadata: PageMetadata;
}

export interface TableRow {
  cells: string[];
}

export interface TableData {
  columns: string[];
  rows: TableRow[];
}

export interface GoverningBodiesSection {
  id: string;
  title: string;
  description?: string;
  link?: LabeledLink;
  table?: TableData;
  list?: string[];
}

export interface GoverningBodiesPageData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  sections: GoverningBodiesSection[];
  metadata: PageMetadata;
}

export interface StrategicPlanInitiative {
  title: string;
  description: string;
  image: string;
  badge?: string;
  subtitle?: string;
  highlights?: string[];
}

export interface StrategicObjectiveGroup {
  id: string;
  title: string;
  description?: string;
  objectives: string[];
}

export interface StrategicPlansPageData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  initiatives: StrategicPlanInitiative[];
  objectives: StrategicObjectiveGroup[];
  metadata: PageMetadata;
}

export interface OrganogramDiagram {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: LabeledLink;
}

export interface OrganogramPageData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  diagrams: OrganogramDiagram[];
  metadata: PageMetadata;
}

export interface PagesData {
  pages: PageContent[];
}

export interface PlacementCompany {
  name: string;
  logo: string;
}

export interface PlacementCompaniesData {
  sectionLabel: string;
  sectionTitle: string;
  companies: PlacementCompany[];
}

export interface TopPlacement {
  id: string;
  name: string;
  package: string;
  degree: string;
  company: string;
  companyLogo: string;
  image: string;
  comment: string;
}

export interface PlacementStat {
  value: string;
  label: string;
  details: string;
}

export interface PlacementFeature {
  title: string;
  description: string;
}

export interface PlacementHighlights {
  title: string;
  description: string;
  features: PlacementFeature[];
}

export interface AffiliationLogo {
  id: string;
  name: string;
  image: string;
}

export interface PlacementAffiliations {
  title: string;
  description: string;
  logos: AffiliationLogo[];
}

export interface PlacementOverviewData {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image: string;
  };
  topPlacements: TopPlacement[];
  stats: PlacementStat[];
  highlights?: PlacementHighlights;
  affiliations: PlacementAffiliations;
}

export interface PlacementLeaderProfile {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  image: string;
  email: string;
  contact: string;
  message: string[];
}

export interface PlacementCellFeature {
  title: string;
}

export interface PlacementTestimonial {
  id: string;
  name: string;
  text: string;
  company: string;
}

export interface PlacementLeadershipData {
  profile: PlacementLeaderProfile;
  cellFeatures: PlacementCellFeature[];
  testimonials: PlacementTestimonial[];
}

export interface CompanyCategory {
  id: string;
  title: string;
  images: string[];
}

export interface RecruitmentPartnersCTA {
  title: string;
  emails: string[];
  phones: string[];
}

export interface RecruitmentPartnersData {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  mission: {
    text: string;
    description: string;
  };
  companyCategories: CompanyCategory[];
  cta: RecruitmentPartnersCTA;
}

export interface IITPartnership {
  institute: string;
  program: string;
  benefits: string[];
  logo?: string;
}

export interface IndustryPartnership {
  company: string;
  program: string;
  purpose: string;
  areas: string[];
  logo?: string;
}

export interface IndustryTieupsSection {
  id: string;
  title: string;
  description: string;
  partnerships: (IITPartnership | IndustryPartnership)[];
}

export interface IndustryTieupsData {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  sections: IndustryTieupsSection[];
  metadata: PageMetadata;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  email: string;
  contact: string;
  image: string;
}

export interface TrainerCategory {
  category: string;
  trainers: TeamMember[];
}

export interface PlacementTeamData {
  metadata: PageMetadata;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  careerAdvancementCell: {
    title: string;
    description: string;
    team: TeamMember[];
  };
  professionalEnhancementCell: {
    title: string;
    description: string;
    categories: TrainerCategory[];
  };
  administrativeCell: {
    title: string;
    description: string;
    team: TeamMember[];
  };
}

export interface TechnicalProgram {
  id: string;
  program: string;
  highlights: string[];
}

export interface TrainingEmployabilityData {
  metadata: PageMetadata;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image?: string;
  };
  departments: {
    title: string;
    description: string;
  }[];
  skillAreas: string[];
  placementReadinessIndex: {
    title: string;
    description: string;
    criteria: string[];
  };
  technicalPrograms: TechnicalProgram[];
}
