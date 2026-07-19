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
  /** 프로그램 허브 카드 상단 썸네일 */
  thumb: string;
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
  captures: { src: string; alt: string; cap: string }[];
  steps: { title: string; desc: string }[];
  testimonials: { quote: string; author: string; login: string }[];
  joinDesc: string;
  ctaLabel: string;
  ctaUrl: string;
  cta2Label: string;
  cta2Url: string;
}

export interface CommunitySection {
  icon: SiteIconName;
  title: string;
  desc: string;
  detail: string;
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
    showcaseTitle: string;
    showcaseSub: string;
    showcase: { title: string; desc: string; host: string; url: string }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
  about: {
    title: string;
    intro: string;
    missionLabel: string;
    missionMain: string;
    missionSubs: string[];
    visionLabel: string;
    visionMain: string;
    visionSubs: string[];
    photoSrc: string;
    photoAlt: string;
    photoCaption: string;
    valuesTitle: string;
    values: { icon: SiteIconName; title: string; summary: string }[];
    story: {
      eyebrow: string;
      title: string;
      p1: string;
      p2: string;
      p3: string;
      quotes: string[];
    };
    teamTitle: string;
    teamIntro: string;
    members: { login: string; name: string; role: string }[];
    teamCtaText: string;
    teamCtaBtn: string;
  };
  programs: {
    hubTitle: string;
    hubSub: string;
    otherTitle: string;
    other: { title: string; desc: string; url: string }[];
    commonTitle: string;
    commonSub: string;
    commonSteps: { title: string; desc: string }[];
    reviewsTitle: string;
    reviewsSub: string;
    /** login이 있으면 GitHub 아바타·프로필 링크, 없으면 익명 표기 */
    reviews: { program: string; quote: string; author: string; login?: string }[];
    reviewsCtaTitle: string;
    reviewsCtaSub: string;
    reviewsCtaBtn: string;
    cards: ProgramCard[];
  };
  programDetail: {
    backToHub: string;
    howItWorks: string;
    testimonialsTitle: string;
    testimonialsMore: string;
    join: string;
    details: Record<ProgramSlug, ProgramDetail>;
  };
  community: {
    title: string;
    sub: string;
    sections: CommunitySection[];
    normsTitle: string;
    normsIntro: string;
    norms: { title: string; desc: string }[];
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
