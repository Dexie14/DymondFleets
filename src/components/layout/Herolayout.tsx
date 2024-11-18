import { ReactNode } from "react";
import Header from "../menuBars/Header";
import { useLocation } from "react-router-dom";

interface HeroProps {
  children: ReactNode;
}

const HeroLayout = ({ children }: HeroProps) => {
  const location = useLocation();

  const shop = location.pathname === "/shop";
  const home = location.pathname === "/";
  return (
    <div
      className={`${
        home
          ? `sm:bg-[url('/Herobackground.png')] bg-[url('/HerobackgroundMobile.png')]`
          : shop
          ? `bg-[url('/AboutImage.png')]`
          : "bg-fadedBackground"
      } bg-cover bg-no-repeat sm:bg-center `}
    >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default HeroLayout;
