import { SERVICE_CARDS } from "@/data/services";
import { SectionTitle, ServiceCard } from "@/components/ui";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export const DesignSolutionsSection = () => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      descriptionRef.current,
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 95%",
          once: true,
        },
      },
    );
  });

  return (
    <article className="w-full max-w-330 px-5 mt-15 sm:mt-25 lg:mt-62.5 mx-auto">
      <section className="w-full">
        <SectionTitle title="Creative Design Solution" />
        <p
          ref={descriptionRef}
          className="font-poppins-regular text-[16px] text-secondary w-full max-w-156.5 mt-4 text-center md:text-start mx-auto md:mx-0"
        >
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
          Bianca pesto roll onions.
        </p>
      </section>
      <section className="mt-15 grid sm:grid-cols-[repeat(2,minmax(0,335px))] lg:grid-cols-[repeat(3,minmax(0,335px))] justify-center md:justify-between gap-5 gap-y-10">
        {SERVICE_CARDS.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </section>
    </article>
  );
};
