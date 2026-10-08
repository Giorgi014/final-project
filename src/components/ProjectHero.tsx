import { NiceAvatar, UiUxIllustration } from "@/assets";

export const ProjectHero = () => {
  return (
    <article className="w-full flex flex-col justify-center sm:flex-row sm:justify-between items-center max-w-330 px-5 mt-5 md:mt-10 lg:mt-15 mx-auto">
      <img
        src={UiUxIllustration}
        alt=""
        className="absolute z-[-1] w-full max-w-226 right-0"
      />
      <section className="w-full max-w-156.5 text-center sm:text-start">
        <h2 className="font-comfortaa-bold text-[clamp(32px,3.5vw,64px)] text-base leading-19">
          Reimagining <br /> Digital Experience
        </h2>
        <div className="flex justify-center sm:justify-start items-center text-[16px] font-poppins-regular text-soft-gray leading-6 mt-6">
          <p>Nova Tech</p>
          <ul className="list-disc pl-7">
            <li>20-04-25</li>
          </ul>
        </div>
      </section>
      <img
        src={NiceAvatar}
        alt=""
        className="w-full max-w-85 sm:w-[clamp(200px,35vw,334px)] mx-auto sm:mx-0"
      />
    </article>
  );
};
