import { PortfolioIllustration } from "@/assets";
import {
  CtaSection,
  ExperiencesSection,
  Hero,
  InovationDisplay,
  RadialBackground,
  StatsSection,
} from "@/components";

const Portfolio = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="100% 50%">
        <RadialBackground position="10% 130%">
          <Hero
            image={PortfolioIllustration}
            prefix="A Glimpse Into Our"
            highlight="Creative"
            suffix="World"
          />
          <InovationDisplay />
          <StatsSection className="mt-15 md:mt-37.5" />
          <ExperiencesSection />
          <CtaSection />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Portfolio;
