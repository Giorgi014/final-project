import { ErrorIllustration } from "@/assets";
import { RadialBackground } from "@/components";

const ErrorPage = () => {
  return (
    <main className="mt-15 md:pt-25 xl:pt-34.5 overflow-x-hidden">
      <RadialBackground position="50% 50%">
        <img
          src={ErrorIllustration}
          alt=""
          className="w-full max-w-232.25 px-5 mx-auto"
        />
      </RadialBackground>
    </main>
  );
};

export default ErrorPage;
