import Image from "next/image";
import { site } from "@/content/site";
import { Language } from "@/content/types";
import { getInitials } from "@/lib/assets";

export const Hero = ({
  lang,
  hasAvatar,
  hasCv
}: {
  lang: Language;
  hasAvatar: boolean;
  hasCv: boolean;
}) => {
  const name = site.name[lang];
  const title = site.title[lang];
  const affiliation = site.affiliation[lang];
  const location = site.location[lang];
  const tagline = site.tagline[lang];
  const interests = site.researchInterests[lang];
  const cvLabel = site.cv.label[lang];
  const avatarAlt = site.avatar.alt[lang];
  const initials = getInitials(name);

  return (
    <header className="hero" id="top">
      <div className="hero-avatar">
        {hasAvatar ? (
          <Image
            src={site.avatar.file}
            alt={avatarAlt}
            width={220}
            height={260}
            priority
          />
        ) : (
          <div className="avatar-placeholder" aria-hidden="true">
            {initials}
          </div>
        )}
      </div>
      <div className="hero-content">
        <div className="hero-header">
          <h1>{name}</h1>
          <p className="hero-title">{title}</p>
          <p className="hero-affiliation">{affiliation}</p>
          <p className="hero-location">{location}</p>
        </div>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          {hasCv ? (
            <a className="button" href={site.cv.file}>
              {cvLabel}
            </a>
          ) : (
            <span className="button ghost" aria-disabled="true">
              {cvLabel}
            </span>
          )}
          <a className="button outline" href={`mailto:${site.email}`}>
            {lang === "zh" ? "邮件联系" : "Email"}
          </a>
          {!hasCv && (
            <span className="helper-text">
              {lang === "zh"
                ? "将 /public/cv.pdf 放入后即可下载"
                : "Add /public/cv.pdf to enable download"}
            </span>
          )}
        </div>
        <div className="hero-interests">
          <p className="eyebrow">{lang === "zh" ? "研究兴趣" : "Research Interests"}</p>
          <ul>
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
