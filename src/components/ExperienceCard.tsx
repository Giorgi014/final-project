import { FaStar } from "react-icons/fa";
import type { ExperienceReviewContent } from "@/types/home";
import { CornerCard } from "./ui";

type ExperienceCardProps = Omit<ExperienceReviewContent, "id" | "image"> & {
  isActive?: boolean;
};

export const ExperienceCard = ({
  name,
  timeLine,
  evaluation,
  review,
  isActive = false,
}: ExperienceCardProps) => {
  return (
    <CornerCard
      active={isActive}
      className={`shrink-0 bg-base/6 transition-all duration-500 ${
        isActive ? "" : "blur-[2px] opacity-70 select-none"
      }`}
    >
      <div className="flex justify-start items-end gap-0.5">
        <h3 className="font-comfortaa-semiBold text-[clamp(24px,4vw,32px)] text-base leading-9.5 tracking-[-0.2px]">
          {name}
        </h3>
        <span className="font-poppins-medium text-sm text-soft-gray leading-5">
          {timeLine}
        </span>
      </div>
      <div className="mt-5 mb-7 flex justify-start items-center gap-2">
        <div className="flex gap-1">
          <FaStar className="text-accent" />
          <FaStar className="text-accent" />
          <FaStar className="text-accent" />
          <FaStar className="text-accent" />
          <FaStar className="text-accent" />
        </div>
        <span>{evaluation}</span>
      </div>
      <p className="font-poppins-regular text-[clamp(16px,2vw,23px)] text-secondary leading-[150%]">
        {review}
      </p>
    </CornerCard>
  );
};
