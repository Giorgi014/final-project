import { Cover11, Cover8 } from "@/assets";
import type { ProjectContent } from "@/types";

export const RELATED_PROJECTS: ProjectContent[] = [Cover11, Cover8].map(
  (image) => ({
    image,
    title: "Berkshire Hathaway",
    description: "App Design",
  }),
);
