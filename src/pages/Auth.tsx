import { HeroCharacterAlt } from "@/assets";
import { RadialBackground, SignIn, SignUp } from "@/components";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();
  const isSignIn = pathname === "/sign-in";

  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="30% 70%">
        <article className="w-full max-w-330 px-5 my-10 md:my-15 xl:my-30 flex justify-between items-center gap-5 mx-auto">
          <img
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
