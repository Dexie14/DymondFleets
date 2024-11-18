import Container from "../ui/Container";
import car from "@/assets/car.png";
import shareCar from "@/assets/shareCar.png";
import courier from "@/assets/courier.png";

const Services = () => {
  return (
    <div>
      <Container>
        <h2 className="sm:text-5xl text-2xl text-deepBlue  text-center font-semibold font-Inter">
          Our services
        </h2>
        <p className="font-medium text-textShade text-sm sm:text-base text-center my-6 sm:w-10/12 mx-auto">
          Experience affordable rides without compromising on comfort, safety,
          or reliability. With Dymond Fleets, every journey is designed to keep
          you moving smoothly and saving more.
        </p>
        <section className="grid md:grid-cols-3 gap-4 my-10">
          <div className="font-medium px-5 py-10 rounded-[12px] bg-lightGrey text-center">
            <h3 className="text-lg font-bold text-deepBlue">Rides</h3>
            <p className="my-4 text-borderColor">
              Request in seconds, rides in minute
            </p>
            <div className="flex justify-center items-center">
              <img src={car} alt="car" />
            </div>
          </div>
          <div className="font-medium px-5 py-10 rounded-[12px] bg-lightGrey text-center">
            <h3 className="text-lg font-bold text-deepBlue">Rides</h3>
            <p className="my-4 text-borderColor">
              Request in seconds, rides in minute
            </p>
            <div className="flex justify-center items-center">
              <img src={shareCar} alt="shareCar" />
            </div>
          </div>
          <div className="font-medium px-5 py-10 rounded-[12px] bg-lightGrey text-center">
            <h3 className="text-lg font-bold text-deepBlue">Rides</h3>
            <p className="my-4 text-borderColor">
              Request in seconds, rides in minute
            </p>
            <div className="flex justify-center items-center">
              <img src={courier} alt="courier" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Services;
