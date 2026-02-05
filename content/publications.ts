export type PublicationType = "journal" | "conference" | "preprint";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  selected?: boolean;
};

export const publications: Publication[] = [
  {
    id: "zhang2025reliable",
    title: "Reliable Human-AI Teaming with Uncertainty-Aware Explanations",
    authors: ["S. Zhang", "L. Chen", "M. Wang"],
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: 2025,
    type: "journal",
    selected: true
  },
  {
    id: "zhang2024collaboration",
    title: "Collaborative Decision Support via Causal Representation Learning",
    authors: ["S. Zhang", "J. Liu", "Q. Zhao"],
    venue: "Proceedings of the 41st International Conference on Machine Learning",
    year: 2024,
    type: "conference"
  },
  {
    id: "zhang2023multimodal",
    title: "Multimodal Reasoning for Clinical Risk Prediction",
    authors: ["S. Zhang", "A. Kumar", "R. Patel"],
    venue: "arXiv preprint",
    year: 2023,
    type: "preprint"
  }
];
