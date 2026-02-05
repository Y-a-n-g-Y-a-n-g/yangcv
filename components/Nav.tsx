import Link from "next/link";
import { Language, SectionBlock } from "@/content/types";

const navLabel = (lang: Language) => (lang === "zh" ? "目录" : "Contents");

export const Nav = ({
  lang,
  items
}: {
  lang: Language;
  items: Pick<SectionBlock, "id" | "title">[];
}) => {
  const switchTo = lang === "zh" ? "/en" : "/";
  const switchLabel = lang === "zh" ? "English" : "中文";

  return (
    <nav className="nav">
      <div className="nav-title">{navLabel(lang)}</div>
      <ul className="nav-list">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="nav-switch">
        <Link href={switchTo} aria-label="Switch language">
          {switchLabel}
        </Link>
      </div>
    </nav>
  );
};
