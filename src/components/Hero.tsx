import { LeftDots, RightDots } from "@/assets";

type HeroProps = {
  image: string;
  prefix: string;
  highlight: string;
  suffix?: string;
};

export const Hero = ({ image, prefix, highlight, suffix }: HeroProps) => {
  return (
    <article className="w-full flex justify-center items-center max-w-330 px-5 mt-15 md:mt-25 mx-auto relative">
      <img src={image} alt="" className="absolute top-z-[-1] w-full px-5" />
      <section className="mx-auto max-w-330 text-center flex justify-center items-center gap-5 z-10">
        <img
          src={LeftDots}
          alt=""
          className="w-[clamp(32px,6vw,63px)] -rotate-45 translate-y-[250%]"
        />
        <h2 className="font-comfortaa-bold text-[clamp(32px,6vw,64px)] text-base leading-15 sm:leading-19 tracking-[-0.8px]">
          <span className="block">{prefix}</span>
          <span className="block sm:whitespace-nowrap">
            <span className="text-primary">{highlight}</span> {suffix}
          </span>
        </h2>
        <img
          src={RightDots}
          alt=""
          className="w-[clamp(32px,6vw,63px)] -rotate-45 translate-y-[-250%]"
        />
      </section>
    </article>
  );
};
