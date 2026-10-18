import { RightDots } from "@/assets";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const SectionTitle = ({ title }: { title: string }) => {
  const headingRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
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
          trigger: headingRef.current,
          start: "top 95%",
          once: true,
        },
      },
    );
  });

  return (
    <div
      ref={headingRef}
      className="flex justify-center md:justify-start items-center gap-1"
    >
      <h2 className="font-comfortaa-bold text-[clamp(2rem,3.5vw,3rem)] text-base leading-14.5">
        {title}
      </h2>
      <img src={RightDots} alt="" className="w-[clamp(30px,4vw,40px)]" />
    </div>
  );
};
