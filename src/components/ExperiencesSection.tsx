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
import { SectionTitle } from "./ui";
import { FaStar } from "react-icons/fa";

const images = [User, User2, User3, User4, User5, User6, User7, User8, User9];

const CENTER_INDEX = Math.floor(images.length / 2);
const CENTER_SIZE = 84;
const SIZE_STEP = 10;

const users = {
  name: "Daniel Carter",
  timeLine: "1 Day ago",
  stars: Array.from({ length: 5 }, (_, index) => ({
    id: `${index + 1}`,
    icon: <FaStar key={index} className="text-[#F5C451]" />,
  })),
  evaluation: "5.0",
  review:
    "I started following the meal plans here and within a month, my energy levels doubled! The recipes are tasty, easy to cook, and perfect for my busy lifestyle.",
};

export const ExperiencesSection = () => {
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
      <section>
        <div className="text-center mt-12">
          <div className="flex justify-center gap-1">
            {users.stars.map((star) => (
              <span key={star.id}>{star.icon}</span>
            ))}
          </div>
          <p>{users.evaluation}</p>
          <p>{users.review}</p>
          <h3>{users.name}</h3>
          <span>{users.timeLine}</span>
        </div>
      </section>
    </article>
  );
};
