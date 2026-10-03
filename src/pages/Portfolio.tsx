import { PortfolioIllustration } from "@/assets";
import {
  CtaSection,
  ExperiencesSection,
  Hero,
  StatsSection,
} from "@/components";

const Portfolio = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <Hero
        image={PortfolioIllustration}
        prefix="A Glimpse Into Our"
        highlight="Creative"
        suffix="World"
      />
      <StatsSection />
      <ExperiencesSection />
      <CtaSection />
    </main>
  );
};

export default Portfolio;
