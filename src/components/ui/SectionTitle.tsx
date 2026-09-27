import { RightDots } from "@/assets";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center md:justify-start items-center gap-1">
      <h2 className="font-comfortaa-bold text-[clamp(2rem,3.5vw,3rem)] text-base leading-14.5">
        {title}
      </h2>
      <img src={RightDots} alt="" className="w-[clamp(30px,4vw,40px)]" />
    </div>
  );
};
