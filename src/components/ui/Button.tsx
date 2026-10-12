import type { ButtonProps } from "@/types";
import { useNavigate } from "react-router-dom";

export const Button = ({
  children,
  className = "",
  navigation,
  variant,
}: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      type={variant === "button" ? "button" : "submit"}
      className={`group relative inline-flex items-center justify-center overflow-hidden bg-primary py-3 px-8 rounded-3xl font-comfortaa-medium text-[clamp(16px,2vw,20px)] text-base leading-6 cursor-pointer whitespace-nowrap ${className}`}
      onClick={
        variant === "button" && navigation
          ? () => navigate(navigation)
          : undefined
      }
    >
      <span className="absolute w-0 h-0 transition-all duration-350 ease-out bg-red-deep rounded-full group-hover:w-64.75 group-hover:h-64.75" />
      <span className="relative">{children}</span>
    </button>
  );
};
