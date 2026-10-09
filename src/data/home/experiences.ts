import {
  User,
  User2,
  User3,
  User4,
  User5,
  User6,
  User7,
  User8,
  User9,
} from "@/assets";
import type { ExperienceReviewContent } from "@/types";

const images: string[] = [
  User,
  User2,
  User3,
  User4,
  User5,
  User6,
  User7,
  User8,
  User9,
];

const review: Omit<ExperienceReviewContent, "id" | "image"> = {
  name: "Daniel Carter",
  timeLine: "1 Day ago",
  evaluation: "5.0",
  review:
    "I started following the meal plans here and within a month, my energy levels doubled! The recipes are tasty, easy to cook, and perfect for my busy lifestyle.",
};

export const EXPERIENCES: ExperienceReviewContent[] = images.map(
  (image, index) => ({
    id: `experience-${index + 1}`,
    image,
    ...review,
  }),
);
