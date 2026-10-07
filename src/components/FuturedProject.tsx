import { FUTURED_PROJECTS, INTRO_SECTION } from "@/data/home";
import { IntroSection } from "./IntroSection";
import { FutureCard } from "./ui";

export const FuturedProject = () => {
  const futuredProjects = INTRO_SECTION.futuredProjects;
  return (
    <article className="w-full max-w-330 px-5 mx-auto">
      <IntroSection
        title={futuredProjects.title}
        description={futuredProjects.description}
        actionLabel={futuredProjects.actionLabel}
      />
      <section className="w-full grid sm:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] justify-center md:justify-between gap-5 gap-y-10 mt-15">
        {FUTURED_PROJECTS.map((project) => (
          <FutureCard key={project.image} {...project} />
        ))}
      </section>
    </article>
  );
};
