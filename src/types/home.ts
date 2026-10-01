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
  };
  futuredProjects: {
    title: string;
    description: string;
    actionLabel: string;
  };
  ourJurney: {
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
  category: string;
}

export interface FutureProjectContent {
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
