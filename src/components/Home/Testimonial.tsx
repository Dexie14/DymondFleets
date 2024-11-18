import Container from "../ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from "@/assets/avatar.png";
import { BackIcon, ForwardIcon } from "@/assets/svgComp/General";

interface Testimonial {
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: "“I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”",
    name: "Orlando Diggs",
  },
  {
    text: "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    name: "Orlando Diggs",
  },
  {
    text: "It’s a really good product and helps me sleep better at night!",
    name: "Laura Davies",
  },
  {
    text: "Helps me relax and remember to breathe. Stress level definitely goes down",
    name: "Jane Bocks",
  },
  {
    text: "It’s a really good product and helps me sleep better at night!",
    name: "Sarah Johnson",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-whitish py-10 ">
      <Container className="py-10 lg:!w-full w-[90%]  relative">
        <h2 className="sm:text-5xl text-2xl text-deepBlue  text-center font-semibold font-Inter">
          You are in good company
        </h2>
        <p className="font-medium text-textShade text-sm sm:text-base text-center my-6 sm:w-10/12 mx-auto">
          Hear from our satisfied customers about their experiences with Dymond
          Fleets. From reliable rides to exceptional service, our users trust us
          to keep them moving. Join the Dymond community and discover the
          difference for yourself!
        </p>

        <Swiper
          spaceBetween={20}
          navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
          loop={true}
          className="mySwiper relative"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 250,
            },
          }}
          centeredSlides={true}
          pagination={true}
          modules={[Pagination, Navigation]}
        >
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white mb-14 mt-5 border border-[#EEF2F6] flex  min-w-[366px] flex-col space-y-3 py-5 pl-7 pr-2  h-[232px] rounded-[16px]">
                <p className="text-left text-cardText  italic h-1/2">
                  {testimonials?.text}
                </p>
                <div className="h-1/2 flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h6 className="text-cardText font-bold ">
                      {testimonials?.name}
                    </h6>
                    <p className="text-[#697586]">Position, Company name</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="prev-button cursor-pointer absolute bottom-[0%] lg:left-[40%] left-[20%] z-[1000]">
            <BackIcon />
          </div>
          <div className="next-button cursor-pointer absolute bottom-[0%] lg:right-[40%] right-[0%] z-[1000]">
            <ForwardIcon />
          </div>
        </Swiper>
        
      </Container>
    </div>
  );
};

export default Testimonial;
