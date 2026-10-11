import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui";
import { Logo } from "@/assets";
import { navigation } from "@/components/layout/Header/Navigation";
import { useState } from "react";
import { MobileMenu } from "@/components/layout/Header/MobileMenu";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full max-w-360 flex justify-between items-center gap-2.5 mt-8 md:mt-10 mx-auto xl:mt-15 px-5 xl:px-20">
      <Link
        to={"/"}
        className={`flex justify-start items-center gap-3 cursor-pointer transition-opacity duration-700 ease-in-out ${
          isOpen
            ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
            : "opacity-100"
        }`}
      >
        <img
          src={Logo}
          alt="Stygar logo"
          className="w-[clamp(28px,4.5vw,39px)]"
        />
        <h1 className="font-jakarta-bold text-[clamp(24px,4vw,36px)] text-primary">
          Stygar
        </h1>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center gap-6">
          {navigation.map((item) => {
            const isActive = location.pathname === item.src;

            return (
              <li
                key={item.id}
                className={`cursor-pointer text-[18px] font-comfortaa-regular transition-colors duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <Link
                  to={item.src}
                  className={`relative inline-block after:pointer-events-none after:absolute after:-bottom-1 after:h-px after:bg-primary after:transition-[width,left] after:duration-400 after:ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                    isActive
                      ? "after:left-0 after:w-full"
                      : "after:left-1/2 after:w-0 hover:after:left-0 hover:after:w-full focus-visible:after:left-0 focus-visible:after:w-full"
                  }`}
                >
                  {item.page}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden lg:block">
        <Button variant="button" navigation="/sign-in">
          Get in Touch
        </Button>
      </div>

      <IoMenu
        className={`lg:hidden text-primary text-2xl cursor-pointer transition-opacity duration-700 ease-in-out ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={openMenu}
      />

      <MobileMenu isOpen={isOpen} onClose={openMenu} />
    </header>
  );
};
