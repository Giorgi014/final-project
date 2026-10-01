import {
  CtaSection,
  ExperiencesSection,
  OurJurney,
  OurTeamMembers,
  StatsSection,
} from "@/components";

const About = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <OurJurney />
      <StatsSection />
      <ExperiencesSection />
      <OurTeamMembers />
      <CtaSection />
    </main>
  );
};

export default About;
