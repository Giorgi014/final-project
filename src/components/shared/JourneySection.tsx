import { INTRO_SECTION } from "@/data/home";
import { IntroSection } from "@/components/shared/IntroSection";
import { Journey, Stroke } from "@/assets";

export const JourneySection = () => {
  const ourJourney = INTRO_SECTION.ourJourney;

  return (
    <article className="w-full max-w-330 px-5 mx-auto relative hidden lg:block">
      <IntroSection
        title={ourJourney.title}
        description={ourJourney.description}
      />
      <section className="w-full relative">
        <img src={Stroke} alt="" className="w-[clamp(400px,65vw,828px)] ml-5" />
        <img
          src={Journey}
          alt="Illustrated timeline of the company's journey"
          className="w-full absolute top-11.25 left-0"
        />
      </section>
    </article>
  );
};
