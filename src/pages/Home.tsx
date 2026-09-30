import {
  FuturedProject,
  Hero,
  OurProjects,
  RadialBackground,
  StatsSection,
  OurJurney,
  OurTeamMembers,
  ExperiencesSection,
} from "@/components";
import { OurAchievements } from "@/components/OurAchievements";

const Home = () => {
  return (
    <main className="pt-3.75">
      <RadialBackground position="90% 50%">
        <Hero />
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
    </main>
  );
};

export default Home;
