import { useId, type ReactNode } from "react";

type OutlinedHeadingProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;
};

export const OutlinedHeading = ({
  children,
  className = "",
  active = false,
}: OutlinedHeadingProps) => {
  const filterId = `outlined-heading-${useId().replace(/:/g, "")}`;

  return (
    <>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id={filterId}>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="1"
            result="dilated"
          />
          <feComposite
            in="dilated"
            in2="SourceAlpha"
            operator="out"
            result="ring"
          />
          <feFlood floodColor="white" floodOpacity="0.15" />
          <feComposite in2="ring" operator="in" />
        </filter>
      </svg>
      <h2
        className={`font-comfortaa-bold text-[clamp(42px,7vw,83px)] leading-25.25 tracking-[-0.74px] text-base ${className}`}
        style={{ filter: active ? "none" : `url(#${filterId})` }}
      >
        {children}
      </h2>
    </>
  );
};
