import { SectionTitle } from "@/components/ui";
import { PROJECT_METRICS } from "@/data/project";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const ProjectOverviewSection = () => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const divRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      descriptionRef.current,
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 95%",
          once: true,
        },
      },
    );
    gsap.fromTo(
      divRef.current,
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 95%",
          once: true,
        },
      },
    );
  });

  return (
    <article className="w-full max-w-330 px-5 mx-auto">
      <section className="w-full max-w-157.5 mx-auto md:mx-0">
        <SectionTitle title="Project Overview" />
        <p
          ref={descriptionRef}
          className="font-poppins-regular text-[16px] text-secondary leading-6 mt-4 mb-10 text-center md:text-start"
        >
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
          Bianca pesto roll onions.Pizza ipsum dolor meat lovers buffalo. Extra
          broccoli parmesan ricotta garlic dolor sauce marinara Chicago
          marinara. Tomato dolor pesto pesto Bianca pesto roll onions.
        </p>
      </section>
      <section
        ref={divRef}
        className="w-full max-w-231.25 grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:flex lg:justify-between mx-auto lg:mx-0"
      >
        {PROJECT_METRICS.map((metric) => (
          <div
            key={metric.label}
            className={`w-full lg:w-fit flex justify-start items-center gap-2 md:gap-4 ${metric.className}`}
          >
            <p className="font-comfortaa-bold text-base text-[clamp(36px,4vw,48px)] leading-14.5 tracking-[-0.4px]">
              {metric.value}
            </p>
            <div className="font-poppins-regular text-secondary text-[18px] leading-7">
              <p>{metric.label}</p>
              <p className={metric.detailClassName}>{metric.detail}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};
