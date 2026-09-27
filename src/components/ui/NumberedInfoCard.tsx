import type { NumberedInfoCardProps } from "@/types";

export const NumberedInfoCard = ({
  num,
  title,
  description,
  className,
}: NumberedInfoCardProps) => {
  return (
    <div className={`flex justify-start items-start gap-4 ${className}`}>
      <div className="flex justify-center items-center min-w-13 h-13 border border-rose relative">
        <div className="absolute w-1.5 h-1.5 bg-primary rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-1.5 h-1.5 bg-primary rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-1.5 h-1.5 bg-primary rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute w-1.5 h-1.5 bg-primary rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
        <p className="font-jakarta-semiBold text-primary text-[28px] leading-[100%]">
          {num}
        </p>
      </div>
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
