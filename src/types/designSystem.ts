export type TypographyTag = "h2" | "h3" | "p";

export type TypographySample = {
  tag: TypographyTag;
  label: string;
  className: string;
};

export type FontSample = {
  title: string;
  name: string;
  className: string;
};

export type DesignSystemColor =
  | "bg-red-alert"
  | "bg-red-deep"
  | "bg-mist";

export type TechnologySample = {
  src: string;
  name: string;
};
