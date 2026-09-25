import { Hero } from "../components/Home/Hero";
import { RadialBackground } from "../components/ui/RadialBackground";

const Home = () => {
  return (
    <main className="pt-3.75">
      <RadialBackground position="80% 50%">
        <Hero />
      </RadialBackground>
    </main>
  );
};

export default Home;
