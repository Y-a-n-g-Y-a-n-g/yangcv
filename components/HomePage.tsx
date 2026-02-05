import { sections } from "@/content/sections";
import { site } from "@/content/site";
import { Language, SectionBlock } from "@/content/types";
import { getPublications } from "@/lib/getPublications";
import { getAssetFlags } from "@/lib/assets";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { LangEffect } from "@/components/LangEffect";

const buildJsonLd = (lang: Language) => {
  const publications = getPublications();
  const sameAs = Object.values(site.links).filter(
    (value) => value && value.trim().length > 0
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.name[lang],
        jobTitle: site.title[lang],
        affiliation: {
          "@type": "Organization",
          name: site.affiliation[lang]
        },
        email: `mailto:${site.email}`,
        url: site.links.website || undefined,
        sameAs
      },
      ...publications.map((pub) => ({
        "@type": "ScholarlyArticle",
        name: pub.title,
        datePublished: String(pub.year),
        author: pub.authors.map((author) => ({
          "@type": "Person",
          name: author
        })),
        isPartOf: {
          "@type": "Periodical",
          name: pub.venue
        }
      }))
    ]
  };
};

const renderSection = (
  block: SectionBlock,
  lang: Language,
  publications: ReturnType<typeof getPublications>
) => {
  if (block.id === "publications") {
    return (
      <section id={block.id} className="section">
        <div className="section-header">
          <h2>{block.title}</h2>
          {block.intro && <p className="section-intro">{block.intro}</p>}
          <p className="section-meta">
            {lang === "zh"
              ? `共 ${publications.length} 篇`
              : `${publications.length} entries`}
          </p>
        </div>
        <Publications items={publications} />
      </section>
    );
  }

  if (block.id === "contact") {
    return (
      <section id={block.id} className="section">
        <div className="section-header">
          <h2>{block.title}</h2>
          {block.intro && <p className="section-intro">{block.intro}</p>}
        </div>
        <Contact lang={lang} />
      </section>
    );
  }

  return <Section key={block.id} {...block} />;
};

export const HomePage = ({ lang }: { lang: Language }) => {
  const pageSections = sections[lang];
  const publications = getPublications();
  const { hasAvatar, hasCv } = getAssetFlags();
  const jsonLd = buildJsonLd(lang);

  return (
    <>
      <LangEffect lang={lang} />
      <div className="page">
        <Hero lang={lang} hasAvatar={hasAvatar} hasCv={hasCv} />
        <div className="layout">
          <Nav lang={lang} items={pageSections} />
          <main className="content">
            {pageSections.map((block) => (
              <div key={block.id} className="section-wrapper">
                {renderSection(block, lang, publications)}
              </div>
            ))}
          </main>
        </div>
        <footer className="footer">
          <span>{lang === "zh" ? "学术履历网站" : "Academic CV site"}</span>
          <span>{lang === "zh" ? "基于 Next.js" : "Built with Next.js"}</span>
        </footer>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};
