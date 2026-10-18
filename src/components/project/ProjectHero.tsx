import { NiceAvatar, UiUxIllustration } from "@/assets";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export const ProjectHero = () => {
  const backgroundRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
        duration: 0.8,
      },
    });
    tl.fromTo(
      backgroundRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.inOut",
      },
    );
    tl.fromTo(
      titleRef.current,
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
      },
      "-=0.3",
    );
    tl.from(
      infoRef.current,
      {
        y: 20,
        opacity: 0,
        stagger: 0.15,
      },
      "-=0.3",
    );
    gsap.to(characterRef.current, {
      y: -5,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power3.inOut",
      delay: 0.3,
    });
    tl.fromTo(
      characterRef.current,
      {
        x: 60,
        y: 20,
        scale: 0.8,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.6,
        ease: "power3.inOut",
      },
      "-=0.3",
    );
  });
  return (
    <article className="w-full flex flex-col justify-center sm:flex-row sm:justify-between items-center max-w-330 px-5 mt-5 md:mt-10 lg:mt-15 mx-auto">
      <img
        ref={backgroundRef}
        src={UiUxIllustration}
        alt=""
        className="absolute z-[-1] w-full max-w-226 right-0"
      />
      <section className="w-full max-w-156.5 text-center sm:text-start">
        <h2
          ref={titleRef}
          className="font-comfortaa-bold text-[clamp(32px,3.5vw,64px)] text-base leading-13 sm:leading-19"
        >
          Reimagining <br /> Digital Experience
        </h2>
        <div
          ref={infoRef}
          className="flex justify-center sm:justify-start items-center text-[16px] font-poppins-regular text-soft-gray leading-6 mt-4 sm:mt-6"
        >
          <p>Nova Tech</p>
          <ul className="list-disc pl-7">
            <li>20-04-25</li>
          </ul>
        </div>
      </section>
      <img
        ref={characterRef}
        src={NiceAvatar}
        alt="Illustration of a smiling person holding a tablet"
        width={364}
        height={573}
        className="w-full max-w-85 sm:w-[clamp(200px,35vw,334px)] mx-auto sm:mx-0"
      />
    </article>
  );
};
