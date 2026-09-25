import type { Hero, SatsSection } from "../types";

export const HERO: Hero = {
  title: {
    prefix: "Turning",
    highlight: "Ideas",
    suffix: "Into Digital Reality",
  },
  description:
    "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto Bianca pesto roll onions.",
  buttons: {
    primary: {
      label: "Start a Project",
    },
    secondary: {
      label: "See Our Work",
      href: "/about",
    },
  },
};

export const STATS_SECTION: SatsSection = {
  stats: [
    {
      value: "150+",
      label: "Project Completed",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "5+",
      label: "Years of Experience",
    },
    {
      value: "24/7",
      label: "Support Available",
    },
  ],
};
