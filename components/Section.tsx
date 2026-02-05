import { SectionBlock } from "@/content/types";

export const Section = ({ id, title, intro, items }: SectionBlock) => {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {items && items.length > 0 && (
        <div className="section-list">
          {items.map((item) => (
            <div key={`${item.title}-${item.period ?? ""}`} className="section-item">
              {item.period && <div className="item-period">{item.period}</div>}
              <div className="item-body">
                <div className="item-title">{item.title}</div>
                {item.subtitle && <div className="item-subtitle">{item.subtitle}</div>}
                {item.description && (
                  <div className="item-description">{item.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
