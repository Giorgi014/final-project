import { gsap } from "gsap";
import { REVEAL } from "./default";

type RevealVars = {
  x?: number;
  y?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  trigger?: Element | string | null;
};

export const Reveal = (
  target: gsap.TweenTarget,
  { x = -60, y, scale, duration, delay, ease, start, trigger }: RevealVars = {},
) => {
  if (!target) return;

  return gsap.fromTo(
    target,
    {
      x,
      ...(y !== undefined ? { y } : {}),
      ...(scale !== undefined ? { scale } : {}),
      opacity: 0,
    },
    {
      x: 0,
      y: y !== undefined ? 0 : undefined,
      scale: scale !== undefined ? 1 : undefined,
      opacity: 1,
      duration: duration ?? REVEAL.duration,
      delay,
      ease: ease ?? REVEAL.ease,
      scrollTrigger: {
        trigger: trigger ?? (target as Element),
        start: start ?? REVEAL.start,
        once: REVEAL.once,
      },
    },
  );
};

export const RevealCards = (
  target: gsap.TweenTarget,
  { delay = 0, start = "top 85%" }: { delay?: number; start?: string } = {},
) => {
  return Reveal(target, {
    x: 0,
    y: 20,
    scale: 0.8,
    delay,
    start,
  });
};
