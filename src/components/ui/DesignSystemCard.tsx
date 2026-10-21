import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

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
  const isMobile = window.innerWidth < 768;

  const containerRef = useReveal<HTMLDivElement>({
    x: 0,
    scale: 0.5,
    start: isMobile ? "top 85%" : "top 95%",
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
