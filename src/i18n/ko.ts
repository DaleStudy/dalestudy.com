import type { Messages } from "./types";

export const ko: Messages = {
  siteName: "달레 스터디",
  langSwitch: "EN",
  nav: { about: "소개", programs: "프로그램", community: "커뮤니티", sponsor: "후원" },
  cta: {
    joinDiscord: "Discord 가입",
    browsePrograms: "프로그램 둘러보기",
    learnMore: "자세히 보기",
  },
  home: {
    heroTag: "함께 성장하는 오픈소스 커뮤니티",
    heroTitle1: "평범한 개발자들이 함께 만드는",
    heroTitle2: "특별한 프로젝트",
    heroSub:
      "오픈소스 프로젝트와 그룹 스터디를 통해 실제 협업을 경험하세요. 코드 리뷰, 페어 프로그래밍, 그리고 서로의 성장을 응원하는 동료들이 기다립니다.",
    missionSummary:
      "달레 스터디는 오픈소스 프로젝트를 통해 개발자들이 실무처럼 협업하며 성장하도록 돕습니다. 실력의 문턱 없이, 기여하려는 마음만 있다면 누구나 함께할 수 있습니다.",
    moreAbout: "커뮤니티 더 알아보기",
    programsTitle: "주요 프로그램",
    programsSub: "알고리즘부터 디자인 시스템까지, 관심사에 맞는 프로그램에서 협업을 시작하세요.",
    communityTitle: "커뮤니티 활동",
    communitySub: "스터디 밖에서도 연결은 계속됩니다.",
    moreCommunity: "커뮤니티 활동 전체 보기",
    sponsorBannerTitle: "커뮤니티의 성장을 함께 만들어 주세요",
    sponsorBannerSub:
      "여러분의 후원이 광고도 유료 멤버십도 없는 이 커뮤니티를 지속 가능하게 만듭니다.",
    sponsorBannerCta: "후원하기",
    stats: [
      { value: "1,500+", label: "Discord 멤버" },
      { value: "400+", label: "GitHub 멤버" },
      { value: "1,000+", label: "LinkedIn 팔로워" },
      { value: "300+", label: "GitHub 스타" },
    ],
    activities: [
      {
        icon: "messageCircle",
        title: "커피챗",
        desc: "봇이 매주 대화 상대를 자동으로 매칭해 줍니다. 코드 얘기든 커리어 고민이든, 주제는 자유입니다.",
      },
      {
        icon: "globe",
        title: "모각코",
        desc: "상시 열려 있는 음성 채널에서 각자 작업합니다. 혼자가 아니라는 느낌이 꾸준함을 만듭니다.",
      },
      {
        icon: "users",
        title: "밋업",
        desc: "발표와 네트워킹이 있는 정기 모임입니다. 어디에 살든 참여할 수 있습니다.",
      },
    ],
  },
  about: {
    title: "소개",
    intro: "달레 스터디는 개발자들이 함께 배우고, 만들고, 성장하는 오픈소스 커뮤니티입니다.",
    missionLabel: "미션",
    missionBody:
      "오픈소스 프로젝트를 통해 개발자들이 실무처럼 협업하며 성장하도록 돕는다. 혼자서는 얻기 어려운 코드 리뷰, 협업 프로세스, 커뮤니케이션 경험을 커뮤니티 안에서 자연스럽게 쌓을 수 있습니다.",
    visionLabel: "비전",
    visionBody:
      "실력이나 배경과 관계없이 누구나 기여자가 될 수 있는 커뮤니티. 받은 도움을 다시 나누는 선순환이 커뮤니티를 지속 가능하게 만듭니다.",
    valuesTitle: "핵심가치",
    values: [
      {
        icon: "thumbsUp",
        title: "자율과 존중",
        desc: "누구도 강요하지 않습니다. 각자의 속도와 방식이 존중받는 공간을 지킵니다.",
      },
      {
        icon: "messageCircle",
        title: "소통과 협업",
        desc: "혼자 잘하는 것보다 함께 잘하는 법을 배웁니다. 리뷰와 대화가 성장의 도구입니다.",
      },
      {
        icon: "heartHandshake",
        title: "기여와 공유",
        desc: "받은 도움을 다시 나눕니다. 작은 기여가 모여 커뮤니티의 선순환을 만듭니다.",
      },
    ],
    teamTitle: "운영진",
    teamIntro:
      "운영진은 건강한 스터디 문화를 만들고 참여자분들께 좋은 경험을 드리기 위해 늘 고민합니다. 정기 회의와 회고를 거치고, 매 기수 참여자들의 피드백을 다음 기수 운영에 반영합니다.",
    members: [
      { login: "DaleSeo", name: "DaleSeo", role: "커뮤니티 매니저" },
      { login: "SamTheKorean", name: "Sam", role: "리트코드 스터디 리드" },
      { login: "yolophg", name: "Helena", role: "디자인시스템 리드" },
      { login: "sounmind", name: "Evan", role: "인공지능 스터디 리드" },
      { login: "lms0806", name: "lms0806", role: "블로그 스터디 리드" },
    ],
    teamCtaText:
      "달레 스터디는 자원봉사 운영진과 함께 만들어갑니다. 커뮤니티 운영에 힘을 보태고 싶다면 언제든 환영합니다.",
    teamCtaBtn: "운영진 지원하기",
  },
  programs: {
    hubTitle: "프로그램",
    hubSub:
      "진행 중인 스터디와 프로젝트입니다. 스터디는 참여자의 경험을 지속적으로 개선하기 위해 기수제로 운영되고, 프로젝트는 모두 오픈소스입니다. 모든 프로그램은 Discord와 GitHub에서 공개적으로 진행됩니다.",
    otherTitle: "기타 프로젝트",
    commonTitle: "기수를 거듭할수록 성숙해지는 프로그램",
    commonSub:
      "회고와 피드백이 다음 기수로 이어지는 선순환, 달레 스터디가 프로그램을 운영하는 방식입니다.",
    commonSteps: [
      {
        title: "Discord에서 시작",
        desc: "채널에 인사를 남기거나 모집 공지에 신청하면 바로 합류할 수 있습니다.",
      },
      {
        title: "GitHub에서 협업",
        desc: "PR, 코드 리뷰, 이슈 등 실무와 같은 공개 협업 프로세스로 진행됩니다.",
      },
      {
        title: "결과를 함께 공유",
        desc: "풀이, 글, 릴리스가 커뮤니티에 쌓이고 다음 참여자의 발판이 됩니다.",
      },
      {
        title: "회고와 개선",
        desc: "기수가 끝나면 회고로 다음 기수를 개선하고, 수료자가 코치로 돌아옵니다.",
      },
    ],
    other: [
      {
        title: "리더보드",
        desc: "리트코드 스터디의 수료증 발급과 동기 부여 도구",
        url: "https://leaderboard.dalestudy.com",
      },
      {
        title: "챗봇",
        desc: "커뮤니티에 대한 질문에 답해주는 채팅 UI",
        url: "https://chat.dalestudy.com",
      },
      { title: "스케줄러", desc: "모임 일정 조율 도구", url: "https://schedule.dalestudy.com" },
      {
        title: "에이전트 스킬",
        desc: "AI 에이전트용 스킬 모음",
        url: "https://www.skills.sh/dalestudy/skills",
      },
    ],
    cards: [
      {
        slug: "leetcode",
        icon: "puzzle",
        title: "리트코드 스터디",
        desc: "코딩 인터뷰 필수 문제 모음 Blind 75를 함께 푸는 스터디. PR 코드 리뷰로 풀이를 다듬습니다.",
        fullDesc:
          "코딩 인터뷰 준비를 위해 15주 동안 Blind 75 문제를 함께 푸는 스터디입니다. 풀이를 GitHub PR로 제출해 서로 리뷰하고, 리더보드로 동기를 얻으며 완주하면 수료증을 받습니다.",
        tag: "8기 진행 중",
        tagTone: "brand",
      },
      {
        slug: "daleui",
        icon: "palette",
        title: "달레 UI 디자인시스템",
        desc: "한국어 환경에 특화된 오픈소스 디자인 시스템을 커뮤니티가 함께 만듭니다.",
        fullDesc:
          "한국어 사용자 경험에 특화된 오픈소스 React 디자인 시스템입니다. 디자이너와 개발자가 함께 이슈 선택부터 릴리스까지 실무와 같은 협업 프로세스를 경험합니다.",
        tag: "상시 모집",
        tagTone: "success",
      },
      {
        slug: "ai",
        icon: "brain",
        title: "인공지능 스터디",
        desc: "개발 실무에 AI를 접목하는 방법을 함께 탐구하는 스터디. LLM과 최신 도구를 실험합니다.",
        fullDesc:
          "AI 엔지니어가 아니어도 참여할 수 있는 실무 중심 AI 스터디입니다. LLM과 최신 도구를 함께 실험하고, 배운 것을 매주 발표하며 개발 업무에 적용합니다.",
        tag: "4기 진행 중",
        tagTone: "brand",
      },
      {
        slug: "blog",
        icon: "penLine",
        title: "블로그 스터디",
        desc: "매주 한 편씩 10주 동안 함께 쓰는 기술 블로그 스터디.",
        fullDesc:
          "매주 한 편씩 10주 동안 각자의 블로그에 글을 발행하는 스터디입니다. 함께 쓰는 동료들 덕분에 혼자서는 만들기 어려운 꾸준함이 생깁니다.",
        tag: "1기 진행 중",
        tagTone: "brand",
      },
    ],
  },
  programDetail: {
    backToHub: "프로그램 전체 보기",
    howItWorks: "진행 방식",
    testimonialsTitle: "참여자 후기",
    testimonialsMore: "후기 전체 보기",
    join: "참여 방법",
    details: {
      leetcode: {
        icon: "puzzle",
        title: "리트코드 스터디",
        subtitleLinks: [{ label: "leetcode.dalestudy.com", url: "https://leetcode.dalestudy.com" }],
        overview:
          "개발자 해외 취업의 관문인 코딩 인터뷰를 준비하는 스터디입니다. 15주 동안 매주 5문제씩 Blind 75를 함께 풀고, 오픈소스 프로젝트처럼 GitHub PR로 답안을 제출해 상호 코드 리뷰를 합니다. 리더보드로 서로의 꾸준함을 응원합니다.",
        tags: ["Blind 75", "매주 5문제", "GitHub PR 리뷰", "리더보드"],
        captures: [
          {
            src: "/images/programs/leetcode-discussions.jpg",
            alt: "GitHub Discussions에 주차별 공지가 올라온 화면",
            cap: "주차별 문제와 공지는 GitHub Discussions로 공유됩니다.",
          },
          {
            src: "/images/programs/leetcode-studyroom.jpg",
            alt: "Discord 음성 채널에서 열린 리트코드 스터디 1주차 모임",
            cap: "매주 Discord 공부방에서 함께 풀이를 나눕니다.",
          },
        ],
        steps: [
          { title: "기수 등록", desc: "모집 기간에 Discord에서 참가 신청을 합니다." },
          {
            title: "매주 문제 풀이",
            desc: "주차별 Blind 75 문제 5개를 풀고 저장소에 PR을 올립니다.",
          },
          { title: "코드 리뷰", desc: "동료의 풀이를 리뷰하고 내 풀이도 피드백을 받습니다." },
          { title: "회고와 수료", desc: "기수가 끝나면 회고를 나누고 다음 기수로 이어집니다." },
        ],
        testimonials: [
          {
            quote:
              "달레 스터디는 15주간 풀어야 할 문제들의 로드맵을 제시하고, 서로의 코드를 리뷰하도록 강제합니다. 이 간단한 시스템이 매우 강력한 보조가 됩니다.",
            author: "Ju Hwijung",
            login: "hwi-middle",
          },
          {
            quote:
              "몰랐던 자료구조들을 공부하고 선배 개발자분들께 코드 리뷰도 받는 등 주니어 개발자로서 하기 어려운 값진 경험을 하고 있습니다.",
            author: "Sam Lee",
            login: "SamTheKorean",
          },
          {
            quote:
              "회사 밖의 생태계 안에서 수준 높은 리뷰어 분들의 피드백을 받을 수 있었습니다. 단순히 문제를 푸는 것을 넘어서, 어떻게 하면 더 좋은 코드를 작성할 수 있을지 많이 배웠습니다.",
            author: "Reese",
            login: "reeseo3o",
          },
        ],
        joinDesc: "자세한 커리큘럼과 기수 일정은 전용 사이트에서 확인하세요.",
        ctaLabel: "leetcode.dalestudy.com 방문",
        ctaUrl: "https://leetcode.dalestudy.com",
        cta2Label: "GitHub 저장소",
        cta2Url: "https://github.com/DaleStudy/leetcode-study",
      },
      ai: {
        icon: "brain",
        title: "인공지능 스터디",
        subtitleLinks: [{ label: "Discord #ai", url: "https://dales.link/discord" }],
        overview:
          "일반 소프트웨어 개발자를 위한 실무 중심 AI 스터디입니다. LLM, 프롬프트 엔지니어링 같은 최신 기술과 오픈소스 AI 도구를 함께 익히고, 코드 생성과 업무 자동화처럼 개발 실무에 접목하는 방법을 매주 발표하고 토론합니다.",
        tags: ["LLM", "프롬프트 엔지니어링", "실무 적용", "매주 세션"],
        captures: [
          {
            src: "/images/programs/ai-figjam-ideas.jpg",
            alt: "FigJam 브레인스토밍 보드: AI로 해결할 문제를 포스트잇으로 모은 화면",
            cap: "FigJam 브레인스토밍: AI로 해결할 문제를 커뮤니티가 직접 고릅니다.",
          },
          {
            src: "/images/programs/ai-figjam-retro.jpg",
            alt: "FigJam 회고 보드: 잘한 점, 어려웠던 점, 배움과 액션 아이템을 정리한 화면",
            cap: "프로젝트가 끝나면 FigJam으로 함께 회고합니다.",
          },
          {
            src: "/images/programs/ai-last-meeting.jpg",
            alt: "시즌을 마무리하는 모임에서 손을 흔드는 멤버들",
            cap: "시즌을 마무리하는 모임.",
          },
        ],
        steps: [
          { title: "주제 선정", desc: "함께 익힐 AI 기술이나 실험할 도구를 정합니다." },
          { title: "각자 학습", desc: "한 주 동안 각자 읽고 실험합니다." },
          { title: "공유 세션", desc: "발표자를 돌아가며 배운 것을 발표하고 토론합니다." },
        ],
        testimonials: [],
        joinDesc: "Discord의 인공지능 채널에서 다음 기수 모집 소식을 확인하세요.",
        ctaLabel: "Discord 채널 참여",
        ctaUrl: "https://dales.link/discord",
        cta2Label: "GitHub 보기",
        cta2Url: "https://github.com/DaleStudy",
      },
      blog: {
        icon: "penLine",
        title: "블로그 스터디",
        subtitleLinks: [{ label: "Discord #blog", url: "https://dales.link/discord" }],
        overview:
          "매주 한 편씩, 10주 동안, 함께 씁니다. 각자의 블로그에 글을 발행하고 서로의 글을 읽으며 피드백을 나눕니다. 블로그를 시작하려는 분부터 꾸준함을 만들고 싶은 경험자까지 누구나 참여할 수 있습니다.",
        tags: ["주 1회 발행", "10주 과정", "상호 피드백"],
        captures: [],
        steps: [
          { title: "주제 공유", desc: "이번 주에 쓸 글의 주제를 공유합니다." },
          { title: "초안 작성", desc: "마감까지 초안을 씁니다." },
          { title: "피드백 교환", desc: "서로의 글을 읽고 피드백을 남깁니다." },
          { title: "발행", desc: "다듬은 글을 각자의 블로그에 발행합니다." },
        ],
        testimonials: [],
        joinDesc: "Discord의 블로그 채널에서 다음 기수 참여자를 모집합니다.",
        ctaLabel: "Discord 채널 참여",
        ctaUrl: "https://dales.link/discord",
        cta2Label: "멤버들의 글 보기",
        cta2Url: "https://github.com/DaleStudy",
      },
      daleui: {
        icon: "palette",
        title: "달레 UI 디자인시스템",
        subtitleLinks: [
          { label: "daleui.com", url: "https://www.daleui.com" },
          { label: "npm daleui", url: "https://www.npmjs.com/package/daleui" },
        ],
        overview:
          "한국어 환경에 특화된 오픈소스 React 디자인 시스템을 커뮤니티가 함께 만듭니다. 한국어 타이포그래피와 접근성(WCAG)을 최우선으로 고려하며, 디자이너와 개발자가 이슈 선택부터 PR 리뷰, 릴리스까지 실무와 같은 협업 프로세스를 그대로 경험합니다. npm에 배포되어 실제 프로젝트에서 사용됩니다.",
        tags: ["한국어 특화", "접근성", "React", "npm 배포"],
        captures: [
          {
            src: "/images/programs/daleui-components.jpg",
            alt: "달레 UI v1.0 컴포넌트: 버튼, 폼, 태그, 카드가 라이트·다크 모드로 정리된 화면",
            cap: "달레 UI v1.0, 커뮤니티가 함께 만든 컴포넌트들, 라이트·다크 모드 모두 지원합니다.",
          },
        ],
        steps: [
          {
            title: "이슈 선택",
            desc: "GitHub 이슈에서 하고 싶은 작업을 고릅니다. good first issue부터 시작해도 좋습니다.",
          },
          {
            title: "디자인과 설계",
            desc: "Figma에서 디자인을 다듬고, 컴포넌트 API와 토큰 구조를 함께 논의해 확정합니다.",
          },
          {
            title: "구현과 PR",
            desc: "컴포넌트를 구현하고 스토리북과 테스트를 갖춰 PR을 올립니다.",
          },
          { title: "코드 리뷰", desc: "메인테이너와 동료들의 리뷰를 거쳐 코드를 다듬습니다." },
          { title: "릴리스", desc: "머지된 변경은 시맨틱 버저닝으로 npm에 배포됩니다." },
        ],
        testimonials: [],
        joinDesc:
          "디자인 시스템에 관심이 있다면 저장소의 이슈부터 살펴보세요. 디자이너의 기여도 환영합니다.",
        ctaLabel: "daleui.com 방문",
        ctaUrl: "https://www.daleui.com",
        cta2Label: "GitHub 저장소",
        cta2Url: "https://github.com/DaleStudy/daleui",
      },
    },
  },
  community: {
    title: "커뮤니티 활동",
    sub: "스터디가 전부는 아닙니다. 커피챗, 모각코, 밋업으로 연결을 이어갑니다.",
    story: {
      eyebrow: "주말 프라임 타임",
      title: "주말에도 불이 꺼지지 않는 회의실",
      p1: "달레 스터디의 황금 시간대는 조금 독특합니다. 한국 시간으로는 토요일 아침부터, 북미 동부 시간으로는 일요일 밤까지. 이 시간이 되면 음성 채널로 하나둘 사람들이 모여 회의실을 가득 채웁니다.",
      p2: "평일에는 채팅으로 비동기 소통을 하지만, 주말이 되면 이야기가 달라집니다.",
      p3: "텍스트로만 이어지던 연결이 실시간 대화와 협업으로 바뀌는 순간입니다. 거창한 결심보다 중요한 건 작은 행동 하나. 의지를 너무 믿지 말고, 환경을 바꿔보세요.",
      quotes: [
        "“데모를 준비했는데 같이 볼 사람?”",
        "“지금 잠깐 페어 프로그래밍 가능해요?”",
        "“이 부분 코드 리뷰 부탁드려요!”",
      ],
      imgSrc: "/images/community/discord-rooms.png",
      imgAlt: "주말 음성 채널에 모인 멤버들",
      imgCaption: "어느 토요일의 음성 채널, 회의실이 가득 찼습니다",
    },
    sections: [
      {
        icon: "messageCircle",
        title: "커피챗",
        desc: "봇이 매주 자동으로 대화 상대를 매칭해 줍니다. 슬래시 명령어 하나로 참여하고, 주제는 자유입니다. 커리어 고민부터 취미까지 무엇이든 좋습니다.",
        detail:
          "참여는 간단합니다. Discord에서 슬래시 명령어 하나를 입력해 두면 매주 봇이 새로운 상대를 찾아 짝을 지어 줍니다. 커리어 고민, 이직 이야기, 요즘 빠져 있는 기술이나 취미까지 무엇이든 나눌 수 있습니다. 어색한 첫 인사만 지나면 화면 너머의 아이디가 동료가 됩니다.",
        images: [
          { src: "/images/community/coffee-command.png", cap: "/coffee 명령어 하나로 참여와 중단" },
        ],
      },
      {
        icon: "globe",
        title: "모각코",
        desc: "음성 채널이 상시 열려 있습니다. 각자 자기 일을 하면서도 혼자가 아니라는 느낌이 꾸준함을 만듭니다. 마이크는 켜도, 꺼도 좋습니다.",
        detail:
          "방법은 따로 없습니다. 들어와서 각자 할 일을 하면 됩니다. 캠과 마이크는 켜도 꺼도 좋고, 인사만 남기고 조용히 작업해도 괜찮습니다. 혼자서는 자꾸 미뤄지던 일이 이 방에서는 이상하게 진행됩니다. 집중이 필요한 날의 러닝메이트인 셈입니다.",
        images: [{ src: "/images/community/mogakco.jpg", cap: "모각코 안내 일러스트" }],
      },
      {
        icon: "users",
        title: "밋업",
        desc: "발표와 네트워킹이 있는 정기 모임입니다. 어디에 살든 참여할 수 있고, 처음 온 사람도 어색하지 않도록 운영진이 챙깁니다.",
        detail:
          "정기적으로 모여 라이트닝 토크를 듣고 근황을 나눕니다. 발표는 거창하지 않아도 됩니다. 삽질기, 회고, 작게 만든 도구 이야기가 오히려 환영받습니다. 처음 온 사람이 겉돌지 않도록 운영진이 자연스럽게 대화에 끌어들입니다.",
        images: [
          { src: "/images/community/meetup-leaderboard.jpg", cap: "밋업에서 리더보드 v1.0.0 데모" },
          { src: "/images/community/meetup-kahoot.jpg", cap: "다 같이 Kahoot 퀴즈 타임" },
          { src: "/images/community/meetup-quiz.jpg", cap: "퀴즈 시상대의 주인공들" },
          { src: "/images/community/meetup-daleui.jpg", cap: "달레 UI 라이트닝 토크" },
          { src: "/images/community/meetup-ai-coach.jpg", cap: "AI 코치 프로젝트 제안 발표" },
          { src: "/images/community/meetup-group.jpg", cap: "밋업을 마무리하는 단체 화면" },
        ],
      },
    ],
    ctaTitle: "오늘 바로 시작하세요",
    ctaSub: "가입 즉시 모든 활동에 참여할 수 있습니다. 준비물은 없습니다.",
  },
  sponsor: {
    title: "후원",
    intro:
      "달레 스터디는 광고나 유료 멤버십 없이 운영되는 비영리 커뮤니티입니다. 여러분의 후원이 커뮤니티를 지탱합니다.",
    intro2:
      "후원은 단순한 금전적 지원을 넘어, 커뮤니티가 지속 가능할 수 있는 중요한 기반이 됩니다. 받은 도움을 다시 나누는 후원 문화가 해외 오픈소스 생태계처럼 국내 개발자 커뮤니티에도 뿌리내리기를 바랍니다.",
    quote:
      "“여러분의 작은 마음이 모이면 개발자 커뮤니티에 긍정적인 변화를 만들 수 있다고 믿습니다.”",
    usesTitle: "후원금은 이렇게 쓰입니다",
    uses: [
      {
        icon: "globe",
        title: "소프트웨어 & 클라우드",
        desc: "커뮤니티 운영과 팀 프로젝트 진행에 필수적인 소프트웨어 구독료와 클라우드 사용료를 충당합니다.",
      },
      {
        icon: "users",
        title: "네트워킹 & 학습 지원",
        desc: "네트워킹 모임을 지원하고 학습 리소스를 확충해 참여자들의 성장을 돕습니다.",
      },
      {
        icon: "handHeart",
        title: "오픈소스 활동 장려",
        desc: "오픈소스 프로젝트 활동을 장려해 커뮤니티 전체에 더 큰 가치를 만드는 방향으로 집행됩니다.",
      },
    ],
    ctaTitle: "후원으로 함께해 주세요",
    ctaSub: "월 1달러부터 시작할 수 있습니다. 작은 후원도 큰 힘이 되고, 언제든 중단할 수 있습니다.",
    ctaBtn: "GitHub Sponsors",
    ctaBtn2: "OpenCollective",
    listNote: "함께해 주시는 후원자들 (GitHub Sponsors 공개 정보 기준)",
    transparencyTitle: "투명한 운영",
    transparencyDesc: "후원금 사용 내역은 GitHub과 LinkedIn을 통해 투명하게 공개합니다.",
    donationTitle: "남은 후원금 기부",
    donationDesc: "매년 남은 후원금은 전액 비영리 단체에 기부합니다.",
    corpTitle: "기업 후원",
    corpDesc: "채용 브랜딩, 밋업 장소 제공, 서비스 크레딧 등 다양한 방식의 기업 후원을 환영합니다.",
    nonMoneyTitle: "비금전적 기여",
    nonMoneyDesc:
      "코드, 리뷰, 문서, 번역, 밋업 발표도 모두 소중한 기여입니다. 후원만이 기여의 유일한 방법은 아닙니다.",
  },
  notFound: {
    title: "페이지를 찾을 수 없어요",
    sub: "주소가 바뀌었거나 삭제된 페이지일 수 있습니다.",
    goHome: "홈으로 이동",
  },
  footer: {
    slogan: "평범한 개발자들이 함께 만드는 특별한 프로젝트",
    channels: "채널",
    studies: "스터디",
    projects: "프로젝트",
    support: "후원",
    rights: "All rights reserved.",
  },
  seo: {
    home: {
      title: "달레 스터디: 평범한 개발자들이 함께 만드는 특별한 프로젝트",
      description:
        "오픈소스 프로젝트와 그룹 스터디를 통해 실제 협업을 경험하는 개발자 커뮤니티. 코드 리뷰, 페어 프로그래밍, 그리고 서로의 성장을 응원하는 동료들이 기다립니다.",
    },
    about: {
      title: "소개 | 달레 스터디",
      description:
        "달레 스터디의 미션, 비전, 핵심가치를 소개합니다. 개발자들이 함께 배우고, 만들고, 성장하는 오픈소스 커뮤니티입니다.",
    },
    programs: {
      title: "프로그램 | 달레 스터디",
      description:
        "리트코드 스터디, 인공지능 스터디, 블로그 스터디, 달레 UI 디자인시스템까지 달레 스터디에서 진행 중인 스터디와 오픈소스 프로젝트를 소개합니다.",
    },
    community: {
      title: "커뮤니티 활동 | 달레 스터디",
      description:
        "스터디 밖에서도 이어지는 달레 스터디의 네트워킹 활동, 커피챗·모각코·밋업을 소개합니다.",
    },
    sponsor: {
      title: "후원 | 달레 스터디",
      description:
        "달레 스터디는 광고 없이 운영되는 비영리 개발자 커뮤니티입니다. GitHub Sponsors로 커뮤니티의 성장을 함께 만들어 주세요.",
    },
  },
};
