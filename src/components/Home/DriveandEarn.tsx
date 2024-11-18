import { Button } from "../ui/button";
import Container from "../ui/Container";
import driveImage from "@/assets/driveImage.png";
import AppStore from "@/assets/AppStore.png";
import GooglePlay from "@/assets/GooglePlay.png";
import { useState } from "react";

const DriveandEarn = () => {
  const [selectedCard, setSelectedCard] = useState<string>("Driver");

  const handleButtonClick = (card: string) => {
    setSelectedCard(card);
  };
  return (
    <Container className=" py-10 md:mb-[350px] mb-[750px] sm:mb-[600px]">
      <h2 className="sm:text-5xl text-2xl text-deepBlue  text-center font-semibold font-Inter">
        Drive and Earn with Dymond Fleets
      </h2>
      <aside className="w-9/12 mx-auto flex justify-center space-x-4  my-5 ">
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
        <Button
          onClick={() => handleButtonClick("Courier")}
          className={`h-12 ${
            selectedCard === "Courier"
              ? "bg-blueShade"
              : "bg-Grey border border-borderColor text-textShade"
          }  w-fit rounded-[24px] sm:px-8`}
        >
          Courier
        </Button>
        <Button
          onClick={() => handleButtonClick("Fleet Owner")}
          className={`h-12 ${
            selectedCard === "Fleet Owner"
              ? "bg-blueShade"
              : "bg-Grey border border-borderColor text-textShade"
          }  w-fit rounded-[24px] sm:px-8`}
        >
          Fleet Owner
        </Button>
      </aside>

      <section className="bg-lightGrey  rounded-[32px] p-12 flex gap-12 justify-between relative my-14">
        {/* Card 1 - Driver */}
        <section
          className={`absolute top-0 left-0 w-full rounded-[32px] p-12 transition-all duration-300 ${
            selectedCard === "Driver"
              ? "bg-lightGrey z-30 mt-0"
              : selectedCard === "Courier"
              ? "bg-lightGrey z-30 -mt-4"
              : "bg-lightGrey z-10 -mt-8"
          }`}
        >
          <div className="sm:flex space-y-6 sm:space-y-0 gap-12">
            <div>
              <img src={driveImage} alt="driveImage" />
            </div>
            <section>
              <div>
                <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                  <span className="h-6 w-6 text-white rounded-full flex items-center justify-center font-medium bg-blueShade">
                    1
                  </span>
                  Drive More, Earn More
                </h3>
                <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  With Dymond Fleets, high demand means more ride requests and
                  bigger earnings. Make the most of every mile!
                </p>
              </div>
              <div className="my-8">
                 <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                  <span className="h-6 text-white w-6 rounded-full flex items-center justify-center font-medium bg-blueShade">
                    2
                  </span>
                  Your Schedule, Your Way
                </h3>
               <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  Drive on your terms. Weekdays, weekends, or evenings—fit
                  driving around your lifestyle with complete flexibility.
                </p>
              </div>
              <div>
                 <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                  <span className="h-6 text-white w-6 rounded-full flex items-center justify-center font-medium bg-blueShade">
                    3
                  </span>
                  Weekly Payouts, No Delays
                </h3>
               <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  Get paid promptly at the end of each week. No waiting—your
                  earnings, right when you need them.
                </p>
              </div>
              <section className="md:flex gap-3 space-y-2 md:space-y-0 items-center mt-4">
                <img src={AppStore} alt="appstore" />
                <img src={GooglePlay} alt="GooglePlay" />
              </section>
            </section>
          </div>
        </section>

        {/* Card 2 - Courier */}
        <section
          className={`absolute top-0 left-0 w-full rounded-[32px] p-12 transition-all duration-300 ${
            selectedCard === "Courier"
              ? "bg-[#FFF2CA] z-30 mt-0"
              : "bg-[#FFF2CA] z-20 -mt-4"
          }`}
        >
          <div className="sm:flex space-y-6 sm:space-y-0 gap-12">
            <div>
              <img src={driveImage} alt="driveImage" />
            </div>
            <section>
              <div>
                <h3 className="flex gap-4 items-center text-mediumBlue">
                  <span className="h-6 w-6 text-white rounded-full flex items-center justify-center font-medium bg-blueShade">
                    1
                  </span>
                  Drive More, Earn More
                </h3>
               <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  With Dymond Fleets, high demand means more ride requests and
                  bigger earnings. Make the most of every mile!
                </p>
              </div>
              <div className="my-8">
                 <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                  <span className="h-6 text-white w-6 rounded-full flex items-center justify-center font-medium bg-blueShade">
                    2
                  </span>
                  Your Schedule, Your Way
                </h3>
               <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  Drive on your terms. Weekdays, weekends, or evenings—fit
                  driving around your lifestyle with complete flexibility.
                </p>
              </div>
              <div>
                 <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                  <span className="h-6 text-white w-6 rounded-full flex items-center justify-center font-medium bg-blueShade">
                    3
                  </span>
                  Weekly Payouts, No Delays
                </h3>
               <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  Get paid promptly at the end of each week. No waiting—your
                  earnings, right when you need them.
                </p>
              </div>
              <section className="md:flex gap-3 space-y-2 md:space-y-0 items-center mt-4">
                <img src={AppStore} alt="appstore" />
                <img src={GooglePlay} alt="GooglePlay" />
              </section>
            </section>
          </div>
        </section>

        {/* Card 3 - Fleet Owner */}
        <section
          className={`absolute top-0 left-0 w-full rounded-[32px] p-12 transition-all duration-300 ${
            selectedCard === "Fleet Owner"
              ? "bg-[#FCC6C6] z-30 mt-0"
              : "bg-[#FCC6C6] z-10 -mt-8"
          }`}
        >
          <div className="sm:flex space-y-6 sm:space-y-0 gap-12">
            <div>
              <img src={driveImage} alt="driveImage" />
            </div>
            <section>
              <div>
                <h3 className="flex gap-4 items-center text-mediumBlue">
                  <span className="h-6 w-6 text-white rounded-full flex items-center justify-center font-medium bg-blueShade">
                    1
                  </span>
                  Drive More, Earn More
                </h3>
               <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  With Dymond Fleets, high demand means more ride requests and
                  bigger earnings. Make the most of every mile!
                </p>
              </div>
              <div className="my-8">
                 <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                  <span className="h-6 text-white w-6 rounded-full flex items-center justify-center font-medium bg-blueShade">
                    2
                  </span>
                  Your Schedule, Your Way
                </h3>
               <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  Drive on your terms. Weekdays, weekends, or evenings—fit
                  driving around your lifestyle with complete flexibility.
                </p>
              </div>
              <div>
                 <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                  <span className="h-6 text-white w-6 rounded-full flex items-center justify-center font-medium bg-blueShade">
                    3
                  </span>
                  Weekly Payouts, No Delays
                </h3>
               <p className="text-mediumGrey sm:text-sm text-xs my-3">
                  Get paid promptly at the end of each week. No waiting—your
                  earnings, right when you need them.
                </p>
              </div>
              <section className="md:flex gap-3 space-y-2 md:space-y-0 items-center mt-4">
                <img src={AppStore} alt="appstore" />
                <img src={GooglePlay} alt="GooglePlay" />
              </section>
            </section>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default DriveandEarn;
