import { Link } from "react-router-dom";
import { HERO } from "../../data/Content";
import { Button } from "../ui/Button";
import { HiArrowLongRight } from "react-icons/hi2";
import Character from "./../../assets/img/happy-avatar.svg";
import Stygar from "./../../assets/img/stygar-bg.svg";

export const Hero = () => {
  const title = HERO.title;
  const btns = HERO.buttons;

  return (
    <article className="w-full relative flex justify-between items-center">
      <img src={Stygar} alt="stygar" className="absolute right-0 z-[-1]" />
      <section className="w-full max-w-156.5 ml-20">
        <h2 className="font-jakarta-bold text-[64px] text-base">
          {title.prefix} <span className="text-primary">{title.highlight}</span>
          {title.suffix}
        </h2>
        <p className="text-[16px] text-secondary font-jakarta-regular leading-6 mt-6">
          {HERO.description}
        </p>
        <div className="w-full flex justify-start items-center gap-6 mt-10">
          <Button>{btns.primary.label}</Button>
          <Link
            to={btns.secondary.href}
            className="flex justify-center items-center gap-3 text-base text-[20px] font-jakarta-semiBold leading-6"
          >
            {btns.secondary.label}
            <HiArrowLongRight />
          </Link>
        </div>
      </section>
      <img src={Character} alt="character" className="" />
    </article>
  );
};
