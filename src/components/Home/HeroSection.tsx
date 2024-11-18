import AppStore from "@/assets/AppStore.png"
import GooglePlay from "@/assets/GooglePlay.png"

const HeroSection = () => {
  return (
    <div className="py-14 w-[80%] mx-auto text-white">
      <h3 className="lg:text-4xl text-2xl lg:font-medium font-bold lg:w-[35%] lg:leading-[50px]">
        Affordable Rides, Endless Destinations Dymond Fleets Awaits!
      </h3>
      <p className="font-medium text-sm my-4 lg:w-[50.8%]">
        With Dymond Fleets, you can travel farther for less, anytime you need.
        Whether it’s a quick trip across town or a longer journey, Dymond Fleets
        brings you quality and savings—so you can explore more without the extra
        cost
      </p>
      <section className="sm:flex gap-6 space-y-2 sm:space-y-0 items-center mb-32">
        <img src={AppStore} alt="appstore"/>
        <img src={GooglePlay} alt="GooglePlay"/>
      </section>
    </div>
  );
};

export default HeroSection;
