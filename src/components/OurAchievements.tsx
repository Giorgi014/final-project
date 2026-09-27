import { LeftDots, RightDots, Twenty, Twentyfive } from "@/assets";
import { NumberedInfoCard, SectionTitle } from "./ui";

export const OurAchievements = () => {
  return (
    <article className="w-full max-w-7xl px-5 mx-auto mt-37.5">
      <div className="w-full md:flex justify-between items-start gap-5 mb-15">
        <SectionTitle title="Our Achievements" />
        <p className="font-poppins-regular text-[16px] text-secondary leading-6 w-full text-center md:text-start md:w-[clamp(300px,40vw,625px)]">
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara.
        </p>
      </div>
      <section className="w-full md:flex md:justify-between flex-row justify-center items-center gap-5">
        <div className="flex flex-col items-center md:items-start gap-15">
          <div className="flex items-center gap-4">
            <img src={Twenty} alt="" className="w-[clamp(100px,16vw,200px)]" />
            <img src={RightDots} alt="" className="w-[clamp(40px,7vw,80px)]" />
          </div>
          <div className="flex items-center gap-4 ml-23.75">
            <img src={LeftDots} alt="" className="w-[clamp(40px,7vw,80px)]" />
            <img
              src={Twentyfive}
              alt=""
              className="w-[clamp(100px,16vw,200px)]"
            />
          </div>
        </div>
        <div className="w-full md:w-[clamp(250px,40vw,625px)] flex flex-col justify-start items-start mt-15 md:mt-0">
          <NumberedInfoCard
            num="1"
            title="Best Digital Agency"
            description="Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan."
          />
          <NumberedInfoCard
            num="2"
            title="Innovation Design"
            className="my-7.5"
          />
          <NumberedInfoCard
            num="3"
            title="Client Satisfaction Leader"
            className="mb-7.5"
          />
          <NumberedInfoCard num="4" title="Growth Company of the Year" />
        </div>
      </section>
    </article>
  );
};
