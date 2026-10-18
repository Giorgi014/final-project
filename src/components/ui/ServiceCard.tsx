import { Frame } from "@/assets";
import type { ServiceCardProps } from "@/types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ServiceCard = (props: ServiceCardProps) => {
  const { index = 0 } = props;
  const cardRef = useRef<HTMLDivElement>(null);

  const isMobile = window.innerWidth < 768;

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: 20,
        scale: 0.8,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power3.inOut",
        delay: isMobile ? (index % 1) * 0.15 : (index % 3) * 0.15,
        scrollTrigger: {
          trigger: cardRef.current,
          start: isMobile ? "top 95%" : "top 85%",
          once: true,
        },
      },
    );
  });
  return (
    <div
      ref={cardRef}
      className="group relative isolate overflow-hidden w-full max-w-83.75 bg-base/10 border-2 border-base/20 p-6 rounded-3xl cursor-pointer"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 bottom-0 right-0 size-48 origin-bottom-right scale-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 bg-[radial-gradient(circle_192px_at_0_0,transparent_99%,var(--color-primary)_100%)]"
      />
      <div className="group group-hover:bg-primary transition-colors duration-300 ease-in-out w-21.5 h-21.5 flex justify-center items-center rounded-3xl bg-base/10">
        <img src={Frame} alt="" />
      </div>
      <h3 className="font-comfortaa-bold text-[clamp(18px,4.5vw,20px)] text-base mt-10 mb-4 leading-6">
        {props.title}
      </h3>
      {props.variant === "glass" ? (
        <p className="font-poppins-regular text-[16px] text-secondary leading-6">
          {props.description}
        </p>
      ) : (
        <ul className="list-disc flex flex-col justify-start items-start pl-5 gap-y-2 font-poppins-regular text-[16px] text-secondary leading-6">
          {props.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
