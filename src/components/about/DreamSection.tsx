import { ABOUT_SERVICE_CARDS } from "@/data/about";
import { SectionTitle, ServiceCard } from "@/components/ui";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const DreamSection = () => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const isMobile = window.innerWidth < 768;

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.fromTo(
      descriptionRef.current,
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: isMobile ? "top 95%" : "top 120%",
          once: true,
        },
      },
    );
  });

  return (
    <article className="w-full max-w-330 px-5 mt-15 sm:mt-25 lg:mt-62.5 mx-auto">
      <section className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
        <SectionTitle title="Our Dream to Reality" />
        <p
          ref={descriptionRef}
          className="font-poppins-regular text-[16px] text-secondary w-full md:w-[clamp(250px,42vw,626px)] mt-4 text-center md:text-start mx-auto md:mx-0"
        >
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara.
        </p>
      </section>
      <section className="mt-15 grid sm:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] justify-center md:justify-between gap-5 gap-y-10">
        {ABOUT_SERVICE_CARDS.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </section>
    </article>
  );
};
