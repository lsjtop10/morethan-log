interface Project {
  name: string
  href: string
}

interface Profile {
  name: string
  image: string
  role: string
  bio: string
  email: string
  linkedin: string
  github: string
  instagram: string
}

interface Blog {
  title: string
  description: string
  scheme: 'light' | 'dark' | 'system'
}

interface NotionConfig {
  pageId: string | undefined
}

interface GoogleAnalytics {
  enable: boolean
  config: {
    measurementId: string
  }
}

interface GoogleSearchConsole {
  enable: boolean
  config: {
    siteVerification: string
  }
}

interface NaverSearchAdvisor {
  enable: boolean
  config: {
    siteVerification: string
  }
}

interface Utterances {
  enable: boolean
  config: {
    repo: string
    'issue-term': string
    label: string
  }
}

interface Cusdis {
  enable: boolean
  config: {
    host: string
    appid: string
  }
}

interface Config {
  profile: Profile
  projects: Project[]
  blog: Blog
  link: string
  since: number
  lang: 'en-US' | 'zh-CN' | 'zh-HK' | 'zh-TW' | 'ja-JP' | 'es-ES' | 'ko-KR'
  ogImageGenerateURL: string
  notionConfig: NotionConfig
  googleAnalytics: GoogleAnalytics
  googleSearchConsole: GoogleSearchConsole
  naverSearchAdvisor: NaverSearchAdvisor
  utterances: Utterances
  cusdis: Cusdis
  isProd: boolean
  revalidateTime: number
}

const CONFIG: Config = {
  // profile setting (required)
  profile: {
    name: "orca",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "",
    bio: "",
    email: "",
    linkedin: "",
    github: "lsjtop10",
    instagram: "",
  },
  projects: [
    {
      name: "morethan-log",
      href: "https://morethan-log.vercel.app",
    }
  ],
  // blog setting (required)
  blog: {
    title: "Orca log",
    description: "welcome to orca-log!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

export { CONFIG }
