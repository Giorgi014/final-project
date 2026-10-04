import { Link } from "react-router-dom";
import type { IntroSectionProps } from "@/types";
import { RightDots } from "@/assets";

export const IntroSection = ({
  title,
  description,
  actionLabel,
  onAction,
}: IntroSectionProps) => {
  return (
    <section className="w-full text-center md:text-start md:flex justify-between items-end gap-5 mt-15 md:mt-37.5">
      <div className="w-full max-w-156.5 mx-auto md:mx-0 mb-6">
        <div className="flex justify-center md:justify-start items-center gap-1 mb-4">
          <h2 className="font-comfortaa-bold text-[clamp(2rem,3.5vw,3rem)] text-base leading-14.5">
            {title}
          </h2>
          <img src={RightDots} alt="" className="w-[clamp(30px,4vw,40px)]" />
        </div>
        <p className="font-poppins-regular text-[clamp(16px,2vw,18px)] text-secondary leading-6">
          {description}
        </p>
      </div>
      {actionLabel && (
        <Link
          to="/project"
          onClick={onAction}
          className="bg-transparent py-3 px-8 whitespace-nowrap rounded-3xl border border-base hover:border-primary hover:text-primary transition-colors duration-300 font-comfortaa-medium text-[20px] text-base leading-6 cursor-pointer"
        >
          {actionLabel}
        </Link>
      )}
    </section>
  );
};
