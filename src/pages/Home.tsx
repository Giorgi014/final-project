import {
  FuturedProject,
  Hero,
  OurProjects,
  RadialBackground,
  StatsSection,
} from "@/components";

const Home = () => {
  // const ourJurney = INTRO_SECTION.ourJurney;
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
    </main>
  );
};

export default Home;
