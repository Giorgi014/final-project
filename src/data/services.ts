import { Cover11, Cover8, Cover7, Cover6, Cover5, Cover4 } from "@/assets";
import type { ServiceCardProps } from "@/types";
import type { ProjectContent } from "@/types/home";

const description =
  "Lorem ipsum dolor sit amet consectetur. Venenatis lectus mollis placerat id. Egestas turpis mattis adipiscing ut. Fermentum sit pellentesque condimentum id cursus donec. Quis bibendum tempus venenatis est lectus sed semper in.";

export const SERVICE_CARDS: ServiceCardProps[] = [
  {
    id: 0,
    title: "Web Development",
    description,
    variant: "glass",
  },
  {
    id: 1,
    title: "Design Process",
    features: ["User Research", "Wireframing", "Prototyping", "Design System"],
    variant: "featured",
  },
  {
    id: 2,
    title: "Web Development",
    description,
    variant: "glass",
  },
];

export const SERVICE_PROJECTS: ProjectContent[] = [
  Cover11,
  Cover8,
  Cover7,
  Cover6,
  Cover5,
  Cover4,
].map((image) => ({
  image,
  title: "Berkshire Hathaway",
  category: "App Design",
}));
