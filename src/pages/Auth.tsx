import { HeroCharacterAlt } from "@/assets";
import { RadialBackground, SignIn, SignUp } from "@/components";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();
  const isSignIn = pathname === "/sign-in";
  const characterRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(characterRef.current, {
      y: -5,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power3.inOut",
      delay: 0.3,
    });

    gsap.fromTo(
      characterRef.current,
      {
        x: -60,
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
    );
  });

  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="30% 70%">
        <article className="w-full max-w-330 px-5 my-10 md:my-15 xl:my-30 flex justify-between items-center gap-5 mx-auto">
          <img
            ref={characterRef}
            src={HeroCharacterAlt}
            alt=""
            className="w-[clamp(250px,40vw,450px)] hidden md:block"
          />
          {isSignIn ? <SignIn /> : <SignUp />}
        </article>
      </RadialBackground>
    </main>
  );
};

export default Auth;
