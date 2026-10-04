import {
  FuturedProject,
  HeroHome,
  OurProjects,
  RadialBackground,
  StatsSection,
  OurJurney,
  OurTeamMembers,
  ExperiencesSection,
  CtaSection,
} from "@/components";
import { OurAchievements } from "@/components/OurAchievements";
import { PROJECTS } from "@/data/home";

const Home = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="100% 50%">
        <RadialBackground position="10% 130%">
          <HeroHome />
          <StatsSection />
          <OurProjects projects={PROJECTS} />
          <FuturedProject />
          <OurJurney />
          <OurAchievements />
          <OurTeamMembers />
          <ExperiencesSection />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Home;
