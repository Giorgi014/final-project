import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Reveal } from "@/components/animation/reveal";

export function useReveal<T extends HTMLElement>(
  options?: Parameters<typeof Reveal>[1],
) {
  const ref = useRef<T>(null);

  useGSAP(() => {
    Reveal(ref.current, options);
  });

  return ref;
}
