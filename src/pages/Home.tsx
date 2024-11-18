import Download from "@/components/Home/Download";
import DriveandEarn from "@/components/Home/DriveandEarn";
import DriveTwo from "@/components/Home/DriveTwo";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import HeroLayout from "@/components/layout/Herolayout";
import Footer from "@/components/menuBars/Footer";

const Home = () => {
  return (
    <section>
      <div className="">
        <HeroLayout>
          <HeroSection />
        </HeroLayout>
        <DriveandEarn />
        <Services />
        <DriveTwo />
        <Testimonial />
        <Download />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
