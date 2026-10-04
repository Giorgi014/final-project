import {
  CtaSection,
  DesignSolution,
  ExperiencesSection,
  Hero,
  OurJurney,
  OurProjects,
  RadialBackground,
} from "@/components";
import { ServicesIllustration } from "@/assets";
import { OurAchievements } from "@/components/OurAchievements";
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
          <DesignSolution />
          <OurProjects projects={SERVICE_PROJECTS} />
          <OurJurney />
          <OurAchievements />
          <ExperiencesSection />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Services;
