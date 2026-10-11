import { IoClose } from "react-icons/io5";
import { Logo } from "@/assets";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui";
import { navigation } from "@/components/layout/Header/Navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 w-full h-screen bg-crimson flex flex-col items-center py-8 px-5 lg:hidden z-9999 transition-[clip-path,visibility] duration-700 ease-in-out ${
        isOpen ? "visible" : "invisible pointer-events-none"
      }`}
      style={{
        clipPath: isOpen
          ? "circle(150vmax at 100% 0)"
          : "circle(0vmax at 100% 0)",
      }}
    >
      <div className="w-full flex justify-between items-center">
        <Link
          to={"/"}
          className="flex justify-start items-center gap-3 cursor-pointer"
        >
          <img
            src={Logo}
            alt="Stygar logo"
            className="w-[clamp(28px,4.5vw,39px)]"
          />
          <h1 className="font-jakarta-bold text-[clamp(24px,4vw,36px)] text-foreground">
            Stygar
          </h1>
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          className="text-foreground text-2xl cursor-pointer"
          onClick={onClose}
        >
          <IoClose />
        </button>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center">
        <nav className="w-full">
          <ul className="w-full flex flex-col">
            {navigation.map((item) => {
              const isActive = location.pathname === item.src;

              return (
                <li key={item.id} className="border-b border-secondary/30">
                  <Link
                    to={item.src}
                    onClick={onClose}
                    className={`flex items-center justify-between py-5 text-[22px] font-comfortaa-regular hover:text-primary transition-colors duration-300
                      ${isActive ? "text-foreground" : "text-secondary"}`}
                  >
                    <span>{item.page}</span>
                    <span className="font-jakarta-bold text-sm text-primary">
                      {String(item.id + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="w-full max-w-sm flex justify-center pt-6">
        <Button variant="button" navigation="/sign-in">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};
