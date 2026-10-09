import {
  AchievementsSection,
  CtaSection,
  ExperiencesSection,
  FeaturedProjectsSection,
  HeroHome,
  JourneySection,
  ProjectsSection,
  RadialBackground,
  StatsSection,
  TeamSection,
} from "@/components";
import { PROJECTS } from "@/data/home";

const Home = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="100% 50%">
        <RadialBackground position="10% 130%">
          <HeroHome />
          <StatsSection />
          <ProjectsSection projects={PROJECTS} />
          <FeaturedProjectsSection />
          <JourneySection />
          <AchievementsSection />
          <TeamSection />
          <ExperiencesSection />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Home;
