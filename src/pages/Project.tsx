import {
  CtaSection,
  DesignSystemSection,
  ExperiencesSection,
  JourneySection,
  ProjectHero,
  ProjectOverviewSection,
  ProjectsSection,
  RadialBackground,
} from "@/components";
import { RELATED_PROJECTS } from "@/data/project";

const Project = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="100% 50%">
        <RadialBackground position="10% 130%">
          <ProjectHero />
          <ProjectOverviewSection />
          <JourneySection />
          <DesignSystemSection />
          <ExperiencesSection />
          <ProjectsSection
            title="Related Project"
            projects={RELATED_PROJECTS}
            isAction={false}
          />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Project;
