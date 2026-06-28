import type { IconProps } from "daleui";

export type Locale = "ko" | "en";

export type IconName = IconProps["name"];

/** daleui 아이콘 + SiteIcon이 lucide에서 보강하는 아이콘 */
export type SiteIconName = IconName | "palette" | "brain" | "penLine" | "puzzle";

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
  icon: SiteIconName;
  title: string;
  /** 홈 카드용 짧은 설명 */
  desc: string;
  /** 프로그램 허브 카드용 긴 설명 */
  fullDesc: string;
  tag: string;
  tagTone: TagTone;
}

export interface ProgramDetail {
  icon: SiteIconName;
  title: string;
  subtitleLinks: { label: string; url: string }[];
  overview: string;
  tags: string[];
  steps: { title: string; desc: string }[];
  joinDesc: string;
  ctaLabel: string;
  ctaUrl: string;
  cta2Label: string;
  cta2Url: string;
}

export interface CommunitySection {
  icon: SiteIconName;
  title: string;
  tagline: string | null;
  desc: string;
  points: string[];
  images: { src: string; cap: string }[];
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
    activities: { icon: SiteIconName; title: string; desc: string }[];
  };
  about: {
    title: string;
    intro: string;
    missionLabel: string;
    missionBody: string;
    visionLabel: string;
    visionBody: string;
    valuesTitle: string;
    values: { icon: SiteIconName; title: string; desc: string }[];
    teamTitle: string;
    members: { login: string; name: string; role: string }[];
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
    join: string;
    details: Record<ProgramSlug, ProgramDetail>;
  };
  community: {
    title: string;
    sub: string;
    story: {
      eyebrow: string;
      title: string;
      p1: string;
      p2: string;
      p3: string;
      quotes: string[];
      imgSrc: string;
      imgAlt: string;
      imgCaption: string;
    };
    sections: CommunitySection[];
    ctaTitle: string;
    ctaSub: string;
  };
  sponsor: {
    title: string;
    intro: string;
    intro2: string;
    quote: string;
    usesTitle: string;
    uses: { icon: SiteIconName; title: string; desc: string }[];
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
    ctaBtn2: string;
    listTitle: string;
    listNote: string;
    transparencyTitle: string;
    transparencyDesc: string;
    donationTitle: string;
    donationDesc: string;
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
