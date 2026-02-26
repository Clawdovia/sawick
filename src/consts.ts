// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://sawick.me/",
  author: "Sawick",
  profile: "https://sawick.me/about",
  desc: "Building AI autonomous cognitive layers. Three machines, three cognitive layers. Documented in public, in real time.",
  title: "Sawick",
  ogImage: "sawick-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit on GitHub",
    url: "https://github.com/Clawdovia/sawick/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "America/New_York",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Posts",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links — only what we use
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://twitter.com/sawick_",
    label: "Twitter",
  },
  {
    href: "mailto:me@sawick.me",
    label: "Email",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  Twitter: "twitter",
  Email: "mail",
  RSS: "rss",
};
