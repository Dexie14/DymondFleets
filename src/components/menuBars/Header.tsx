import {
  DropdownIcon,
  OptionIcon,
  RightArrowIcon,
} from "@/assets/svgComp/General";
import { Button } from "../ui/button";
import dymond from "/dymond.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoColored from "@/assets/logoColored.png";

import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import AppStore from "@/assets/AppStore.png";
import GooglePlay from "@/assets/GooglePlay.png";

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `
        font-bold ${isActive ? "font-extrabold" : "font-normal"}
      `;
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openCompany, setOpenCompany] = useState<boolean>(false);

  const TermsandPolicy =
    location.pathname === "/terms" ||
    location.pathname === "/policy" ||
    location.pathname === "/coming-soon";

  return (
    <section>
      <div
        className={`${
          isScrolled
            ? "bg-blueShade  w-full !text-foundationWhite sm:px-32 px-8 py-4 fixed top-0 left-0 right-0 shadow-md z-50"
            : ""
        } flex  ${
          TermsandPolicy ? "text-textBlue" : "text-foundationWhite"
        } items-center justify-between w-[80%] mx-auto py-10`}
      >
        <Link to={"/"}>
          <img
            src={TermsandPolicy ? (isScrolled ? dymond : logoColored) : dymond}
            alt="dymond"
            className="w-[90px]"
          />
        </Link>
        <aside className={`text-lg items-center sm:gap-x-16 gap-x-4 flex `}>
          <h4 className="flex gap-2 items-center font-semibold cursor-pointer">
            EN <DropdownIcon />
          </h4>
          <Link
            to="/about"
            className={`${getLinkClass(
              "#about"
            )} font-semibold hidden sm:block`}
          >
            About us
          </Link>

          <Popover>
            <PopoverTrigger>
              <Button
                className={`${
                  TermsandPolicy
                    ? isScrolled
                      ? "bg-foundationWhite text-foundationBlue  hover:text-white"
                      : "bg-blueShade text-white"
                    : "bg-foundationWhite text-foundationBlue  hover:text-white"
                }  hidden sm:block text-sm h-[40px]  w-[87px] rounded-[20px]`}
              >
                Register
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="py-8 px-8 rounded-[12px] w-[308px] space-y-8"
            >
              <Link
                to="/register"
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="w-[90%]">
                  <h4 className="font-semibold text-deepBlue">
                    Become a driver
                  </h4>
                  <p className="text-sm font-medium text-textShade">
                    Make money on your own terms
                  </p>
                </div>
                <RightArrowIcon />
              </Link>
              <section className="flex items-center justify-between cursor-pointer">
                <div className="w-[90%]">
                  <h4 className="font-semibold text-deepBlue">
                    Become a courier
                  </h4>
                  <p className="text-sm font-medium text-textShade">
                    Deliver goods and get paid weekly
                  </p>
                </div>
                <RightArrowIcon />
              </section>
              <section className="flex items-center justify-between cursor-pointer">
                <div className="w-[90%]">
                  <h4 className="font-semibold text-deepBlue">
                    Sign up a fleet owner
                  </h4>
                  <p className="text-sm font-medium text-textShade">
                    Add your fleet to Dymond Fleets and boost income
                  </p>
                </div>
                <RightArrowIcon />
              </section>
            </PopoverContent>
          </Popover>

          <Sheet>
            <SheetTrigger>
              <div
                className={`cursor-pointer ${
                  TermsandPolicy
                    ? isScrolled
                      ? "text-foundationWhite"
                      : "text-textBlue"
                    : "text-foundationWhite"
                }`}
              >
                <OptionIcon />
              </div>
            </SheetTrigger>
            <SheetContent
              style={{ pointerEvents: "all" }}
              className="h-[70vh] mt-10 sm:mr-10  rounded-[12px] overflow-y-scroll scrollbar-hidden "
            >
              <SheetHeader>
                <SheetTitle>
                  <div className="w-16 h-16">
                    <Link to={"/"}>
                      <img src={logoColored} alt="logoColored" />
                    </Link>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="space-y-7">
                <div className="">
                  <div
                    className="flex items-center justify-between cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/coming-soon");
                      // setOpenDropdown(!openDropdown);
                    }}
                  >
                    <span className="font-semibold sm:text-lg text-sm">
                      Careers
                    </span>
                    {/* <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: openDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <DropdownIcon className="text-black" />
                      </div>
                    </motion.div> */}
                  </div>

                  {/* {openDropdown && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: openDropdown ? "auto" : 0,
                        opacity: openDropdown ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className=" mt-2 text-textShade  text-left"
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 sm:text-sm text-xs  cursor-pointer">
                        Rides
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 sm:text-sm text-xs cursor-pointer">
                        Share Rides
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 sm:text-sm text-xs  cursor-pointer">
                        Courier
                      </li>
                    </motion.ul>
                  )} */}
                </div>
                <div className="">
                  <div
                    className="flex items-center justify-between cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenCompany(!openCompany);
                    }}
                  >
                    <span className="font-semibold sm:text-lg text-sm">
                      Earn with Dymond Fleets
                    </span>
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: openCompany ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <DropdownIcon className="text-black" />
                      </div>
                    </motion.div>
                  </div>

                  {openCompany && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: openCompany ? "auto" : 0,
                        opacity: openCompany ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className=" mt-2 text-textShade text-left"
                    >
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/register");
                        }}
                        className="px-4 py-2 hover:bg-gray-100 sm:text-sm text-xs cursor-pointer"
                      >
                        Drivers
                      </li>
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/coming-soon");
                        }}
                        className="px-4 py-2 hover:bg-gray-100 sm:text-sm text-xs cursor-pointer"
                      >
                        Fleets Owners
                      </li>
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/coming-soon");
                        }}
                        className="px-4 py-2 hover:bg-gray-100 sm:text-sm text-xs cursor-pointer"
                      >
                        Courier
                      </li>
                    </motion.ul>
                  )}
                </div>
                <div>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      // console.log("clicked");
                      navigate("/about");
                    }}
                    className="font-semibold sm:text-lg text-sm text-left cursor-pointer "
                  >
                    About
                  </p>
                </div>
                <div>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/register");
                    }}
                    className="font-semibold sm:text-lg text-sm text-left cursor-pointer "
                  >
                    Register
                  </p>
                </div>
                <section className="sm:flex gap-2 space-y-2 sm:space-y-0 items-center ">
                  <img src={AppStore} alt="appstore" />
                  <img src={GooglePlay} alt="GooglePlay" />
                </section>
              </div>
            </SheetContent>
          </Sheet>
        </aside>
      </div>
    </section>
  );
};

export default Header;
