import type { ProjectMetric } from "@/types";

export const PROJECT_METRICS: ProjectMetric[] = [
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
    className: "pl-5 sm:pr-10 lg:px-10 border-l-2 sm:border-r-2 border-base/20",
    detailClassName: "whitespace-nowrap",
  },
  {
    value: "4.9",
    label: "Client",
    detail: "Rating",
    className: "pl-5 md:pl-10 border-l-2 sm:border-0 border-base/20",
  },
];
