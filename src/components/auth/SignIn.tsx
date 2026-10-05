import { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "../ui";
import { GoogleLogo } from "@/assets";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [isVisible, setIsvisible] = useState(false);

  const handleText = () => {
    setIsvisible(!isVisible);
  };

  return (
    <form className="bg-base/6 rounded-3xl p-7.5 border border-base/20 w-full max-w-183.5">
      <section className="w-full mb-7.5 text-center md:text-start">
        <SectionTitle title="Hi Designer" />
        <p className="mt-4 font-poppins-regular text-[16px] text-secondary leading-6">
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
          Bianca pesto roll onions.
        </p>
      </section>
      <section className="w-full">
        <div className="w-full flex flex-col gap-y-6">
          <div className="w-full flex justify-center items-center bg-black/20 rounded-3xl py-4 px-6 border border-base/20 relative">
            <label htmlFor="email" className="hidden">
              email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-full text-base text-[16px] font-poppins-medium outline-none"
            />
          </div>
          <div className="w-full flex justify-center items-center bg-black/20 rounded-3xl py-4 px-6 border border-base/20 relative">
            <label htmlFor="password" className="hidden">
              password
            </label>
            <input
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full h-full text-base text-[16px] font-poppins-medium outline-none"
            />
            <button
              type="button"
              onClick={handleText}
              className="absolute right-6 cursor-pointer outline-none bg-none text-base/20"
            >
              {isVisible ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-5 mt-4">
          <p className="text-secondary text-[16px] font-poppins-regular leading-6">
            By clicking agree with <span className="text-base">terms</span> of{" "}
            <span className="text-base">conditions</span>
          </p>
          <p className="text-base text-[16px] font-poppins-regular leading-6 whitespace-nowrap">
            Forgot Password
          </p>
        </div>
        <p className="text-base text-[16px] font-poppins-regular leading-6 my-6 text-center">
          Or Continue
        </p>
      </section>
      <section className="w-full flex flex-col items-center">
        <button
          type="submit"
          className="w-full flex justify-center items-center text-base text-[16px] font-poppins-regular bg-base/6 border border-base/20 leading-6ex rounded-3xl py-3 cursor-pointer"
        >
          <img src={GoogleLogo} alt="" />
          With Google
        </button>
        <Button className="w-full max-w-64.75 mt-10 mb-7.5">Sign In</Button>
        <p className="font-poppins-regular text-[14px] text-secondary leading-5">
          Don’t have an account?
          <Link to="/sign-up" className="text-base">
            Sign Up
          </Link>
        </p>
      </section>
    </form>
  );
};
