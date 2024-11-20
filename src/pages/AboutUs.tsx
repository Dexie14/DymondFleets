import AboutHero from "@/components/About/AboutHero";
import Team from "@/components/About/Team";
import Unique from "@/components/About/Unique";
import Download from "@/components/Home/Download";
import HeroLayout from "@/components/layout/Herolayout";
import Footer from "@/components/menuBars/Footer";

const AboutUs = () => {
  return (
    <div className="">
      <HeroLayout>
        <AboutHero />
      </HeroLayout>
      <Unique />
      <Team />
      <Download />

      <Footer />
    </div>
  );
};

export default AboutUs;
