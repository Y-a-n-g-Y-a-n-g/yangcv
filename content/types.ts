export type Language = "zh" | "en";

export type SectionId =
  | "about"
  | "research"
  | "publications"
  | "teaching"
  | "talks"
  | "awards"
  | "service"
  | "contact";

export type SectionItem = {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
};

export type SectionBlock = {
  id: SectionId;
  title: string;
  intro?: string;
  items?: SectionItem[];
};
