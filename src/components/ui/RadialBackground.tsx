import type { ReactNode, CSSProperties } from "react";

interface RadialBackgroundProps {
  children?: ReactNode;
  className?: string;
  position?: string;
  opacity?: number;
}

export const RadialBackground = ({
  children,
  className = "",
  position = "50% 0%",
  opacity = 0.35,
}: RadialBackgroundProps) => {
  const style: CSSProperties = {
    background: `radial-gradient(circle at ${position}, rgba(199,14,26,${opacity}), transparent 60%)`,
  };

  return (
    <div className={`${className}`}>
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={style}
      />
      {children}
    </div>
  );
};
