import { INTRO_SECTION } from "@/data/home";
import { IntroSection } from "@/components/shared/IntroSection";
import { Journey, Stroke } from "@/assets";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export const JourneySection = () => {
  const ourJourney = INTRO_SECTION.ourJourney;
  const sectionRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
        },
      },
    );
  });

  return (
    <article className="w-full max-w-330 px-5 mx-auto relative hidden lg:block">
      <IntroSection
        title={ourJourney.title}
        description={ourJourney.description}
      />
      <section ref={sectionRef} className="w-full relative">
        <img
          src={Stroke}
          alt=""
          loading="lazy"
          className="w-[clamp(400px,65vw,828px)] ml-5"
        />
        <img
          src={Journey}
          alt="Illustrated timeline of the company's journey"
          loading="lazy"
          className="w-full absolute top-11.25 left-0"
        />
      </section>
    </article>
  );
};
