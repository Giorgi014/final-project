import { Logo } from "@/assets";
import { CornerFrame, FooterDivider } from "./ui";
import { TbBrandTelegram } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { PiYoutubeLogoLight } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="w-full relative">
      <FooterDivider variant="start" />
      <article className="w-full px-5 py-5 md:py-10">
        <section className="w-full max-w-330 flex flex-col justify-start items-center md:flex-row md:justify-between md:items-start gap-5 mx-auto">
          <div className="w-full max-w-187.25">
            <div className="flex justify-start items-center gap-3 cursor-pointer">
              <img
                src={Logo}
                alt="Stygar logo"
                className="w-[clamp(35px,7vw,51px)]"
              />
              <h1 className="font-jakarta-bold text-[clamp(32px,6vw,47px)] text-primary">
                Stygar
              </h1>
            </div>
            <p className="font-poppins-regular text-[16px] text-secondary text-center md:text-start mt-6 mb-7.5">
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
              ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
              pesto pesto Bianca pesto roll onions.
            </p>
            <ul className="w-full pl-5 flex flex-col lg:flex-row justify-between lg:items-center font-poppins-medium text-[16px] text-secondary leading-6 list-disc">
              <li>Stygar@help.com</li>
              <li>+1 (555) 123-4567</li>
              <li>5987 Mid Rivers Mall Dr., St. Charles</li>
            </ul>
            <div className="w-full max-w-45.5 py-3 px-4.5 mx-auto md:mx-0 flex justify-between items-center text-2xl text-base bg-base/20 rounded-3xl border-2 border-base/20 mt-6.25">
              <TbBrandTelegram />
              <FiTwitter />
              <RxDiscordLogo />
              <PiYoutubeLogoLight />
            </div>
          </div>
          <div className="w-full max-w-93.25 flex justify-between items-start gap-5">
            <div>
              <CornerFrame className="w-full max-w-34.5">
                <p className="font-comfortaa-bold text-2xl text-base leading-[100%]">
                  Services
                </p>
              </CornerFrame>
              <ul className="mt-8.25 font-poppins-medium text-soft-gray flex flex-col gap-y-6 justify-between items-start">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
                <li>Brand Strategy</li>
              </ul>
            </div>
            <div>
              <CornerFrame className="w-full max-w-34.5">
                <p className="font-comfortaa-bold text-2xl text-base leading-[100%]">
                  Company
                </p>
              </CornerFrame>
              <ul className="mt-8.25 font-poppins-medium text-soft-gray flex flex-col gap-y-6 justify-between items-start">
                <li>About Us</li>
                <li>Privacy</li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
      <FooterDivider variant="end" />
      <article className="w-full px-5 py-5 md:py-10">
        <section className="w-full flex flex-col justify-between items-start sm:flex-row gap-y-2.5 sm:items-center max-w-330 font-poppins-medium text-[16px] text-secondary leading-6 mx-auto">
          <div className="flex justify-start items-center gap-1">
            <p>Privacy Policy</p>
            <p>• Disclimer</p>
          </div>
          <p>Copyright © Stygar All right Reserved 2025</p>
        </section>
      </article>
    </footer>
  );
};
