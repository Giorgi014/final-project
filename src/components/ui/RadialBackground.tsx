import type { CSSProperties } from "react";
import type { RadialBackgroundProps } from "@/types";

export const RadialBackground = ({
  children,
  className = "",
  position = "50% 0%",
  opacity = 0.3,
}: RadialBackgroundProps) => {
  const style: CSSProperties = {
    background: `radial-gradient(circle at ${position}, rgba(199,14,26,${opacity}), transparent 60%)`,
  };

  return (
    <div className={`${className}`}>
      <div
        className="fixed inset-0 -z-10 pointer-events-none backdrop-blur-2xl"
        style={style}
      />
      {children}
    </div>
  );
};
