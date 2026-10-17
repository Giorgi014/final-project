import { Link } from "react-router-dom";
import { HERO } from "@/data/home";
import { Button } from "@/components/ui";
import { HiArrowLongRight } from "react-icons/hi2";
import { HeroBackground, HeroCharacter } from "@/assets";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const HeroHome = () => {
  const title = HERO.title;
  const btns = HERO.buttons;

  const backgroundRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
        duration: 0.8,
      },
    });

    tl.fromTo(
      backgroundRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.inOut",
      },
      "-=0.3",
    );

    tl.fromTo(
      titleRef.current,
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "-=0.3",
    );

    tl.fromTo(
      descriptionRef.current,
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "-=0.3",
    );

    tl.from(
      buttonsRef.current?.children ?? [],
      {
        y: 20,
        opacity: 0,
        stagger: 0.15,
      },
      "-=0.3",
    );

    gsap.to(characterRef.current, {
      y: -5,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power3.inOut",
      delay: 0.3,
    });

    tl.fromTo(
      characterRef.current,
      {
        x: 60,
        y: 20,
        scale: 0.8,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.6,
        ease: "power3.inOut",
      },
      "-=0.3",
    );
  });

  return (
    <article className="w-full flex justify-center items-center">
      <img
        ref={backgroundRef}
        src={HeroBackground}
        alt=""
        className="absolute w-full right-0 z-[-1]"
      />
      <section className="w-full max-w-302.5 flex flex-col justify-between items-center sm:flex-row sm:items-center px-5">
        <div className="w-full max-w-156.5 text-center sm:text-start">
          <h2
            ref={titleRef}
            className="font-comfortaa-bold text-[clamp(32px,6vw,64px)] text-base leading-13 sm:leading-19 tracking-[-0.8px]"
          >
            {title.prefix}{" "}
            <span className="text-primary">{title.highlight}</span>{" "}
            {title.suffix}
          </h2>
          <p
            ref={descriptionRef}
            className="text-[16px] text-secondary font-poppins-regular leading-6 mt-4 md:mt-6"
          >
            {HERO.description}
          </p>
          <div
            ref={buttonsRef}
            className="w-full flex flex-col min-[400px]:flex-row justify-center sm:justify-start items-center gap-6 mt-10"
          >
            <Button variant="button" navigation="/project">
              {btns.primary.label}
            </Button>
            <Link
              to={btns.secondary.href}
              className="group relative flex items-center justify-center gap-3 text-base text-[clamp(16px,2vw,20px)] font-comfortaa-semiBold leading-6 whitespace-nowrap sm:justify-start"
            >
              <span className="relative">
                <span className="opacity-0 pointer-events-none">
                  {btns.secondary.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_0_0)] transition-[clip-path] duration-300 ease-out group-hover:[clip-path:inset(0_0_0_100%)]"
                >
                  {btns.secondary.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 overflow-hidden text-primary [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-300 ease-out group-hover:[clip-path:inset(0_0_0_0)]"
                >
                  {btns.secondary.label}
                </span>
              </span>
              <HiArrowLongRight className="relative shrink-0 transition-all duration-200 delay-100 ease-out group-hover:translate-x-1 group-hover:text-primary" />
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full"
              />
            </Link>
          </div>
        </div>
        <img
          ref={characterRef}
          src={HeroCharacter}
          alt="Illustration of a smiling person"
          width={364}
          height={573}
          className="w-full max-w-85 sm:max-w-none sm:w-[clamp(200px,35vw,366px)] mx-auto sm:mx-0"
        />
      </section>
    </article>
  );
};
