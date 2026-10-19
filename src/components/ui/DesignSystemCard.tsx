import type { ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

type DesignSystemCardProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export const DesignSystemCard = ({
  title,
  className = "",
  children,
}: DesignSystemCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth < 768;

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: isMobile ? "top 85%" : "top 95%",
          once: true,
        },
      },
    );
  });
  return (
    <div
      ref={containerRef}
      className={`w-full max-w-83.75 p-6 rounded-3xl bg-base/6 border-2 border-base/20 ${className}`}
    >
      <p className="font-comfortaa-bold text-[clamp(16px,2vw,20px)] text-base leading-6">
        {title}
      </p>
      {children}
    </div>
  );
};
