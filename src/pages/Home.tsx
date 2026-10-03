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

const Home = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="90% 50%">
        <HeroHome />
      </RadialBackground>
      <StatsSection />
      <RadialBackground position="0% 130%">
        <OurProjects />
      </RadialBackground>
      <FuturedProject />
      <OurJurney />
      <OurAchievements />
      <OurTeamMembers />
      <ExperiencesSection />
      <CtaSection />
    </main>
  );
};

export default Home;
