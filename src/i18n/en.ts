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
      { value: "900+", label: "LinkedIn followers" },
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
    showcaseTitle: "Built by the community",
    showcaseSub:
      "Participation leaves products, not just promises. Everything is open source, and still evolving.",
    showcase: [
      {
        title: "daleui",
        desc: "An open-source React design system specialized for Korean, published to npm and used in real projects.",
        host: "daleui.com",
        url: "https://www.daleui.com",
      },
      {
        title: "Leaderboard",
        desc: "Visualizes LeetCode study participation and issues certificates.",
        host: "leaderboard.dalestudy.com",
        url: "https://leaderboard.dalestudy.com",
      },
      {
        title: "LeetCode study site",
        desc: "A dedicated site with the curriculum and cohort schedule.",
        host: "leetcode.dalestudy.com",
        url: "https://leetcode.dalestudy.com",
      },
      {
        title: "Chatbot",
        desc: "A chat UI that answers questions about the community.",
        host: "chat.dalestudy.com",
        url: "https://chat.dalestudy.com",
      },
      {
        title: "Coffee chat",
        desc: "A bot that auto-matches conversation partners each week. Meet a new colleague with one slash command.",
        host: "coffee.dalestudy.com",
        url: "https://coffee.dalestudy.com",
      },
      {
        title: "Scheduler",
        desc: "A tool for coordinating meeting schedules.",
        host: "schedule.dalestudy.com",
        url: "https://schedule.dalestudy.com",
      },
      {
        title: "Agent Skills",
        desc: "A skill collection for AI agents.",
        host: "skills.sh",
        url: "https://www.skills.sh/dalestudy/skills",
      },
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Is there a participation fee?",
        a: "No, everything is free. DaleStudy is a non-profit community run on sponsorships, with no ads or paid membership.",
      },
      {
        q: "How much skill do I need?",
        a: "There is no skill threshold. Aspiring developers, juniors, and career changers all start from different places, and every starting point is respected. Wanting to contribute is enough.",
      },
      {
        q: "Can I join while working full-time?",
        a: "Yes. Weekdays are async on Discord and GitHub, and real-time gatherings happen during weekend prime time (Saturday morning in Korea, Sunday night in North America), so it fits alongside a job.",
      },
      {
        q: "Can I join from abroad?",
        a: "Of course. Everything happens online, and schedules account for both Korean and North American time zones. Members join from many countries.",
      },
      {
        q: "How much time does it take?",
        a: "It depends on the program: five problems a week for the LeetCode study, one post a week for the blog study. What matters most is going steadily at your own pace.",
      },
      {
        q: "How do I get started?",
        a: "Join Discord and say hi. Cohort-based studies recruit via announcements; projects and community activities are open the moment you join.",
      },
    ],
  },
  about: {
    title: "About",
    intro:
      "DaleStudy is an open-source community where developers learn, build, and grow together.",
    missionLabel: "Mission",
    missionMain:
      "Help developers grow by collaborating on open-source projects the way real teams do.",
    missionSubs: [
      "DaleStudy is a collaborative learning community built around open-source projects that mirror professional development. Teams experience the full cycle: code review, design, testing, deployment, and collaboration. Finished projects ship as working services that become real portfolios.",
    ],
    visionLabel: "Vision",
    visionMain:
      "Build a sustainable open-source learning ecosystem where developers learn, grow, and lead one another.",
    visionSubs: [
      "Projects evolve continuously like real products, open to anyone on GitHub and Discord regardless of location or background. Members who grow here return as mentors and reviewers, a virtuous cycle that leads the next generation.",
    ],
    photoSrc: "/images/community/discord-rooms.png",
    photoAlt: "Members gathered in weekend voice channels",
    photoCaption: "One Saturday's voice channels, meeting rooms at capacity",
    valuesTitle: "Core values",
    values: [
      {
        icon: "thumbsUp",
        title: "Autonomy & Respect",
        summary:
          "Choose, own, and grow on your own terms. Because every starting point is respected, anyone can ask and take on challenges freely.",
      },
      {
        icon: "messageCircle",
        title: "Communication & Collaboration",
        summary:
          "We practice async communication and collaboration on GitHub and Discord, building soft skills that are hard to gain alone.",
      },
      {
        icon: "heartHandshake",
        title: "Contribution & Sharing",
        summary:
          "Small contributions grow the project and the contributor alike. Paying help forward keeps the community sustainable.",
      },
    ],
    story: {
      eyebrow: "Weekend prime time",
      title: "The rooms that never go dark on weekends",
      p1: "DaleStudy's golden hours are a little unusual: Saturday morning in Korea, Sunday night in North America. When prime time comes, people trickle into the voice channels until the rooms are full.",
      p2: "Weekdays are async chat. Weekends are a different story.",
      p3: "That's when text-only connections turn into real-time conversation and collaboration. Small actions beat grand resolutions. Don't trust willpower, change your environment.",
      quotes: [
        "“I prepped a demo, anyone want to watch?”",
        "“Up for some quick pair programming?”",
        "“Could someone review this part?”",
      ],
    },
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
        title: "Connect on Discord",
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
    reviewsTitle: "Reviews",
    reviewsSub:
      "Stories written by the participants themselves: the voices that show best what DaleStudy is like.",
    reviews: [
      {
        program: "LeetCode Study",
        quote:
          "The study lays out a 15-week problem roadmap and makes you review each other's code. That simple system is a remarkably powerful support.",
        author: "Ju Hwijung",
        login: "hwi-middle",
      },
      {
        program: "LeetCode Study",
        quote:
          "Studying unfamiliar data structures and getting code reviews from senior developers: valuable experiences that are hard to come by as a junior.",
        author: "Sam Lee",
        login: "SamTheKorean",
      },
      {
        program: "LeetCode Study",
        quote:
          "I got high-quality reviewer feedback outside my company. Beyond solving problems, I learned how to write better code.",
        author: "Reese",
        login: "reeseo3o",
      },
      {
        program: "LeetCode Study",
        quote:
          "Because we were working toward the same goal together, I kept solving problems consistently. Writing solutions hoping to help others even a little made me write more careful code, too.",
        author: "Dongyeong Chon",
        login: "obzva",
      },
      {
        program: "LeetCode Study",
        quote:
          "The biggest change was how I approach a problem. I used to just start coding; now I weigh time and space complexity first and think about which data structure and algorithm fit before touching the keyboard.",
        author: "E.M. Lee",
        login: "jamiebase",
      },
      {
        program: "LeetCode Study",
        quote:
          "Thanks to DaleStudy's system for reviewing code across languages, I finished the cohort while picking up five new languages. You just solve and post reviews, and before long you are a contributor across every directory on the leaderboard.",
        author: "yhkee0404",
        login: "yhkee0404",
      },
      {
        program: "daleui",
        quote:
          "From issue triage to npm release, I experienced a design-system release process that is hard to get even at work. Now my portfolio includes a package people actually use.",
        author: "daleui contributor",
      },
      {
        program: "AI Study",
        quote:
          "Presenting felt intimidating, but sharing in rotation every week turned me into the person who tries AI tools first at work.",
        author: "AI Study participant",
      },
      {
        program: "Blog Study",
        quote:
          "Alone I never made it past three posts; writing together, finishing feels within reach. Peer reactions and feedback motivate more than any deadline.",
        author: "Blog Study participant",
      },
    ],
    reviewsCtaTitle: "Tell us your story too",
    reviewsCtaSub:
      "Reviews are the biggest help for the next participant. Share yours freely on Discord.",
    reviewsCtaBtn: "Leave a review",
    cards: [
      {
        slug: "leetcode",
        thumb: "/images/programs/leetcode-discussions.jpg",
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
        thumb: "/images/programs/daleui-cover.jpg",
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
        thumb: "/images/programs/ai-figjam-ideas.jpg",
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
        thumb: "/images/programs/blog-channel.jpg",
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
        subtitleLinks: [
          {
            label: "Discord #AI-스터디",
            url: "https://discord.com/channels/775115965964222492/1374000564807012382",
          },
        ],
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
        joinDesc: "Watch the AI-스터디 channel on Discord for the next cohort announcement.",
        ctaLabel: "Join the Discord channel",
        ctaUrl: "https://discord.com/channels/775115965964222492/1374000564807012382",
        cta2Label: "View GitHub",
        cta2Url: "https://github.com/DaleStudy",
      },
      blog: {
        icon: "penLine",
        title: "Blog Study",
        subtitleLinks: [
          {
            label: "Discord #블로그-스터디",
            url: "https://discord.com/channels/775115965964222492/1513687699729416232",
          },
        ],
        overview:
          "One post a week, for ten weeks, together. Publish on your own blog, read each other's posts, and exchange feedback. Open to everyone, from first-time bloggers to experienced writers building consistency.",
        tags: ["Weekly publishing", "10-week cohort", "Peer feedback"],
        captures: [
          {
            src: "/images/programs/blog-channel.jpg",
            alt: "Discord blog-sharing channel with members' published posts and reactions",
            cap: "Posts published each week pile up in the blog-sharing channel, followed by reactions and feedback.",
          },
          {
            src: "/images/programs/blog-linkedin.jpg",
            alt: "LinkedIn DaleStudy page introducing the week-one best posts",
            cap: "The most-recommended posts are shared beyond the community via the LinkedIn page.",
          },
        ],
        steps: [
          {
            title: "Publish",
            desc: "Publish one post a week on your own blog about what you learned or experienced.",
          },
          {
            title: "Share",
            desc: "Share the post with the community, with a link and a short note.",
          },
          {
            title: "Refine with feedback",
            desc: "Exchange feedback with peers from diverse backgrounds and polish your writing.",
          },
          {
            title: "Best post",
            desc: "The most-recommended post is shared beyond the community via the LinkedIn page.",
          },
        ],
        testimonials: [],
        joinDesc:
          "Each week runs from Monday 9 AM to the following Monday midnight, with a simple late-and-warning rule to keep everyone consistent. The 블로그-스터디 channel on Discord recruits for each cohort.",
        ctaLabel: "Join the Discord channel",
        ctaUrl: "https://discord.com/channels/775115965964222492/1513687699729416232",
        cta2Label: "Read members' posts",
        cta2Url: "https://github.com/DaleStudy",
      },
      daleui: {
        icon: "palette",
        title: "daleui Design System",
        subtitleLinks: [
          { label: "daleui.com", url: "https://www.daleui.com" },
          {
            label: "Figma UI Kit",
            url: "https://www.figma.com/community/file/1559487636467651573/daleui-figma-kit",
          },
          { label: "npm daleui", url: "https://www.npmjs.com/package/daleui" },
        ],
        overview:
          "An open-source React design system specialized for Korean, built together by the community. Korean typography and accessibility (WCAG) come first, and designers and developers share a real-world collaboration process: issue triage, PR reviews, releases. Published to npm and used in real projects.",
        tags: ["Korean-first", "Accessibility", "React", "npm"],
        captures: [
          {
            src: "/images/programs/daleui-cover.jpg",
            alt: "daleui cover: a design system for everyone, specialized for Korean",
            cap: "A design system for everyone that puts the Korean user experience first.",
          },
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
        desc: "Regular meetups with talks and networking. Join from wherever you are.",
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
    normsTitle: "Community norms",
    normsIntro:
      "A quick read to keep our study culture healthy, so everyone can enjoy meaningful activities together.",
    norms: [
      {
        title: "Participate freely, but consistently!",
        desc: "Study participation is voluntary, but consistency builds skill. No need to overdo it; keep going, even in small steps!",
      },
      {
        title: "Cheer each other on with reactions",
        desc: "Leave at least a reaction on others' posts and questions. Small responses become big motivation.",
      },
      {
        title: "Questions are always welcome!",
        desc: "If something is unclear, don't hesitate to ask. There is no such thing as a wrong question. This is a space where we grow together.",
      },
      {
        title: "Speak with care for one another",
        desc: "Since we communicate in text, please pay a little extra attention to tone and wording. Every member deserves respect.",
      },
      {
        title: "No bad manners",
        desc: "Per Discord policy, behavior that makes others uncomfortable may be moderated. Please keep conversations aligned with our study goals!",
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
