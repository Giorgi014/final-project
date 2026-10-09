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
    { value: "150+", label: "Project Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years of Experience" },
    { value: "24/7", label: "Support Available" },
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
      num: "1",
      title: "Best Digital Agency",
      description:
        "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
    },
    { num: "2", title: "Innovation Design" },
    { num: "3", title: "Client Satisfaction Leader" },
    { num: "4", title: "Growth Company of the Year" },
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
