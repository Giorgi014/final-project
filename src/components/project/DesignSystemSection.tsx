import {
  COLORS,
  DESIGN_SYSTEM_DESCRIPTION,
  FONTS,
  LANGUAGES,
  TYPOGRAPHY,
} from "@/data/project";
import { DesignSystemCard, IconRow, SectionTitle } from "@/components/ui";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const ICON_SIZE = "size-[clamp(32px,5vw,56px)]";

export const DesignSystemSection = () => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      descriptionRef.current,
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 95%",
          once: true,
        },
      },
    );
  });

  return (
    <article className="w-full max-w-330 px-5 mx-auto mt-15 md:mt-37.5">
      <section className="w-full max-w-156.5 mx-auto md:mx-0">
        <SectionTitle title="Design System" />
        <p
          ref={descriptionRef}
          className="font-poppins-regular text-[16px] text-secondary leading-6 mt-4 mb-15 text-center md:text-start"
        >
          {DESIGN_SYSTEM_DESCRIPTION}
        </p>
      </section>

      <section className="w-full max-w-281.25 grid grid-cols-1 gap-y-6 justify-items-center sm:justify-items-stretch sm:grid-flow-col sm:grid-cols-none sm:grid-rows-2 sm:gap-x-5">
        <DesignSystemCard
          title="Typography"
          className="flex flex-col gap-y-4 justify-between items-start sm:row-span-2"
        >
          {TYPOGRAPHY.map(({ tag: Tag, label, className }) => (
            <Tag key={label} className={`${className} leading-[120%]`}>
              {label}
            </Tag>
          ))}
        </DesignSystemCard>

        {FONTS.map(({ title, name, className }) => (
          <DesignSystemCard key={title} title={title}>
            <h2
              className={`${className} text-[clamp(28px,4vw,48px)] text-base leading-[120%] mt-6`}
            >
              {name}
            </h2>
          </DesignSystemCard>
        ))}

        <DesignSystemCard title="Color">
          <IconRow>
            {COLORS.map((color) => (
              <div
                key={color}
                className={`${ICON_SIZE} rounded-3xl ${color}`}
              />
            ))}
          </IconRow>
        </DesignSystemCard>

        <DesignSystemCard title="Language">
          <IconRow>
            {LANGUAGES.map(({ src, name }) => (
              <img
                key={name}
                src={src}
                alt={name}
                loading="lazy"
                className={ICON_SIZE}
              />
            ))}
          </IconRow>
        </DesignSystemCard>
      </section>
    </article>
  );
};
