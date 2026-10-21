import type { ProjectContent } from "@/types";
import { useReveal } from "@/hooks/useReveal";

export const ProjectCard = ({
  image,
  title,
  description,
  index = 0,
}: ProjectContent) => {
  const isMobile = window.innerWidth < 768;

  const cardRef = useReveal<HTMLDivElement>({
    x: 0,
    y: 20,
    scale: 0.8,
    delay: isMobile ? 0 : (index % 2) * 0.15,
    start: isMobile ? "top 95%" : "top 85%",
  });

  return (
    <div
      ref={cardRef}
      className="group w-full max-w-155 rounded-3xl cursor-pointer relative mx-auto overflow-hidden"
    >
      <img
        src={image}
        alt={`${title} project preview`}
        width={620}
        height={314}
        loading="lazy"
        className="w-full"
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-t from-foreground/70 via-foreground/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-7 left-6">
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <h2 className="text-2xl font-comfortaa-semiBold text-base leading-7.5 tracking-[-0.15px]">
            {title}
          </h2>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
            <p className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[12px] font-poppins-medium text-soft-gray">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
