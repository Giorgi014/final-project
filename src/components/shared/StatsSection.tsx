import { STATS_SECTION } from "@/data/home";
import { LeftDots, RightDots } from "@/assets";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const StatsSection = ({ className }: { className?: string }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useGSAP(() => {
    STATS_SECTION.stats.forEach((stat, i) => {
      const el = countRefs.current[i];
      const counter = { value: 0 };

      if (!el) return;

      gsap.to(counter, {
        value: stat.value,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value)}${stat.suffix ?? ""}`;
        },
      });
    });
  });

  return (
    <section
      ref={sectionRef}
      className={`w-full grid grid-cols-2 lg:flex lg:justify-between items-center max-w-330 gap-5 px-5 mt-5.75 mx-auto ${className}`}
    >
      <img src={RightDots} alt="" className="hidden lg:block" />
      {STATS_SECTION.stats.map((stats, i) => (
        <div
          key={stats.label}
          className="flex justify-center items-center gap-4 mx-auto max-w-52.25"
        >
          <h2
            ref={(el) => {
              countRefs.current[i] = el;
            }}
            className="font-comfortaa-bold text-[clamp(2rem,3.5vw,3rem)] text-base leading-14.5"
          >
            0{stats.suffix}
          </h2>
          <p className="font-poppins-regular text-[clamp(16px,2vw,18px)] text-secondary leading-6">
            {stats.label}
          </p>
        </div>
      ))}
      <img src={LeftDots} alt="" className="hidden lg:block" />
    </section>
  );
};
