import {
  Facebook,
  Insta,
  Linkedin,
  Twitter,
  Youtube,
} from "@/assets/svgComp/General";
import Container from "../ui/Container";
import logoColored from "@/assets/logoColored.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className="bg-whitish mt-14">
      <Container className="py-20">
        <section className="grid lg:grid-cols-4 sm:grid-cols-2  gap-9 border-b border-[#D1D1D1] pb-20">
          <Link to={"/"}>
            <img src={logoColored} alt="logoColored" />
          </Link>
          <div className="text-textShade">
            <h6 className="font-bold mb-8 ">Dymond Fleets</h6>
            <div className="space-y-5 text-xs">
              <p>Home</p>
              <p>Project</p>
              <div>
                <Link to="/about" className="cursor-pointer">
                  About Us
                </Link>
              </div>
              <p>Agents</p>
            </div>
          </div>
          <div className="text-textShade">
            <h6 className="font-bold mb-8 ">Partner with Dymond Fleets</h6>
            <div className="space-y-5 text-xs">
              <p className="w-1/2">498w Fluton ste, STE 2D Chicgo, IL 63867.</p>
              <p>(123) 456789000</p>
              <p>info@seafarers.io </p>
            </div>
          </div>
          <div className="text-textShade">
            <h6 className="font-bold mb-8 ">Company</h6>
            <div className="space-y-5 text-xs">
              <Link to="/about" className="cursor-pointer">
                About Us
              </Link>
            </div>
          </div>
        </section>
        <section className="text-xs mt-10 md:flex gap-7 space-y-7 md:space-y-0 items-center justify-between flex-wrap">
          <div className="">
            <p>©{fullYear} seafarers. All rights reserved</p>
          </div>
          <div>
            <p>
              <span>
                <Link to="/policy">Privacy Policy </Link>
              </span>{" "}
              |{" "}
              <span>
                <Link to="/terms">Terms & Conditions </Link>
              </span>{" "}
              | Cookies Policy | Map
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Insta />
            <Facebook />
            <Linkedin />
            <Youtube />
            <Twitter />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Footer;
