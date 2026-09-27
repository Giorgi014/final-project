import { INTRO_SECTION } from "@/data/Content";
import { IntroSection } from "./IntroSection";
import { Jurney, Stroke } from "@/assets";

export const OurJurney = () => {
  const ourJurney = INTRO_SECTION.ourJurney;

  return (
    <article className="w-full max-w-7xl px-5 mx-auto relative hidden lg:block">
      <IntroSection
        title={ourJurney.title}
        description={ourJurney.description}
      />
      <section className="w-full relative">
        <img src={Stroke} alt="" className="w-[clamp(400px,65vw,828px)] ml-5" />
        <img src={Jurney} alt="" className="w-full absolute top-11.25 left-0" />
      </section>
    </article>
  );
};
