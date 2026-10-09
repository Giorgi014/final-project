import { FEATURED_PROJECTS, INTRO_SECTION } from "@/data/home";
import { FeaturedProjectCard } from "@/components/home/FeaturedProjectCard";
import { IntroSection } from "@/components/shared/IntroSection";

export const FeaturedProjectsSection = () => {
  const featuredProjects = INTRO_SECTION.featuredProjects;
  return (
    <article className="w-full max-w-330 px-5 mx-auto">
      <IntroSection
        title={featuredProjects.title}
        description={featuredProjects.description}
        actionLabel={featuredProjects.actionLabel}
        actionHref={featuredProjects.actionHref}
      />
      <section className="w-full grid sm:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] justify-center md:justify-between gap-5 gap-y-10 mt-15">
        {FEATURED_PROJECTS.map((project) => (
          <FeaturedProjectCard key={project.image} {...project} />
        ))}
      </section>
    </article>
  );
};
