import {
  CtaSection,
  ExperiencesSection,
  Hero,
  OurJurney,
  OurProjects,
  RadialBackground,
} from "@/components";
import { ServicesIllustration } from "@/assets";
import { OurAchievements } from "@/components/OurAchievements";

const Services = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <Hero
        image={ServicesIllustration}
        prefix="Turning Your"
        highlight="Vision"
        suffix="Into Reality"
      />
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
