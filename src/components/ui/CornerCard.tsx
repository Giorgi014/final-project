import type { ReactNode } from "react";

type CornerCardProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;
};

export const CornerCard = ({
  children,
  className = "",
  active = false,
}: CornerCardProps) => {
  const borderColor = active ? "border-rose" : "border-white/20";
  const dotColor = active ? "bg-primary" : "bg-soft-gray";
  const textColor = active ? "text-primary" : "text-soft-gray";
  return (
    <div
      className={`relative min-h-13 max-w-169.75 border ${borderColor} p-5.5  ${textColor} ${className}`}
    >
      <div
        className={`absolute w-1.5 h-1.5 ${dotColor} rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2`}
      ></div>
      <div
        className={`absolute w-1.5 h-1.5 ${dotColor} rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2`}
      ></div>
      <div
        className={`absolute w-1.5 h-1.5 ${dotColor} rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2`}
      ></div>
      <div
        className={`absolute w-1.5 h-1.5 ${dotColor} rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2`}
      ></div>
      {children}
    </div>
  );
};
