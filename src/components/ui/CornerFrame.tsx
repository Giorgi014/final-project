import type { ReactNode } from "react";

type CornerFrameProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;
};

export const CornerFrame = ({
  children,
  className = "",
  active = false,
}: CornerFrameProps) => {
  const borderColor = active ? "border-rose" : "border-white/20";
  const dotColor = active ? "bg-primary" : "bg-soft-gray";
  const textColor = active ? "text-primary" : "text-soft-gray";

  return (
    <div
      className={`relative flex h-13 min-w-13 items-center justify-center border ${borderColor} px-2 py-1 text-center ${textColor} ${className}`}
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
