import { Hero } from "../components/Home/Hero";
import { StatsSection } from "../components/StatsSection";
import { RadialBackground } from "../components/ui/RadialBackground";

const Home = () => {
  return (
    <main className="pt-3.75">
      <RadialBackground position="90% 50%">
        <Hero />
      </RadialBackground>
      <StatsSection />
    </main>
  );
};

export default Home;
