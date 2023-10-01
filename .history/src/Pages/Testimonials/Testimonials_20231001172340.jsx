import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div>
      <section>
        <SectionTitle
          heading={"What Our CLient Say"}
          subHeading={"TESTIMONIALS"}
        ></SectionTitle>
      </section>
    </div>
  );
};

export default Testimonials;
