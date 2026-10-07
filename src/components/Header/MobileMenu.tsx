import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui";
import { navigation } from "@/components/header/Navigation";

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const location = useLocation();
  return (
    <div
      aria-hidden={!isOpen}
      className={`absolute top-0 left-0 w-full h-screen bg-crimson flex flex-col items-center py-8 px-6 lg:hidden z-999 transition-[clip-path,visibility] duration-700 ease-in-out ${
        isOpen ? "visible" : "invisible pointer-events-none"
      }`}
      style={{
        clipPath: isOpen
          ? "circle(150vmax at 100% 0)"
          : "circle(0vmax at 100% 0)",
      }}
    >
      <div className="w-full max-w-sm flex-1 flex flex-col justify-center">
        <nav className="w-full">
          <ul className="w-full flex flex-col">
            {navigation.map((item) => {
              const isActive = location.pathname === item.src;

              return (
                <li key={item.id} className="border-b border-secondary/30">
                  <Link
                    to={item.src}
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
        <Button variant="button">Get in Touch</Button>
      </div>
    </div>
  );
};
