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
import { ExperienceCard } from "./ExperienceCard";
import { SectionTitle } from "./ui";
import { useState } from "react";

const images = [User, User2, User3, User4, User5, User6, User7, User8, User9];

const CENTER_INDEX = Math.floor(images.length / 2);
const CENTER_SIZE = 84;
const SIZE_STEP = 10;

const users = {
  name: "Daniel Carter",
  timeLine: "1 Day ago",
  evaluation: "5.0",
  review:
    "I started following the meal plans here and within a month, my energy levels doubled! The recipes are tasty, easy to cook, and perfect for my busy lifestyle.",
};

const experiences = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  ...users,
}));

export const ExperiencesSection = () => {
  const [activeIndex, setActiveIndex] = useState(CENTER_INDEX);
  const CARD_WIDTH = 679;
  const CARD_GAP = 24;

  return (
    <article className="w-full max-w-7xl px-5 mx-auto mt-15 md:mt-37.5">
      <SectionTitle title="Experiences That Inspire" />
      <section className="w-full max-w-175 flex justify-between items-center gap-4.5 mt-15 mb-12 mx-auto">
        {images.map((image, index) => {
          const distance = Math.abs(index - CENTER_INDEX);
          const size = CENTER_SIZE - distance * SIZE_STEP;
          const isActive = distance === 0;

          return (
            <div
              key={image}
              style={{ width: size, height: size }}
              className={
                isActive
                  ? "relative z-10 outline-2 outline-dashed outline-primary rounded-full"
                  : ""
              }
            >
              <img src={image} alt="" className="size-full object-cover" />
            </div>
          );
        })}
      </section>
      <section
        className="flex transition-transform duration-500 ease-out"
        style={{
          gap: CARD_GAP,
          transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${
            activeIndex * (CARD_WIDTH + CARD_GAP)
          }px))`,
        }}
      >
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            {...experience}
            isActive={index === activeIndex}
          />
        ))}
      </section>
    </article>
  );
};
