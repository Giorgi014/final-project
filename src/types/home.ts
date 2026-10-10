export interface HeroContent {
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  buttons: {
    primary: {
      label: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
}

export interface StatsSectionContent {
  stats: {
    value: string;
    label: string;
  }[];
}

export interface IntroSectionsContent {
  ourProjects: {
    title: string;
    description: string;
    actionLabel: string;
    actionHref: string;
  };
  featuredProjects: {
    title: string;
    description: string;
    actionLabel: string;
    actionHref: string;
  };
  ourJourney: {
    title: string;
    description: string;
  };
}

export interface TeamMemberContent {
  image: string;
  member: string;
  role: string;
}

export interface TeamSectionContent {
  title: string;
  members: TeamMemberContent[];
}

export interface AchievementContent {
  num: string;
  title: string;
  description?: string;
}

export interface AchievementsSectionContent {
  title: string;
  description: string;
  achievements: AchievementContent[];
}

export interface ProjectContent {
  image: string;
  title: string;
  description: string;
}

export interface FeaturedProjectContent {
  image: string;
  title: string;
  description: string;
}

export interface ExperienceReviewContent {
  id: string;
  image: string;
  name: string;
  timeLine: string;
  evaluation: string;
  review: string;
}
