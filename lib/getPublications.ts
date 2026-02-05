import { publications, Publication } from "@/content/publications";

export const getPublications = (): Publication[] => {
  return [...publications].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });
};
