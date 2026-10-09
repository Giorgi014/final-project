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
import type { FeaturedProjectContent, ProjectContent } from "@/types";

export const PROJECTS: ProjectContent[] = [
  { image: Cover, title: "Berkshire Hathaway", category: "App Design" },
  { image: Cover11, title: "Berkshire Hathaway", category: "App Design" },
  { image: Cover10, title: "Berkshire Hathaway", category: "App Design" },
  { image: Cover9, title: "Berkshire Hathaway", category: "App Design" },
];

export const FEATURED_PROJECTS: FeaturedProjectContent[] = [
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
