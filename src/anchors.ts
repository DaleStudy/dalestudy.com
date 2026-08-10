/** 공개된 섹션 앵커. 외부 링크가 이 값에 의존하므로 한번 공개한 뒤에는 바꾸지 않는다. */
export const ANCHORS = {
  home: { programs: "programs", community: "community", showcase: "showcase", faq: "faq" },
  about: {
    mission: "mission",
    vision: "vision",
    story: "story",
    values: "values",
    team: "team",
  },
  community: {
    coffeeChat: "coffee-chat",
    coWorking: "co-working",
    meetups: "meetups",
    norms: "norms",
  },
  programs: { howItWorks: "how-it-works", reviews: "reviews", otherProjects: "other-projects" },
  programDetail: { howItWorks: "how-it-works", testimonials: "testimonials", join: "join" },
  sponsor: { useOfFunds: "use-of-funds" },
} as const;
