import { OUR_TEAM_SECTION } from "@/data/home";
import { CornerFrame, OutlinedHeading, SectionTitle } from "@/components/ui";
import { useEffect, useState } from "react";

export const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const allMembers = OUR_TEAM_SECTION.members.length;

  useEffect(() => {
    const member = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allMembers);
    }, 3000);

    return () => clearInterval(member);
  }, [allMembers]);

  return (
    <article className="w-full max-w-330 px-5 mx-auto mt-15 md:mt-37.5">
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
                width={84}
                height={84}
                loading="lazy"
                className="w-[clamp(42px,10vw,84px)] h-[clamp(42px,10vw,84px)] rounded-full"
              />
              <CornerFrame className="w-full" active={index === activeIndex}>
                <h3>{memb.member}</h3>
              </CornerFrame>
            </div>
            <OutlinedHeading active={index === activeIndex}>
              {memb.role}
            </OutlinedHeading>
          </div>
        ))}
      </section>
    </article>
  );
};
