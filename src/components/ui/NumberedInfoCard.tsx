import type { NumberedInfoCardProps } from "@/types";
import { CornerFrame } from "./CornerFrame";

export const NumberedInfoCard = ({
  num,
  title,
  description,
  className,
  active = false,
}: NumberedInfoCardProps) => {
  return (
    <div className={`flex justify-start items-start gap-4 ${className}`}>
      <CornerFrame active={active}>
        <p className="font-jakarta-semiBold text-[28px] leading-[100%]">
          {num}
        </p>
      </CornerFrame>
      <div className="max-w-95.5">
        <h2 className="font-comfortaa-semiBold text-[20px] text-base leading-6 mb-3">
          {title}
        </h2>
        <p className="font-poppins-regular text-[16px] text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};
