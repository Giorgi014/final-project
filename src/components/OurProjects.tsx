import { INTRO_SECTION, PROJECTS } from "@/data/home";
import { IntroSection } from "@/components/IntroSection";
import { ProjectCard } from "@/components/ui";

export const OurProjects = () => {
  const ourProjects = INTRO_SECTION.ourProjects;
  return (
    <article className="w-full max-w-7xl mx-auto px-5">
      <IntroSection
        title={ourProjects.title}
        description={ourProjects.description}
        actionLabel={ourProjects.actionLabel}
      />
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-15">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.image} {...project} />
        ))}
      </section>
    </article>
  );
};
