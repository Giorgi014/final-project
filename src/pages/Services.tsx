import {
  CtaSection,
  ExperiencesSection,
  OurJurney,
  OurProjects,
  RadialBackground,
} from "@/components";
import { OurAchievements } from "@/components/OurAchievements";

const Services = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="0% 130%">
        <OurProjects />
      </RadialBackground>
      <OurJurney />
      <OurAchievements />
      <ExperiencesSection />
      <CtaSection />
    </main>
  );
};

export default Services;
