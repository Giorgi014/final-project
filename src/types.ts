import type { ComponentPropsWithRef, ReactNode } from "react";

export type Navigation = {
  id: number;
  page: string;
  src: string;
};

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

export type NumberedInfoCardProps = {
  num: string;
  title: string;
  description?: string;
  className?: string;
  active?: boolean;
};

export type InputProps = Omit<ComponentPropsWithRef<"input">, "type"> & {
  label: string;
  placeholder: string;
  error?: string;
  variant: "text" | "email" | "password";
};

export type HeroProps = {
  image: string;
  prefix: string;
  highlight: string;
  suffix?: string;
};

export type ServiceCardProps =
  | {
      id: number;
      title: string;
      description: string;
      variant: "glass";
    }
  | {
      id: number;
      title: string;
      features: string[];
      variant: "featured";
    };
