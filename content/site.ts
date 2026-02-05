import { Language } from "./types";

type Localized<T> = Record<Language, T>;

type SiteConfig = {
  name: Localized<string>;
  title: Localized<string>;
  affiliation: Localized<string>;
  location: Localized<string>;
  email: string;
  tagline: Localized<string>;
  researchInterests: Localized<string[]>;
  links: {
    scholar?: string;
    orcid?: string;
    github?: string;
    website?: string;
  };
  cv: {
    label: Localized<string>;
    file: string;
  };
  avatar: {
    alt: Localized<string>;
    file: string;
  };
  seo: {
    zh: {
      title: string;
      description: string;
      keywords: string[];
    };
    en: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
};

export const site: SiteConfig = {
  name: {
    zh: "张三",
    en: "San Zhang"
  },
  title: {
    zh: "助理教授",
    en: "Assistant Professor"
  },
  affiliation: {
    zh: "XX大学 计算机科学与技术系",
    en: "Department of Computer Science, XX University"
  },
  location: {
    zh: "北京，中国",
    en: "Beijing, China"
  },
  email: "name@university.edu",
  tagline: {
    zh: "研究聚焦于可靠人工智能与人机协作，关注算法解释性、系统稳健性与跨学科应用。",
    en: "My research focuses on reliable AI and human-centered systems, with an emphasis on interpretability, robustness, and interdisciplinary applications."
  },
  researchInterests: {
    zh: ["可信机器学习", "人机协作", "多模态推理", "医疗与教育场景应用"],
    en: ["Trustworthy machine learning", "Human-AI collaboration", "Multimodal reasoning", "Applications in health and education"]
  },
  links: {
    scholar: "",
    orcid: "",
    github: "",
    website: ""
  },
  cv: {
    label: {
      zh: "下载学术简历",
      en: "Download CV"
    },
    file: "/cv.pdf"
  },
  avatar: {
    alt: {
      zh: "个人头像",
      en: "Portrait"
    },
    file: "/avatar.jpg"
  },
  seo: {
    zh: {
      title: "张三 | 学术履历",
      description: "张三的学术履历主页，展示研究方向、论文成果、教学与学术服务。",
      keywords: ["学术履历", "研究", "论文", "教学", "学术服务"]
    },
    en: {
      title: "San Zhang | Academic CV",
      description: "Academic profile of San Zhang with research, publications, teaching, and service.",
      keywords: ["academic CV", "research", "publications", "teaching", "service"]
    }
  }
};
