import {
  Cover11,
  Cover2,
  Cover3,
  Cover4,
  Cover5,
  Cover6,
  Cover7,
  Cover8,
} from "@/assets";
import type { NavigationDisplay, ProjectContent } from "@/types";

export const NAVIGATION_DISPLAY: NavigationDisplay[] = [
  { id: 0, category: "All Project" },
  { id: 1, category: "Web Development" },
  { id: 2, category: "Mobile Apps" },
  { id: 3, category: "Websites" },
  { id: 4, category: "SEO" },
];

export const INOVATION_PROJECTS: ProjectContent[] = [
  Cover5,
  Cover4,
  Cover11,
  Cover8,
  Cover7,
  Cover6,
  Cover3,
  Cover2,
].map((image) => ({
  image,
  title: "Berkshire Hathaway",
  description: "App Design",
}));
