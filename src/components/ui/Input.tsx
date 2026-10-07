import type { InputProps } from "@/types";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const Input = ({
  label,
  placeholder,
  variant,
  error,
  ...props
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const inputType =
    variant === "password"
      ? isVisible
        ? "text"
        : "password"
      : variant === "email"
        ? "email"
        : "text";

  const handleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`w-full flex justify-center items-center bg-black/20 rounded-3xl py-4 px-6 border relative ${error ? "border-primary" : "border-base/20"}`}
    >
      <label htmlFor={variant} className="hidden">
        {label}
      </label>
      <input
        id={variant}
        type={inputType}
        placeholder={placeholder}
        className="w-full h-full text-base text-[16px] font-poppins-medium outline-none"
        {...props}
      />
      {variant === "password" && (
        <button
          type="button"
          onClick={handleText}
          aria-label={isVisible ? "Hide password" : "Show password"}
          className="absolute right-6 cursor-pointer outline-none bg-none text-base/20"
        >
          {isVisible ? <FiEye /> : <FiEyeOff />}
        </button>
      )}
    </div>
  );
};
