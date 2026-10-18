import { LeftDots, RightDots } from "@/assets";
import type { HeroProps } from "@/types";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export const Hero = ({ image, prefix, highlight, suffix }: HeroProps) => {
  const backgroundRef = useRef<HTMLImageElement>(null);
  const headRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
        duration: 1,
      },
    });

    tl.fromTo(
      backgroundRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power3.inOut",
      },
    );
    tl.fromTo(
      headRef.current,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power3.inOut",
      },
      "-0.02",
    );
  });

  return (
    <article className="w-full flex justify-center items-center max-w-330 px-5 mt-15 md:mt-25 mx-auto relative">
      <img
        ref={backgroundRef}
        src={image}
        alt=""
        className="absolute z-[-1] w-full px-5"
      />
      <section
        ref={headRef}
        className="mx-auto max-w-330 text-center flex justify-center items-center gap-5 z-10"
      >
        <img
          src={LeftDots}
          alt=""
          className="w-[clamp(32px,6vw,63px)] -rotate-45 translate-y-[250%]"
        />
        <h2 className="font-comfortaa-bold text-[clamp(32px,6vw,64px)] text-base leading-13 sm:leading-19 tracking-[-0.8px]">
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
