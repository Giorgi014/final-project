import { AboutIllustration } from "@/assets";
import {
  CtaSection,
  Dream,
  ExperiencesSection,
  Hero,
  OurJurney,
  OurTeamMembers,
  RadialBackground,
  StatsSection,
} from "@/components";

const About = () => {
  return (
    <main className="pt-3.75 lg:pt-15 overflow-x-hidden">
      <RadialBackground position="0% 50%">
        <RadialBackground position="100% 130%">
          <Hero
            image={AboutIllustration}
            prefix="The People Behind"
            highlight="Pixels"
            suffix="The"
          />
          <Dream />
          <OurJurney />
          <StatsSection className="mt-15 md:mt-37.5" />
          <ExperiencesSection />
          <OurTeamMembers />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default About;
