import {
  CtaSection,
  ExperiencesSection,
  OurJurney,
  RadialBackground,
} from "@/components";

const Project = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="100% 50%">
        <RadialBackground position="10% 130%">
          <OurJurney />
          <ExperiencesSection />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Project;
