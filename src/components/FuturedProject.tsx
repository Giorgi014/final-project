import { INTRO_SECTION } from "@/data/Content";
import { IntroSection } from "./IntroSection";
import { FutureCard } from "./FutureCard";
import {
  CardCover6,
  CardCover5,
  CardCover4,
  CardCover,
  CardCover2,
  CardCover3,
} from "@/assets";

export const FuturedProject = () => {
  const futuredProjects = INTRO_SECTION.futuredProjects;
  const images = [
    CardCover6,
    CardCover5,
    CardCover4,
    CardCover,
    CardCover2,
    CardCover3,
  ];
  return (
    <article className="w-full max-w-7xl px-5 mx-auto">
      <IntroSection
        title={futuredProjects.title}
        description={futuredProjects.description}
        actionLabel={futuredProjects.actionLabel}
      />
      <section className="w-full mt-15">
        {images.map((image) => (
          <FutureCard
            key={image}
            image={image}
            title={"Web Development"}
            description={"Pizza ipsum dolor meat lovers buffalo. "}
          />
        ))}
      </section>
    </article>
  );
};
