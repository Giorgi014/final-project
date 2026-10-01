import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { TransitionEvent } from "react";

const COPIES = 3;
const AUTOPLAY_INTERVAL = 5000;

export const useInfiniteCarousel = (itemCount: number) => {
  const [slideIndex, setSlideIndex] = useState(
    itemCount + Math.floor(itemCount / 2),
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const activeIndex = slideIndex % itemCount;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const move = (step: number) =>
    setSlideIndex((index) =>
      Math.min(Math.max(index + step, 0), itemCount * COPIES - 1),
    );

  const goToIndex = (targetIndex: number) => {
    let step =
      (((targetIndex - activeIndex) % itemCount) + itemCount) % itemCount;
    if (step > itemCount / 2) step -= itemCount;
    move(step);
  };

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const activeItem = itemRefs.current[slideIndex];
    const track = trackRef.current;
    if (!viewport || !activeItem || !track) return;

    const centerActiveItem = () => {
      const offset =
        viewport.clientWidth / 2 -
        activeItem.offsetLeft -
        activeItem.offsetWidth / 2;
      track.style.transform = `translateX(${offset}px)`;
    };

    centerActiveItem();
    const resizeObserver = new ResizeObserver(centerActiveItem);
    resizeObserver.observe(viewport);
    resizeObserver.observe(activeItem);

    return () => resizeObserver.disconnect();
  }, [slideIndex]);

  useEffect(() => {
    if (transitionEnabled) return;
    const frame = requestAnimationFrame(() => setTransitionEnabled(true));
    return () => cancelAnimationFrame(frame);
  }, [transitionEnabled]);

  useEffect(() => {
    if (!autoplayEnabled) return;

    const interval = window.setInterval(() => {
      setSlideIndex((index) => Math.min(index + 1, itemCount * COPIES - 1));
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [autoplayEnabled, itemCount]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLElement>) => {
    const isInMiddleCopy =
      slideIndex >= itemCount && slideIndex < itemCount * 2;
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform" ||
      isInMiddleCopy
    ) {
      return;
    }

    setTransitionEnabled(false);
    setSlideIndex(itemCount + activeIndex);
  };

  return {
    activeIndex,
    slideIndex,
    slideCount: itemCount * COPIES,
    transitionEnabled,
    viewportRef,
    trackRef,
    itemRefs,
    move,
    goToIndex,
    handleTransitionEnd,
    autoplayEnabled,
    toggleAutoplay: () => setAutoplayEnabled((enabled) => !enabled),
  };
};
