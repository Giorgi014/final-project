import { INTRO_SECTION } from "@/data/home";
import type { ProjectContent } from "@/types";
import { IntroSection } from "@/components/shared/IntroSection";
import { ProjectCard } from "@/components/ui";

interface ProjectsSectionProps {
  projects: ProjectContent[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const ourProjects = INTRO_SECTION.ourProjects;
  return (
    <article className="w-full max-w-330 mx-auto px-5">
      <IntroSection
        title={ourProjects.title}
        description={ourProjects.description}
        actionLabel={ourProjects.actionLabel}
        actionHref={ourProjects.actionHref}
      />
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-15">
        {projects.map((project) => (
          <ProjectCard key={project.image} {...project} />
        ))}
      </section>
    </article>
  );
};
