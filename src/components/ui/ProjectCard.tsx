import type { ProjectContent } from "@/types";

export const ProjectCard = ({ image, title, description }: ProjectContent) => {
  return (
    <div className="w-full max-w-155 rounded-3xl cursor-pointer relative mx-auto">
      <img src={image} alt={`${title} project preview`} className="w-full" />
      <div className="absolute bottom-7 left-6">
        <h2 className="text-2xl font-comfortaa-semiBold text-base leading-7.5 tracking-[-0.15px]">
          {title}
        </h2>
        <p className="text-[12px] font-poppins-medium text-soft-gray">
          {description}
        </p>
      </div>
    </div>
  );
};
