import { EXPERIENCES } from "@/data/home";
import { ExperienceCard } from "./ExperienceCard";
import { SectionTitle } from "./ui";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const images = EXPERIENCES.map((experience) => experience.image);

const CENTER_INDEX = Math.floor(images.length / 2);
const CENTER_SIZE = 84;
const SIZE_STEP = 10;

const experiences = EXPERIENCES;

const slideCopies = ["first", "middle", "last"] as const;
const slides = slideCopies.flatMap((copy) =>
  experiences.map((experience) => ({ copy, experience })),
);

const TOTAL = experiences.length;

export const ExperiencesSection = () => {
  const {
    activeIndex,
    slideIndex,
    transitionEnabled,
    viewportRef,
    trackRef,
    itemRefs,
    move,
    goToIndex,
    handleTransitionEnd,
  } = useInfiniteCarousel(TOTAL);

  return (
    <article className="w-full max-w-330 px-5 mx-auto mt-15 md:mt-37.5">
      <SectionTitle title="Experiences That Inspire" />
      <section className="w-full max-w-175 flex justify-between items-center mt-15 mb-12 mx-auto">
        {images.map((_, index) => {
          const distance = Math.abs(index - CENTER_INDEX);
          const size = CENTER_SIZE - distance * SIZE_STEP;
          const imageIndex =
            (activeIndex + index - CENTER_INDEX + images.length) %
            images.length;
          const isActive = index === CENTER_INDEX;

          return (
            <button
              type="button"
              key={images[imageIndex]}
              aria-label={`Show review ${imageIndex + 1}`}
              onClick={() => goToIndex(imageIndex)}
              style={{
                width: `clamp(24px, ${(size / 7).toFixed(2)}%, ${size}px)`,
              }}
              className={
                isActive
                  ? "relative z-10 aspect-square shrink-0 outline-2 outline-dashed outline-primary rounded-full cursor-pointer"
                  : "aspect-square shrink-0 rounded-full cursor-pointer"
              }
            >
              <img
                src={images[imageIndex]}
                alt=""
                className="size-full object-cover"
              />
            </button>
          );
        })}
      </section>
      <div ref={viewportRef} className="relative w-full">
        <section
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={`relative flex w-max gap-6 ${
            transitionEnabled
              ? "transition-transform duration-500 ease-out"
              : ""
          }`}
        >
          {slides.map(({ copy, experience }, index) => {
            const isActive = index === slideIndex;

            return (
              <div
                key={`${copy}-${experience.id}`}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                aria-hidden={!isActive}
                className="shrink-0"
              >
                <ExperienceCard {...experience} isActive={isActive} />
              </div>
            );
          })}
        </section>
      </div>
      <div className="mx-auto flex justify-center items-center gap-4 mt-15">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => move(-1)}
          className="w-19.5 h-11.5 rounded-3xl bg-transparent hover:bg-primary transition-colors duration-300 border border-base/20 flex justify-center items-center text-[20px] text-base cursor-pointer"
        >
          <GoChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => move(1)}
          className="w-19.5 h-11.5 rounded-3xl bg-transparent hover:bg-primary transition-colors duration-300 border border-base/20 flex justify-center items-center text-[20px] text-base cursor-pointer"
        >
          <GoChevronRight />
        </button>
      </div>
    </article>
  );
};
