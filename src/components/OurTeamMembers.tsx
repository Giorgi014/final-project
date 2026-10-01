import { OUR_TEAM_SECTION } from "@/data/home";
import { CornerFrame, OutlinedHeading, SectionTitle } from "./ui";

export const OurTeamMembers = () => {
  return (
    <article className="w-full max-w-7xl px-5 mx-auto mt-15 md:mt-37.5">
      <SectionTitle title={OUR_TEAM_SECTION.title} />
      <section className="w-full mt-15">
        {OUR_TEAM_SECTION.members.map((memb, index) => (
          <div
            key={memb.member}
            className="w-full flex flex-col justify-center sm:flex-row sm:justify-between items-center text-center gap-6"
          >
            <div className="w-full max-w-53 flex justify-start items-center gap-3">
              <img
                src={memb.image}
                alt={`Portrait of ${memb.member}`}
                className="w-[clamp(42px,10vw,84px)] h-[clamp(42px,10vw,84px)] rounded-full"
              />
              <CornerFrame className="w-full" active={index === 0}>
                <h3>{memb.member}</h3>
              </CornerFrame>
            </div>
            <OutlinedHeading active={index === 0}>{memb.role}</OutlinedHeading>
          </div>
        ))}
      </section>
    </article>
  );
};
