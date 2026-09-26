import type { ReactNode } from "react";

export type Navigation = {
  id: number;
  page: string;
  src: string;
};

export interface Hero {
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

export interface SatsSection {
  stats: {
    value: string;
    label: string;
  }[];
}

export interface RadialBackgroundProps {
  children?: ReactNode;
  className?: string;
  position?: string;
  opacity?: number;
}

export interface IntroSectionProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export interface IntroSection {
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

export type ProjectCardProps = {
  image: string;
  title: string;
  category: string;
};

export type FutureCardProps = {
  image: string;
  title: string;
  description: string;
};
