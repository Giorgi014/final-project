import { ContactForm } from "@/components/contact/ContactForm";
import { SectionTitle } from "@/components/ui";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const ContactSection = () => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

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
          start: isMobile ? "top 85%" : "top 95%",
          once: true,
        },
      },
    );
    gsap.fromTo(
      listRef.current?.children ?? [],
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        stagger: 0.25,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: listRef.current,
          start: isMobile ? "top 85%" : "top 95%",
          once: true,
        },
      },
    );
  });
  return (
    <article className="w-full max-w-330 px-5 mx-auto flex flex-col justify-between items-center md:flex-row md:items-start gap-5 mt-15 md:mt-35 lg:mt-50">
      <section className="w-full max-w-175">
        <SectionTitle title="Let’s Talk About Your Idea" />
        <p
          ref={descriptionRef}
          className="w-full max-w-163.75 font-poppins-regular text-[16px] text-secondary leading-6 text-center md:text-start mt-4 mb-7.5"
        >
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
          Bianca pesto roll onions.
        </p>
        <ul
          ref={listRef}
          className="w-full pl-5 font-poppins-medium text-[16px] text-secondary leading-6 list-disc"
        >
          <li>Stygar@help.com</li>
          <li className="my-6">+1 (555) 123-4567</li>
          <li>5987 Mid Rivers Mall Dr., St. Charles</li>
        </ul>
      </section>
      <ContactForm />
    </article>
  );
};
