import { useId, type CSSProperties, type ReactNode } from "react";

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
        data-text={children}
        className={`relative font-comfortaa-bold text-[clamp(42px,7vw,83px)] leading-25.25 tracking-[-0.74px] transition-colors duration-700 ease-in-out before:content-[attr(data-text)] before:absolute before:inset-0 before:pointer-events-none before:text-base before:transition-opacity before:duration-700 before:ease-in-out before:[filter:var(--ring-filter)] ${
          active
            ? "text-base before:opacity-0"
            : "text-transparent before:opacity-100"
        } ${className}`}
        style={{ "--ring-filter": `url(#${filterId})` } as CSSProperties}
      >
        {children}
      </h2>
    </>
  );
};
