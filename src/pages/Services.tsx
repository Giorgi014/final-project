import { ServicesIllustration } from "@/assets";
import {
  AchievementsSection,
  CtaSection,
  DesignSolutionsSection,
  ExperiencesSection,
  Hero,
  JourneySection,
  ProjectsSection,
  RadialBackground,
} from "@/components";
import { SERVICE_PROJECTS } from "@/data/services";

const Services = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="0% 50%">
        <RadialBackground position="100% 130%">
          <Hero
            image={ServicesIllustration}
            prefix="Turning Your"
            highlight="Vision"
            suffix="Into Reality"
          />
          <DesignSolutionsSection />
          <ProjectsSection projects={SERVICE_PROJECTS} />
          <JourneySection />
          <AchievementsSection />
          <ExperiencesSection />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Services;
