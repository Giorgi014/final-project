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
