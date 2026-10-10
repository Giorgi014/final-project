import { ProjectCard } from "../ui";
import { INOVATION_PROJECTS, NAVIGATION_DISPLAY } from "@/data/portfolio";
import { SectionTitle } from "../ui/SectionTitle";
import { useState } from "react";

export const InovationDisplay = () => {
  const [activeId, setActiveId] = useState(NAVIGATION_DISPLAY[0]?.id);

  return (
    <article className="w-full max-w-330 px-5 mt-15 sm:mt-25 lg:mt-62.5 mx-auto">
      <SectionTitle title="Innovation on Display" />
      <section className="w-full flex justify-start items-center gap-6 mt-15 mb-12 overflow-x-auto scrollbar-none">
        {NAVIGATION_DISPLAY.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              type="button"
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`max-w-fit px-8 py-4 rounded-3xl hover:bg-primary transition-colors duration-300 border border-base/20 cursor-pointer ${
                isActive && "bg-primary"
              }`}
            >
              <p className="font-comfortaa-bold text-[16px] text-base leading-6 whitespace-nowrap">
                {item.category}
              </p>
            </button>
          );
        })}
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {INOVATION_PROJECTS.map((project) => (
          <ProjectCard key={project.image} {...project} />
        ))}
      </section>
    </article>
  );
};
