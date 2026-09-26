import { INTRO_SECTION } from "@/data/Content";
import { IntroSection } from "@/components/IntroSection";
import { Cover, Cover9, Cover10, Cover11 } from "@/assets/index";
import { ProjectCard } from "@/components/ProjectCard";

export const OurProjects = () => {
  const ourProjects = INTRO_SECTION.ourProjects;
  const projects = [Cover, Cover11, Cover10, Cover9];

  return (
    <article className="w-full max-w-7xl mx-auto px-5">
      <IntroSection
        title={ourProjects.title}
        description={ourProjects.description}
        actionLabel={ourProjects.actionLabel}
      />
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-15">
        {projects.map((image) => (
          <ProjectCard
            key={image}
            image={image}
            title="Berkshire Hathaway"
            category="App Design"
          />
        ))}
      </section>
    </article>
  );
};
