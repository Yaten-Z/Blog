import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "不眠集",
  EMAIL: "Yaten-Z@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "·不眠集· Yaten's Blog",
};

export const BLOG: Metadata = {
  TITLE: "文章",
  DESCRIPTION: "Thoughts, stories and ideas.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Homepage",
    HREF: "https://yaten.xyz",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/Yaten-Z"
  },
  { 
    NAME: "QQ",
    HREF: "https://qm.qq.com/q/LOfiKrSCQk",
  }
];
