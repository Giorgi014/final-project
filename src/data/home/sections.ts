import { TeamMember, TeamMember2, TeamMember3, TeamMember4 } from "@/assets";
import type {
  AchievementsSectionContent,
  HeroContent,
  IntroSectionsContent,
  StatsSectionContent,
  TeamSectionContent,
} from "@/types";

export const HERO: HeroContent = {
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

export const STATS_SECTION: StatsSectionContent = {
  stats: [
    { value: 150, suffix: "+", label: "Project Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ],
};

export const INTRO_SECTION: IntroSectionsContent = {
  ourProjects: {
    title: "Our Projects",
    description:
      "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto Bianca pesto roll onions.",
    actionLabel: "Show All",
    actionHref: "/project",
  },
  featuredProjects: {
    title: "Futured Projects",
    description:
      "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto Bianca pesto roll onions.",
    actionLabel: "Show All",
    actionHref: "/project",
  },
  ourJourney: {
    title: "Our Jurney",
    description:
      "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto Bianca pesto roll onions.",
  },
};

export const ACHIEVEMENTS_SECTION: AchievementsSectionContent = {
  title: "Our Achievements",
  description:
    "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta garlic dolor sauce marinara Chicago marinara.",
  achievements: [
    {
      id: 0,
      num: "1",
      title: "Best Digital Agency",
      description:
        "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    },
    {
      id: 1,
      num: "2",
      title: "Innovation Design",
      description:
        "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    },
    {
      id: 2,
      num: "3",
      title: "Client Satisfaction Leader",
      description:
        "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    },
    {
      id: 3,
      num: "4",
      title: "Growth Company of the Year",
      description:
        "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    },
  ],
};

export const OUR_TEAM_SECTION: TeamSectionContent = {
  title: "Our Team Members",
  members: [
    { image: TeamMember, member: "Sarah Kim", role: "UI/UX Designer" },
    { image: TeamMember2, member: "David Chen", role: "Web Developer" },
    { image: TeamMember3, member: "Maya Patel", role: "SEO Marketing" },
    { image: TeamMember4, member: "Alex Rivera", role: "Brand Strategy" },
  ],
};
