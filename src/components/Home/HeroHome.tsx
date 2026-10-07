import { Link } from "react-router-dom";
import { HERO } from "@/data/home";
import { Button } from "@/components/ui";
import { HiArrowLongRight } from "react-icons/hi2";
import { HeroBackground, HeroCharacter } from "@/assets";

export const HeroHome = () => {
  const title = HERO.title;
  const btns = HERO.buttons;

  return (
    <article className="w-full flex justify-center items-center">
      <img
        src={HeroBackground}
        alt=""
        className="absolute w-full right-0 z-[-1]"
      />
      <section className="w-full max-w-302.5 flex flex-col justify-between items-center sm:flex-row sm:items-center mt-15 md:mt-25 px-5">
        <div className="w-full max-w-156.5 text-center sm:text-start">
          <h2 className="font-comfortaa-bold text-[clamp(32px,6vw,64px)] text-base leading-19 tracking-[-0.8px]">
            {title.prefix}{" "}
            <span className="text-primary">{title.highlight}</span>{" "}
            {title.suffix}
          </h2>
          <p className="text-[16px] text-secondary font-poppins-regular leading-6 mt-6">
            {HERO.description}
          </p>
          <div className="w-full flex flex-col min-[400px]:flex-row justify-center sm:justify-start items-center gap-6 mt-10">
            <Button variant="button">{btns.primary.label}</Button>
            <Link
              to={btns.secondary.href}
              className="flex justify-center items-center gap-3 text-base text-[clamp(16px,2vw,20px)] font-comfortaa-semiBold leading-6 whitespace-nowrap"
            >
              {btns.secondary.label}
              <HiArrowLongRight />
            </Link>
          </div>
        </div>
        <img
          src={HeroCharacter}
          alt="Illustration of a smiling person"
          className="w-full max-w-85 sm:w-[clamp(200px,35vw,366px)] mx-auto"
        />
      </section>
    </article>
  );
};
