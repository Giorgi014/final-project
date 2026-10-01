import {
  CardCover,
  CardCover2,
  CardCover3,
  CardCover4,
  CardCover5,
  CardCover6,
  Cover,
  Cover9,
  Cover10,
  Cover11,
} from "@/assets";
import type { FutureProjectContent, ProjectContent } from "@/types/home";

export const PROJECTS: ProjectContent[] = [
  { image: Cover, title: "Berkshire Hathaway", category: "App Design" },
  { image: Cover11, title: "Berkshire Hathaway", category: "App Design" },
  { image: Cover10, title: "Berkshire Hathaway", category: "App Design" },
  { image: Cover9, title: "Berkshire Hathaway", category: "App Design" },
];

export const FUTURED_PROJECTS: FutureProjectContent[] = [
  CardCover6,
  CardCover5,
  CardCover4,
  CardCover,
  CardCover2,
  CardCover3,
].map((image) => ({
  image,
  title: "Web Development",
  description: "Pizza ipsum dolor meat lovers buffalo.",
}));
