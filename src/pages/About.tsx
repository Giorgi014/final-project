import { AboutIllustration } from "@/assets";
import {
  CtaSection,
  ExperiencesSection,
  Hero,
  OurJurney,
  OurTeamMembers,
  StatsSection,
} from "@/components";

const About = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <Hero
        image={AboutIllustration}
        prefix="The People Behind"
        highlight="Pixels"
        suffix="The"
      />
      <OurJurney />
      <StatsSection />
      <ExperiencesSection />
      <OurTeamMembers />
      <CtaSection />
    </main>
  );
};

export default About;
