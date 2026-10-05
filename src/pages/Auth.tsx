import { HeroCharacterAlt } from "@/assets";
import { RadialBackground, SignUp } from "@/components";

const Auth = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="50% 50%">
        <article className="w-full max-w-7xl px-5 my-10 md:my-15 xl:my-30 flex justify-between items-center gap-5 mx-auto">
          <img
            src={HeroCharacterAlt}
            alt=""
            className="w-[clamp(250px,35vw,450px)] hidden sm:block"
          />
          {/* <SignIn /> */}
          <SignUp />
        </article>
      </RadialBackground>
    </main>
  );
};

export default Auth;
