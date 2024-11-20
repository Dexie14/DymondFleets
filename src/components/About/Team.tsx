import { GoFront } from "@/assets/svgComp/General";
import Container from "../ui/Container";
import kelvin from "@/assets/kelvin.png";
import okori from "@/assets/okori.png";
import uche from "@/assets/uche.png";

interface Testimonial {
  image: string;
  name: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    image: kelvin,
    name: "Kelvin Ugochukwu",
    description: `At Dymond Fleets, our mission is to provide safe, reliable,  and convenient transportation services that exceed your expectations.  We understand that in today's fast-paced world, getting from point A to point B  should be hassle-free, comfortable, and, above all, secure.`,
  },
  {
    image: uche,
    name: "Uche Chedders",
    description: `At Dymond Fleets, our mission is to provide safe, reliable,  and convenient transportation services that exceed your expectations.  We understand that in today's fast-paced world, getting from point A to point B  should be hassle-free, comfortable, and, above all, secure.`,
  },
  {
    image: okori,
    name: "Okorie Michael",
    description: `At Dymond Fleets, our mission is to provide safe, reliable,  and convenient transportation services that exceed your expectations.  We understand that in today's fast-paced world, getting from point A to point B  should be hassle-free, comfortable, and, above all, secure.`,
  },
];

const Team = () => {
  return (
    <div className="bg-whitish mt-14">
      <Container className="py-10">
        <h3 className="lg:text-4xl text-2xl lg:font-medium font-bold lg:w-[50%] lg:leading-[50px]">
          Meet our teams of innovators and world class problem solver
        </h3>
        <section className="my-24 grid lg:grid-cols-3 lg:gap-4 gap-20">
          {testimonials.map((testimonial, index) => (
            <div className="shadow-custom px-4 bg-white py-4" key={index}>
              <div className="flex justify-center -mt-[70px]">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <h3 className="text-mediumBlue text-center my-4 sm:text-lg text-sm pb-4 border-b font-semibold border-[#D1D1D1]">
                {testimonial.name}
              </h3>
              <p className="text-textShade font-medium sn:text-sm text-xs">
                {testimonial.description}
              </p>
              <p className="font-semibold text-blueShade flex gap-3 items-center mt-4 pb-6">
                READ MORE <GoFront />
              </p>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Team;
