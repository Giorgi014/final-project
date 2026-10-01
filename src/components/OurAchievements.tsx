import { LeftDots, RightDots, Twenty, Twentyfive } from "@/assets";
import { ACHIEVEMENTS_SECTION } from "@/data/home";
import { NumberedInfoCard, SectionTitle } from "./ui";

export const OurAchievements = () => {
  return (
    <article className="w-full max-w-7xl px-5 mx-auto mt-15 md:mt-37.5">
      <div className="w-full md:flex justify-between items-start gap-5 mb-15">
        <SectionTitle title={ACHIEVEMENTS_SECTION.title} />
        <p className="font-poppins-regular text-[16px] text-secondary leading-6 w-full text-center md:text-start md:w-[clamp(300px,40vw,625px)]">
          {ACHIEVEMENTS_SECTION.description}
        </p>
      </div>
      <section className="w-full md:flex md:justify-between flex-row justify-center items-center gap-5">
        <div className="flex flex-col items-center md:items-start gap-15">
          <div className="flex items-center gap-4">
            <img
              src={Twenty}
              alt="20"
              className="w-[clamp(100px,16vw,200px)]"
            />
            <img src={RightDots} alt="" className="w-[clamp(40px,7vw,80px)]" />
          </div>
          <div className="flex items-center gap-4 ml-23.75">
            <img src={LeftDots} alt="" className="w-[clamp(40px,7vw,80px)]" />
            <img
              src={Twentyfive}
              alt="25"
              className="w-[clamp(100px,16vw,200px)]"
            />
          </div>
        </div>
        <div className="w-full md:w-[clamp(250px,40vw,625px)] flex flex-col justify-start items-start gap-7.5 mt-15 md:mt-0">
          {ACHIEVEMENTS_SECTION.achievements.map((achievement, index) => (
            <NumberedInfoCard
              key={achievement.num}
              num={achievement.num}
              title={achievement.title}
              description={achievement.description}
              active={index === 0}
            />
          ))}
        </div>
      </section>
    </article>
  );
};
