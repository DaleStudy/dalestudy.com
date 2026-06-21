import type { IconProps } from "daleui";

export type Locale = "ko" | "en";

export type IconName = IconProps["name"];

export type TagTone = "brand" | "neutral" | "success" | "warning" | "danger" | "info";

export const programSlugs = ["leetcode", "ai", "blog", "daleui"] as const;
export type ProgramSlug = (typeof programSlugs)[number];

export function isProgramSlug(value: string): value is ProgramSlug {
  return (programSlugs as readonly string[]).includes(value);
}

export interface SeoEntry {
  title: string;
  description: string;
}

export interface ProgramCard {
  slug: ProgramSlug;
  icon: IconName;
  title: string;
  /** 홈 카드용 짧은 설명 */
  desc: string;
  /** 프로그램 허브 카드용 긴 설명 */
  fullDesc: string;
  tag: string;
  tagTone: TagTone;
}

export interface ProgramDetail {
  icon: IconName;
  title: string;
  subtitle: string;
  overview: string;
  tags: string[];
  steps: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
  joinDesc: string;
  ctaLabel: string;
  ctaUrl: string;
  cta2Label: string;
  cta2Url: string;
}

export interface CommunitySection {
  icon: IconName;
  title: string;
  tagline: string | null;
  desc: string;
  points: string[];
}

export interface Messages {
  siteName: string;
  langSwitch: string;
  nav: { about: string; programs: string; community: string; sponsor: string };
  cta: { joinDiscord: string; browsePrograms: string; learnMore: string };
  home: {
    heroTag: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSub: string;
    missionSummary: string;
    moreAbout: string;
    programsTitle: string;
    programsSub: string;
    communityTitle: string;
    communitySub: string;
    moreCommunity: string;
    sponsorBannerTitle: string;
    sponsorBannerSub: string;
    sponsorBannerCta: string;
    stats: { value: string; label: string }[];
    activities: { icon: IconName; title: string; desc: string }[];
  };
  about: {
    title: string;
    intro: string;
    missionLabel: string;
    missionBody: string;
    visionLabel: string;
    visionBody: string;
    valuesTitle: string;
    values: { icon: IconName; title: string; desc: string }[];
    teamTitle: string;
    roles: { icon: IconName; title: string; desc: string }[];
    teamCtaText: string;
    teamCtaBtn: string;
  };
  programs: {
    hubTitle: string;
    hubSub: string;
    otherTitle: string;
    other: { title: string; desc: string; url: string }[];
    cards: ProgramCard[];
  };
  programDetail: {
    backToHub: string;
    howItWorks: string;
    outcomes: string;
    join: string;
    details: Record<ProgramSlug, ProgramDetail>;
  };
  community: {
    title: string;
    sub: string;
    sections: CommunitySection[];
    ctaTitle: string;
    ctaSub: string;
  };
  sponsor: {
    title: string;
    intro: string;
    uses: { icon: IconName; title: string; desc: string }[];
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
    ctaBtn2: string;
    listTitle: string;
    listNote: string;
    transparencyTitle: string;
    transparencyDesc: string;
    corpTitle: string;
    corpDesc: string;
    nonMoneyTitle: string;
    nonMoneyDesc: string;
  };
  notFound: { title: string; sub: string; goHome: string };
  footer: {
    slogan: string;
    channels: string;
    studies: string;
    projects: string;
    support: string;
    sponsorPage: string;
    rights: string;
  };
  seo: {
    home: SeoEntry;
    about: SeoEntry;
    programs: SeoEntry;
    community: SeoEntry;
    sponsor: SeoEntry;
  };
}
