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

export interface PagesData {
  pages: PageContent[];
}
