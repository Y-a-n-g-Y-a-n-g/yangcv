import { Language, SectionBlock } from "./types";

export const sections: Record<Language, SectionBlock[]> = {
  zh: [
    {
      id: "about",
      title: "关于我",
      intro:
        "我目前在 XX大学 计算机科学与技术系任教，关注可靠人工智能与人机协作。欢迎对接合作、讨论项目或学术交流。"
    },
    {
      id: "research",
      title: "研究方向",
      intro: "当前主要研究议题包括：",
      items: [
        {
          title: "可信与可解释机器学习",
          description: "构建可解释、可验证且具备鲁棒性的学习方法。"
        },
        {
          title: "人机协作与决策支持",
          description: "设计人与智能系统协作的交互框架与评估指标。"
        },
        {
          title: "跨学科应用",
          description: "探索 AI 在医疗、教育与社会科学中的实际落地。"
        }
      ]
    },
    {
      id: "publications",
      title: "论文发表",
      intro: "按年份倒序排列，IEEE 风格。"
    },
    {
      id: "teaching",
      title: "教学",
      items: [
        {
          title: "机器学习导论",
          subtitle: "本科核心课",
          period: "2024 秋"
        },
        {
          title: "数据挖掘与知识发现",
          subtitle: "研究生课程",
          period: "2023 春"
        }
      ]
    },
    {
      id: "talks",
      title: "报告与演讲",
      items: [
        {
          title: "可靠人工智能：从理论到系统",
          subtitle: "中国计算机大会",
          period: "2024"
        }
      ]
    },
    {
      id: "awards",
      title: "荣誉与奖励",
      items: [
        {
          title: "青年学者奖",
          subtitle: "XX学会",
          period: "2023"
        }
      ]
    },
    {
      id: "service",
      title: "学术服务",
      items: [
        {
          title: "程序委员会委员",
          subtitle: "NeurIPS / ICLR / KDD",
          period: "2022 - 至今"
        },
        {
          title: "期刊审稿",
          subtitle: "IEEE TPAMI / JMLR"
        }
      ]
    },
    {
      id: "contact",
      title: "联系",
      intro: "如需合作或交流，请通过邮箱或学术主页联系我。"
    }
  ],
  en: [
    {
      id: "about",
      title: "About",
      intro:
        "I am a faculty member at the Department of Computer Science, XX University. My work explores reliable AI and human-centered systems, and I welcome collaboration and discussion."
    },
    {
      id: "research",
      title: "Research",
      intro: "Current topics include:",
      items: [
        {
          title: "Trustworthy and interpretable ML",
          description: "Building methods that are explainable, verifiable, and robust."
        },
        {
          title: "Human-AI collaboration",
          description: "Designing interactive frameworks and evaluation for decision support."
        },
        {
          title: "Interdisciplinary applications",
          description: "Deploying AI in health, education, and social science contexts."
        }
      ]
    },
    {
      id: "publications",
      title: "Publications",
      intro: "Listed in reverse chronological order (IEEE style)."
    },
    {
      id: "teaching",
      title: "Teaching",
      items: [
        {
          title: "Introduction to Machine Learning",
          subtitle: "Undergraduate core",
          period: "Fall 2024"
        },
        {
          title: "Data Mining and Knowledge Discovery",
          subtitle: "Graduate course",
          period: "Spring 2023"
        }
      ]
    },
    {
      id: "talks",
      title: "Talks",
      items: [
        {
          title: "Reliable AI: From Theory to Systems",
          subtitle: "China Computer Conference",
          period: "2024"
        }
      ]
    },
    {
      id: "awards",
      title: "Awards",
      items: [
        {
          title: "Early Career Researcher Award",
          subtitle: "XX Society",
          period: "2023"
        }
      ]
    },
    {
      id: "service",
      title: "Service",
      items: [
        {
          title: "Program Committee",
          subtitle: "NeurIPS / ICLR / KDD",
          period: "2022 - Present"
        },
        {
          title: "Reviewer",
          subtitle: "IEEE TPAMI / JMLR"
        }
      ]
    },
    {
      id: "contact",
      title: "Contact",
      intro: "For collaboration or speaking invitations, please reach out via email or academic profiles."
    }
  ]
};
