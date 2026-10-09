import { SectionTitle } from "./ui";

export const OverviewSection = () => {
  return (
    <article className="w-full max-w-330 px-5 mx-auto">
      <section className="w-full max-w-157.5 mx-auto md:mx-0">
        <SectionTitle title="Project Overview" />
        <p className="font-poppins-regular text-[16px] text-secondary leading-6 mt-4 mb-10 text-center md:text-start">
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
          Bianca pesto roll onions.Pizza ipsum dolor meat lovers buffalo. Extra
          broccoli parmesan ricotta garlic dolor sauce marinara Chicago
          marinara. Tomato dolor pesto pesto Bianca pesto roll onions.
        </p>
      </section>
      <section className="w-full max-w-231.25 grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:flex lg:justify-between mx-auto lg:mx-0">
        <div className="w-full lg:w-fit flex justify-start items-center pl-5 sm:pr-10 gap-2 md:gap-4 lg:border-0 border-l-2 sm:border-r-2 border-base/20">
          <p className="font-comfortaa-bold text-base text-[clamp(36px,4vw,48px)] leading-14.5 tracking-[-0.4px]">
            4
          </p>
          <div className="font-poppins-regular text-secondary text-[18px] leading-7w">
            <p>Timeline</p>
            <p>Weeks</p>
          </div>
        </div>
        <div className="w-full lg:w-fit flex justify-start items-center pl-5 md:pl-10 lg:px-10 gap-2 md:gap-4 border-l-2 sm:border-0 lg:border-l-2 border-base/20">
          <p className="font-comfortaa-bold text-base text-[clamp(36px,4vw,48px)] leading-14.5 tracking-[-0.4px]">
            2
          </p>
          <div className="font-poppins-regular text-secondary text-[18px] leading-7w">
            <p>Services</p>
            <p className="whitespace-nowrap">UX/UI Design</p>
          </div>
        </div>
        <div className="w-full lg:w-fit flex justify-start items-center pl-5 sm:pr-10 lg:px-10 gap-2 md:gap-4 border-l-2 sm:border-r-2 border-base/20">
          <p className="font-comfortaa-bold text-base text-[clamp(36px,4vw,48px)] leading-14.5 tracking-[-0.4px]">
            5
          </p>
          <div className="font-poppins-regular text-secondary text-[18px] leading-7w">
            <p>Team</p>
            <p className="whitespace-nowrap">2 Designers & 3 Developers</p>
          </div>
        </div>
        <div className="w-full lg:w-fit flex justify-start items-center pl-5 md:pl-10 gap-2 md:gap-4 border-l-2 sm:border-0 border-base/20">
          <p className="font-comfortaa-bold text-base text-[clamp(36px,4vw,48px)] leading-14.5 tracking-[-0.4px]">
            4.9
          </p>
          <div className="font-poppins-regular text-secondary text-[18px] leading-7w">
            <p>Client</p>
            <p>Rating</p>
          </div>
        </div>
      </section>
    </article>
  );
};
