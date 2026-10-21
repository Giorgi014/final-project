import { HeroCharacter } from "@/assets";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { LuMoveRight } from "react-icons/lu";
import { Reveal } from "../animation";

export const CtaSection = () => {
  const bgContainerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLImageElement>(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  const isMobile = window.innerWidth < 768;
  const start = isMobile ? "top 75%" : "top 85%";

  useGSAP(() => {
    Reveal(bgContainerRef.current, {
      x: 0,
      scale: 0.8,
      start,
    });
    Reveal(characterRef.current, {
      x: 0,
      scale: 0.8,
      delay: 1,
      start,
    });
    Reveal(headingRef.current, {
      x: 0,
      y: 50,
      duration: 1.3,
      delay: 0.3,
      start,
    });
    Reveal(descriptionRef.current, {
      x: 0,
      y: 50,
      duration: 1.3,
      delay: 0.5,
      start,
    });
    Reveal(inputRef.current, {
      x: 0,
      y: 50,
      duration: 1.3,
      delay: 0.5,
      start,
    });
  });

  return (
    <article
      ref={bgContainerRef}
      className="w-full max-w-330 px-5 mx-auto mt-50 md:mt-62.5 mb-20"
    >
      <section className="w-full flex flex-col-reverse items-center justify-start md:flex-row md:justify-between md:items-center bg-base/20 rounded-3xl p-7.5 border-2 border-base/20">
        <div className="max-w-156.5 text-center md:text-start">
          <h2
            ref={headingRef}
            className="w-full font-comfortaa-bold text-[clamp(32px,6vw,64px)] text-base leading-13 sm:leading-19 tracking-[-0.8px]"
          >
            Let’s Build Something <span className="text-primary">Amazing</span>
          </h2>
          <p
            ref={descriptionRef}
            className="w-full font-poppins-regular text-[16px] text-secondary mt-4 mb-5 sm:mt-6 sm:mb-10"
          >
            Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
            ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
            pesto pesto Bianca pesto roll onions.
          </p>
          <div
            ref={inputRef}
            className="w-full max-w-109.5 h-14 flex justify-center items-center rounded-3xl border-2 border-base/20 relative mx-auto md:mx-0"
          >
            <input
              type="text"
              placeholder="Email"
              className="w-full h-full px-6 rounded-3xl outline-none border-none text-base font-poppins-medium text-[16px]"
            />
            <button
              type="button"
              aria-label="Next review"
              className="w-19.5 h-11.5 rounded-3xl bg-primary border border-base/20 flex justify-center items-center text-[20px] text-base cursor-pointer absolute right-1.25"
            >
              <LuMoveRight />
            </button>
          </div>
        </div>

        <img
          ref={characterRef}
          src={HeroCharacter}
          alt=""
          width={364}
          height={573}
          loading="lazy"
          className="w-full max-w-85 md:max-w-none mb-[-35%] md:mb-0 md:w-[clamp(200px,35vw,365px)] translate-y-[-35%]"
        />
      </section>
    </article>
  );
};
