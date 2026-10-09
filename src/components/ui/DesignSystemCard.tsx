import type { ReactNode } from "react";

type DesignSystemCardProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export const DesignSystemCard = ({
  title,
  className = "",
  children,
}: DesignSystemCardProps) => (
  <div
    className={`w-full max-w-83.75 p-6 rounded-3xl bg-base/6 border-2 border-base/20 ${className}`}
  >
    <p className="font-comfortaa-bold text-[clamp(16px,2vw,20px)] text-base leading-6">
      {title}
    </p>
    {children}
  </div>
);
