import type { Messages } from "./types";

export const en: Messages = {
  siteName: "DaleStudy",
  langSwitch: "KO",
  nav: { about: "About", programs: "Programs", community: "Community", sponsor: "Sponsor" },
  cta: {
    joinDiscord: "Join Discord",
    browsePrograms: "Explore programs",
    learnMore: "Learn more",
  },
  home: {
    heroTag: "An open-source community that grows together",
    heroTitle1: "Ordinary developers building",
    heroTitle2: "extraordinary projects",
    heroSub:
      "Experience real collaboration through open-source projects and study groups. Code reviews, pair programming, and peers who cheer for your growth.",
    missionSummary:
      "DaleStudy helps developers grow through hands-on collaboration on open-source projects. No skill threshold: if you want to contribute, you belong here.",
    moreAbout: "Learn more about us",
    programsTitle: "Four programs",
    programsSub: "From algorithms to design systems, start collaborating where your interests are.",
    communityTitle: "Community life",
    communitySub: "Connection continues beyond the study groups.",
    moreCommunity: "See all community activities",
    sponsorBannerTitle: "Help the community grow",
    sponsorBannerSub: "Your sponsorship covers servers and community operations.",
    sponsorBannerCta: "Sponsor us",
    stats: [
      { value: "1,400+", label: "Discord members" },
      { value: "1,000+", label: "LinkedIn followers" },
      { value: "154", label: "leetcode-study stars" },
      { value: "109", label: "daleui stars" },
    ],
    activities: [
      {
        icon: "messageCircle",
        title: "Coffee chat",
        desc: "Connection beyond code review. A bot matches conversation partners weekly.",
      },
      {
        icon: "globe",
        title: "Co-working rooms",
        desc: "Always-open voice channels for working alongside each other.",
      },
      {
        icon: "users",
        title: "Meetups",
        desc: "Regular online meetups with talks and networking, wherever you live.",
      },
    ],
  },
  about: {
    title: "About",
    intro:
      "DaleStudy is an open-source community where developers learn, build, and grow together.",
    missionLabel: "Mission",
    missionBody:
      "We help developers grow through real collaboration on open-source projects: code reviews, teamwork, and communication experience that is hard to gain alone.",
    visionLabel: "Vision",
    visionBody:
      "A community where anyone can become a contributor, regardless of skill or background. Paying forward the help you received keeps the community sustainable.",
    valuesTitle: "Core values",
    values: [
      {
        icon: "thumbsUp",
        title: "Autonomy & Respect",
        desc: "No one is forced. Everyone's pace and style are respected here.",
      },
      {
        icon: "messageCircle",
        title: "Communication & Collaboration",
        desc: "We learn to excel together, not alone. Reviews and conversations are our tools for growth.",
      },
      {
        icon: "heartHandshake",
        title: "Contribution & Sharing",
        desc: "Pay forward the help you received. Small contributions compound into a virtuous cycle.",
      },
    ],
    teamTitle: "Team roles",
    roles: [
      {
        icon: "users",
        title: "Community Manager",
        desc: "Sets community direction and helps onboard new members.",
      },
      {
        icon: "codeXml",
        title: "Project / Study Lead",
        desc: "Leads each program's curriculum and collaboration process.",
      },
      {
        icon: "check",
        title: "Moderator",
        desc: "Keeps the space safe and respectful, guided by the code of conduct.",
      },
      {
        icon: "messageCircleMore",
        title: "Content Lead",
        desc: "Shares the community's activities and outcomes with the world.",
      },
    ],
    teamCtaText:
      "DaleStudy is run by volunteer organizers. If you want to help run the community, raise your hand on Discord.",
    teamCtaBtn: "Apply to the team",
  },
  programs: {
    hubTitle: "Programs",
    hubSub:
      "Active study groups and projects. All study groups run in cohorts, and everything happens in the open on Discord and GitHub.",
    otherTitle: "Other projects",
    other: [
      {
        title: "Leaderboard",
        desc: "Progress dashboard for the LeetCode study",
        url: "https://leaderboard.dalestudy.com",
      },
      {
        title: "Chatbot",
        desc: "Discord automation bot for community ops",
        url: "https://chat.dalestudy.com",
      },
      {
        title: "Scheduler",
        desc: "Meeting scheduling tool",
        url: "https://schedule.dalestudy.com",
      },
      {
        title: "Agent Skills",
        desc: "Skill collection for AI agents",
        url: "https://www.skills.sh/dalestudy/skills",
      },
    ],
    cards: [
      {
        slug: "leetcode",
        icon: "codeXml",
        title: "LeetCode Study",
        desc: "A weekly algorithm study with PR-driven code reviews.",
        fullDesc:
          "Solve algorithm problems weekly, review each other via GitHub PRs, and track progress on the leaderboard.",
        tag: "Cohort 8",
        tagTone: "brand",
      },
      {
        slug: "ai",
        icon: "star",
        title: "AI Study",
        desc: "Explore AI papers and tools together, and build projects.",
        fullDesc:
          "Read AI papers and experiment with tools together, turning learnings into shared projects.",
        tag: "Cohort 4",
        tagTone: "brand",
      },
      {
        slug: "blog",
        icon: "messageCircleMore",
        title: "Blog Study",
        desc: "Build a consistent technical writing habit with peer feedback.",
        fullDesc:
          "A study group for consistent technical writing. Write regularly and exchange feedback.",
        tag: "Cohort 1",
        tagTone: "brand",
      },
      {
        slug: "daleui",
        icon: "codeXml",
        title: "daleui",
        desc: "An open-source React design system built by the community.",
        fullDesc:
          "An open-source React + Panda CSS design system built by the community. From issue triage to releases, it is a real-world collaboration process.",
        tag: "Join anytime",
        tagTone: "success",
      },
    ],
  },
  programDetail: {
    backToHub: "All programs",
    howItWorks: "How it works",
    outcomes: "Outcomes",
    join: "How to join",
    details: {
      leetcode: {
        icon: "codeXml",
        title: "LeetCode Study",
        subtitle: "leetcode.dalestudy.com",
        overview:
          "An algorithm study where we solve problems together. Polish your solutions through GitHub PR code reviews and cheer each other on via the leaderboard.",
        tags: ["Weekly problems", "GitHub PR reviews", "Leaderboard"],
        steps: [
          { title: "Register for a cohort", desc: "Sign up on Discord during recruitment." },
          { title: "Solve weekly problems", desc: "Submit your solutions as PRs to the repo." },
          { title: "Review code", desc: "Review peers' solutions and get feedback on yours." },
          {
            title: "Retrospect & graduate",
            desc: "Wrap up with a retrospective, then on to the next cohort.",
          },
        ],
        outcomes: [
          { value: "154", label: "GitHub stars" },
          { value: "8th", label: "Current cohort" },
          { value: "100s", label: "Code reviews" },
        ],
        joinDesc: "See the full curriculum and cohort schedule on the dedicated site.",
        ctaLabel: "Visit leetcode.dalestudy.com",
        ctaUrl: "https://leetcode.dalestudy.com",
        cta2Label: "GitHub repo",
        cta2Url: "https://github.com/DaleStudy/leetcode-study",
      },
      ai: {
        icon: "star",
        title: "AI Study",
        subtitle: "Discord #ai",
        overview:
          "A study group exploring AI papers and tools. We don't stop at reading: learnings become experiments and shared projects.",
        tags: ["Paper reading", "Tool experiments", "Projects"],
        steps: [
          { title: "Pick a topic", desc: "Choose a paper or tool to explore together." },
          { title: "Study solo", desc: "Read and experiment during the week." },
          { title: "Share session", desc: "Present learnings and discuss." },
        ],
        outcomes: [
          { value: "4th", label: "Current cohort" },
          { value: "Weekly", label: "Share sessions" },
          { value: "Many", label: "Experiments" },
        ],
        joinDesc: "Watch the AI channel on Discord for the next cohort announcement.",
        ctaLabel: "Join the Discord channel",
        ctaUrl: "https://dales.link/discord",
        cta2Label: "View GitHub",
        cta2Url: "https://github.com/DaleStudy",
      },
      blog: {
        icon: "messageCircleMore",
        title: "Blog Study",
        subtitle: "Discord #blog",
        overview:
          "A study group for consistent technical writing. Write with deadlines, get feedback through peers' eyes.",
        tags: ["Tech writing", "Peer feedback", "Consistency"],
        steps: [
          { title: "Share topics", desc: "Share what you'll write this cycle." },
          { title: "Draft", desc: "Write your draft before the deadline." },
          { title: "Exchange feedback", desc: "Read each other's posts and comment." },
          { title: "Publish", desc: "Publish the polished post on your blog." },
        ],
        outcomes: [
          { value: "1st", label: "Current cohort" },
          { value: "Bi-weekly", label: "Publishing cycle" },
        ],
        joinDesc: "The blog channel on Discord recruits for each cohort.",
        ctaLabel: "Join the Discord channel",
        ctaUrl: "https://dales.link/discord",
        cta2Label: "Read members' posts",
        cta2Url: "https://github.com/DaleStudy",
      },
      daleui: {
        icon: "codeXml",
        title: "daleui",
        subtitle: "daleui.com · npm daleui",
        overview:
          "An open-source React + Panda CSS design system built by the community. Experience a real-world collaboration process: issue triage, PR reviews, releases. Published to npm and used in real projects.",
        tags: ["React", "Panda CSS", "npm", "Design system"],
        steps: [
          {
            title: "Pick an issue",
            desc: "Choose work from GitHub issues. Good first issues welcome.",
          },
          {
            title: "Build & PR",
            desc: "Implement the component with stories and tests, then open a PR.",
          },
          { title: "Code review", desc: "Polish the code through maintainer and peer reviews." },
          { title: "Release", desc: "Merged changes ship to npm with semantic versioning." },
        ],
        outcomes: [
          { value: "109", label: "GitHub stars" },
          { value: "19", label: "Components shipped" },
          { value: "v1.1.1", label: "Latest on npm" },
        ],
        joinDesc:
          "Interested in design systems? Start with the repo issues. Designer contributions welcome too.",
        ctaLabel: "Visit daleui.com",
        ctaUrl: "https://www.daleui.com",
        cta2Label: "GitHub repo",
        cta2Url: "https://github.com/DaleStudy/daleui",
      },
    },
  },
  community: {
    title: "Community",
    sub: "Study groups are not everything: coffee chats, co-working, and meetups keep us connected.",
    sections: [
      {
        icon: "messageCircle",
        title: "Coffee chat",
        tagline: "“Connection beyond code review”",
        desc: "A bot matches conversation partners every week. Join with a single slash command. Any topic goes, from career questions to hobbies.",
        points: [
          "Automatic partner matching by bot",
          "Join with one slash command",
          "Any topic: career, tech, life",
        ],
      },
      {
        icon: "globe",
        title: "Co-working rooms",
        tagline: null,
        desc: "Voice channels are always open. Working on your own things, together. That presence builds consistency. Mic on or off, your choice.",
        points: [
          "Always-open voice channels",
          "Cam & mic optional, zero pressure",
          "A running mate for focus days",
        ],
      },
      {
        icon: "users",
        title: "Meetups",
        tagline: null,
        desc: "Regular online meetups with talks and networking. Join from wherever you are, and organizers make sure first-timers feel at home.",
        points: [
          "Regular online meetups",
          "Lightning talks & networking",
          "First-timer friendly culture",
        ],
      },
    ],
    ctaTitle: "Start today",
    ctaSub: "Join and take part in everything right away. Nothing to prepare.",
  },
  sponsor: {
    title: "Sponsor",
    intro:
      "DaleStudy is a non-profit community with no ads or paid membership. Your sponsorship keeps it running.",
    uses: [
      {
        icon: "globe",
        title: "Infrastructure",
        desc: "Servers and domains that run the website, leaderboard, and bots.",
      },
      {
        icon: "users",
        title: "Program support",
        desc: "Covers the costs of running our study groups and projects.",
      },
      {
        icon: "handHeart",
        title: "Service subscriptions",
        desc: "Subscription fees for the services that keep the community running.",
      },
    ],
    ctaTitle: "Become a sponsor",
    ctaSub: "Sponsorship starts at just $1 a month. Every bit helps, and you can stop anytime.",
    ctaBtn: "GitHub Sponsors",
    ctaBtn2: "OpenCollective",
    listTitle: "Our sponsors",
    listNote: "Based on public GitHub Sponsors data.",
    transparencyTitle: "Transparent by default",
    transparencyDesc:
      "How funds are spent is shared publicly on GitHub and LinkedIn. Any funds remaining at the end of each year are donated in full to the Beautiful Foundation.",
    corpTitle: "Corporate sponsorship",
    corpDesc: "We welcome employer branding, meetup venues, service credits, and more.",
    nonMoneyTitle: "Non-monetary contributions",
    nonMoneyDesc:
      "Code, reviews, docs, translations, and talks are all valuable contributions. Money is not the only way.",
  },
  notFound: {
    title: "Page not found",
    sub: "The address may have changed or the page was removed.",
    goHome: "Go home",
  },
  footer: {
    slogan: "Ordinary developers building extraordinary projects",
    channels: "Channels",
    studies: "Studies",
    projects: "Projects",
    support: "Support",
    sponsorPage: "Sponsorship",
    rights: "All rights reserved.",
  },
  seo: {
    home: {
      title: "DaleStudy: Ordinary developers building extraordinary projects",
      description:
        "A developer community for experiencing real collaboration through open-source projects and study groups. Code reviews, pair programming, and peers who cheer for your growth.",
    },
    about: {
      title: "About | DaleStudy",
      description:
        "The mission, vision, and core values of DaleStudy, an open-source community where developers learn, build, and grow together.",
    },
    programs: {
      title: "Programs | DaleStudy",
      description:
        "LeetCode Study, AI Study, Blog Study, and the daleui design system: active study groups and open-source projects at DaleStudy.",
    },
    community: {
      title: "Community | DaleStudy",
      description:
        "Coffee chats, co-working rooms, and meetups: how DaleStudy stays connected beyond study groups.",
    },
    sponsor: {
      title: "Sponsor | DaleStudy",
      description:
        "DaleStudy is a non-profit developer community with no ads. Support its growth via GitHub Sponsors.",
    },
  },
};
