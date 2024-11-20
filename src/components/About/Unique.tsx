import Container from "../ui/Container";

const Unique = () => {
  const RenderComp = ({ title, text }: { title: string; text: string }) => {
    return (
      <section className="bg-subtle rounded-[12px] p-10">
        <h3 className="text-deepBlue font-bold sm:text-lg mb-4">{title}</h3>
        <p className="text-mediumGrey font-medium sm:text-sm text-xs">{text}</p>
      </section>
    );
  };
  return (
    <div>
      <Container className="my-20">
        <p className="text-center text-foundationRed font-semibold text-lg">
          Our Difference is clear
        </p>
        <p className="text-center text-deepBlue my-2 font-medium sm:text-5xl text-3xl">
          What Makes Us Unique
        </p>
        <section className="mt-20 grid sm:grid-cols-2 gap-4 mb-4">
          <RenderComp
            title="Your Ride, Just a Tap Away"
            text=" Our easy-to-use app gives you complete control over your rides. With
          just a few taps, book a ride, track your driver in real-time, and
          share trip details with loved ones for extra peace of mind. Designed
          with your convenience and safety at heart, Dymond Fleets makes every
          journey effortless."
          />
          {RenderComp({
            title: "Real-Time Support When You Need It",
            text: "We understand that sometimes you may have questions or need assistance during your ride. That's why we offer real-time customer support through our app and hotline. Our dedicated support team is ready to assist you promptly and efficiently, ensuring a seamless and pleasant experience.",
          })}
        </section>
        <section className="grid lg:grid-cols-3 gap-4 mb-4">
          <RenderComp
            title="Your Trusted Partner for Every Journey"
            text=" Whether it’s your daily commute or a special trip, Dymond Fleets is here to provide safe, reliable, and comfortable rides. Experience the Dymond difference as we take you where you need to go, with exceptional service every time. Join us on the road—thank you for choosing Dymond Fleets."
          />
          {RenderComp({
            title: "A Ride for Every Need",
            text: "At Dymond Fleets, we offer a variety of vehicles to suit every occasion. Choose from economical sedans, spacious SUVs, or luxury options for special moments. Whatever your preference, our well-maintained fleet ensures a comfortable and enjoyable ride every time.",
          })}
          {RenderComp({
            title: "Transparent Pricing, Flexible Payments",
            text: "We believe in clear and straightforward pricing. With Dymond Fleets Taxi, you'll always know how much your ride will cost upfront, eliminating any surprises. We accept a variety of payment methods, including credit cards, digital wallets, and cash, making it convenient for you to settle your fare in the way that suits you best.",
          })}
        </section>
      </Container>
    </div>
  );
};

export default Unique;
