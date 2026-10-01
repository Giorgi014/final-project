import { Arrow } from "@/assets";
import type { FutureProjectContent } from "@/types/home";

export const FutureCard = ({
  image,
  title,
  description,
}: FutureProjectContent) => {
  return (
    <div className="w-full max-w-83.75 rounded-3xl border-2 border-base/80">
      <img src={image} alt={`${title} project preview`} className="w-full" />
      <div className="backdrop-blur-xl p-6 rounded-b-3xl">
        <h2 className="text-[20px] text-base font-comfortaa-bold leading-6">
          {title}
        </h2>
        <p className="text-[16px] font-poppins-regular text-secondary leading-6 mt-4">
          {description}
        </p>
        <div className="w-full flex justify-end">
          <button
            type="button"
            className="group flex justify-center items-center w-14 h-14 rounded-3xl border border-base/80 hover:bg-primary/80 transition-colors duration-300 cursor-pointer"
          >
            <img
              src={Arrow}
              alt=""
              className="rotate-45 transition-transform duration-300 group-hover:rotate-0"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
