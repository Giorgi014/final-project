import { Arrow } from "@/assets";
import type { FutureCardProps } from "@/types";

export const FutureCard = ({ image, title, description }: FutureCardProps) => {
  return (
    <div className="w-full max-w-83.75 rounded-3xl border-2 border-base/20">
      <img src={image} alt={description} className="w-full" />
      <div className="backdrop-blur-xl p-6">
        <h2>{title}</h2>
        <p>{description}</p>
        <button type="button">
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
