import { STATS_SECTION } from "@/data/home";
import { LeftDots, RightDots } from "@/assets";

export const StatsSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`w-full grid grid-cols-2 lg:flex lg:justify-between items-center max-w-330 gap-5 px-5 mt-5.75 mx-auto ${className}`}
    >
      <img src={RightDots} alt="" className="hidden lg:block" />
      {STATS_SECTION.stats.map((stats) => (
        <div
          key={stats.label}
          className="flex justify-center items-center gap-4 mx-auto max-w-52.25"
        >
          <h2 className="font-comfortaa-bold text-[clamp(2rem,3.5vw,3rem)] text-base leading-14.5">
            {stats.value}
          </h2>
          <p className="font-poppins-regular text-[clamp(16px,2vw,18px)] text-secondary leading-6">
            {stats.label}
          </p>
        </div>
      ))}
      <img src={LeftDots} alt="" className="hidden lg:block" />
    </section>
  );
};
