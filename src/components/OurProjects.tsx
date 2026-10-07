import { INTRO_SECTION } from "@/data/home";
import type { ProjectContent } from "@/types/home";
import { IntroSection } from "@/components/IntroSection";
import { ProjectCard } from "@/components/ui";

interface OurProjectsProps {
  projects: ProjectContent[];
}

export const OurProjects = ({ projects }: OurProjectsProps) => {
  const ourProjects = INTRO_SECTION.ourProjects;
  return (
    <article className="w-full max-w-330 mx-auto px-5">
      <IntroSection
        title={ourProjects.title}
        description={ourProjects.description}
        actionLabel={ourProjects.actionLabel}
      />
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-15">
        {projects.map((project) => (
          <ProjectCard key={project.image} {...project} />
        ))}
      </section>
    </article>
  );
};
