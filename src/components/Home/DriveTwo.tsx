import { MarkIcon } from "@/assets/svgComp/General";
import Container from "../ui/Container";
import driveImage from "@/assets/driveImage.png";
import { Button } from "../ui/button";

const DriveTwo = () => {
  return (
    <div className="bg-purpleBlue mt-14">
      <Container>
        <section className="lg:flex space-y-6 gap-12 sm:space-y-0  py-20">
          <div className="lg:w-1/2 mx-auto lg:block flex items-center justify-center">
            <img src={driveImage} alt="driveImage" />
          </div>
          <section className="lg:w-1/2">
            <h3 className="font-bold text-xl text-deepBlue">
              Drive to earn more money
            </h3>
            <p className="text-textShade sm:text-sm text-xs my-3">
              With Dymond Fleets Taxi, convenience is built in. Book in seconds,
              track your ride in real-time.
            </p>
            <div>
              <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                <span className="h-12 w-12 text-white rounded-full flex items-center justify-center font-medium bg-blueShade">
                  <MarkIcon />
                </span>
                Effortless Rides, Anytime
              </h3>
              <p className="text-mediumGrey sm:text-sm text-xs my-3">
                With Dymond Fleets Taxi, convenience is built in. Book in
                seconds, track your ride in real-time, and get upfront fare
                estimates—all from our user-friendly app. Say goodbye to long
                waits and hello to seamless travel.
              </p>
            </div>
            <div className="my-8">
              <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                <span className="h-12 text-white w-12 rounded-full flex items-center justify-center font-medium bg-blueShade">
                  <MarkIcon />
                </span>
                DBS-Cleared for Your Peace of Mind
              </h3>
              <p className="text-mediumGrey sm:text-sm text-xs my-3">
                With Dymond Fleets Taxi, convenience is built in. Book in
                seconds, track your ride in real-time, and get upfront fare
                estimates—all from our user-friendly app. Say goodbye to long
                waits and hello to seamless travel.
              </p>
            </div>
            <div>
              <h3 className="flex gap-4 items-center text-sm sm:text-base font-bold text-mediumBlue">
                <span className="h-12 text-white w-12 rounded-full flex items-center justify-center font-medium bg-blueShade">
                  <MarkIcon />
                </span>
                Your Safety, Our Priority
              </h3>
              <p className="text-mediumGrey sm:text-sm text-xs my-3">
                With zero tolerance for harassment, real-time GPS tracking,
                stringent driver screening, and in-app safety features, Dymond
                Fleets ensures every ride is secure from start to finish
              </p>
            </div>
            <Button className="bg-Grey h-[48px] text-deepBlue rounded-[24px] w-[152px]">
              Learn More
            </Button>
          </section>
        </section>
      </Container>
    </div>
  );
};

export default DriveTwo;
