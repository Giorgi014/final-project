import type React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-primary py-3 px-8 rounded-3xl font-comfortaa-medium text-[clamp(16px,2vw,20px)] text-base leading-6 cursor-pointer whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
};
