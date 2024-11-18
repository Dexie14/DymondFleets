import { useState } from "react";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import AppStore from "@/assets/AppStore.png";
import GooglePlay from "@/assets/GooglePlay.png";

import WoodenHands from "@/assets/WoodenHands.png";

const Download = () => {
  const [selectedCard, setSelectedCard] = useState<string>("Ride");

  const handleButtonClick = (card: string) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <Container className="py-20">
        <h2 className="sm:text-5xl text-2xl text-deepBlue  text-center font-semibold font-Inter">
          Download our apps
        </h2>
        <aside className="w-9/12 mx-auto flex justify-center space-x-4  my-5 ">
          <Button
            onClick={() => handleButtonClick("Ride")}
            className={`h-12 ${
              selectedCard === "Ride"
                ? "bg-blueShade"
                : "bg-Grey border border-borderColor text-textShade"
            }  w-fit rounded-[24px] sm:px-8`}
          >
            Ride
          </Button>
          <Button
            onClick={() => handleButtonClick("Driver")}
            className={`h-12 ${
              selectedCard === "Driver"
                ? "bg-blueShade"
                : "bg-Grey border border-borderColor text-textShade"
            }  w-fit rounded-[24px] sm:px-8`}
          >
            Driver
          </Button>
        </aside>
        <section className="bg-[url('/Ellipse.png')] lg:flex items-center justify-between bg-no-repeat bg-contain bg-right rounded-[24px] bg-blueShade lg:px-12 sm:px-24 px-4">
          <div className="lg:w-[60%]  py-12 ">
            <h2 className="sm:text-3xl text-xl text-white  font-semibold  ">
              Download Our App and Ride with Us!
            </h2>
            <p className="font-medium text-whitish my-5 text-sm">
              Join the Dymond Fleets community today! Download our app to book
              your rides easily, track your driver in real-time, and enjoy
              unbeatable convenience. Your next adventure is just a tap away!
            </p>
            <section className="sm:flex gap-2 space-y-2 sm:space-y-0 items-center mb-7">
              <img src={AppStore} alt="appstore" />
              <img src={GooglePlay} alt="GooglePlay" />
            </section>
          </div>
          <div className=" -mb-6">
            <img src={WoodenHands} alt="WoodenHands" className=""/>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Download;
