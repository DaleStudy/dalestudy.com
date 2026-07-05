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
    programsTitle: "Featured programs",
    programsSub: "From algorithms to design systems, start collaborating where your interests are.",
    communityTitle: "Community life",
    communitySub: "Connection continues beyond the study groups.",
    moreCommunity: "See all community activities",
    sponsorBannerTitle: "Help the community grow",
    sponsorBannerSub:
      "Your sponsorship keeps this community, free of ads and paid membership, sustainable.",
    sponsorBannerCta: "Sponsor us",
    stats: [
      { value: "1,500+", label: "Discord members" },
      { value: "400+", label: "GitHub members" },
      { value: "1,000+", label: "LinkedIn followers" },
      { value: "300+", label: "GitHub stars" },
    ],
    activities: [
      {
        icon: "messageCircle",
        title: "Coffee chat",
        desc: "A bot matches conversation partners every week: code, career, or anything else.",
      },
      {
        icon: "globe",
        title: "Co-working rooms",
        desc: "Always-open voice channels for working alongside each other.",
      },
      {
        icon: "users",
        title: "Meetups",
        desc: "Regular meetups with talks and networking, wherever you live.",
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
    teamTitle: "Team",
    teamIntro:
      "The team works hard to foster a healthy study culture and a great experience for participants: through regular meetings, retrospectives, and by folding each cohort's feedback into the next.",
    members: [
      { login: "DaleSeo", name: "DaleSeo", role: "Community Manager" },
      { login: "SamTheKorean", name: "Sam", role: "LeetCode Study Lead" },
      { login: "yolophg", name: "Helena", role: "Design System Lead" },
      { login: "sounmind", name: "Evan", role: "AI Study Lead" },
      { login: "lms0806", name: "lms0806", role: "Blog Study Lead" },
    ],
    teamCtaText:
      "DaleStudy is run by volunteer organizers. If you'd like to help run the community, you are always welcome.",
    teamCtaBtn: "Apply to the team",
  },
  programs: {
    hubTitle: "Programs",
    hubSub:
      "Active study groups and projects. Study groups run in cohorts so we can keep improving the participant experience, and every project is open source. Everything happens in the open on Discord and GitHub.",
    otherTitle: "Other projects",
    commonTitle: "Programs that mature with every cohort",
    commonSub:
      "Retrospectives and feedback carry into the next cohort: a virtuous cycle at the heart of how DaleStudy runs its programs.",
    commonSteps: [
      {
        title: "Start on Discord",
        desc: "Say hi in the channel or apply to a recruitment post. That's all it takes.",
      },
      {
        title: "Collaborate on GitHub",
        desc: "PRs, code reviews, and issues: the same open process as real-world work.",
      },
      {
        title: "Share the results",
        desc: "Solutions, posts, and releases accumulate and become stepping stones for the next cohort.",
      },
      {
        title: "Retrospect & improve",
        desc: "Each cohort ends with a retrospective that improves the next, and graduates return as coaches.",
      },
    ],
    other: [
      {
        title: "Leaderboard",
        desc: "Certificates and motivation for the LeetCode study",
        url: "https://leaderboard.dalestudy.com",
      },
      {
        title: "Chatbot",
        desc: "A chat UI that answers questions about the community",
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
        icon: "puzzle",
        title: "LeetCode Study",
        desc: "A study group solving the Blind 75 for coding interviews, with PR-driven code reviews.",
        fullDesc:
          "Prepare for coding interviews by solving the Blind 75 together over 15 weeks. Submit solutions as GitHub PRs, review each other, and stay motivated with the leaderboard, earning a certificate on completion.",
        tag: "Cohort 8",
        tagTone: "brand",
      },
      {
        slug: "daleui",
        icon: "palette",
        title: "daleui Design System",
        desc: "An open-source design system specialized for Korean, built by the community.",
        fullDesc:
          "An open-source React design system specialized for the Korean user experience. Designers and developers experience a real-world collaboration process, from issue triage to releases.",
        tag: "Join anytime",
        tagTone: "success",
      },
      {
        slug: "ai",
        icon: "brain",
        title: "AI Study",
        desc: "A hands-on study on applying AI to everyday development, experimenting with LLMs and the latest tools.",
        fullDesc:
          "A practical AI study open to any developer, not just AI engineers. Experiment with LLMs and modern tools together, and apply what you learn to everyday development work.",
        tag: "Cohort 4",
        tagTone: "brand",
      },
      {
        slug: "blog",
        icon: "penLine",
        title: "Blog Study",
        desc: "Write one blog post a week for ten weeks, together.",
        fullDesc:
          "Publish one post a week on your own blog for ten weeks. Writing alongside peers builds the consistency that is hard to sustain alone.",
        tag: "Cohort 1",
        tagTone: "brand",
      },
    ],
  },
  programDetail: {
    backToHub: "All programs",
    howItWorks: "How it works",
    testimonialsTitle: "What participants say",
    testimonialsMore: "Read all testimonials",
    join: "How to join",
    details: {
      leetcode: {
        icon: "puzzle",
        title: "LeetCode Study",
        subtitleLinks: [{ label: "leetcode.dalestudy.com", url: "https://leetcode.dalestudy.com" }],
        overview:
          "A study group preparing for coding interviews. Over 15 weeks we solve five Blind 75 problems a week, submit solutions as GitHub PRs like an open-source project, and review each other's code, cheering each other on via the leaderboard.",
        tags: ["Blind 75", "5 problems a week", "GitHub PR reviews", "Leaderboard"],
        captures: [
          {
            src: "/images/programs/leetcode-discussions.jpg",
            alt: "GitHub Discussions with weekly problem announcements",
            cap: "Weekly problems and announcements are shared via GitHub Discussions.",
          },
          {
            src: "/images/programs/leetcode-studyroom.jpg",
            alt: "Week 1 study meeting in a Discord voice channel",
            cap: "Every week, solutions are discussed together in the Discord study room.",
          },
        ],
        steps: [
          { title: "Register for a cohort", desc: "Sign up on Discord during recruitment." },
          {
            title: "Solve weekly problems",
            desc: "Solve the week's five Blind 75 problems and submit them as PRs.",
          },
          { title: "Review code", desc: "Review peers' solutions and get feedback on yours." },
          {
            title: "Retrospect & graduate",
            desc: "Wrap up with a retrospective, then on to the next cohort.",
          },
        ],
        testimonials: [
          {
            quote:
              "The study lays out a 15-week problem roadmap and makes you review each other's code. That simple system is a remarkably powerful support.",
            author: "Ju Hwijung",
            login: "hwi-middle",
          },
          {
            quote:
              "Studying unfamiliar data structures and getting code reviews from senior developers: valuable experiences that are hard to come by as a junior.",
            author: "Sam Lee",
            login: "SamTheKorean",
          },
          {
            quote:
              "I got high-quality reviewer feedback outside my company. Beyond solving problems, I learned how to write better code.",
            author: "Reese",
            login: "reeseo3o",
          },
        ],
        joinDesc: "See the full curriculum and cohort schedule on the dedicated site.",
        ctaLabel: "Visit leetcode.dalestudy.com",
        ctaUrl: "https://leetcode.dalestudy.com",
        cta2Label: "GitHub repo",
        cta2Url: "https://github.com/DaleStudy/leetcode-study",
      },
      ai: {
        icon: "brain",
        title: "AI Study",
        subtitleLinks: [{ label: "Discord #ai", url: "https://dales.link/discord" }],
        overview:
          "A hands-on AI study for working software developers. Learn LLMs, prompt engineering, and open-source AI tooling together, and discuss how to apply them to real development work like code generation and workflow automation in weekly sessions.",
        tags: ["LLMs", "Prompt engineering", "Hands-on", "Weekly sessions"],
        captures: [
          {
            src: "/images/programs/ai-figjam-ideas.jpg",
            alt: "FigJam brainstorming board full of sticky notes on problems to solve with AI",
            cap: "FigJam brainstorming: the community picks the problems to solve with AI.",
          },
          {
            src: "/images/programs/ai-figjam-retro.jpg",
            alt: "FigJam retrospective board with wins, problems, and action items",
            cap: "Every project ends with a retrospective on FigJam.",
          },
          {
            src: "/images/programs/ai-last-meeting.jpg",
            alt: "Members waving at the season-closing online meeting",
            cap: "Wrapping up the season together.",
          },
        ],
        steps: [
          { title: "Pick a topic", desc: "Choose an AI technique or tool to explore together." },
          { title: "Study solo", desc: "Read and experiment during the week." },
          { title: "Share session", desc: "Rotate presenters, share learnings, and discuss." },
        ],
        testimonials: [],
        joinDesc: "Watch the AI channel on Discord for the next cohort announcement.",
        ctaLabel: "Join the Discord channel",
        ctaUrl: "https://dales.link/discord",
        cta2Label: "View GitHub",
        cta2Url: "https://github.com/DaleStudy",
      },
      blog: {
        icon: "penLine",
        title: "Blog Study",
        subtitleLinks: [{ label: "Discord #blog", url: "https://dales.link/discord" }],
        overview:
          "One post a week, for ten weeks, together. Publish on your own blog, read each other's posts, and exchange feedback. Open to everyone, from first-time bloggers to experienced writers building consistency.",
        tags: ["Weekly publishing", "10-week cohort", "Peer feedback"],
        captures: [],
        steps: [
          { title: "Share topics", desc: "Share what you'll write this week." },
          { title: "Draft", desc: "Write your draft before the deadline." },
          { title: "Exchange feedback", desc: "Read each other's posts and comment." },
          { title: "Publish", desc: "Publish the polished post on your blog." },
        ],
        testimonials: [],
        joinDesc: "The blog channel on Discord recruits for each cohort.",
        ctaLabel: "Join the Discord channel",
        ctaUrl: "https://dales.link/discord",
        cta2Label: "Read members' posts",
        cta2Url: "https://github.com/DaleStudy",
      },
      daleui: {
        icon: "palette",
        title: "daleui Design System",
        subtitleLinks: [
          { label: "daleui.com", url: "https://www.daleui.com" },
          { label: "npm daleui", url: "https://www.npmjs.com/package/daleui" },
        ],
        overview:
          "An open-source React design system specialized for Korean, built together by the community. Korean typography and accessibility (WCAG) come first, and designers and developers share a real-world collaboration process: issue triage, PR reviews, releases. Published to npm and used in real projects.",
        tags: ["Korean-first", "Accessibility", "React", "npm"],
        captures: [
          {
            src: "/images/programs/daleui-components.jpg",
            alt: "daleui v1.0 components: buttons, forms, tags, and cards in light and dark mode",
            cap: "daleui v1.0, components built by the community, in both light and dark mode.",
          },
        ],
        steps: [
          {
            title: "Pick an issue",
            desc: "Choose work from GitHub issues. Good first issues welcome.",
          },
          {
            title: "Design & spec",
            desc: "Refine the design in Figma and agree on the component API and token structure together.",
          },
          {
            title: "Build & PR",
            desc: "Implement the component with stories and tests, then open a PR.",
          },
          { title: "Code review", desc: "Polish the code through maintainer and peer reviews." },
          { title: "Release", desc: "Merged changes ship to npm with semantic versioning." },
        ],
        testimonials: [],
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
    story: {
      eyebrow: "Weekend prime time",
      title: "The rooms that never go dark on weekends",
      p1: "DaleStudy's golden hours are a little unusual: Saturday morning in Korea, Sunday night in North America. When prime time comes, people trickle into the voice channels until the rooms are full.",
      p2: "Weekdays are async chat. Weekends are a different story.",
      p3: "That's when text-only connections turn into real-time conversation and collaboration. Small actions beat grand resolutions: don't trust willpower, change your environment.",
      quotes: [
        "“I prepped a demo, anyone want to watch?”",
        "“Up for some quick pair programming?”",
        "“Could someone review this part?”",
      ],
      imgSrc: "/images/community/discord-rooms.png",
      imgAlt: "Members gathered in weekend voice channels",
      imgCaption: "One Saturday's voice channels, meeting rooms at capacity",
    },
    sections: [
      {
        icon: "messageCircle",
        title: "Coffee chat",
        desc: "A bot matches conversation partners every week. Join with a single slash command. Any topic goes, from career questions to hobbies.",
        detail:
          "Joining is simple: type one slash command on Discord and the bot pairs you with someone new every week. Career questions, job changes, the tech or hobby you are into lately: anything goes. Past the first awkward hello, a username becomes a colleague.",
        images: [
          {
            src: "/images/community/coffee-command.png",
            cap: "Join or leave with one /coffee command",
          },
        ],
      },
      {
        icon: "globe",
        title: "Co-working rooms",
        desc: "Voice channels are always open. Working on your own things, together. That presence builds consistency. Mic on or off, your choice.",
        detail:
          "There is no method to it. Come in and do your own work. Cam and mic on or off, or just say hi and work quietly. Somehow the tasks you kept postponing get done in this room. A running mate for the days you need focus.",
        images: [{ src: "/images/community/mogakco.jpg", cap: "Co-working room illustration" }],
      },
      {
        icon: "users",
        title: "Meetups",
        desc: "Regular meetups with talks and networking. Join from wherever you are, and organizers make sure first-timers feel at home.",
        detail:
          "We gather regularly for lightning talks and catch-ups. Talks don't need to be grand. Debugging war stories, retrospectives, and small tools you built are the most welcome. Organizers make sure first-timers are drawn into the conversation.",
        images: [
          {
            src: "/images/community/meetup-leaderboard.jpg",
            cap: "Leaderboard v1.0.0 demo at a meetup",
          },
          { src: "/images/community/meetup-kahoot.jpg", cap: "Kahoot quiz time together" },
          { src: "/images/community/meetup-quiz.jpg", cap: "Quiz podium winners" },
          { src: "/images/community/meetup-daleui.jpg", cap: "daleui lightning talk" },
          { src: "/images/community/meetup-ai-coach.jpg", cap: "AI coach project proposal" },
          { src: "/images/community/meetup-group.jpg", cap: "Wrapping up with the whole crew" },
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
    intro2:
      "Sponsorship is more than financial support: it is the foundation that keeps this community sustainable. We hope the culture of giving back, familiar in the global open-source ecosystem, takes root among Korean developer communities too.",
    quote:
      "“We believe that when small acts of support come together, they create positive change in the developer community.”",
    usesTitle: "Where your sponsorship goes",
    uses: [
      {
        icon: "globe",
        title: "Software & cloud",
        desc: "Covers the software subscriptions and cloud costs essential to running the community and team projects.",
      },
      {
        icon: "users",
        title: "Networking & learning",
        desc: "Supports networking events and expands learning resources to help members grow.",
      },
      {
        icon: "handHeart",
        title: "Open-source activity",
        desc: "Encourages open-source project work, creating greater value for the whole community.",
      },
    ],
    ctaTitle: "Become a sponsor",
    ctaSub: "Sponsorship starts at just $1 a month. Every bit helps, and you can stop anytime.",
    ctaBtn: "GitHub Sponsors",
    ctaBtn2: "OpenCollective",
    listNote: "Our sponsors, based on public GitHub Sponsors data.",
    transparencyTitle: "Transparent by default",
    transparencyDesc: "How funds are spent is shared publicly on GitHub and LinkedIn.",
    donationTitle: "Year-end donation",
    donationDesc:
      "Any funds remaining at the end of each year are donated in full to a non-profit organization.",
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
