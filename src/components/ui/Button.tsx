import type React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      className="bg-primary py-3 px-8 rounded-3xl font-comfortaa-medium text-[20px] text-base leading-6 cursor-pointer whitespace-nowrap"
    >
      {children}
    </button>
  );
};
