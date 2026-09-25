import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { navigation } from "./Navigation";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const location = useLocation();
  return (
    <div
      aria-hidden={!isOpen}
      className={`absolute top-0 left-0 w-full h-screen bg-crimson flex flex-col items-center gap-5 py-6 px-5 lg:hidden z-999 transition-[clip-path,visibility] duration-500 ease-out ${
        isOpen ? "visible" : "invisible pointer-events-none"
      }`}
      style={{
        clipPath: isOpen
          ? "circle(150vmax at 100% 0)"
          : "circle(0vmax at 100% 0)",
      }}
    >
      <nav className="w-full">
        <ul className="w-full flex flex-col items-center gap-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.src;

            return (
              <li
                key={item.id}
                className={`text-[18px] font-jakarta-regular hover:text-primary transition-colors duration-300 cursor-pointer
                  ${isActive ? "text-foreground border-b pb-0.5" : "text-secondary"}`}
              >
                <Link to={item.src}>{item.page}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button>Get in Touch</Button>
    </div>
  );
};
