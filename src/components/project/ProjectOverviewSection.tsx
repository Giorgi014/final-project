import { SectionTitle } from "@/components/ui";

type ProjectMetric = {
  value: string;
  label: string;
  detail: string;
  className: string;
  detailClassName?: string;
};

const PROJECT_METRICS: ProjectMetric[] = [
  {
    value: "4",
    label: "Timeline",
    detail: "Weeks",
    className:
      "pl-5 sm:pr-10 lg:border-0 border-l-2 sm:border-r-2 border-base/20",
  },
  {
    value: "2",
    label: "Services",
    detail: "UX/UI Design",
    className:
      "pl-5 md:pl-10 lg:px-10 border-l-2 sm:border-0 lg:border-l-2 border-base/20",
    detailClassName: "whitespace-nowrap",
  },
  {
    value: "5",
    label: "Team",
    detail: "2 Designers & 3 Developers",
    className:
      "pl-5 sm:pr-10 lg:px-10 border-l-2 sm:border-r-2 border-base/20",
    detailClassName: "whitespace-nowrap",
  },
  {
    value: "4.9",
    label: "Client",
    detail: "Rating",
    className: "pl-5 md:pl-10 border-l-2 sm:border-0 border-base/20",
  },
];

export const ProjectOverviewSection = () => {
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
        {PROJECT_METRICS.map((metric) => (
          <div
            key={metric.label}
            className={`w-full lg:w-fit flex justify-start items-center gap-2 md:gap-4 ${metric.className}`}
          >
            <p className="font-comfortaa-bold text-base text-[clamp(36px,4vw,48px)] leading-14.5 tracking-[-0.4px]">
              {metric.value}
            </p>
            <div className="font-poppins-regular text-secondary text-[18px] leading-7">
              <p>{metric.label}</p>
              <p className={metric.detailClassName}>{metric.detail}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};
