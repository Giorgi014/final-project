import type { ReactNode } from "react";

type IconRowProps = {
  children: ReactNode;
};

export const IconRow = ({ children }: IconRowProps) => (
  <div className="w-full flex justify-start items-center gap-4 mt-6">
    {children}
  </div>
);
