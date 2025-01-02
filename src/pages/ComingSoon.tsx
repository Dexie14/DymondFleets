import Footer from "@/components/menuBars/Footer";
import Header from "@/components/menuBars/Header";
import { Link } from "react-router-dom";
import coming from "@/assets/coming.jpg";

const ComingSoon = () => {
  return (
    <div>
      <Header />
      <section className=" sm:px-20 px-7 sm:flex justify-between items-center">
        <div className="sm:w-[55%]">
          <p className=" text-deepBlue my-2 font-medium sm:text-5xl  lg:leading-[70px] text-2xl">
            Sorry, this service isn't available yet
          </p>
          <p>
            You can view more details about us on our
            <Link to={"/"} className="text-blueShade">
              {" "}
              home page
            </Link>
            .
          </p>
        </div>
        <div className="sm:w-[45%]">
          <img src={coming} alt="coming" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ComingSoon;
