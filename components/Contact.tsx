import { site } from "@/content/site";
import { Language } from "@/content/types";

const labels = {
  scholar: "Google Scholar",
  orcid: "ORCID",
  github: "GitHub",
  website: "Website"
} as const;

export const Contact = ({ lang }: { lang: Language }) => {
  const links = Object.entries(site.links)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([key, value]) => ({
      key,
      label: labels[key as keyof typeof labels],
      value: value as string
    }));

  return (
    <div className="contact">
      <div className="contact-item">
        <div className="contact-label">{lang === "zh" ? "邮箱" : "Email"}</div>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="contact-item">
        <div className="contact-label">{lang === "zh" ? "所在地" : "Location"}</div>
        <span>{site.location[lang]}</span>
      </div>
      {links.length > 0 ? (
        links.map((link) => (
          <div key={link.key} className="contact-item">
            <div className="contact-label">{link.label}</div>
            <a href={link.value} target="_blank" rel="noreferrer">
              {link.value}
            </a>
          </div>
        ))
      ) : (
        <div className="contact-helper">
          {lang === "zh"
            ? "在 content/site.ts 中添加学术主页或社交链接。"
            : "Add your academic links in content/site.ts."}
        </div>
      )}
    </div>
  );
};
