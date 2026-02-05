import { Publication } from "@/content/publications";

const formatAuthors = (authors: string[]) => {
  if (authors.length === 0) return "";
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  return `${authors.slice(0, -1).join(", ")}, and ${authors[authors.length - 1]}`;
};

export const Publications = ({ items }: { items: Publication[] }) => {
  return (
    <div className="publications">
      <ol className="pub-list">
        {items.map((pub, index) => (
          <li key={pub.id} className="pub-item">
            <span className="pub-index">[{index + 1}]</span>
            <span className="pub-content">
              <span className="pub-authors">{formatAuthors(pub.authors)}</span>
              <span className="pub-title">“{pub.title},”</span>
              <span className="pub-venue">{pub.venue},</span>
              <span className="pub-year">{pub.year}.</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
