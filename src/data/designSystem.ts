import { CppLogo, HtmlLogo, JavaScriptLogo } from "@/assets";
import type {
  DesignSystemColor,
  FontSample,
  TechnologySample,
  TypographySample,
} from "@/types/designSystem";

export const DESIGN_SYSTEM_DESCRIPTION =
  "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto Bianca pesto roll onions.";

export const TYPOGRAPHY: TypographySample[] = [
  {
    tag: "h2",
    label: "Heading 1",
    className:
      "font-poppins-semiBold text-[clamp(28px,4vw,48px)] text-light-gray",
  },
  {
    tag: "h3",
    label: "Heading 2",
    className: "font-poppins-semiBold text-[clamp(24px,3vw,36px)] text-silver",
  },
  {
    tag: "p",
    label: "Paragraph 1",
    className: "font-poppins-medium text-[clamp(20px,2.3vw,28px)] text-mist",
  },
  {
    tag: "p",
    label: "Paragraph 2",
    className: "font-poppins-regular text-[clamp(18px,2vw,24px)] text-slate",
  },
];

export const FONTS: FontSample[] = [
  { title: "Primary Font", name: "Sora", className: "font-sora-regular" },
  {
    title: "Secondary Font",
    name: "Poppins",
    className: "font-poppins-regular",
  },
];

export const COLORS: DesignSystemColor[] = [
  "bg-red-alert",
  "bg-red-deep",
  "bg-mist",
];

export const LANGUAGES: TechnologySample[] = [
  { src: HtmlLogo, name: "HTML" },
  { src: CppLogo, name: "C++" },
  { src: JavaScriptLogo, name: "JavaScript" },
];
