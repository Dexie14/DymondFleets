import { ReactNode, useEffect, useMemo, useState } from "react";
import Header from "../menuBars/Header";
import { useLocation } from "react-router-dom";

interface HeroProps {
  children: ReactNode;
}

const HeroLayout = ({ children }: HeroProps) => {
  const location = useLocation();

  // Background images for different paths
  const homeImages = useMemo(
    () => ["/Herobackground.webp", "/AboutBackground.webp"],
    []
  );
  // const aboutImages = ["/AboutBackground.png", "/Herobackground.png"];

  const aboutImages = useMemo(
    () => ["/AboutBackground.webp", "/Herobackground.webp"],
    []
  );
  const homeMobileImages = useMemo(
    () => ["/HerobackgroundMobile.webp", "/AboutBackground.webp"],
    []
  );

  const [currentImage, setCurrentImage] = useState<string>(homeImages[0]);
  const [currentMobileImage, setCurrentMobileImage] = useState<string>(
    homeMobileImages[0]
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const about = location.pathname === "/about";
  const home = location.pathname === "/";

  // Update images dynamically based on location
  useEffect(() => {
    const images = home ? homeImages : about ? aboutImages : [];
    const mobileImages = home ? homeMobileImages : about ? aboutImages : [];
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 3 seconds

      // Also update the mobile image with the same index
      if (mobileImages.length > 0) {
        setCurrentMobileImage(mobileImages[currentIndex]); // Assign the mobile image based on index
      }

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [home, about, currentIndex, aboutImages, homeImages, homeMobileImages]);

  useEffect(() => {
    const images = home ? homeImages : about ? aboutImages : [];
    const mobileImages = home ? homeMobileImages : about ? aboutImages : [];
    setCurrentImage(images[currentIndex] || "");
    setCurrentMobileImage(mobileImages[currentIndex] || "");
  }, [currentIndex, home, about, aboutImages, homeImages, homeMobileImages]);

  return (
    <>
      <div
        className={`bg-cover hidden sm:block bg-no-repeat sm:bg-center transition-all duration-500 ${
          !home && !about ? "bg-fadedBackground" : ""
        }`}
        style={{
          backgroundImage: `url(${currentImage})`,
        }}
      >
        <Header />
        <div>{children}</div>
      </div>
      <div
        className="sm:hidden bg-cover bg-no-repeat sm:bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${currentMobileImage})`, // Mobile background
        }}
      >
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default HeroLayout;
