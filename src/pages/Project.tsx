import {
  CtaSection,
  ExperiencesSection,
  OurJurney,
  ProjectHero,
  RadialBackground,
} from "@/components";

const Project = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="100% 50%">
        <RadialBackground position="10% 130%">
          <ProjectHero />
          <OurJurney />
          <ExperiencesSection />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Project;
