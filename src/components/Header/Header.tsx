import { IoMenu, IoClose } from "react-icons/io5";
import { Button } from "@/components/ui";
import { Logo } from "@/assets";
import { navigation } from "@/components/header/Navigation";
import { useState } from "react";
import { MobileMenu } from "@/components/header/MobileMenu";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full max-w-360 flex justify-between items-center gap-2.5 mt-10 mx-auto xl:mt-15 px-5 xl:px-20">
      <div className="flex justify-start items-center gap-3 cursor-pointer">
        <img
          src={Logo}
          alt="Stygar logo"
          className="w-[clamp(28px,4.5vw,39px)]"
        />
        <h1 className="font-jakarta-bold text-[clamp(24px,4vw,36px)] text-primary">
          Stygar
        </h1>
      </div>

      <nav className="hidden lg:block">
        <ul className="flex items-center gap-6">
          {navigation.map((item) => {
            const isActive = location.pathname === item.src;

            return (
              <li
                key={item.id}
                className={`text-[18px] font-comfortaa-regular hover:text-primary transition-colors duration-300 cursor-pointer
                  ${isActive ? "text-primary border-b pb-0.5" : "text-secondary"}`}
              >
                <Link to={item.src}>{item.page}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden lg:block">
        <Button>Get in Touch</Button>
      </div>

      {isOpen ? (
        <IoClose
          className="lg:hidden text-foreground text-2xl cursor-pointer z-9999"
          onClick={openMenu}
        />
      ) : (
        <IoMenu
          className="lg:hidden text-primary text-2xl cursor-pointer"
          onClick={openMenu}
        />
      )}

      <MobileMenu isOpen={isOpen} />
    </header>
  );
};
